/*
Usage: 
  <g-o screen="About">
    About page
  </g-o>
Attributes: 
  - screen: [string matching a <s-creen> element's `id` value] (required)
*/

export default class Go extends HTMLElement {
  constructor() {
    super();
    this.screenId = this.getAttribute('screen');
    this.screen = document.getElementById(this.screenId);

    if (!this.screenId || !this.screen) {
      console.error('Each <g-o> element needs a `screen` attribute pointing to an existing <s-creen> element\'s `id`.');
      return;
    }

    const link = document.createElement('a');
    link.href = `#${this.screenId}`;
    link.innerHTML = this.innerHTML;
    link.innerHTML += `
      <svg viewBox="0 0 16 16">
        <path d="M0,8 14,8 M9,2 14,8 9,14" />
      </svg>
    `;
    this.innerHTML = null;
    this.appendChild(link);
  }
}

customElements.define('g-o', Go);