import { MathVector2 } from '../../maths/index.js';
export default superClass => {
	return class Clip extends superClass {
		/**
		 * 裁剪控制
		 */
		useClip = false; //是否切割
		clipPosition = new MathVector2(); //切割位置
		clipSize = new MathVector2(); //切割大小

		setClip(x = 0, y = 0, width, height) {
			this.useClip = true;
			this.clipPosition.setTo(x, y);
			this.clipSize.setTo(width, height);
			if (this.size) this.size.setTo(width, height);
			return this;
		}

		setOptions(options) {
			super.setOptions(options);
			if (options.clip) this.setClip.apply(this, options.clip);
			return this;
		}
	};
};
