import { ShapeElement } from '../Shape.js';

/**
 * @tag p-olygon
 * @attr {number} sides - An integer representing the number of sides
 * @summary A polygon shape
 */
class PolygonElement extends ShapeElement {
	draw() {
		let sides = this.sides / 2;
		let w = this.canvasWidth;
		let h = this.canvasHeight;
		let radius = Math.min(w, h) / 2;
		let angle  = Math.PI / sides;
		let centerX = w / 2;
		let centerY = h / 2;
		let points = [];
		for (let i = 0; i < sides * 2; i++) {
			points.push(centerX + radius * Math.sin(i * angle));
			points.push(centerY - radius * Math.cos(i * angle));
		}
		return `<polygon fill="currentColor" points="${points}"></polygon>`;
	}

	get sides() {
		return parseInt(this.getAttribute('sides')) || 6;
	}

	set sides(value) {
		if (value) {
			this.setAttribute('sides', value);
		} else {
			this.removeAttribute('sides');
		}
	}

	static get observedAttributes() {
		return ['sides'].concat(super.observedAttributes);
	}
}

export { PolygonElement };