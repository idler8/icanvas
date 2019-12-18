import { MathVector2 } from '../../../maths/index.js';
export default superClass => {
	return class Size extends superClass {
		/**
		 * 大小控制
		 */
		size = new MathVector2();
		get width() {
			return this.size.x;
		}
		get height() {
			return this.size.y;
		}
		set width(x) {
			this.size.x = x;
		}
		set height(y) {
			this.size.y = y;
		}
		setSize(x, y) {
			this.size.setTo(x, y);
			return this;
		}
		setSizeLimit(maxX, maxY, minX, minY) {
			if (!this.size.y) return this;
			let lv = this.size.x / this.size.y;
			if (maxX && this.size.x > maxX) {
				this.size.x = maxX;
				this.size.y = maxX / lv;
			}
			if (maxY && this.size.y > maxY) {
				this.size.y = maxY;
				this.size.x = maxY * lv;
			}
			if (minX && this.size.x < minX) {
				this.size.x = minX;
				this.size.y = maxX / lv;
			}
			if (minY && this.size.y < minY) {
				this.size.y = maxY;
				this.size.x = maxY * lv;
			}
			return this;
		}
		constructor(options) {
			super(options);
			if (options.size) Object.assign(this.size, options.size);
			if (options.width !== undefined) this.size.x = options.width;
			if (options.height !== undefined) this.size.y = options.height;
		}
		hitMe(x, y) {
			if (this.padding) {
				return x >= -this.paddingLeft && x <= this.width + this.paddingRight && y >= -this.paddingTop && y <= this.height + this.paddingBottom;
			} else {
				return x >= 0 && x <= this.width && y >= 0 && y <= this.height;
			}
		}
	};
};
