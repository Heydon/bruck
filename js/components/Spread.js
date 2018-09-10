/*
Usage: 
  <s-pread justify="space-between" align="flex-end" maxWidth="10rem" gap="2">
    <p>Child</p>
    <div>Child</div>
    <t-ext words="20,30"></t-ext>
  </s-pread>
Attributes: 
  - justify: [justify-content Flexbox value] (default: space-around)
  - maxWidth: [CSS width value] (default: 'auto')
  - gap [-5 to 10] (default: 1)
*/

export default class Spread extends HTMLElement {
  constructor() {
    super();
    this.justify = this.getAttribute('justify') || 'space-around';
    this.max = this.getAttribute('maxWidth') || 'auto';
    this.gap = this.getAttribute('gap') || '1';
    this.align = this.getAttribute('align') || 'center';

    const tmpl = document.createElement('template');
    tmpl.innerHTML = `
      <style>
        :host {
          display: block;
        }

        .inner {
          display: flex;
          flex-wrap: wrap;
          justify-content: ${this.justify};
          align-items: ${this.align};
          margin: calc((var(--s${this.gap}) * 0.5) * -1);
        }

        ::slotted(*) {
          flex: 0 1 ${this.max};
          margin: calc(var(--s${this.gap}) * 0.5) !important;
        }
      </style>
      <div class="inner">
        <slot></slot>
      </div>
    `;

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(tmpl.content.cloneNode(true));
  }

  connectedCallback() {

    const childAmount = this.children.length;
    this.setAttribute('role', 'group');
    this.setAttribute('aria-label', `Distributed row of ${childAmount} items`);
  }
}

customElements.define('s-pread', Spread);