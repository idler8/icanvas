import { MathVector2 } from '../../maths/index.js';
export default (superClass = Object) => {
	return class Position extends superClass {
		/**
		 * 定位控制
		 */
		position = new MathVector2();
		get x() {
			return this.position.x;
		}
		get y() {
			return this.position.y;
		}
		set x(x) {
			this.position.x = x;
		}
		set y(y) {
			this.position.y = y;
		}
		setPosition(x, y) {
			this.position.setTo(x, y);
			return this;
		}
		setOptions(options) {
			super.setOptions(options);
			if (options.position) Object.assign(this.position, options.position);
			return this;
		}
	};
};
