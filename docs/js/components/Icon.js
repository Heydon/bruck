// https://github.com/Heydon/bruck#i-con

export default class Icon extends HTMLElement {
  constructor() {
    super();
    this.name = this.getAttribute('name');
    if (!this.name) {
      console.error('Each <i-con> component needs a name attribute');
      return;
    }

    this.label = this.getAttribute('label') || undefined;

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-block;
          width: 1em;
        }

        svg {
          stroke: currentColor;
          stroke-width: 3;
          fill: none;
          width: 100%;
          height: auto;
          vertical-align: -0.125em;
          overflow: visible;
        }
      </style>
    `;

    fetch(`./icons/${this.name}.svg`)
      .then(res => {
        res.text()
          .then(svg => {
            this.shadowRoot.innerHTML += svg;
            if (this.label) {
              const image = this.shadowRoot.querySelector('svg');
              image.setAttribute('role', 'img');
              image.setAttribute('aria-label', this.label);
            }
          });
      });
  }
}

customElements.define('i-con', Icon);