import { LayoutElement } from '../Layout.js';

/**
 * @tag s-tack
 * @summary Inserts a gap between block elements
 */
class StackElement extends LayoutElement {
	compile() {
		return `
      <style>
        :host {
          display: flex;
          flex-direction: column;
          gap: ${this.gap};
        }
      </style>
      <slot></slot>    
    `;
	}
}

export { StackElement };