import { TextElement } from '../Text.js';

/**
 * @tag d-ate
 * @attr {boolean} expanded - Whether to output in longform
 * @summary Randomly generate a date
 */
class DateElement extends TextElement {  
	render() {
		let date = new Date(new Date() - Math.random()*(1e+12));
		let dateText;
		if (!this.expanded) {
			dateText = date.toLocaleDateString();
		} else {
			dateText = date.toDateString();
		}
		this.innerHTML = dateText;
	}

	set expanded(value) {
		if (value)
			this.setAttribute('expanded', '');
		else
			this.removeAttribute('expanded');
	}

	get expanded() {
		return this.hasAttribute('expanded');
	}

	static get observedAttributes() {
		return ['expanded'].concat(super.observedAttributes);
	}
}

export { DateElement };