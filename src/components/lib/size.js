import Vector2 from '../../maths/lib/vector2.js';
export function option(options) {
	this.size = new Vector2();
	if (options.width !== undefined) this.width = options.width;
	if (options.height !== undefined) this.height = options.height;
}
export const data = {
	get width() {
		return this.size.x;
	},
	set width(x) {
		this.size.x = x;
	},
	get height() {
		return this.size.y;
	},
	set height(y) {
		this.size.y = y;
	},
	setSize(x, y) {
		this.width = x;
		this.height = y;
		return this;
	},
	setWidth(x) {
		this.width = x;
		return this;
	},
	setHeight(y) {
		this.height = y;
		return this;
	},
	getWidth(n = 1) {
		return this.width * n;
	},
	getHeight(n = 1) {
		return this.height * n;
	},
};
