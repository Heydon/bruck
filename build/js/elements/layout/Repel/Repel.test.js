import { RepelElement } from './Repel';

window.customElements.define('r-epel', RepelElement);

test('element `margin-top` is set to `auto`', () => {
	document.body.innerHTML = '<r-epel from="inline-start"></r-epel>';
	const testElement = document.querySelector('r-epel');
  const shadowHTML = testElement.shadowRoot.innerHTML;
	expect(shadowHTML.includes('margin-inline-start: auto;')).toBe(true);
});