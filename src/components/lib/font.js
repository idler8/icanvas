export const defaultFont = {
	family: '微软雅黑,黑体', //字体
	size: 26, //字号px
	weight: '', //字宽

	align: 'center', //横向对齐方式
	baseline: 'middle', //纵向对齐方式
	lineHeight: 0,
	wrapWidth: 0,
};
export function option(options) {
	if (!this.font) this.font = Object.assign({}, defaultFont);
	if (options.font) this.setFont(options.font);
}
export const data = {
	/**
	 * 绘制样式控制
	 */
	set wrapWidth(v) {
		this.font.wrapWidth = v;
	},
	get wrapWidth() {
		return this.font.wrapWidth;
	},
	set lineHeight(v) {
		this.font.lineHeight = v;
	},
	get lineHeight() {
		return this.font.lineHeight;
	},
	set fontSize(v) {
		this.font.size = v;
	},
	get fontSize() {
		return this.font.size;
	},
	set textAlign(v) {
		this.font.textAlign = v;
	},
	get textAlign() {
		return this.font.align;
	},
	set textBaseline(v) {
		this.font.textBaseline = v;
	},
	get textBaseline() {
		return this.font.baseline;
	},
	get family() {
		return `${this.font.weight} ${this.font.size}px ${this.font.family}`;
	},
	setFont(font) {
		Object.assign(this.font, font);
		return this;
	},
};
