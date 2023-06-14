import { StackElement } from './Stack';

window.customElements.define('s-tack', StackElement);

test('gap property is set to `4rem` via attribute', () => {
	document.body.innerHTML = '<s-tack gap="4rem"></s-tack>';
	const testElement = document.querySelector('s-tack');
	expect(testElement.gap).toMatch('4rem');
});
