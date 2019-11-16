import { MathVector2, MathMatrix3 } from '../../maths/index.js';
let CID = 0; //全局递增组件id
export default class Component {
	constructor(options) {
		return this.setOptions(options);
	}
	setOptions(options) {
		if (!options) return this;
		if (options.position) Object.assign(this.position, options.position);
		if (options.anchor) Object.assign(this.anchor, options.anchor);
		if (options.scale) Object.assign(this.scale, options.scale);
		if (options.zIndex) this.zIndex = options.zIndex;
		if (options.radian) this.radian = options.radian;
		if (options.angle) this.angle = options.angle;
		return this;
	}
	id = ++CID;
	zIndex = 0;
	children = []; //子元素列表
	parent = null; //父元素

	position = new MathVector2(); //定位位置
	anchor = new MathVector2(); //锚点
	scale = new MathVector2(1, 1); //缩放

	matrix = new MathMatrix3(); //变换矩阵
	radian = 0; //弧度

	lockChild = false; //是否在销毁时同时销毁子元素
	touchChildren = true; //是否允许点击子元素
	touchStop = false; //点击是否不冒泡到父元素
	/**
	 * 触摸事件位置偏移量
	 * @param {*} touch
	 */
	offsetTouch(touch) {
		return touch.addToVector(this.anchor);
	}
	/**
	 * 将本组件加入某个组件下面
	 * @param {Component} Component 父级
	 * @param {Number} index 位置
	 * Component为空时，相当于从父组件卸载本组件
	 */
	setParent(Component, index = -1) {
		if (!Component) return this.parent ? this.parent.removeChild(this) : this;
		if (this.parent == Component) return this;
		if (!this.parent) Component.addChildAt(this, index);
		return this;
	}
	/**
	 * 在固定位置增加子组件
	 * @param {Component} Component 组件
	 * @param {Number} index 位置
	 */
	addChildAt(Component, index = 0) {
		if (!Component) return this;
		if (Component.create) Component.create();
		Component.parent = this;
		if (index == -1) {
			this.children.push(Component);
		} else if (index == 0) {
			this.children.unshift(Component);
		} else {
			this.children.splice(index, 0, Component);
		}
		if (Component.created) Component.created();
		return this;
	}
	/**
	 * 增加子组件
	 * @param {Component} Component 组件
	 */
	addChild(Component) {
		if (!Component) return this;
		if (arguments.length > 1) {
			for (let i = 0; i < arguments.length; i++) this.addChild(arguments[i]);
			return this;
		}
		if (Component instanceof Array) {
			for (let i = 0; i < Component.length; i++) this.addChild(Component[i]);
			return this;
		}
		return this.addChildAt(Component, -1);
	}
	/**
	 * 移除子组件
	 * @param {Component} Component 组件
	 */
	removeChild(Component) {
		if (!Component) return this;
		if (arguments.length > 1) {
			for (let i = 0; i < arguments.length; i++) this.removeChild(arguments[i]);
			return this;
		}
		if (Component instanceof Array) {
			for (let i = 0; i < Component.length; i++) this.removeChild(Component[i]);
			return this;
		}
		if (Component.parent != this) return this;
		if (!Component.lockChild) Component.removeChildren();
		if (Component.destroy) Component.destroy();
		let index = this.children.indexOf(Component);
		if (index >= 0) this.children.splice(index, 1);
		// if (this.children.length == 1) this.children = this.children[0];
		Component.parent = null;
		if (Component.destroyed) Component.destroyed();
		return this;
	}
	/**
	 * 逐个移除所有子组件
	 */
	removeChildren() {
		for (let i = this.children.length - 1; i >= 0; i--) {
			this.removeChild(this.children[i]);
		}
		return this;
	}
	_visible = true; //是否显示
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
	/**
	 * 组件透明度
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
	set angle(a) {
		this.radian = (a * Math.PI) / 180;
	}
	get angle() {
		return (this.radian * 180) / Math.PI;
	}
	get x() {
		return this.position.x;
	}
	set x(x) {
		this.position.x = x;
	}
	get y() {
		return this.position.y;
	}
	set y(y) {
		this.position.y = y;
	}
	get scaleX() {
		return this.scale.x;
	}
	set scaleX(x) {
		this.scale.x = x;
	}
	get scaleY() {
		return this.scale.y;
	}
	set scaleY(y) {
		this.scale.y = y;
	}
	get anchorX() {
		return this.anchor.x;
	}
	set anchorX(x) {
		this.anchor.x = x;
	}
	get anchorY() {
		return this.anchor.y;
	}
	set anchorY(y) {
		this.anchor.y = y;
	}
	setPosition(x, y) {
		this.position.x = x;
		this.position.y = y;
		return this;
	}
	setScale(x, y) {
		this.scale.x = x;
		this.scale.y = y;
		return this;
	}
	setAnchor(x, y) {
		this.anchor.x = x;
		this.anchor.y = y;
		return this;
	}
	setAngle(a) {
		this.angle = a;
		return this;
	}
	setRadian(r) {
		this.radian = r;
		return this;
	}
	/**
	 * 点是否在矩形范围内
	 * @param {Number} x 点x坐标
	 * @param {Number} y 点y坐标
	 * @param {Number} bx 矩形x坐标
	 * @param {Number} by 矩形y坐标
	 * @param {Number} bw 矩形宽度
	 * @param {Number} bh 矩形高度
	 */
	hitPoint(x, y, bx, by, bw, bh) {
		return x >= bx && x <= bx + bw && y >= by && y <= by + bh;
	}
}
