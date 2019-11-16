import Vector from './vector.js';
let Vector2 = class extends Vector {
	constructor(x = 0, y = 0) {
		super(x, y);
	}
	get x() {
		return this[0];
	}
	set x(x) {
		this[0] = x;
	}
	get y() {
		return this[1];
	}
	set y(y) {
		this[1] = y;
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
	dist(vector2) {
		return this.distTo(vector2.x, vector2.y);
	}
	distTo(x, y) {
		var dx = this.x - x;
		var dy = this.y - y;
		return Math.sqrt(dx * dx + dy * dy);
	}
	//计算向量到0的长度
	mag() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}
	//比较并设置为最小向量
	min(vector2) {
		if (vector2.x < this.x) this.x = vector2.x;
		if (vector2.y < this.y) this.y = vector2.y;
		return this;
	}
	//比较并设置为最大向量
	max(vector2) {
		if (vector2.x > this.x) this.x = vector2.x;
		if (vector2.y > this.y) this.y = vector2.y;
		return this;
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
				intersect = yi > this[1] != yj > this[1] && this[0] < ((xj - xi) * (this[1] - yi)) / (yj - yi) + xi;
			if (intersect) inside = !inside;
		}
		return inside;
	}
	dot(vector2) {
		return this.x * vector2.x + this.y * vector2.y;
	}
	// dotCoords(x, y) {
	// 	return this.x * x + this.y + y;
	// }
	// normalize() {
	// 	var m = this.mag();
	// 	if (m != 0 && m != 1) {
	// 		this.div(m);
	// 	}
	// 	return this;
	// }
	// limit(max) {
	// 	if (this.mag() > max) {
	// 		this.normalize();
	// 		this.mult(max);
	// 	}
	// 	return this;
	// }
	// heading2d() {
	// 	var angle = Math.atan2(-y, x);
	// 	return -1 * angle;
	// }

	angle(vector) {
		return Math.acos(this.dot(vector) / (this.mag() * vector.mag()));
	}
	// normal() {
	// 	var temp = this.vector.x;
	// 	this.x = -this.vector.y;
	// 	this.y = temp;
	// 	return this;
	// }
	// random(mag) {
	// 	this.x = Math.random();
	// 	this.y = Math.random();
	// 	if (mag) this.scale(mag);
	// 	return this;
	// }
};
export default Vector2;
