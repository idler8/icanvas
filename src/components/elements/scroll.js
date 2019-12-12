export default superClass => {
	return class Scroll extends superClass {
		constructor(options) {
			super();
			if (options) this.setOptions(options);
		}
		/**
		 * 真实场地大小
		 */
		context = null;
		setRealSize(x, y) {
			this.context.SetSize(x, y);
			return this;
		}
		get realWidth() {
			return this.context.canvas.width;
		}
		get realHeight() {
			return this.context.canvas.height;
		}
		//滚动位置
		get scrollHeight() {
			return this.realHeight - this.height;
		}
		get scrollWidth() {
			return this.realWidth - this.width;
		}
		/**
		 * 横向移动
		 * @param {Number} mx 轴X移动量
		 */
		touchMoveX(mx) {
			let X = this.clipPosition.x;
			let Max = this.scrollWidth;
			this.clipPosition.x -= mx;
			if (this.clipPosition.x > Max) this.clipPosition.x = Max;
			if (this.clipPosition.x < 0) this.clipPosition.x = 0;
			return this.clipPosition.x != X;
		}
		/**
		 * 纵向移动
		 * @param {Number} my 轴Y移动量
		 */
		touchMoveY(my) {
			let Y = this.clipPosition.y;
			let Max = this.scrollHeight;
			this.clipPosition.y -= my;
			if (this.clipPosition.y > Max) this.clipPosition.y = Max;
			if (this.clipPosition.y < 0) this.clipPosition.y = 0;
			return this.clipPosition.y != Y;
		}
		/**
		 * @param {*} options
		 */
		setOptions(options) {
			if (super.setOptions) super.setOptions(options);
			this.context = options.context;
			this.setClip(0, 0, options.width || 1, options.height || 1);
			this.setRealSize(options.realWidth || options.width || 1, options.realHeight || options.width || 1);
			return this;
		}
		/**
		 * 绘制函数
		 * @param {*} Context
		 */
		update(Context) {
			Context.drawImage(
				this.context.canvas,
				this.clipPosition.x,
				this.clipPosition.y,
				this.size.x,
				this.size.y,
				-this.anchor.x,
				-this.anchor.y,
				this.size.x,
				this.size.y,
			);
		}
		/**
		 * 触摸事件位置偏移量
		 * @param {*} touch
		 */
		offsetTouch(touch) {
			if (super.offsetTouch) super.offsetTouch(touch);
			return touch.addToVector(this.clipPosition);
		}
		/**
		 * 检查触摸到自身
		 * @param {x} x
		 * @param {*} y
		 */
		hitMe(x, y) {
			x -= this.clipPosition.x;
			y -= this.clipPosition.y;
			return super.hitMe(x, y);
		}
	};
};
