export default superClass => {
	return class Style extends superClass {
		static defaultStyle = {
			color: '#FFFFFF', //填充色
			stroke: 0, //线宽
			strokeColor: '#FFFFFF', //线框色

			family: '微软雅黑,黑体', //字体
			size: 26, //字号px
			weight: '', //字宽
			align: 'center', //横向对齐方式
			baseline: 'middle', //纵向对齐方式
			cacheFont: '', //组合字体
		};
		/**
		 * 绘制样式控制
		 */
		style = Object.assign({}, Style.defaultStyle);
		setStyle(options) {
			if (!options.cacheFont) this.style.cacheFont = '';
			Object.assign(this.style, options);
			return this;
		}
		constructor(options) {
			super(options);
			if (options) {
				if (options.style) this.setStyle(options.style);
			}
		}
		set font(font) {
			this.style.cacheFont = font;
		}
		get font() {
			return this.style.cacheFont || (this._cacheFont = `${this.style.weight} ${this.style.size}px ${this.style.family}`);
		}
	};
};
