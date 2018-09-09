/*
Usage: 
  <g-rid gap="2">
    <p>Child</p>
    <div>Child</div>
    <t-ext words="20,30"></t-ext>
  </g-rid>
Attributes: 
  - gap: [-5 to 10] (default: 1)
  - itemWidth: [CSS width value] (default: 15rem)
*/

export default class Grid extends HTMLElement {
  constructor() {
    super();

    this.itemWidth = this.getAttribute('itemWidth') || '15rem';
    this.gap = this.getAttribute('gap') || '1';
    this.repeat = this.getAttribute('repeat') || '0';

    const tmpl = document.createElement('template');
    tmpl.innerHTML = `
      <style>
        :host {
          grid-template-columns: repeat(auto-fill, minmax(${this.itemWidth}, 1fr));
          grid-gap: var(--s${this.gap});
        }
      </style>
      <slot></slot>
    `;

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(tmpl.content.cloneNode(true));
  }

  connectedCallback() {
    if (this.repeat > 0) {
      this.content = this.innerHTML;
      for (let i = 1; i < this.repeat; i++) {
        this.innerHTML += this.content;
      }
    }

    const childAmount = this.children.length;
    this.setAttribute('role', 'group');
    this.setAttribute('aria-label', `Grid of ${childAmount} ${this.itemWidth} wide items`);
  }
}

customElements.define('g-rid', Grid);