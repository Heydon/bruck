import { BaseElement } from '../Base.js';

/**
 * @attr {string} aspectratio - a CSS `aspect-ratio` value
 * @summary The base element used for constructing shapes using SVG
 */
class ShapeElement extends BaseElement {
	createCanvas(aspectRatio) {
		const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
		const widthMultiplier = aspectRatio.split('/').reduce((n, d) => {
			return parseInt(n.trim()) / parseInt(d.trim());
		});
		this.canvasWidth = 100 * widthMultiplier;
		this.canvasHeight = 100;
		svg.setAttribute('viewBox', `0 0 ${this.canvasWidth} ${this.canvasHeight}`);
		return svg;
	}
  
	draw() {
		return '';
	}
  
	render() {
		this.innerHTML = '';
		const canvas = this.createCanvas(this.aspectRatio);
		const shape = this.draw();
		canvas.innerHTML = shape;
		this.appendChild(canvas);
	}

	get aspectRatio() {
		return this.getAttribute('aspectRatio') || '1/1';
	}

	set aspectRatio(value) {
		if (value) {
			this.setAttribute('aspectRatio', value);
		} else {
			this.removeAttribute('aspectRatio');
		}
	}
  
	attributeChangedCallback() {
		this.render();
	}
  
	connectedCallback() {
		this.render();
	}

	static get observedAttributes() {
		return ['aspectratio'].concat(super.observedAttributes);
	}
}

export { ShapeElement };