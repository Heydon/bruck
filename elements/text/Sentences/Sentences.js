import { TextElement } from '../Text.js';
import { sentences } from '../../../data/sentences.js';

/**
 * @tag s-entences
 * @summary Generate a number of sentences
 */
class SentencesElement extends TextElement {
	render() {
		let count = this.integerOrBetween(this.count, 'count');
		let shuffled = this.random.shuffle(sentences);
		let subset = shuffled.splice(0, count);
		this.textContent = `${subset.join(' ')}`;
	}
}

export { SentencesElement };