/*
Usage: 
  <g-rid gap="2">
    <p>Child</p>
    <div>Child</div>
    <t-ext words="20,30"></t-ext>
  </g-rid>
Attributes: 
  - gap: [-5 to 10] (default: 1)
  - itemWidth: [CSS width value] (default: 15rem)
*/

export default class Grid extends HTMLElement {
  constructor() {
    super();

    const itemWidth = this.getAttribute('itemWidth') || '15rem';
    const gap = this.getAttribute('gap') || '1';

    const tmpl = document.createElement('template');
    tmpl.innerHTML = `
      <style>
        :host {
          grid-template-columns: repeat(auto-fill, minmax(${itemWidth}, 1fr));
          grid-gap: var(--s${gap});
        }
      </style>
      <slot></slot>
    `;

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(tmpl.content.cloneNode(true));
  }
}

customElements.define('g-rid', Grid);