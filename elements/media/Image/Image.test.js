import { ImageElement } from './Image';

window.customElements.define('i-mage', ImageElement);

test('`viewBox` is set to `0 0 200 100`', () => {
	document.body.innerHTML = '<i-mage aspectratio="2/1"></i-mage>';
	const svg = document.querySelector('i-mage svg');
	const viewBox = svg.getAttribute('viewBox');
	expect(viewBox).toMatch('0 0 200 100');
});