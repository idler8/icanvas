import Vector2 from '../../maths/lib/vector2.js';
export function option(options) {
	this.scale = new Vector2(1, 1);
	if (options.scale) {
		if (options.scale.x != undefined) this.scaleY = options.scale.x;
		if (options.scale.y != undefined) this.scaleY = options.scale.y;
	}
	if (options.scaleX !== undefined) this.scaleX = options.scaleX;
	if (options.scaleY !== undefined) this.scaleY = options.scaleY;
}
export const data = {
	get scaleX() {
		return this.scale.x;
	},
	set scaleX(x) {
		this.scale.x = x;
	},
	get scaleY() {
		return this.scale.y;
	},
	set scaleY(y) {
		this.scale.y = y;
	},
	setScale(x, y) {
		this.scaleX = x;
		this.scaleY = y;
		return this;
	},
	setScaleX(x) {
		this.scaleX = x;
		return this;
	},
	setScaleY(y) {
		this.scaleY = y;
		return this;
	},
	getScaleX() {
		return this.scaleX;
	},
	getScaleY() {
		return this.scaleY;
	},
};
