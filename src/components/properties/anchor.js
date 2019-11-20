import { MathVector2 } from '../../maths/index.js';
export default superClass => {
	return class Anchor extends superClass {
		/**
		 * 锚点控制
		 */
		anchor = new MathVector2();
		get anchorX() {
			return this.anchor.x;
		}
		set anchorX(x) {
			this.anchor.x = x;
		}
		get anchorY() {
			return this.anchor.y;
		}
		set anchorY(y) {
			this.anchor.y = y;
		}
		setAnchor(x, y) {
			this.anchor.x = x;
			this.anchor.y = y;
			return this;
		}
		setAnchorSize(x = 0.5, y = 0.5) {
			if (!this.size) return this;
			this.anchor.x = this.width * x;
			this.anchor.y = this.height * y;
			return this;
		}
		setOptions(options) {
			super.setOptions(options);
			if (options.anchor) Object.assign(this.anchor, options.anchor);
			return this;
		}
		/**
		 * 触摸事件位置偏移量
		 * @param {*} touch
		 */
		offsetTouch(touch) {
			if (super.offsetTouch) super.offsetTouch(touch);
			return touch.addToVector(this.anchor);
		}
	};
};
