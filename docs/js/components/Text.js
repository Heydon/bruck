// https://github.com/Heydon/bruck#t-ext

import textSample from '../utilities/textSample.js';

export default class Text extends HTMLElement {
  constructor() {
    super();
    const range = this.getAttribute('words') || '15,20';
    const text = textSample(range);
    this.innerHTML = `<p>${text}</p>`;
  }
}

customElements.define('t-ext', Text);