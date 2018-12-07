// https://github.com/Heydon/bruck#s-elect

export default class Select extends HTMLElement {
  constructor() {
    super();
    this.name = this.getAttribute('name');
    if (!this.name) {
      console.error('Each <s-elect> component must have a `name` attribute');
      return;
    }
    this.options = this.getAttribute('options').replace(/,\s*/g, ',').split(',');
    if (!this.options) {
      console.error('Each <s-elect> component must have an `options` attribute containing a comma-separated list of <option> labels');
      return;
    }
    this.label = this.getAttribute('label') || 'Your selection';
    this.selected = this.options.indexOf(this.getAttribute('selected')) + 1 || -1;

    this.optionElems = this.options.map((o, i) => {
      let selected = i === this.selected - 1 ? `selected="selected"` : '';
      return `<option ${selected}>${o}</option>`;
    });

    this.innerHTML = `
      <label for="${this.name}">${this.label}</label>
      <div class="s-elect-wrap">
        <select id="${this.name}" name="${this.name}">
          ${this.optionElems.join(' ')}
        </select>
        <i-con name="triangle-down"></i-con>
      </div>
    `;
  }
}

customElements.define('s-elect', Select);