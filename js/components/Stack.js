// https://github.com/Heydon/bruck#s-tack

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

    if (this.times > 0) {
      for (let i = 1; i < this.times; i++) {
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