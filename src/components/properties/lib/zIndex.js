export default superClass => {
	return class ZIndex extends superClass {
		/**
		 * 渲染层级
		 */
		zIndex = 0; //层级
		setZIndex(a) {
			this.zIndex = a;
			return this;
		}
		constructor(options) {
			super(options);
			if (options.zIndex) this.zIndex = options.zIndex;
		}
	};
};
