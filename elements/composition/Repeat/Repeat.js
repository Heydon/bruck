import { BaseElement } from '../../Base.js';

/**
 * @tag r-epeat
 * @attr {string} [total=2] - A string representing an integer or a range in the form `[integer]-[integer]`. The total number of instances of the content after repetition has occurred.
 * @slot - The content to be repeated
 * @summary Repeats content of any kind. Renders with `display: content`, so it does not affect layout.
 */
class RepeatElement extends BaseElement {
	constructor() {
		super();
		this.content = this.innerHTML;
		this.shadowRoot.innerHTML = `<slot></slot>`;
	}
  
	repeat() {
		let total = this.integerOrBetween(this.total, 'total');
		while (this.firstChild) this.removeChild(this.firstChild);
		if (total > 0) {
			for (let i = 0; i < total; i++) {
				this.insertAdjacentHTML('afterbegin', this.content);
			}
		} 
	}
  
	get total() {
		return this.getAttribute('total') || '2';
	}

	set total(value) {
		if (value) {
			this.setAttribute('total', value);
		} else {
			this.removeAttribute('total');
		}
	}
  
	connectedCallback() {
		this.repeat();
	}

	attributeChangedCallback() {
		this.repeat();
	}

	static get observedAttributes() {
		return ['total'].concat(super.observedAttributes);
	}
}

export { RepeatElement };