import { MathVector } from '../../maths/index.js';
export default superClass => {
	return class Padding extends superClass {
		/**
		 * 边距控制
		 */
		padding = new MathVector(0, 0, 0, 0);
		get paddingTop() {
			return this.padding[0];
		}
		get paddingRight() {
			return this.padding[1];
		}
		get paddingBottom() {
			return this.padding[2];
		}
		get paddingLeft() {
			return this.padding[3];
		}
		setPadding(top, right, botton, left) {
			this.padding.setTo(top, right, botton, left);
			return this;
		}
		setOptions(options) {
			super.setOptions(options);
			if (options.padding) Object.assign(this.padding, options.padding);
			return this;
		}
	};
};
