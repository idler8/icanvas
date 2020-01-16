import Vector from './vector.js';
export default class Vector2 extends Vector {
	constructor(x = 0, y = 0) {
		super(x, y);
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
	//旋转向量
	rotate(rads) {
		var s = Math.sin(rads);
		var c = Math.cos(rads);
		var xrot = c * this.x - s * this.y;
		this.y = s * this.x + c * this.y;
		this.x = xrot;
		return this;
	}
	//距离计算
	dist(x = 0, y = 0) {
		var dx = this.x - x;
		var dy = this.y - y;
		return Math.sqrt(dx * dx + dy * dy);
	}
	distVector(vector2) {
		return this.dist(vector2.x, vector2.y);
	}
	//计算夹角
	angle(vector2) {
		let mag = this.dist() * vector2.dist();
		let dot = this.x * vector2.x + this.y * vector2.y;
		return Math.acos(dot / mag);
	}
	//判断不规则碰撞
	inPolygon(vs) {
		if (arguments.length > 1) vs = arguments;
		if (vs.length < 3) return false;
		var inside = false;
		for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
			let xi = vs[i].x,
				yi = vs[i].y,
				xj = vs[j].x,
				yj = vs[j].y,
				intersect = yi > this.y != yj > this.y && this.x < ((xj - xi) * (this.y - yi)) / (yj - yi) + xi;
			if (intersect) inside = !inside;
		}
		return inside;
	}
	multiplyMatrix4(matrix4) {
		var e = matrix4.elements;
		var p = this.elements;
		var w = 1 / (e[3] * p[0] + e[7] * p[1] + e[15]);
		return this.set((e[0] * p[0] + e[4] * p[1] + e[12]) * w, (e[1] * p[0] + e[5] * p[1] + e[13]) * w);
	}
}
