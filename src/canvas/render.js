import Matrix4 from '../vector/matrix4.js';
export default class CanvasRender {
	constructor(options) {
		this.renderArray = [];
		this.matrix = new Matrix4();

		if (!options.context) options.context = options.canvas.getContext('2d');
		this.context = options.context;
		this.canvas = options.context.canvas;
	}

	update() {
		for (let i = 0, len = this.renderArray.length; i < len; i++) {
			this.renderArray[i].emit('update');
			if (this.renderArray[i].update) this.renderArray[i].update(this);
			this.renderArray[i].emit('updated');
		}
		this.renderArray.length = 0;
	}
	setTransform(matrix) {
		this.matrix.setApply(matrix);
		return this;
	}
	transform(matrix) {
		this.matrix.multiply(matrix);
		return this;
	}
	drawImage(texture, x, y, width, height) {
		let sx = (width || texture.width) / 2;
		let sy = (height || texture.height) / 2;
		this.matrix.translate(x, y).scale(sx, sy);
		this.bindTexture(texture);
		this.draw();
		this.matrix.scale(1 / sx, 1 / sy).translate(-x, -y);
		return this;
	}

	updateUvs(source) {
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

	setBlend(color) {
		//TODO 融合纹理，生成新内容
		return this;
	}
	bindTexture(texture) {
		if (!texture || !texture.baseTexture) return false;
		if (texture.needUpdate) {
			texture.uv = this.updateUvs(texture.source, texture.uv);
			texture.needUpdate = false;
		}
		if (texture.baseTexture.needUpdate) {
			texture.baseTexture.texture = texture.baseTexture.source;
			texture.baseTexture.needUpdate = false;
		}
		this.beforeUvs = texture.uv;
		this.beforeTexture = texture.baseTexture.texture;
	}
	draw() {
		let e = this.matrix.elements;
		let ctx = this.context;
		let c = this.beforeUvs;
		let i = this.beforeTexture;
		this.context.setTransform(e[0], e[1], e[4], e[5], e[12], e[13]);
		c ? ctx.drawImage(i, c[0], c[1], c[2], c[3], -1, -1, 2, 2) : ctx.drawImage(i, -1, -1, 2, 2);
	}
}
