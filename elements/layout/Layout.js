import { BaseElement } from '../Base.js';

/**
 * @attr {string} gap - the spacing (gutter) between child elements 
 * @attr {string} items - the CSS `align-items` value (where applicable only)
 * @summary The base element used for constructing layouts. Not to be rendered itself.
 */
class LayoutElement extends BaseElement {
	constructor() {
		super();
		this.template = document.createElement('template');
		this.valueTranslations = {
			'justify-content': {
				left: 'flex-start',
				right: 'flex-end'
			}
		};
	}

	translateVal(property, value) {
		const translations = this.valueTranslations[property];
		if (!(value in translations)) {
			return value;
		}
		return translations[value];
	}
  
	compile() {
		return '<slot></slot>';
	}
  
	render() {
		this.template.innerHTML = this.compile();
		this.shadowRoot.replaceChildren(this.template.content.cloneNode(true));
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
		return this.getAttribute('items');
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