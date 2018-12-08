// https://github.com/Heydon/bruck#m-odel

import dataFromForm from '../utilities/dataFromForm.js';

export default class Model extends HTMLElement {
  constructor() {
    super();
    this.name = this.getAttribute('name');
    if (!this.name) {
      console.error('Each <m-odel> component must have a unique `name` attribute');
      return;
    }

    this.innerHTML = `<form id="${this.name}">${this.innerHTML}</form>`;
    this.form = this.querySelector('form');
    this.form.addEventListener('submit', e => {
      e.preventDefault();
      const data = dataFromForm(this.name);
      var dataEvent = new CustomEvent(this.name, {
        detail: { data },
        bubbles: true
      });
      this.dispatchEvent(dataEvent);
    });
  }
}

customElements.define('m-odel', Model);