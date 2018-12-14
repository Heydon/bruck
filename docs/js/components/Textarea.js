// https://github.com/Heydon/bruck#t-extarea

export default class Textarea extends HTMLElement {
  constructor() {
    super();
    this.name = this.getAttribute('name');
    if (!this.name) {
      console.error('Each <t-extarea> component must have a unique `name` attribute');
      return;
    }
    this.label = this.getAttribute('label') || 'Text box';
    this.value = this.getAttribute('value') || null;
    this.innerHTML = `
      <label for="${this.name}">${this.label}</label>
      <textarea id="${this.name}" name="${this.name}">${this.value ? `value="${this.value}"` : ''}</textarea>
    `;
  }
}

customElements.define('t-extarea', Textarea);