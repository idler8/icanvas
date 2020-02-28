import Vector2 from './vector/vector2.js';
/**
 * baseTexture基本纹理类型
 */
//全图纹理
export class BaseTexture {
	constructor(source) {
		this.source = source;
		this.size = new Vector2(source.width, source.height);
		this.texture = null;
		this.needUpdate = true;
	}
	get width() {
		return this.size.x;
	}
	get height() {
		return this.size.y;
	}
	update(render) {
		if (!this.needUpdate) return;
		this.texture = render.updateTexture(this.source, this.texture);
		this.needUpdate = false;
	}
	getTexture(x, y, width, height) {
		return {
			baseTexture: this,
			x: x || 0,
			y: y || 0,
			width: width || this.width,
			height: height || this.height,
		};
	}
}

//Canvas全图纹理
export class CanvasTexture extends BaseTexture {
	constructor(canvas) {
		let context = null;
		if (canvas.getContext) {
			context = canvas.getContext('2d');
		} else {
			context = canvas;
			canvas = context.canvas;
		}
		super(canvas);
		this.context = context;
		this.canvas = canvas;
	}
	refresh() {
		this.size.set(this.canvas.width, this.canvas.height);
		return this;
	}
}
//字体Canvas全图纹理
export class FontTexture extends CanvasTexture {
	constructor(canvas, family, weight, size) {
		super(canvas);
		this.x = (this.source.width / size) | 0;
		this.y = (this.source.height / size) | 0;
		this.size = size;
		this.max = this.x * this.y;
		this.used = 0;
		this.context.font = weight + ' ' + size + 'px ' + family;
		this.context.textBaseline = 'middle';
		this.context.textAlign = 'center';
		this.context.fillStyle = '#FFFFFF';
	}
	getTexture(value) {
		if (this.used >= this.max) return;
		this.needUpdate = true;
		let x = (this.used % this.x) * this.size + this.size / 2;
		let y = ((this.used / this.x) | 0) * this.size + this.size / 2;
		this.used++;
		this.context.fillText(value, x, y);
		let width = this.context.measureText(value).width;
		let height = this.size;
		return new Texture(this, x - width / 2, y - height / 2, width, height);
	}
}
