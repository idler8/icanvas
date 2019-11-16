import Component from './base.js';
import { MathVector2 } from '../../maths/index.js';
export default class Scroll extends Component {
	constructor(options = {}, baseOptions) {
		super(baseOptions).setContext(options);
	}
	setContext(options) {
		this.context = options.context || Scroll.GetCanvas().getContext('2d');
		this.setSize(options.width || 1, options.height || 1);
		this.setRealSize(options.realWidth || 1, options.realHeight || 1);
		return this;
	}
	static GetCanvas = null;
	size = new MathVector2(); //绘制、切割大小
	get width() {
		return this.size.x;
	}
	set width(width) {
		this.size.x = width;
	}
	get height() {
		return this.size.y;
	}
	set height(height) {
		this.size.y = height;
	}
	setSize(x, y) {
		this.size.setTo(x, y);
		return this;
	}
	setAnchorSize(x = 0.5, y = 0.5) {
		this.anchor.x = this.width * x;
		this.anchor.y = this.height * y;
		return this;
	}

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
	setStatic(callback) {
		callback(this.context);
		return this;
	}
	scrollAt = new MathVector2(); //切割位置
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
		let X = this.scrollAt.x;
		let Max = this.scrollWidth;
		this.scrollAt.x -= mx;
		if (this.scrollAt.x > Max) this.scrollAt.x = Max;
		if (this.scrollAt.x < 0) this.scrollAt.x = 0;
		return this.scrollAt.x != X;
	}
	/**
	 * 纵向移动
	 * @param {Number} my 轴Y移动量
	 */
	touchMoveY(my) {
		let Y = this.scrollAt.y;
		let Max = this.scrollHeight;
		this.scrollAt.y -= my;
		if (this.scrollAt.y > Max) this.scrollAt.y = Max;
		if (this.scrollAt.y < 0) this.scrollAt.y = 0;
		return this.scrollAt.y != Y;
	}
	update(Context) {
		Context.drawImage(
			this.context.canvas,
			this.scrollAt.x,
			this.scrollAt.y,
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
		return touch.addToVector(this.anchor).addToVector(this.scrollAt);
	}
	hitMe(x, y) {
		x -= this.scrollAt.x;
		y -= this.scrollAt.y;
		return x >= 0 && x <= this.width && y >= 0 && y <= this.height;
	}
}
