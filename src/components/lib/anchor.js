import Vector2 from '../../maths/lib/vector2.js';
export function option(options) {
	this.anchor = new Vector2();
	if (options.anchor) {
		if (options.anchor.x !== undefined) this.anchorX = options.anchor.x;
		if (options.anchor.y !== undefined) this.anchorY = options.anchor.y;
	}
	if (options.anchorX !== undefined) this.anchorX = options.anchorX;
	if (options.anchorY !== undefined) this.anchorY = options.anchorY;
}
export const data = {
	get anchorX() {
		return this.anchor.x;
	},
	set anchorX(x) {
		this.anchor.x = x;
	},
	get anchorY() {
		return this.anchor.y;
	},
	set anchorY(y) {
		this.anchor.y = y;
	},
	setAnchor(x, y) {
		this.anchorX = x;
		this.anchorY = y;
		return this;
	},
	setAnchorX(x) {
		this.anchorX = x;
		return this;
	},
	setAnchorY(y) {
		this.anchorY = y;
		return this;
	},
	getAnchorX() {
		return this.anchorX;
	},
	getAnchorY() {
		return this.anchorY;
	},
	offsetTouch(touch) {
		return touch.addToVector(this.anchor);
	},
};
