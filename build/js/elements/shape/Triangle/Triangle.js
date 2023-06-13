import { ShapeElement } from '../Shape.js';

/**
 * @tag t-riangle
 * @attr {string} kind - The orientation of the triangle. One of the unicode points ◣, ◤, ◥, ◢, ▲, ▶, ▼, or ◀
 * @summary A triangle shape
 */
class TriangleElement extends ShapeElement {
	constructor() {
		super();
	}
  
	draw() {
		const w = this.canvasWidth;
		const h = this.canvasHeight;
		let points;
		let kind;
		if (this.kind === '?') {
			kind = this.randomOneOf(['◣', '◤', '◥', '◢', '▲', '▶', '▼', '◀']);
		} else {
			kind = this.kind;
		}
		switch (kind) {
		case '◣':
			points = `0,0 ${w},${h} 0,${h}`;
			break;
		case '◤':
			points = `0,0 ${w},0 0,${h}`;
			break;
		case '◥':
			points = `0,0 ${w},0 ${w},${h}`;
			break;
		case '◢':
			points = `${w},0 ${w},${h} 0, ${h}`;
			break;
		case '▲':
			points = `${w / 2},0 ${w},${h} 0, ${h}`;
			break;
		case '▶':
			points = `0,0 ${w},${h / 2} 0,${h}`;
			break;
		case '▼':
			points = `0,0 ${w},0 ${w / 2},${h}`;
			break;
		case '◀':
			points = `${w},0 ${w},${h} 0, ${h / 2}`;
			break;
		default:
			points = `${w / 2},0 ${w},${h} 0, ${h}`;
		}
		return `<polyline fill="currentColor" points="${points}" />`;
	}
  
	get kind() {
		return this.getAttribute('kind');
	}

	set kind(value) {
		if (value) {
			this.setAttribute('kind', value);
		} else {
			this.removeAttribute('kind');
		}
	}

	static get observedAttributes() {
		return ['kind'].concat(super.observedAttributes);
	}
}

export { TriangleElement };