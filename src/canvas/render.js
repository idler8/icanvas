export default class CanvasRender {
	constructor(options) {
		if (!options.context) options.context = options.canvas.getContext('2d');
		this.context = options.context;
		this.canvas = options.context.canvas;
		this.renderArray = [];
	}

	update() {
		for (let i = 0, len = this.renderArray.length; i < len; i++) {
			this.renderArray[i].emit('update');
			if (this.renderArray[i].update) this.renderArray[i].update(this);
			this.renderArray[i].emit('updated');
		}
		this.renderArray.length = 0;
	}
	updateTexture(image) {
		return image;
	}
	updateBuffer(source) {
		if (!source) return null;
		let x = source[0];
		let y = source[1];
		let width = source[2];
		let height = source[3];
		let realWidth = source[4];
		let realHeight = source[5];
		if (x == 0 && y == 0 && width == realWidth && height == realHeight) return null;
		return source;
	}
	blend() {
		return this;
	}
	transform(matrix) {
		let e = matrix.elements;
		this.context.setTransform(e[0], e[1], e[4], e[5], e[12], e[13]);
		return this;
	}
	texture(texture) {
		if (texture.needUpdate) {
			texture.uv = this.updateBuffer(texture.source, texture.uv);
			texture.needUpdate = false;
		}
		this.beforeUvs = texture.uv;
		this.beforeTexture = texture.baseTexture.source;
	}
	draw() {
		let ctx = this.context;
		let c = this.beforeUvs;
		let i = this.beforeTexture;
		c ? ctx.drawImage(i, c[0], c[1], c[2], c[3], -1, -1, 2, 2) : ctx.drawImage(i, -1, -1, 2, 2);
	}
	text() {
		//TODO
		// let ctx = render.context;
		// if (ctx.font != this.family) ctx.font = this.family;
		// if (ctx.textAlign != 'left') ctx.fillStyle = 'left';
		// if (ctx.textBaseline != 'top') ctx.textBaseline = 'top';
		// if (this.stroke > 0) {
		// 	if (ctx.lineWidth != this.stroke) ctx.lineWidth = this.stroke;
		// 	if (ctx.strokeStyle != this.color) ctx.strokeStyle = this.color;
		// 	render.context.strokeText(this.values, 0, 0);
		// } else {
		// 	if (ctx.fillStyle != this.color) ctx.fillStyle = this.color;
		// 	render.context.fillText(this.values, 0, 0);
		// }
	}
}
