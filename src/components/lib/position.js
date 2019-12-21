import Vector2 from '../../maths/lib/vector2.js';
export function option(options) {
	this.position = new Vector2();
	if (options.position) {
		if (options.position.x !== undefined) this.x = options.position.x;
		if (options.position.y !== undefined) this.y = options.position.y;
	}
	if (options.x !== undefined) this.x = options.x;
	if (options.y !== undefined) this.y = options.y;
}
export const data = {
	get x() {
		return this.position.x;
	},
	set x(x) {
		this.position.x = x;
	},
	get y() {
		return this.position.y;
	},
	set y(y) {
		this.position.y = y;
	},
	setPosition(x, y) {
		this.x = x;
		this.y = y;
		return this;
	},
	setX(x) {
		this.x = x;
		return this;
	},
	setY(y) {
		this.y = y;
		return this;
	},
	getX(n = 1) {
		return this.x * n;
	},
	getY(n = 1) {
		return this.y * n;
	},
};
