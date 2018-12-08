// https://github.com/Heydon/bruck#o-utput

import parser from '../utilities/parser.js';

export default class Output extends HTMLElement {
  constructor() {
    super();
    this.input = this.getAttribute('input');
    if (!this.input) {
      console.error('Each <o-utput> component must have an `input` attribute that corresponds to a data namespace');
      return;
    }
    this.template = this.innerHTML;
    this.innerHTML = '';

    window.addEventListener(this.input, e => {
      console.log(e.detail.data);
      console.log(this.template);
      this.innerHTML = parser(this.template, e.detail.data);
    })
  }
}

customElements.define('o-utput', Output);