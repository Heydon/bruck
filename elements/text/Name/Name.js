import { TextElement } from '../Text.js';
import { firstNames } from '../../../data/firstNames.js';
import { lastNames } from '../../../data/lastNames.js';

/**
 * @tag n-ame
 * @attr {boolean} first - just output a first name
 * @attr {boolean} last - just output last name
 * @summary Randomly generate a name
 */
class NameElement extends TextElement {
	render() {
		const firstName = this.random.oneOf(firstNames);
		const lastName = this.random.oneOf(lastNames);
		let name;
		if (this.first && !this.last) {
			name = firstName;
		} else if (!this.first && this.last) {
			name = lastName;
		} else {
			name = `${firstName} ${lastName}`;
		}
		this.innerHTML = name;
	}

	set first(value) {
		if (value)
			this.setAttribute('first', '');
		else
			this.removeAttribute('first');
	}

	get first() {
		return this.hasAttribute('first');
	}

	set last(value) {
		if (value)
			this.setAttribute('last', '');
		else
			this.removeAttribute('last');
	}

	get last() {
		return this.hasAttribute('last');
	}

	static get observedAttributes() {
		return ['first', 'last'].concat(super.observedAttributes);
	}
}

export { NameElement };