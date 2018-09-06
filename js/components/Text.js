/*
Usage: 
  <t-ext words="20,25"></t-ext>
Attributes: 
  - words: [least],[most] (default: '15,20')
*/

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