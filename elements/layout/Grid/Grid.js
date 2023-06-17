import { LayoutElement } from '../Layout.js';

/**
 * @tag g-rid
 * @attr {string} min - The minimum width of items/cells in the grid (never exceeding 100%)
 * @attr {boolean} masonry - Whether to apply a masonry layout
 * @summary Renders child elements in a basic CSS Grid formation
 */
class GridElement extends LayoutElement {
	compile() {
		return `
      <style>
        .grid {
          display: grid;
          gap: ${this.gap};
					align-items: ${this.items};
          grid-template-columns: repeat(auto-fit, minmax(min(${this.min}, 100%), 1fr));
					${this.masonry ? 'grid-template-rows: masonry' : ''}
        }
      </style>
			<div class="grid">
      	<slot></slot>
			</div>
    `;
	}
  
	get min() {
		return this.getAttribute('min') || '10rem';
	}

	set min(value) {
		if (value) {
			this.setAttribute('min', value);
		} else {
			this.removeAttribute('min');
		}
	}

	set masonry(value) {
		if (value)
			this.setAttribute('masonry', '');
		else
			this.removeAttribute('masonry');
	}

	get masonry() {
		return this.hasAttribute('masonry');
	}
	
	static get observedAttributes() {
		return ['min', 'masonry'].concat(super.observedAttributes);
	}
}

export { GridElement };