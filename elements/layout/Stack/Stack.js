import { LayoutElement } from '../Layout.js';

/**
 * @tag s-tack
 * @summary Inserts a gap between block elements
 */
class StackElement extends LayoutElement {
	compile() {
		return `
      <style>
        .stack {
          display: flex;
          flex-direction: column;
          gap: ${this.gap};
        }
      </style>
      <div class="stack">
        <slot></slot>
      </div>
    `;
	}
}

export { StackElement };