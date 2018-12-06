// https://github.com/Heydon/bruck#p-rogress

export default class Progress extends HTMLElement {
  constructor() {
    super();
    const stepsAttr = this.getAttribute('steps');
    if (!stepsAttr || !stepsAttr.includes(',')) {
      console.error('Each <p-rogress> element must have a steps property containing a comma separated list of step labels');
      return;
    }

    this.steps = stepsAttr.replace(/,\s*/g, ',').split(',');
    this.current = this.steps.indexOf(this.getAttribute('current')) + 1 || 1;
    this.items = this.steps.map((s, i) => `<li ${i === this.current - 1 ? `aria-current="step"` : ''}><span>${s}</span></li>`);

    this.innerHTML = `
      <ol>
        ${this.items.join('')}
      </ol>
    `;
  }

  connectedCallback() {
    this.setAttribute('role', 'group');
    this.setAttribute('aria-label', `Progress meter of ${this.steps.length} steps`);
  }
}

customElements.define('p-rogress', Progress);