export default (superClass, Vector2) => {
	return class Clip extends superClass {
		/**
		 * 裁剪控制
		 */
		useClip = false; //是否切割
		clipPosition = new Vector2(); //切割位置
		clipSize = new Vector2(); //切割大小

		setClip(x = 0, y = 0, width, height) {
			this.useClip = true;
			this.clipPosition.setTo(x, y);
			this.clipSize.setTo(width, height);
			if (this.size) this.size.setTo(width, height);
			return this;
		}
		constructor(options) {
			super(options);
			if (options.clip) this.setClip.apply(this, options.clip);
		}
	};
};
