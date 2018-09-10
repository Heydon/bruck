/*
Usage: 
  <i-mage ratio="16:9"></i-mage>
Attributes: 
  - ratio: [integer]:[integer] (default: 1:1)
  - maxWidth: [CSS width value] (default: none)
*/

import ratioHeight from '../utilities/ratioHeight.js';

export default class Image extends HTMLElement {
  constructor() {
    super();
    this.setAttribute('role', 'img');

    const ratio = this.getAttribute('ratio') || '1:1';
    this.setAttribute('aria-label', `Image with ${ratio} ratio`);
    const padding = ratioHeight(ratio) + '%';

    const maxWidth = this.getAttribute('maxWidth') || 'none';

    const tmpl = document.createElement('template');
    tmpl.innerHTML = `
      <style>
        :host {
          max-width: ${maxWidth};
        }

        :host > div {
          max-width: ${maxWidth};
          padding-top: ${padding} !important;
        }
      </style>
      <div>
        <slot></slot>
      </div>
    `;

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(tmpl.content.cloneNode(true));
  }
}

customElements.define('i-mage', Image);