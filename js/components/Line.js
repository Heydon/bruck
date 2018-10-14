/*
Usage: 
  <l-ine gap="2">
    <!-- set of items -->
  </l-ine>
Attributes: 
  - gap [-5 to 10] (default: 1)
  - align [top, bottom, or center] (default: center)
  - justify [left, right, or center] (default: center)
  - sep [HTML/entity to separate child nodes] (default: none)
*/

import separateNodes from '../utilities/separateNodes.js';

export default class Line extends HTMLElement {
  constructor() {
    super();
    const justifyMap = {
      left: 'flex-start',
      right: 'flex-end',
      center: 'center'
    };
    this.justify = justifyMap[this.getAttribute('justify')] || 'center';
    this.gap = this.getAttribute('justify') | '1';
    this.between = this.getAttribute('between');

    const tmpl = document.createElement('template');
    tmpl.innerHTML = `
      <style>
        :host {
          display: block;
        }

        .inner {
          display: flex;
          justify-content: ${this.justify};
          align-items: center;
          flex-wrap: wrap;
          margin: calc((var(--s${this.gap}) * 0.5) * -1);
        }

        ::slotted(*) {
          flex: 0 0 auto;
          margin: calc(var(--s${this.gap}) * 0.5) !important;
        }

        ::slotted(.sep) {
          margin: 0 !important;
        }
      </style>
      <div class="inner">
        <slot></slot>
      </div>
    `;

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(tmpl.content.cloneNode(true));

    if (this.between) {
      separateNodes(
        this.children,
        `<div class="sep" aria-hidden="true">${this.between}</div>`
      );
    }
  }

  connectedCallback() {
    const childAmount = this.children.length;
    this.setAttribute('role', 'group');
    this.setAttribute('aria-label', `Line of ${childAmount} items`);
  }
}

customElements.define('l-ine', Line);