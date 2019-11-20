export default superClass => {
	return class Alpha extends superClass {
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
		setOptions(options) {
			super.setOptions(options);
			if (options.alpha) this.alpha = options.alpha;
			return this;
		}
	};
};
