/*
Usage: 
  <c-lone of="navigation"></c-lone>
Attributes: 
  - of [template element id] (required)
*/

export default class Clone extends HTMLElement {
  constructor() {
    super();
    this.id = this.getAttribute('of');
    if (!this.id) {
      console.error('Each <c-lone> element must have an `of` attribute pointing to a <template> id.');
      return;
    }
    this.template = document.getElementById(this.id);
    this.appendChild(this.template.content.cloneNode(true));
  }
}

customElements.define('c-lone', Clone);