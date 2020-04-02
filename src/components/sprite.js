import Container from './container.js';
import Vector2 from '../vector/vector2.js';
import Matrix4 from '../vector/matrix4.js';

export default class Sprite extends Container {
	constructor(options = {}) {
		super(options);

		this.morph = options.morph || 'Rectangle';
		this.anchor = new Vector2(options.anchorX || 0, options.anchorY || 0);
		this.size = new Vector2(options.width || 0, options.height || 0);
		this.staticWidth = options.width ? true : false;
		this.staticHeight = options.height ? true : false;
		this.clip = null;
		this.texture = options.texture;
		this.invertMatrixId = 0;
		this.invertMatrix = new Matrix4();
	}
	updateTransformInvert() {
		if (this.invertMatrixId == this.transformId) return;
		// this.updateTransform(false);
		this.invertMatrix.invert(this.matrix);
		this.invertMatrixId = this.transformId;
	}
	get texture() {
		return this._texture;
	}
	set texture(texture) {
		if (!(this._texture = texture)) return;
		if (!this.staticWidth) this.size.x = texture.width;
		if (!this.staticHeight) this.size.y = texture.height;
	}
	setClip(sprite) {
		this.clip = [sprite.x, sprite.y, sprite.width, sprite.height];
		this.needUpdateClip = true;
		if (!this.staticWidth) this.size.x = sprite.width;
		if (!this.staticHeight) this.size.y = sprite.height;
		return this;
	}
	set width(a) {
		this.size.x = a;
		this.staticWidth = true;
	}
	get width() {
		return this.size.x;
	}
	set height(a) {
		this.size.y = a;
		this.staticHeight = true;
	}
	get height() {
		return this.size.y;
	}
	setSize(x, y) {
		this.width = x;
		this.height = y;
		return this;
	}
	set anchorX(x) {
		this.anchor.x = x;
	}
	get anchorX() {
		return this.anchor.x;
	}
	set anchorY(y) {
		this.anchor.y = y;
	}
	get anchorY() {
		return this.anchor.y;
	}
	setAnchor(x, y) {
		this.anchorX = x;
		this.anchorY = y;
		return this;
	}
	setAnchorSize(x = 0, y = 0) {
		this.anchorX = this.width * x;
		this.anchorY = this.height * y;
		return this;
	}
	checkPoint(vector) {
		this.updateTransformInvert();
		vector.multiplyMatrix4(this.invertMatrix).add(this.anchorX, this.anchorY);
		let center = this.width / 2;
		let middle = this.height / 2;
		if (this.morph == 'Circle') {
			return Math.pow(vector.x / this.width, 2) + Math.pow(vector.y / this.height, 2) <= 1;
		} else {
			return vector.x >= -center && vector.y >= -middle && vector.x <= center && vector.y <= middle;
		}
	}
	get left() {
		return -this.size.x / 2 - this.anchor.x;
	}
	get right() {
		return this.size.x / 2 - this.anchor.x;
	}
	get top() {
		return -this.size.y / 2 - this.anchor.y;
	}
	get bottom() {
		return this.size.y / 2 - this.anchor.y;
	}
}
