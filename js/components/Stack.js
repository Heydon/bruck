/*
Usage: 
  <s-tack gap="2">
    <p>Child</p>
    <div>Child</div>
    <t-ext words="20,30"></t-ext>
  </s-tack>
Attributes: 
  - gap: [-5 to 10] (default: 1)
  - repeat: [integer] (default: 0);
*/

export default class Stack extends HTMLElement {
  constructor() {
    super();
    this.gap = this.getAttribute('gap') || '1';
    this.repeat = this.getAttribute('repeat') || '0';

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

    if (this.repeat > 0) {
      this.content = this.innerHTML;
      for (let i = 1; i < this.repeat; i++) {
        this.innerHTML += this.content;
      }
    }

    const childAmount = this.children.length;
    this.setAttribute('role', 'group');
    this.setAttribute('aria-label', `Column of ${childAmount} items`);
  }
}

customElements.define('s-tack', Stack);