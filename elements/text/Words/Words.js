import { TextElement } from '../Text.js';
import { words } from '../../../data/words.js';

/**
 * @tag w-ords
 * @attr {string} [case=sentence] - The case: title, sentence, upper, or lower.
 * @summary Generate a number of words
 */
class WordsElement extends TextElement {
	render() {
		let count = this.integerOrBetween(this.count, 'count');
		let shuffled = this.random.shuffle(words);
		let subset = shuffled.splice(0, count);
		let output;
		switch (this.case) {
		case 'title':
			output = subset.map(w => this.capitalize(w));
			break;
		case 'lower':
			output = subset;
			break;
		case 'upper':
			output = subset.map(w => w.toUpperCase());
			break;
		default:	
			subset[0] = this.capitalize(subset[0]);
			output = subset;
		}
		this.textContent = `${output.join(' ')}`;
	}

	capitalize(word) {
		return word.charAt(0).toUpperCase() + word.slice(1);
	}

	get case() {
		return this.getAttribute('case') || 'sentence';
	}

	set case(value) {
		if (value) {
			this.setAttribute('case', value);
		} else {
			this.removeAttribute('case');
		}
	}

	static get observedAttributes() {
		return ['case'].concat(super.observedAttributes);
	}
}

export { WordsElement };