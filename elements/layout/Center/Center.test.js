import { CenterElement } from './Center';

window.customElements.define('c-enter', CenterElement);

test('`max-inline-size` is set to 20rem', () => {
	document.body.innerHTML = '<c-enter max="20rem"></c-enter>';
	const testElement = document.querySelector('c-enter');
	const shadowHTML = testElement.shadowRoot.innerHTML;
	expect(shadowHTML.includes('max-inline-size: 20rem;')).toBe(true);
});