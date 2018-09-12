/*
Usage: 
  <i-mage ratio="16:9"></i-mage>
Attributes: 
  - ratio: [integer]:[integer] (default: 1:1)
  - maxWidth: [CSS width value] (default: none)
  - minWidth: [CSS width value] (default: none)
*/

import ratioHeight from '../utilities/ratioHeight.js';

export default class Image extends HTMLElement {
  constructor() {
    super();
    const ratio = this.getAttribute('ratio') || '1:1';
    const padding = ratioHeight(ratio) + '%';
    const maxWidth = this.getAttribute('maxWidth') || 'none';
    const minWidth = this.getAttribute('minWidth') || 'none';

    const tmpl = document.createElement('template');
    tmpl.innerHTML = `
      <style>
        :host {
          max-width: ${maxWidth};
          min-width: ${minWidth};
        }

        :host > div {
          padding-top: ${padding};
        }
      </style>
      <div>
        <slot></slot>
      </div>
    `;

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(tmpl.content.cloneNode(true));

    this.setAttribute('role', 'img');
    this.setAttribute('aria-label', `Image with ${ratio} ratio`);
  }
}

customElements.define('i-mage', Image);