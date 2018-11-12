// https://github.com/Heydon/bruck#g-o

export default class Go extends HTMLElement {
  constructor() {
    super();
    this.screenId = this.getAttribute('to');
    this.screen = document.getElementById(this.screenId);

    if (!this.screenId || !this.screen) {
      console.error('Each <g-o> element needs a `to` attribute pointing to an existing <s-creen> element\'s `id`.');
      return;
    }

    const link = document.createElement('a');
    link.href = `#${this.screenId}`;
    link.classList.add('u-cta');
    link.innerHTML = this.innerHTML;
    link.innerHTML += `
      <i-con name="arrow-right"></icon>
    `;
    this.innerHTML = null;
    this.appendChild(link);
  }
}

customElements.define('g-o', Go);