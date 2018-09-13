/*
Usage: 
  <s-pread gap="2">
    <p>Child</p>
    <div>Child</div>
    <t-ext words="20,30"></t-ext>
  </s-pread>
Attributes: 
  - gap [-5 to 10 or none] (default: 1)
  - spaces [around || between] (default: between)
  - align [top, bottom, or center] (default: center)
*/

export default class Spread extends HTMLElement {
  constructor() {
    super();
    this.gap = this.getAttribute('gap') || '1';
    this.spaces = this.getAttribute('spaces') === 'around' ? 'around' : 'between';
    const alignMap = {
      top: 'flex-start',
      bottom: 'flex-end',
      center: 'center'
    };
    this.align = alignMap[this.getAttribute('align')] || 'center';

    const tmpl = document.createElement('template');
    tmpl.innerHTML = `
      <style>
        :host {
          display: block;
        }

        .inner {
          display: flex;
          justify-content: space-${this.spaces};
          align-items: ${this.align};
          flex-wrap: wrap;
          margin: calc((var(--s${this.gap}) * 0.5) * -1) !important;
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