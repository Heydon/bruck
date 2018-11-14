// https://github.com/Heydon/bruck#w-ords

import wordsSample from '../utilities/wordsSample.js';
import rangeToNum from '../utilities/rangeToNum.js';

export default class Words extends HTMLElement {
  constructor() {
    super();
    const count = this.getAttribute('count') || '2,3';
    const sentence = this.hasAttribute('sentence');
    const capitalize = this.hasAttribute('capitalize');
    const repeat = this.getAttribute('repeat') || undefined;

    function generate() {
      let words = wordsSample(count);
      if (capitalize) {
        words = words.map(w => w.charAt(0).toUpperCase() + w.slice(1));
      }
      if (sentence) {
        words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
        words[0].toUpperCase();
        words[words.length - 1] += '. ';
      }
      return words.join(' ');
    }

    const num = !repeat ? 1 : rangeToNum(repeat);
    for (let i = 0; i < num; i++) {
      this.innerHTML += generate();
    }
  }
}

customElements.define('w-ords', Words);