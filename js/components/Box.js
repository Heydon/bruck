/*
Usage: 
  <b-ox pad="2">
    <p>Child</p>
    <div>Child</div>
    <t-ext words="20,30"></t-ext>
  </b-ox>
Attributes: 
  - pad: [-5 to 10 or none] (default: 1)
  - border: [Boolean] (default: false)
  - maxWidth: [CSS max-width value] (default: none);
*/

export default class Box extends HTMLElement {
  constructor() {
    super();
    this.pad = this.getAttribute('pad') || 1;
    this.border = this.hasAttribute('border');
    this.maxWidth = this.getAttribute('maxWidth') || 'none';

    const tmpl = document.createElement('template');
    tmpl.innerHTML = `
      <style>
        :host {
          padding: ${this.pad ? `var(--s${this.pad})` : '0'} !important;
          border-width: ${this.border ? `var(--border-thin)` : `0`} !important;
          max-width: ${this.maxWidth};
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