import { LayoutElement } from '../Layout.js';

/**
 * @tag b-ox
 * @attr {string} [padding=1.5rem] - A CSS padding value
 * @attr {string} [border=0.125rem] - A CSS length value for the border’s width
 * @summary Encloses elements in a box
 */
class BoxElement extends LayoutElement {
	compile() {
		return `
      <style>
        .box {
          border: ${this.border} solid;
          padding: ${this.padding};
				}
      </style>
			<div class="box">
      	<slot></slot>    
			</div>
    `;
	}

	get padding() {
		return this.getAttribute('padding') || '1.5rem';
	}

	set padding(value) {
		if (value) {
			this.setAttribute('padding', value);
		} else {
			this.removeAttribute('padding');
		}
	}  

	get border() {
		return this.getAttribute('border') || '0.125rem';
	}

	set border(value) {
		if (value) {
			this.setAttribute('border', value);
		} else {
			this.removeAttribute('border');
		}
	}  

	static get observedAttributes() {
		return ['border', 'padding'].concat(super.observedAttributes);
	}
}

export { BoxElement };