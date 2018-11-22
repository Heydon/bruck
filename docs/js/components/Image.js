// https://github.com/Heydon/bruck#i-mage

import ratioHeight from '../utilities/ratioHeight.js';

export default class Image extends HTMLElement {
  constructor() {
    super();
    const ratio = this.getAttribute('ratio') || '1:1';
    const padding = ratioHeight(ratio) + '%';
    const maxWidth = this.getAttribute('maxWidth') || 'none';
    const minWidth = this.getAttribute('minWidth') || '0';
    const caption = this.getAttribute('caption') || undefined;

    const tmpl = document.createElement('template');
    tmpl.innerHTML = `
      <style>
        :host {
          max-width: ${maxWidth};
          min-width: ${minWidth};
        }

        figure {
          margin: 0;
          padding: 0;
        }

        figure > div {
          display: block;
          border: var(--border-thin) solid var(--color-dark);
          background-image: paint(image-cross);
          padding-top: ${padding};
        }

        figcaption {
          text-align: center;
          margin-top: var(--s-1);
          font-style: italic;
        }
      </style>
      <figure>
        <div></div>
        ${caption ? `<figcaption>${caption}</figcaption>` : ''}
      </figure>
    `;

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(tmpl.content.cloneNode(true));
    const img = this.shadowRoot.querySelector('figure > div')
    img.setAttribute('role', 'img');
    img.setAttribute('aria-label', `Image with ${ratio} ratio`);
  }
}

customElements.define('i-mage', Image);