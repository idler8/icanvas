import BaseArray from './array.js';
let Vector = class extends BaseArray {
	//向量加
	add(n) {
		for (let i = 0; i < this.length; i++) this[i] += n;
		return this;
	}
	addTo() {
		return this.addToVector(arguments);
	}
	addToVector(vector) {
		for (let i = 0; i < vector.length; i++) this[i] += vector[i];
		return this;
	}
	//向量减
	sub(n) {
		for (let i = 0; i < this.length; i++) this[i] -= n;
		return this;
	}
	subTo() {
		return this.subToVector(arguments);
	}
	subToVector(vector) {
		for (let i = 0; i < vector.length; i++) this[i] -= vector[i];
		return this;
	}
	//向量乘
	mult(n) {
		for (let i = 0; i < this.length; i++) this[i] *= n;
		return this;
	}
	multTo() {
		return this.multToVector(arguments);
	}
	multToVector(vector) {
		for (let i = 0; i < vector.length; i++) this[i] *= vector[i];
		return this;
	}
	//向量除
	div(n) {
		for (let i = 0; i < this.length; i++) this[i] /= n;
		return this;
	}
	divTo() {
		return this.divToVector(arguments);
	}
	divToVector(vector) {
		for (let i = 0; i < vector.length; i++) this[i] /= vector[i];
		return this;
	}
	//向量置零
	zero() {
		for (let i = 0; i < this.length; i++) this[i] = 0;
		return this;
	}
};

export default Vector;
