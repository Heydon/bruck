// https://github.com/Heydon/bruck#s-tack

import rangeToNum from '../utilities/rangeToNum.js';

export default class Stack extends HTMLElement {
  constructor() {
    super();
    this.gap = this.getAttribute('gap') || '1';
    this.times = this.getAttribute('repeat') || undefined;
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

    if (this.times) {
      const count = rangeToNum(this.times);
      for (let i = 1; i < count; i++) {
        this.innerHTML += this.content;
      }
    }
  }

  connectedCallback() {
    const childAmount = this.children.length;
    this.setAttribute('role', 'group');
    this.setAttribute('aria-label', `Column of ${childAmount} elements`);
  }
}

customElements.define('s-tack', Stack);