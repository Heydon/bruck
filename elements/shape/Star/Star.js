import { ShapeElement } from '../Shape.js';

/**
 * @tag s-tar
 * @attr {number} points - An integer representing the number of points
 * @attr {number} inner - A float between 0 and 1 representing the proportion of the inner radius of the star
 * @summary A star shape
 */
class StarElement extends ShapeElement {
	constructor() {
		super();
		this.internals.ariaLabel = 'star';
	}

	draw() {
		let w = this.canvasWidth;
		let h = this.canvasHeight;
		let outer = Math.min(w, h) / 2;
		let inner = Math.min(this.inner, 1) * outer;
		let centerX = w / 2;
		let centerY = h / 2;
		let angle  = Math.PI / this.points;
		let points = [];
		for (let i = 0; i < this.points * 2; i++) {
			let radius = i & 1 ? inner : outer;
			points.push(centerX + radius * Math.sin(i * angle));
			points.push(centerY - radius * Math.cos(i * angle));
		}
		return `<polygon fill="currentColor" points="${points}"></polygon>`;
	}

	get points() {
		return parseInt(this.getAttribute('points')) || 5;
	}

	set points(value) {
		if (value) {
			this.setAttribute('points', value);
		} else {
			this.removeAttribute('points');
		}
	}

	get inner() {
		return parseFloat(this.getAttribute('inner')) || 0.5;
	}

	set inner(value) {
		if (value) {
			this.setAttribute('inner', value);
		} else {
			this.removeAttribute('inner');
		}
	}

	static get observedAttributes() {
		return ['points', 'inner'].concat(super.observedAttributes);
	}
}

export { StarElement };