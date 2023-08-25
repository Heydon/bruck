import { ClusterElement } from './Cluster';

window.customElements.define('c-luster', ClusterElement);

test('justify property is set to `flex-end` via attribute value of `right`', () => {
	document.body.innerHTML = '<c-luster justify="right"></c-luster>';
	const testElement = document.querySelector('c-luster');
	const shadowHTML = testElement.shadowRoot.innerHTML;
	console.log(shadowHTML);
	expect(shadowHTML.includes('justify-content: flex-end')).toBe(true);
});
