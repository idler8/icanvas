import Vector from '../../maths/lib/vector.js';
class Padding extends Vector {
	constructor(top = 0, right = 0, bottom = 0, left = 0) {
		super(top, right, bottom, left);
	}
	get top() {
		return this[0];
	}
	set top(x) {
		this[0] = x;
	}
	get right() {
		return this[1];
	}
	set right(y) {
		this[1] = y;
	}
	get bottom() {
		return this[2];
	}
	set bottom(y) {
		this[2] = y;
	}
	get left() {
		return this[3];
	}
	set left(y) {
		this[3] = y;
	}
	get width() {
		return this[1] + this[3];
	}
	get height() {
		return this[0] + this[2];
	}
}
export function option(options) {
	this.padding = new Padding();
	if (options.padding) typeof options.padding == 'string' ? this.setPadding(options.padding) : this.padding.setToArray(ptions.padding);
	if (options.paddingLeft) this.paddingLeft = options.paddingLeft;
	if (options.paddingRight) this.paddingRight = options.paddingRight;
	if (options.paddingTop) this.paddingTop = options.paddingTop;
	if (options.paddingBottom) this.paddingBottom = options.paddingBottom;
}
export const data = {
	set paddingLeft(p) {
		this.padding.left = p;
	},
	get paddingLeft() {
		return this.padding.left;
	},
	set paddingRight(p) {
		this.padding.right = p;
	},
	get paddingRight() {
		return this.padding.right;
	},
	set paddingTop(p) {
		this.padding.top = p;
	},
	get paddingTop() {
		return this.padding.top;
	},
	set paddingBottom(p) {
		this.padding.bottom = p;
	},
	get paddingBottom() {
		return this.padding.bottom;
	},
	getPaddingRight() {
		return this.paddingRight;
	},
	setPaddingRight(p) {
		this.paddingRight = p;
		return this;
	},
	getPaddingTop() {
		return this.paddingTop;
	},
	setPaddingTop(p) {
		this.paddingTop = p;
		return this;
	},
	getPaddingLeft() {
		return this.paddingLeft;
	},
	setPaddingLeft(p) {
		this.paddingLeft = p;
		return this;
	},
	getPaddingBottom() {
		return this.paddingBottom;
	},
	setPaddingBottom(p) {
		this.paddingBottom = p;
		return this;
	},
	setPadding(string) {
		try {
			let p = string
				.toString()
				.split(/[^0-9]+/)
				.filter(s => s !== '');
			if (p.length == 0) {
			} else if (p.length == 1) {
				this.padding.setTo(p[0], p[0], p[0], p[0]);
			} else if (p.length == 2) {
				this.padding.setTo(p[0], p[1], p[0], p[1]);
			} else if (p.length == 3) {
				this.padding.setTo(p[0], p[1], p[2], p[1]);
			} else {
				this.padding.setTo(p[0], p[1], p[2], p[3]);
			}
		} catch (e) {}
		return this;
	},
};
