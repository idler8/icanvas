import Container from './container.js';
import Matrix4 from '../vector/matrix4.js';
import { Shape } from '../prototype.js';

export default class Sprite extends Container {
	constructor(options = {}) {
		super(options);

		this.invertId = 0;
		this.invertMatrix = new Matrix4();

		this.shape = options.shape || new Shape(options);
		this.texture = options.texture;
	}
	get texture() {
		return this._texture;
	}
	set texture(a) {
		if (!a) return (this._texture = null);
		this._texture = a.baseTexture || a;
		this.shape.updateTexture(a);
	}
	set width(a) {
		this.shape.width = a;
	}
	get width() {
		return this.shape.width;
	}
	set height(a) {
		this.shape.height = a;
	}
	get height() {
		return this.shape.height;
	}
	setSize(x, y) {
		this.shape.width = x;
		this.shape.height = y;
		return this;
	}
	set anchorX(a) {
		this.shape.anchorX = a;
	}
	get anchorX() {
		return this.shape.anchorX;
	}
	set anchorY(a) {
		this.shape.anchorY = a;
	}
	get anchorY() {
		return this.shape.anchorY;
	}
	setAnchor(x, y) {
		this.shape.anchorX = x;
		this.shape.anchorY = y;
		return this;
	}

	setAnchorSize(x = 0, y = 0) {
		this.shape.anchorX = this.shape.width * x;
		this.shape.anchorY = this.shape.height * y;
		return this;
	}

	draw(app, now) {
		if (!this.texture) return;
		app.render.blend(this.blend);
		this.emit('updateTransform', now);
		app.render.transform(this.transform.matrix);

		this.texture.update(app.render);
		app.render.texture(this.texture.texture);

		this.shape.update(app.render);
		app.render.draw(this.shape.buffer);
	}
	checkPoint(vector) {
		this.emit('updateTransform', 0);
		if (this.invertId != this.transform.worldId) {
			this.invertMatrix.invert(this.transform.matrix);
			this.invertId = this.transform.worldId;
		}
		vector.multiplyMatrix4(this.invertMatrix);
		return vector.x >= -this.width / 2 && vector.y >= -this.height / 2 && vector.x <= this.width / 2 && vector.y <= this.height / 2;
	}
}
