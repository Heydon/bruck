import { PatternElement } from '../Pattern.js';

/**
 * @tag s-tripes
 * @attr {string} width - A CSS size value representing the width of each stripe
 * @attr {string} space - A CSS size value representing the space between each stripe
 * @summary A mask that applies a striped pattern to descendant elements
 */
class StripesElement extends PatternElement {
	constructor() {
		super();
		this.constructor.observedAttributes.push('width', 'space');
	}

	compile() {
		return `
      <style>
        ::slotted(*) {
          --width: ${this.width};
          --space: ${this.space ? this.space : this.width};
          mask-image: repeating-linear-gradient(45deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) var(--width), rgba(0, 0, 0, 1) var(--width), rgba(0, 0, 0, 1) calc(var(--width) + var(--space)));
        }
      </style>
      <slot></slot>
    `;
	}

	get width() {
		return this.getAttribute('width') || '0.25rem';
	}

	set width(value) {
		if (value) {
			this.setAttribute('width', value);
		} else {
			this.removeAttribute('width');
		}
	} 

	get space() {
		return this.getAttribute('space') || null;
	}

	set space(value) {
		if (value) {
			this.setAttribute('space', value);
		} else {
			this.removeAttribute('space');
		}
	} 

	static get observedAttributes() {
		return ['width', 'space'].concat(super.observedAttributes);
	}
}

export { StripesElement };