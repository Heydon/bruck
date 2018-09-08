/*
Usage: 
  <s-tack gap="2">
    <p>Child</p>
    <div>Child</div>
    <t-ext words="20,30"></t-ext>
  </s-tack>
Attributes: 
  - gap: [-5 to 10] (default: 1)
*/

export default class Stack extends HTMLElement {
  constructor() {
    super();
    const gap = this.getAttribute('gap') || '1';

    const tmpl = document.createElement('template');
    tmpl.innerHTML = `
      <style>
        :host {
          grid-gap: var(--s${gap});
        }
      </style>
      <slot></slot>
    `;

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(tmpl.content.cloneNode(true));
  }

  connectedCallback() {
    const childAmount = this.children.length;
    this.setAttribute('role', 'group');
    this.setAttribute('aria-label', `Column of ${childAmount} items`);
  }
}

customElements.define('s-tack', Stack);