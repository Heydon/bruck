import { BaseElement } from '../Base.js';

/**
 * @summary The base element for pattern elements
 */
class PatternElement extends BaseElement {
	constructor() {
		super();
		this.template = document.createElement('template');
	}
  
	render() {
		this.template.innerHTML = this.compile();
		this.shadowRoot.appendChild(this.template.content.cloneNode(true));
	}

	attributeChangedCallback() {
		this.render();
	}
  
	connectedCallback() {
		this.render();
	}
}

export { PatternElement };