/**
 * @class 扩展数组类
 */
export default class Vector {
	get length() {
		return this.elements ? this.elements.length : 0;
	}
	constructor() {
		this.elements = [];
		if (arguments.length) for (let i = 0; i < arguments.length; i++) this.elements[i] = arguments[i];
	}
	//向量置零
	same(n) {
		for (let i = 0; i < this.length; i++) this.elements[i] = n;
		return this;
	}
	//类型变换
	typeTo(superClass) {
		this.elements = new superClass(this.elements);
		return this;
	}
	//向量归一化
	normalize() {
		let total = 0;
		for (let i = 0, len = this.length; i < len; i++) total += this.elements[i] * this.elements[i];
		total = Math.sqrt(total);
		if (!total) return this.same(0);
		if (total == 1) return this;
		for (let i = 0; i < this.length; i++) this.elements[i] /= total;
		return this;
	}
	/**
	 * 将数组所有内容设置为同一个值
	 * @param {Any} n
	 */
	set() {
		if (!arguments.length) return this;
		for (let i = 0; i < arguments.length; i++) this.elements[i] = arguments[i];
		return this;
	}
	/**
	 * 将数组参数分别设置为float数组的值
	 * @param {Array} float
	 */
	setApply(vector) {
		if (vector === this) return this;
		return this.set.apply(this, vector.elements || vector);
	}
	/**
	 * 拷贝本类
	 */
	clone() {
		return new this.constructor().setApply(this);
	}
	/**
	 * 判断数组长度和内部值全部相同
	 * @param {Array} float 用来比较的数组
	 * @param {Boolean} absolute 是否判断长度相同
	 */
	equals(float, absolute = true) {
		if (absolute && this.length != float.length) return false;
		let length = absolute ? this.length : Math.min(this.length, float.length);
		for (let i = 0; i < length; i++) if (this[i] != float[i]) return false;
		return true;
	}
	/**
	 * 判断数组各值和各实参相同
	 */
	equalsApply() {
		return this.equals(arguments);
	}
	/**
	 * 向量加法
	 */
	add() {
		if (!arguments.length) return this;
		for (let i = 0; i < arguments.length; i++) this.elements[i] += arguments[i];
		return this;
	}
	addApply(vector) {
		return this.add.apply(this, vector.elements || vector);
	}
	/**
	 * 向量减法
	 */
	sub() {
		if (!arguments.length) return this;
		for (let i = 0; i < arguments.length; i++) this.elements[i] -= arguments[i];
		return this;
	}
	subApply(vector) {
		return this.sub.apply(this, vector.elements || vector);
	}
	/**
	 * 向量乘法
	 */
	mult() {
		if (!arguments.length) return this;
		for (let i = 0; i < arguments.length; i++) this.elements[i] *= arguments[i];
		return this;
	}
	multApply(vector) {
		return this.mult.apply(this, vector.elements || vector);
	}
	/**
	 * 向量除法
	 */
	div() {
		if (!arguments.length) return this;
		for (let i = 0; i < arguments.length; i++) this.elements[i] /= arguments[i];
		return this;
	}
	divApply(vector) {
		return this.div.apply(this, vector.elements || vector);
	}
}
