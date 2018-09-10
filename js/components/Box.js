/*
Usage: 
  <b-ox pad="2">
    <p>Child</p>
    <div>Child</div>
    <t-ext words="20,30"></t-ext>
  </b-ox>
Attributes: 
  - pad: [-5 to 10] (default: 1)
  - border: [Boolean] (default: true)
*/

export default class Box extends HTMLElement {
  constructor() {
    super();
    this.padding = this.getAttribute('pad') || '1';
    this.border = this.hasAttribute('border');

    const tmpl = document.createElement('template');
    tmpl.innerHTML = `
      <style>
        :host {
          padding: var(--s${this.padding}) !important;
          border: ${this.border ? `var(--border-thin)` : `0`} solid !important;
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
    this.setAttribute('aria-label', `Box of ${childAmount} items`);
  }
}

customElements.define('b-ox', Box);