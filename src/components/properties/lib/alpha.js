export default superClass => {
	return class Alpha extends superClass {
		constructor(options) {
			super(options);
			if (options && options.alpha !== undefined) this.alpha = options.alpha;
		}
		/**
		 * 透明度控制
		 * 当透明度小于0时，使用上级透明度
		 */
		_alpha = 1;
		set alpha(a) {
			this._alpha = a;
		}
		get alpha() {
			if (this._alpha < 0 && this.parent) return this.parent.alpha;
			return this._alpha;
		}
		setAlpha(n) {
			this.alpha = n;
			return this;
		}
	};
};
