// https://github.com/Heydon/bruck#c-lone

export default class Clone extends HTMLElement {
  constructor() {
    super();
    this.of = this.getAttribute('of');
    if (!this.of) {
      console.error('Each <c-lone> element must have an `of` attribute pointing to a <template> id.');
      return;
    }
    this.template = document.getElementById(this.of);
    Promise.all([
      customElements.whenDefined('g-rid'),
      customElements.whenDefined('s-tack')
    ]).then(() => {
      this.appendChild(this.template.content.cloneNode(true));
    });
  }
}

customElements.define('c-lone', Clone);