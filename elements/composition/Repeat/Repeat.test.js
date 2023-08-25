import { RepeatElement } from './Repeat';

window.customElements.define('r-epeat', RepeatElement);

test('There are 6 paragraphs in Light DOM', () => {
	document.body.innerHTML = `
    <r-epeat total="6-9">
      <p>Hiya</p>
    </r-epeat>
  `;
	const testElement = document.querySelector('r-epeat');
	const paragraphs = testElement.querySelectorAll('p').length;
	const inRange = (paragraphs > 5) && (paragraphs < 10);
	expect(inRange).toBe(true);
});