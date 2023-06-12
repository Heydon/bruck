import { PatternElement } from '../Pattern.js';

/**
 * @tag d-ots
 * @attr {string} size - A CSS size value representing the space taken up by each part of the pattern
 * @attr {string} radius - A float between 0 and 1 representing the radius of the dot relative to the size of the pattern
 * @summary A mask that applies a dotted pattern to descendant elements
 */
class DotsElement extends PatternElement {
	constructor() {
		super();
		this.constructor.observedAttributes.push('size', 'radius');
	}

	compile() {
		let radius = this.radius * 20 / 2;
		return `
      <style>
        :host {
          display: contents;
        }

        ::slotted(*) {
          mask-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><circle cx="10" cy="10" r="${radius}" fill="white"></circle></svg>');
          mask-size: ${this.size};
        }
      </style>
      <slot></slot>
    `;
	}

	get size() {
		return this.getAttribute('size') || '1rem';
	}

	set size(value) {
		if (value) {
			this.setAttribute('size', value);
		} else {
			this.removeAttribute('size');
		}
	} 

	get radius() {
		return parseFloat(this.getAttribute('radius')) || 0.5;
	}

	set radius(value) {
		if (value) {
			this.setAttribute('radius', value);
		} else {
			this.removeAttribute('radius');
		}
	} 

	static get observedAttributes() {
		return ['size', 'radius'].concat(super.observedAttributes);
	}
}

export { DotsElement };