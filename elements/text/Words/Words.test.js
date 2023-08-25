import { WordsElement } from './Words';

window.customElements.define('w-ords', WordsElement);

test('There are 2 spaces and the first letter is capitalized', () => {
	document.body.innerHTML = `
    <w-ords count="3"></w-ords>
  `;
	const testElement = document.querySelector('w-ords');
	const chars = testElement.textContent.split('');
	const spaces = chars.filter(char => char === ' ').length;
	const firstIsUpper = chars[0] === chars[0].toUpperCase();
	expect(spaces).toBe(2);
	expect(firstIsUpper).toBe(true);
});