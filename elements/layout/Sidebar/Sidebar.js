import { LayoutElement } from '../Layout.js';

/**
 * @tag s-idebar
 * @attr {string} sidewidth - The width of the sidebar where there is room to accommodate one
 * @attr {string} threshold - The width of the non-sidebar, as a percentage of the container, at which it should wrap 
 * @attr {boolean} end - Treat the end (typically right) content as the sidebar
 * @slot start - The content to appear at the start (typically left) of the inline axis
 * @slot end - The content to appear at the end (typically right) of the inline axis
 * @summary Wraps two elements, with one acting as a sidebar and the other taking up the remaining space
 */
class SidebarElement extends LayoutElement {
	compile() {
		const start = !this.end ? 'side' : 'main';
		const end = this.end ? 'side' : 'main';
		return `
      <style>
        .with-sidebar {
          display: flex;
          flex-wrap: wrap;
          gap: ${this.gap};
        }
        
        .main {
          flex-basis: 0;
	        flex-grow: 999;
          min-width: ${this.threshold};
        }
        
        .side {
          flex-grow: 1;
          flex-basis: ${this.sideWidth || 'auto'};
        }
      </style>
			<div class="with-sidebar">
				<div class="${start}">
					<slot name="start"></slot> 
				</div>
				<div class="${end}">
					<slot name="end"></slot>
				</div>
			</div>
    `;
	}
  
	get sideWidth() {
		return this.getAttribute('sideWidth');
	}

	set sideWidth(value) {
		if (value) {
			this.setAttribute('sideWidth', value);
		} else {
			this.removeAttribute('sideWidth');
		}
	}

	set end(value) {
		if (value)
			this.setAttribute('end', '');
		else
			this.removeAttribute('end');
	}

	get end() {
		return this.hasAttribute('end');
	}

	get threshold() {
		return this.getAttribute('threshold') || '50%';
	}

	set threshold(value) {
		if (value) {
			this.setAttribute('threshold', value);
		} else {
			this.removeAttribute('threshold');
		}
	}

	static get observedAttributes() {
		return ['end', 'sidewidth', 'threshold'].concat(super.observedAttributes);
	}
}

export { SidebarElement };