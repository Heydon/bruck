import { LayoutElement } from '../Layout.js';

/**
 * @tag c-luster
 * @attr {string} justify - A Flexbox justify-content value
 * @summary Places flex items horizontally, with wrapping
 */
class ClusterElement extends LayoutElement {
	constructor() {
		super();
	}
	compile() {
		return `
      <style>
        .cluster {
          display: flex;
          flex-wrap: wrap;
          gap: ${this.gap};
          ${this.justify ? `justify-content: ${this.justify};` : ''}
					align-items: ${this.items};
        }
      </style>
			<div class="cluster">
      	<slot></slot>
			</div>
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