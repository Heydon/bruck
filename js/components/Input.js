// https://github.com/Heydon/bruck#i-nput

export default class Input extends HTMLElement {
  constructor() {
    super();
    this.label = this.getAttribute('label') || 'Your text';
    this.unique = + new Date();
    this.innerHTML = `
      <label for="${this.unique}">${this.label}</label>
      <input type="text" id="${this.unique}">
    `;
  }
}

customElements.define('i-nput', Input);