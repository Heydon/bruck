// https://github.com/Heydon/bruck#m-odel

import dataFromForm from '../utilities/dataFromForm.js';

export default class Model extends HTMLElement {
  constructor() {
    super();
    this.property = this.getAttribute('property');
    if (!this.property || this.property === 'all') {
      console.error('Each <m-odel> component must have a unique `property` attribute representing a property on the global data object. The string \'all\' is reserved.');
      return;
    }
    this.form = this.querySelector('form');
    if (!this.form) {
      console.error('Each <m-odel> component must have a <form>, containing form controls, as its only child element');
      return;
    }
    this.form.addEventListener('submit', e => {
      e.preventDefault();
      let data = dataFromForm(this.form);
      let keys = Object.keys(data);
      if (keys.length == 1) {
        data = data[keys[0]];
      }
      if (window.data[this.property] && window.data[this.property].constructor === Array) {
        window.data[this.property].push(data);
      } else {
        window.data[this.property] = data;
      }
      const dataEvent = new CustomEvent('stored', {
        detail: {
          property: this.property
        },
        bubbles: true
      });
      this.dispatchEvent(dataEvent);
    });
  }
}

customElements.define('m-odel', Model);