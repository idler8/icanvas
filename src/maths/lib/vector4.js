import Vector from './vector.js';
let Vector4 = class extends Vector {
	constructor(x = 0, y = 0, z = 0, w = 0) {
		super(x, y, z, w);
	}
};
export default Vector4;
