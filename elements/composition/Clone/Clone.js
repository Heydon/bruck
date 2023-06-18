import { BaseElement } from '../../Base.js';

/**
 * @tag c-lone
 * @attr {string} of - Corresponds to the id of the template element whose content’s should be cloned
 * @summary Clones the content of a referenced template element as a subtree
 */
class CloneElement extends BaseElement {
	constructor() {
		super();
		this.shadowRoot.innerHTML = `<slot></slot>`;
	}

	get of() {
		return this.getAttribute('of');
	}

	set of(value) {
		if (value) {
			this.setAttribute('of', value);
		} else {
			this.removeAttribute('of');
		}
	}
  
	connectedCallback() {
		if (!this.of) {
			throw new Error('<c-lone> missing `of` property');
		}
	}
  
	attributeChangedCallback() {
		this.template = document.getElementById(this.of);
		this.replaceChildren(this.template.content.cloneNode(true));
	}

	static get observedAttributes() {
		return ['of'].concat(super.observedAttributes);
	}
}

export { CloneElement };