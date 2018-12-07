// https://github.com/Heydon/bruck#i-nput

export default class Input extends HTMLElement {
  constructor() {
    super();
    this.name = this.getAttribute('name');
    if (!this.name) {
      console.error('Each <i-nput> component must have a `name` attribute');
      return;
    }
    this.label = this.getAttribute('label') || 'Your text';
    this.value = this.getAttribute('value') || null;
    this.unique = + new Date();
    this.innerHTML = `
      <label for="${this.name}">${this.label}</label>
      <input type="text" id="${this.name}" name="${this.name}" ${this.value ? `value="${this.value}"` : ''}>
    `;
  }
}

customElements.define('i-nput', Input);