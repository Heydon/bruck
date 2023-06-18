import { BoxElement } from './Box';

window.customElements.define('b-ox', BoxElement);

test('padding property is set to `3rem` via attribute', () => {
	document.body.innerHTML = '<b-ox padding="3rem"></b-ox>';
	const testElement = document.querySelector('b-ox');
	expect(testElement.padding).toMatch('3rem');
});