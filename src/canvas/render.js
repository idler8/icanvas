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
	createTexture(image) {
		return image;
	}
	blend() {
		return this;
	}
	transform(matrix) {
		let e = matrix.elements;
		this.context.setTransform(e[0], e[1], e[4], e[5], e[12], e[13]);
		return this;
	}
	drawImage(texture) {
		let c = texture.coord;
		let i = texture.baseTexture.texture;
		c ? ctx.drawImage(i, c[0], c[1], c[2], c[3], -1, -1, 2, 2) : ctx.drawImage(i, -1, -1, 2, 2);
	}
	fillText(value, font, fillStyle) {
		let ctx = this.context;
		if (ctx.textAlign != 'left') ctx.textAlign = 'left';
		if (ctx.textBaseline != 'top') ctx.textBaseline = 'top';
		if (ctx.font != font) ctx.font = font;
		if (ctx.fillStyle != fillStyle) ctx.fillStyle = fillStyle;
		ctx.fillText(value, 0, 0);
		return this;
	}
}
