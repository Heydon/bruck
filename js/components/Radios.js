// https://github.com/Heydon/bruck#r-adios

export default class Radios extends HTMLElement {
  constructor() {
    super();
    this.name = this.getAttribute('name');
    if (!this.name) {
      console.error('Each <r-adios> component must have a unique `name` attribute');
      return;
    }
    this.options = this.getAttribute('options').replace(/,\s*/g, ',').split(',');
    if (!this.options) {
      console.error('Each <r-adios> component must have an `options` attribute containing a comma-separated list of radio button labels');
      return;
    }
    this.legend = this.getAttribute('legend') || 'Choose';
    this.checked = this.options.indexOf(this.getAttribute('checked')) + 1 || -1;

    this.checkboxes = this.options.map((o, i) => {
      let checked = i === this.checked - 1 ? `checked="checked"` : '';
      return `
        <label>
          <input type="radio" class="vh" name="${this.name}" value="${o}" ${checked}> 
          <span class="radio-label">
            <span class="radio-radio">
            </span>
            ${o}
          </span>
        </label>
      `;
    });

    this.innerHTML = `
      <fieldset>
        <legend>${this.legend}</legend>
        ${this.checkboxes.join(' ')}
      </fieldset>
    `;
  }
}

customElements.define('r-adios', Radios);