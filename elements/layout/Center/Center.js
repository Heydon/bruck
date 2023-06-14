import { LayoutElement } from '../Layout.js';

/**
 * @tag c-enter
 * @attr {string} max - The `max-inline-size` of the centered element
 * @summary Makes a vertically centered column with an inline size equal to whichever is larger: the content of the element or the max (`max-inline-size`) value set
 */
class CenterElement extends LayoutElement {
	constructor() {
		super();
	}

	compile() {
		return `
      <style>
				:host {
					display: block;
					margin-inline: auto;
					max-inline-size: ${this.max};
				}
      </style>
      <slot></slot>
    `;
	}

	get max() {
		return this.getAttribute('max') || '30rem';
	}

	set max(value) {
		if (value) {
			this.setAttribute('max', value);
		} else {
			this.removeAttribute('max');
		}
	}

	static get observedAttributes() {
		return ['max'].concat(super.observedAttributes);
	}
}

export { CenterElement };