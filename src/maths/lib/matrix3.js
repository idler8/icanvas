import BaseArray from './array.js';
let Matrix3 = class extends BaseArray {
	get a() {
		return this[0];
	}
	set a(x) {
		this[0] = x;
	}
	get b() {
		return this[1];
	}
	set b(y) {
		this[1] = y;
	}
	get c() {
		return this[2];
	}
	set c(x) {
		this[2] = x;
	}
	get d() {
		return this[3];
	}
	set d(y) {
		this[3] = y;
	}
	get tx() {
		return this[4];
	}
	set tx(x) {
		this[4] = x;
	}
	get ty() {
		return this[5];
	}
	set ty(y) {
		this[5] = y;
	}
	constructor(a = 1, b = 0, c = 0, d = 1, tx = 0, ty = 0) {
		super(a, b, c, d, tx, ty, 0, 0, 1);
	}
	//重置矩阵
	identity() {
		return this.setTo(1, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	//位移
	translate(x, y) {
		this[4] = this[0] * x + this[2] * y + this[4];
		this[5] = this[1] * x + this[3] * y + this[5];

		return this;
	}
	//旋转
	rotate(a) {
		let s = Math.sin(a),
			c = Math.cos(a);
		let a0 = this[0],
			a1 = this[1],
			a2 = this[2],
			a3 = this[3];
		this[0] = a0 * c + a2 * s;
		this[1] = a1 * c + a3 * s;
		this[2] = a0 * -s + a2 * c;
		this[3] = a1 * -s + a3 * c;

		return this;
	}
	//缩放
	scale(x, y) {
		this[0] *= x;
		this[1] *= x;
		this[2] *= y;
		this[3] *= y;

		return this;
	}
	//斜切
	skew(x, y) {
		var tanX = Math.tan(x),
			tanY = Math.tan(y),
			mx0 = this[0],
			mx1 = this[1];
		this[0] += tanY * this[2];
		this[1] += tanY * this[3];
		this[2] += tanX * mx0;
		this[3] += tanX * mx1;

		return this;
	}
	//倒置
	invert() {
		let aa = this[0],
			ab = this[1],
			ac = this[2],
			ad = this[3],
			atx = this[4],
			aty = this[5];
		var det = aa * ad - ab * ac;
		if (!det) return this;
		det = 1.0 / det;
		this[0] = ad * det;
		this[1] = -ab * det;
		this[2] = -ac * det;
		this[3] = aa * det;
		this[4] = (ac * aty - ad * atx) * det;
		this[5] = (ab * atx - aa * aty) * det;
		return this;
	}
	append(matrix) {
		const a1 = this.a;
		const b1 = this.b;
		const c1 = this.c;
		const d1 = this.d;

		this.a = matrix.a * a1 + matrix.b * c1;
		this.b = matrix.a * b1 + matrix.b * d1;
		this.c = matrix.c * a1 + matrix.d * c1;
		this.d = matrix.c * b1 + matrix.d * d1;

		this.tx = matrix.tx * a1 + matrix.ty * c1 + this.tx;
		this.ty = matrix.tx * b1 + matrix.ty * d1 + this.ty;

		return this;
	}
	prepend(matrix) {
		const tx1 = this.tx;

		if (matrix.a !== 1 || matrix.b !== 0 || matrix.c !== 0 || matrix.d !== 1) {
			const a1 = this.a;
			const c1 = this.c;

			this.a = a1 * matrix.a + this.b * matrix.c;
			this.b = a1 * matrix.b + this.b * matrix.d;
			this.c = c1 * matrix.a + this.d * matrix.c;
			this.d = c1 * matrix.b + this.d * matrix.d;
		}

		this.tx = tx1 * matrix.a + this.ty * matrix.c + matrix.tx;
		this.ty = tx1 * matrix.b + this.ty * matrix.d + matrix.ty;

		return this;
	}
	// determinant(a) {
	//  return a[0] * a[3] - a[1] * a[2];
	// }

	// multiply(out, a, b) {
	// 	let a0 = a[0],
	// 		a1 = a[1],
	// 		a2 = a[2],
	// 		a3 = a[3],
	// 		a4 = a[4],
	// 		a5 = a[5];
	// 	let b0 = b[0],
	// 		b1 = b[1],
	// 		b2 = b[2],
	// 		b3 = b[3],
	// 		b4 = b[4],
	// 		b5 = b[5];
	// 	out[0] = a0 * b0 + a2 * b1;
	// 	out[1] = a1 * b0 + a3 * b1;
	// 	out[2] = a0 * b2 + a2 * b3;
	// 	out[3] = a1 * b2 + a3 * b3;
	// 	out[4] = a0 * b4 + a2 * b5 + a4;
	// 	out[5] = a1 * b4 + a3 * b5 + a5;
	// 	return out;
	// }
};
export default Matrix3;
