// https://github.com/Heydon/bruck#c-luster

export default class Cluster extends HTMLElement {
  constructor() {
    super();
    this.gap = this.getAttribute('gap') || '1';
    const alignMap = {
      top: 'flex-start',
      bottom: 'flex-end',
      center: 'center'
    };
    this.align = alignMap[this.getAttribute('align')] || 'center';

    const tmpl = document.createElement('template');
    tmpl.innerHTML = `
      <style>
        .inner {
          display: flex;
          justify-content: center;
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
    this.setAttribute('aria-label', `Cluster of ${childAmount} items`);
  }
}

customElements.define('c-luster', Cluster);