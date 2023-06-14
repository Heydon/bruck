import { ClusterElement } from './Cluster';

window.customElements.define('c-luster', ClusterElement);

test('justify property is set to `flex-end` via attribute value of `right`', () => {
	document.body.innerHTML = '<c-luster justify="right"></c-luster>';
	const testElement = document.querySelector('c-luster');
	expect(testElement.justify).toMatch('flex-end');
});
