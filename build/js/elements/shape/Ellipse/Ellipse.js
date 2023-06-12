import { ShapeElement } from '../Shape.js';

/**
 * @tag e-llipse
 * @summary An ellipse shape
 */
class EllipseElement extends ShapeElement {
	draw() {
		return `<ellipse fill="currentColor" cx="${this.canvasWidth / 2}" cy="${this.canvasHeight / 2}" rx="${this.canvasWidth / 2}" ry="${this.canvasHeight / 2}" />`;
	}
}

export { EllipseElement };