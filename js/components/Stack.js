/*
Usage: 
  <s-tack repeat="3">
    <p>Child</p>
    <div>Another child</div>
  </s-tack>
Attributes: 
  - repeat [integer] (default: 3)
  - gap [-5 to 10 or none] (default: 1)
*/

export default class Stack extends HTMLElement {
  constructor() {
    super();
    this.gap = this.getAttribute('gap') || '1';
    this.times = this.getAttribute('repeat') || '0';
    this.content = this.innerHTML;

    const tmpl = document.createElement('template');
    tmpl.innerHTML = `
      <style>
        :host {
          grid-gap: var(--s${this.gap});
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
    this.setAttribute('aria-label', `Column of ${childAmount} items`);
  }
}

customElements.define('s-tack', Stack);