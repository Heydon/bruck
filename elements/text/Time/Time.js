import { TextElement } from '../Text.js';

/**
 * @tag t-ime
 * @attr {boolean} precise - Whether to include seconds, in the form 00:00:00
 * @summary Randomly generate a time (24 hour clock)
 */
class TimeElement extends TextElement {
	render() {
		let hours = this.random.integerBetween(0, 23);
		let hoursPadded = String(hours).padStart(2, '0');
		let mins = this.random.integerBetween(0, 59);
		let minsPadded = String(mins).padStart(2, '0');
		if (this.precise) {
			let secs = this.random.integerBetween(0, 59);
			let secsPadded = String(secs).padStart(2, '0');  
			this.innerHTML = `${hoursPadded}:${minsPadded}:${secsPadded}`;
			return;    
		}
		this.innerHTML = `${hoursPadded}:${minsPadded}`;
	}

	set precise(value) {
		if (value)
			this.setAttribute('precise', '');
		else
			this.removeAttribute('precise');
	}

	get precise() {
		return this.hasAttribute('precise');
	}

	static get observedAttributes() {
		return ['precise'].concat(super.observedAttributes);
	}
}

export { TimeElement };