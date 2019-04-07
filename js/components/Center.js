// https://github.com/Heydon/bruck#c-enter

export default class Center extends HTMLElement {
  constructor() {
    super();
    this.maxWidth = this.getAttribute('maxWidth') || 'var(--measure)';

    const tmpl = document.createElement('template');
    tmpl.innerHTML = `
      <style>
        :host {
          max-width: ${this.maxWidth};
        }
      </style>
      <slot></slot>
    `;

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(tmpl.content.cloneNode(true));
  }
}

customElements.define('c-enter', Center);