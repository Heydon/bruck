// https://github.com/Heydon/bruck#o-utput

import parser from '../utilities/parser.js';

export default class Output extends HTMLElement {
  constructor() {
    super();
    this.property = this.getAttribute('property');
    if (!this.property) {
      console.error('Each <o-utput> component must have an `property` attribute that corresponds to a data namespace');
      return;
    }
    this.template = this.innerHTML;
    this.innerHTML = '';

    window.addEventListener('stored', e => {
      if (e.detail.property === this.property || 'all') {
        this.innerHTML = parser(
          this.template,
          window.data[this.property]
        );
      }
    })
  }
}

customElements.define('o-utput', Output);