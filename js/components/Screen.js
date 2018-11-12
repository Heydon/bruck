// https://github.com/Heydon/bruck#s-creen

export default class Screen extends HTMLElement {
  constructor() {
    super();
    this.id = this.getAttribute('id');
    if (!this.id) {
      console.error('Every <s-creen> element needs a unique id attribute.');
      return;
    }
    this.label = this.getAttribute('label') || this.id;

    this.setAttribute('role', 'document');
    this.setAttribute('aria-label', `Screen: ${this.label}`);
    this.setAttribute('tabindex', '-1');
    this.hidden = true;

    this.change = () => {
      if (this.getAttribute('current')) {
        this.hidden = false;
        document.title = this.label;
        this.focus();
      } else {
        this.hidden = true;
      }
    }
  }

  static get observedAttributes() {
    return ['current'];
  }

  attributeChangedCallback(name) {
    if (name === 'current') {
      this.change();
    }
  }
}

customElements.define('s-creen', Screen);