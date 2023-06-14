import { LayoutElement } from '../Layout.js';

/**
 * @tag c-luster
 * @attr {string} justify - A Flexbox justify-content value
 * @summary Places flex items horizontally, with wrapping
 */
class ClusterElement extends LayoutElement {
	constructor() {
		super();
		this.aliases = {
			start: 'flex-start',
			end: 'flex-end',
			left: 'flex-start',
			right: 'flex-end'
		};
	}
	compile() {
		let aliasKeys = Object.keys(this.aliases);
		if (aliasKeys.includes(this.justify)) {
			this.justify = this.aliases[this.justify];
		}
		return `
      <style>
        :host {
          display: flex;
          flex-wrap: wrap;
          gap: ${this.gap || 'var(--size-m-20)'};
          ${this.justify ? `justify-content: ${this.justify};` : ''}
					align-items: ${this.items};
        }
      </style>
      <slot></slot>
    `;
	}

	get justify() {
		return this.getAttribute('justify');
	}

	set justify(value) {
		if (value) {
			this.setAttribute('justify', value);
		} else {
			this.removeAttribute('justify');
		}
	}  

	static get observedAttributes() {
		return ['justify'].concat(super.observedAttributes);
	}
}

export { ClusterElement };