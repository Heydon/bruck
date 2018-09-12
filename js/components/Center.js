/*
Usage: 
  <c-enter maxWidth="50ch">
    <p>Child</p>
    <div>Child</div>
    <t-ext words="20,30"></t-ext>
  </c-enter>
Attributes: 
  - maxWidth: [CSS width value] (default: var(--measure))
*/

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