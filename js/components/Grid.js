/*
Usage: 
  <g-rid gap="1">
    <p>Child</p>
    <div>Child</div>
    <t-ext words="20,30"></t-ext>
  </g-rid>
Attributes: 
  - gap: [-5 to 10 or none] (default: 1)
  - itemWidth: [CSS width value] (default: 15rem)
*/

export default class Grid extends HTMLElement {
  constructor() {
    super();
    this.itemWidth = this.getAttribute('itemWidth') || '15rem';
    this.gap = this.getAttribute('gap') || '1';
    this.times = this.getAttribute('repeat') || '0';
    this.content = this.innerHTML;

    const tmpl = document.createElement('template');
    tmpl.innerHTML = `
      <style>
        :host {
          grid-template-columns: repeat(auto-fill, minmax(${this.itemWidth}, 1fr));
          grid-gap: var(--s${this.gap});
          align-items: start;
        }
      </style>
      <slot></slot>
    `;

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(tmpl.content.cloneNode(true));
  }

  connectedCallback() {
    if (this.times > 0) {
      for (let i = 1; i < this.times; i++) {
        this.innerHTML += this.content;
      }
    }

    const childAmount = this.children.length;
    this.setAttribute('role', 'group');
    this.setAttribute('aria-label', `Grid of ${childAmount} items, ${this.itemWidth} wide.`);
  }
}

customElements.define('g-rid', Grid);