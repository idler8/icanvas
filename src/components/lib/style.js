const defaultStyle = {
	strokeUp: false, //首先填充
	fillStyle: '', //填充色
	lineWidth: 0, //线宽
	strokeStyle: '#FFFFFF', //线框色
};
export function option(options) {
	if (!this.style) this.style = Object.assign({}, defaultStyle);
	if (options.style) this.setFont(options.style);
}
export const data = {
	/**
	 * 绘制样式控制
	 */
	set strokeUp(v) {
		this.style.strokeUp = v;
	},
	get strokeUp() {
		return this.style.strokeUp;
	},
	set fillStyle(v) {
		this.style.fillStyle = v;
	},
	get fillStyle() {
		return this.style.fillStyle;
	},
	set lineWidth(v) {
		this.style.lineWidth = v;
	},
	get lineWidth() {
		return this.style.lineWidth;
	},
	set strokeStyle(v) {
		this.style.strokeStyle = v;
	},
	get strokeStyle() {
		return this.style.strokeStyle;
	},
	setStyle(style = {}) {
		Object.assign(this.style, style);
		return this;
	},
};
