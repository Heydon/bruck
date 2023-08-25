import { CloneElement } from './Clone';

window.customElements.define('c-lone', CloneElement);

test('Clones blockquote from template', () => {
	document.body.innerHTML = `
    <template id="test">
      <blockquote>No — Me</blockquote>
    </template>
    <c-lone of="test"></c-lone>
  `;
	const testElement = document.querySelector('c-lone');
	const blockquote = testElement.querySelector('blockquote');
	expect(blockquote).toBeTruthy();
});