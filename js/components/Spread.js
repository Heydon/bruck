/*
Usage: 
  <s-pread gap="2">
    <p>Child</p>
    <div>Child</div>
    <t-ext words="20,30"></t-ext>
  </s-pread>
Attributes: 
  - gap [-5 to 10] (default: 1)
  - spaces [around || between] (default: between)
*/

export default class Spread extends HTMLElement {
  constructor() {
    super();
    this.gap = this.getAttribute('gap') || '1';
    this.align = this.getAttribute('align') || 'center';
    this.spaces = this.getAttribute('spaces') === 'around' ? 'around' : 'between';

    const tmpl = document.createElement('template');
    tmpl.innerHTML = `
      <style>
        :host {
          display: block;
        }

        .inner {
          display: flex;
          justify-content: space-${this.spaces};
          align-items: ${this.align === 'top' ? 'flex-start' : this.align === 'bottom' ? 'flex-end' : 'center'};;
          flex-wrap: wrap;
          margin: calc((var(--s${this.gap}) * 0.5) * -1);
        }

        ::slotted(*) {
          flex: 0 1 auto;
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