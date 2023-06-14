import { GridElement } from './Grid';

window.customElements.define('g-rid', GridElement);

test('masonry layout declaration is applied', () => {
	document.body.innerHTML = '<g-rid min="20ch" masonry></g-rid>';
	const testElement = document.querySelector('g-rid');
	const shadowHTML = testElement.shadowRoot.innerHTML;
	expect(shadowHTML.includes('grid-template-rows: masonry')).toBe(true);
});
