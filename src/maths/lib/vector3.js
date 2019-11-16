import Vector from './vector.js';
let Vector3 = class extends Vector {
	constructor(x = 0, y = 0, z = 0) {
		super(x, y, z);
	}
	normalize = function() {
		var v = this;
		var c = v[0],
			d = v[1],
			e = v[2],
			g = Math.sqrt(c * c + d * d + e * e);
		if (g) {
			if (g == 1) return this;
		} else {
			v[0] = 0;
			v[1] = 0;
			v[2] = 0;
			return this;
		}
		g = 1 / g;
		v[0] = c * g;
		v[1] = d * g;
		v[2] = e * g;
		return this;
	};
};
export default Vector3;
