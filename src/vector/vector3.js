import Vector from './vector.js';
export default class Vector3 extends Vector {
	constructor(x = 0, y = 0, z = 0) {
		super(x, y, z);
	}
	get x() {
		return this.elements[0];
	}
	set x(x) {
		this.elements[0] = x;
	}
	get y() {
		return this.elements[1];
	}
	set y(y) {
		this.elements[1] = y;
	}
	get z() {
		return this.elements[2];
	}
	set z(z) {
		this.elements[2] = z;
	}
	//距离计算
	dist(x = 0, y = 0, z = 0) {
		var dx = this.x - x;
		var dy = this.y - y;
		var dz = this.z - z;
		return Math.sqrt(dx * dx + dy * dy + dz * dz);
	}
	distVector(vector3) {
		return this.dist(vector3.x, vector3.y, vector3.z);
	}
	//计算夹角
	angle(vector3) {
		let mag = this.dist() * vector3.dist();
		let dot = this.x * vector3.x + this.y * vector3.y + this.z * vector3.z;
		return Math.acos(dot / mag);
	}

	multiplyMatrix4(matrix4) {
		var p = this.elements;
		var e = matrix4.elements;
		var w = 1 / (e[3] * p[0] + e[7] * p[1] + e[11] * p[2] + e[15]);
		return this.set(
			(e[0] * p[0] + e[4] * p[1] + e[8] * p[2] + e[12]) * w,
			(e[1] * p[0] + e[5] * p[1] + e[9] * p[2] + e[13]) * w,
			(e[2] * p[0] + e[6] * p[1] + e[10] * p[2] + e[14]) * w,
		);
	}
}
