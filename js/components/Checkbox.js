// https://github.com/Heydon/bruck#c-heckbox

export default class Checkbox extends HTMLElement {
  constructor() {
    super();
    this.name = this.getAttribute('name');
    if (!this.name) {
      console.error('Each <c-heckbox> component must have a unique `name` attribute');
      return;
    }
    this.label = this.getAttribute('label') || 'Check';
    this.checked = this.hasAttribute('checked') ? `checked="checked"` : '';

    this.innerHTML = `
      <label>
        <input type="checkbox" class="vh" name="${this.name}" ${this.checked}> 
        <span class="checkbox-label">
          <span class="checkbox-check">
            <i-con name="tick"></i-con>
          </span>
          ${this.label}
        </span>
      </label>
    `;
  }
}

customElements.define('c-heckbox', Checkbox);