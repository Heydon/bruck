import { LayoutElement } from '../Layout.js';

/**
 * @tag r-epel
 * @attr {string} from - A space or comma separated set of margin properties
 * @summary Repels elements using an auto margin
 */
class RepelElement extends LayoutElement {
	constructor() {
		super();
		this.valid = [
			'top', 
			'right', 
			'bottom', 
			'left',
			'block-start',
			'inline-end',
			'block-end',
			'inline-start'
		];
	}

	compile() {
		let fromArray = this.toArray(this.from);
		let validArray = fromArray.filter(dir => this.valid.includes(dir));
		let marginCSS = validArray.map(dir => {
			return `margin-${dir}: auto;\n`;
		});
		return `
			<style>
				.repel {
					${marginCSS.join('')}
					align-self: ${this.items};
				}
			</style>
			<div class="repel">
				<slot></slot>    
			</div>
		`;
	}

	get from() {
		return this.getAttribute('from') || null;
	}

	set from(value) {
		if (value) {
			this.setAttribute('from', value);
		} else {
			this.removeAttribute('from');
		}
	}  

	static get observedAttributes() {
		return ['from'].concat(super.observedAttributes);
	}
}

export { RepelElement };