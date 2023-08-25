import { ShapeElement } from '../../shape/Shape.js';

/**
 * @tag i-mage
 * @summary Placeholder image element, with control over aspect ratio
 */
class ImageElement extends ShapeElement {
	constructor() {
		super();
		this.shadowRoot.innerHTML = '<slot></slot>';
	}

	render() {
		const canvas = this.createCanvas(this.aspectRatio);
		canvas.style.border = '0.125rem solid';
		let w = this.canvasWidth;
		let h = this.canvasHeight;
		canvas.innerHTML = `<path stroke="currentColor" stroke-width="0.125rem" vector-effect="non-scaling-stroke" d="M0,0 ${w},${h} M${w},0 0,${h}"></path>`;
		this.replaceChildren(canvas);
	}
}

export { ImageElement };