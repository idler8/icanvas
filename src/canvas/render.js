export default class CanvasRender {
	constructor(options = {}) {
		this.renderArray = [];

		this.context = options.context || options.canvas.getContext('2d');
		this.canvas = this.context.canvas;
	}
	look(matrix, x, y) {
		matrix.translate(-x / 2, -y / 2);
		return this;
	}
	updateTexture(image, texture) {
		return image;
	}
	updateBuffer(array, buffer) {
		return array;
	}
	updateIndices(array, buffer) {
		return array;
	}

	transform(transform) {
		if (this.beforeTransform === transform && this.beforeTransformId == transform.cid) return this;
		this.beforeTransform = transform;
		this.beforeTransformId = transform.cid;
		let e = transform.matrix.elements;
		this.context.setTransform(e[0], e[1], e[4], e[5], e[12], e[13]);
		return this;
	}
	vetices(vetices) {}
	uvs(uvs) {}
	indices(indices) {}
	blend(color) {}
	texture(texture) {}
	draw(length) {}
	text(length) {}
}
