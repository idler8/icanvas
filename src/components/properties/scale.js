import { MathVector2 } from '../../maths/index.js';
export default superClass => {
	return class Scale extends superClass {
		/**
		 * 缩放控制
		 */
		scale = new MathVector2(1, 1);
		get scaleX() {
			return this.scale.x;
		}
		set scaleX(x) {
			this.scale.x = x;
		}
		get scaleY() {
			return this.scale.y;
		}
		set scaleY(y) {
			this.scale.y = y;
		}
		setScale(x, y) {
			this.scale.x = x;
			this.scale.y = y;
			return this;
		}
		setOptions(options) {
			if(super.setOptions) super.setOptions(options);
			if (options.scale !== undefined) this.scale.set(scale);
			if (options.scaleX !== undefined) this.scale.x = options.scaleX;
			if (options.scaleY !== undefined) this.scale.y = options.scaleY;
			return this;
		}
	};
};
