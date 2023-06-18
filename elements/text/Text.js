import { BaseElement } from '../Base.js';

/**
 * @attr {string} [count=3-5] - Either a straight integer or a random integer chosen from the range [integer]-[integer]
 * @summary The base element for text elements
 */
class TextElement extends BaseElement {
	constructor() {
		super();
		this.shadowRoot.innerHTML = `<slot></slot>`;
	}
	
	connectedCallback() {
		this.render();
	}

	attributeChangedCallback() {
		this.render();
	}

	get count() {
		return this.getAttribute('count') || '3-5';
	}

	set count(value) {
		if (value) {
			this.setAttribute('count', value);
		} else {
			this.removeAttribute('count');
		}
	}

	static get observedAttributes() {
		return ['count'].concat(super.observedAttributes);
	}
}

export { TextElement };