import { LayoutElement } from '../Layout.js';

/**
 * @tag c-over
 * @summary Vertically centers content inside a full-screen height container
 */
class CoverElement extends LayoutElement {
	compile() {
		return `
      <style>
        .cover {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: ${this.gap};
					min-height: 100dvh;
        }
      </style>
      <div class="cover">
        <slot></slot>
      </div>
    `;
	}
}

export { CoverElement };