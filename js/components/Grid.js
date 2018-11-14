// https://github.com/Heydon/bruck#g-rid

import rangeToNum from '../utilities/rangeToNum.js';

export default class Grid extends HTMLElement {
  constructor() {
    super();
    this.itemWidth = this.getAttribute('itemWidth') || '15rem';
    this.gap = this.getAttribute('gap') || '1';
    this.times = this.getAttribute('repeat') || undefined;
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
    this.setAttribute('aria-label', `Grid of ${childAmount} items, each ${this.itemWidth} wide.`);
  }
}

customElements.define('g-rid', Grid);