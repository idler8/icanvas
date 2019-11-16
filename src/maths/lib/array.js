/**
 * @class 扩展数组类
 */
export default class BaseArray extends Array {
	constructor() {
		super(arguments.length);
		this.setTo.apply(this, arguments);
	}
	/**
	 * 将数组所有内容设置为同一个值
	 * @param {Any} n
	 */
	set(n) {
		for (let i = 0; i < this.length; i++) this[i] = n;
		return this;
	}
	/**
	 * 将数组内容分别设置为各参数值
	 */
	setTo() {
		return this.setToArray(arguments);
	}
	/**
	 * 将数组参数分别设置为float数组的值
	 * @param {Array} float
	 */
	setToArray(float) {
		if (float === this) return this;
		for (let i = 0; i < float.length; i++) this[i] = float[i];
		return this;
	}
	/**
	 * 拷贝本类
	 */
	clone() {
		return new this.constructor().setToArray(this);
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
	equalsSome() {
		return this.equals(arguments);
	}
	/**
	 * 获取各种TypeArray
	 */
	get Int8Array() {
		return new Int8Array(this);
	}
	get Uint8Array() {
		return new Uint8Array(this);
	}
	get Uint8ClampedArray() {
		return new Uint8ClampedArray(this);
	}
	get Int16Array() {
		return new Int16Array(this);
	}
	get Uint16Array() {
		return new Uint16Array(this);
	}
	get Int32Array() {
		return new Int32Array(this);
	}
	get Uint32Array() {
		return new Uint32Array(this);
	}
	get Float32Array() {
		return new Float32Array(this);
	}
	get Float64Array() {
		return new Float64Array(this);
	}
	get BigInt64Array() {
		return new BigInt64Array(this);
	}
	get BigUint64Array() {
		return new BigUint64Array(this);
	}
}
