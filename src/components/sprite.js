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
		this.on('check', function(array) {
			if (!this.visible) return;
			if (this.texture) array.push(this);
		});
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
		this._texture = texture;
		if (!texture) return (this.needUpdate = false);
		if (!this.staticWidth) this.size.x = texture.width;
		if (!this.staticHeight) this.size.y = texture.height;
		this.needUpdate = true;
	}
	set morph(a) {
		this._morph = a;
		this.needUpdate = true;
	}
	get morph() {
		return this._morph;
	}
	setClip(sprite) {
		this.clip = [sprite.x, sprite.y, sprite.width, sprite.height];
		if (!this.staticWidth) this.size.x = sprite.width;
		if (!this.staticHeight) this.size.y = sprite.height;
		this.needUpdate = true;
		return this;
	}
	set width(a) {
		this.size.x = a;
		this.staticWidth = true;
		this.needUpdate = true;
	}
	get width() {
		return this.size.x;
	}
	set height(a) {
		this.size.y = a;
		this.staticHeight = true;
		this.needUpdate = true;
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
		this.needUpdate = true;
	}
	get anchorX() {
		return this.anchor.x;
	}
	set anchorY(y) {
		this.anchor.y = y;
		this.needUpdate = true;
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
		vector.multiplyMatrix4(this.invertMatrix);
		return vector.x >= -this.width / 2 && vector.y >= -this.height / 2 && vector.x <= this.width / 2 && vector.y <= this.height / 2;
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
