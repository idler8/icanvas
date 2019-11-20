export default superClass => {
	return class Visible extends superClass {
		/**
		 * 显示状态控制
		 */
		_visible = true;
		get visible() {
			if (!this.parent) return this._visible;
			return this._visible && this.parent.visible;
		}
		set visible(v) {
			if (this._visible == v) return;
			this._visible = v;
			v ? this.show && this.show() : this.hide && this.hide();
		}
		setVisible(n) {
			this.visible = n;
			return this;
		}
		setOptions(options) {
			super.setOptions(options);
			if (options.visible) this.visible = options.visible;
			return this;
		}
	};
};
