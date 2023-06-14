import { SidebarElement } from './Sidebar';

window.customElements.define('s-idebar', SidebarElement);

test('element `margin-top` is set to `auto`', () => {
	document.body.innerHTML = `
    <s-idebar threshold="75%">
      <aside slot="start"></aside>
      <main slot="end"></main>
    </s-idebar>
  `;
	const testElement = document.querySelector('s-idebar');
  const shadowHTML = testElement.shadowRoot.innerHTML;
	expect(shadowHTML.includes('min-width: 75%')).toBe(true);
});