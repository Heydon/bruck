/*
Usage: 
  <i-con name="cross"></i-con>
Attributes: 
  - name [name of icon file, without extension] (required)
  - size [CSS size value determining both width and height] (default: '1em')
*/

export default class Icon extends HTMLElement {
  constructor() {
    super();
    this.name = this.getAttribute('name');
    if (!this.name) {
      console.error('Each <i-con> component needs a name attribute');
      return;
    }
    this.size = this.getAttribute('size') || '1em';

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-block;
          font-size: ${this.size};
          vertical-align: middle;
        }
      </style>
      <slot></slot>
    `;

    fetch(`./icons/${this.name}.svg`)
      .then(res => {
        res.text()
          .then(svg => {
            this.innerHTML = svg;
          });
      });
  }
}

customElements.define('i-con', Icon);