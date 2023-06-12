import { ShapeElement } from '../Shape.js';

/**
 * @tag r-ectangle
 * @summary A rectangle shape
 */
class RectangleElement extends ShapeElement {
	draw() {
		return `<rect fill="currentColor" width="${this.canvasWidth}" height="${this.canvasHeight}"></rect>`;
	}
}

export { RectangleElement };