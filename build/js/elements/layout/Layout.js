import { BaseElement } from '../Base.js';

/**
 * @attr {string} gap - the spacing (gutter) between child elements 
 * * @attr {string} items - the CSS `align-items` value
 * @summary The base element used for constructing layouts. Not to be rendered itself.
 */
class LayoutElement extends BaseElement {
	constructor() {
		super();
		this.attachShadow({mode: 'open'});
		this.template = document.createElement('template');
	}
  
	compile() {
		return '<slot></slot>';
	}
  
	render() {
		this.template.innerHTML = this.compile();
		this.shadowRoot.appendChild(this.template.content.cloneNode(true));
	}
  
	get gap() {
		return this.getAttribute('gap') || '1.5rem';
	}

	set gap(value) {
		if (value) {
			this.setAttribute('gap', value);
		} else {
			this.removeAttribute('gap');
		}
	}

	get items() {
		return this.getAttribute('items') || 'flex-start';
	}

	set items(value) {
		if (value) {
			this.setAttribute('items', value);
		} else {
			this.removeAttribute('items');
		}
	}
  
	attributeChangedCallback() {
		this.render();
	}
  
	connectedCallback() {
		this.render();
	}

	static get observedAttributes() {
		return ['gap', 'items'].concat(super.observedAttributes);
	}
}

export { LayoutElement };