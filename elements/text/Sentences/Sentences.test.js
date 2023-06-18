import { SentencesElement } from './Sentences';

window.customElements.define('s-entences', SentencesElement);

test('there are between 3 and 6 periods', () => {
	document.body.innerHTML = `
    <s-entences count="3-6"></s-entences>
  `;
	const testElement = document.querySelector('s-entences');
  const chars = testElement.textContent.split('');
  const periods = chars.filter(char => char === '.').length;
  const inRange = (periods > 2) && (periods < 7); 
	expect(inRange).toBe(true);
});