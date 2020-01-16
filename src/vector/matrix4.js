import Vector from './vector.js';
import Vector2 from './vector2.js';
export default class Matrix4 extends Vector {
	constructor(vector) {
		super(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
		if (vector) this.setApply(vector);
	}
	//重置为单位矩阵
	identity() {
		return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	//乘以Matrix4
	multiply(matrix4) {
		var i, e, a, b, ai0, ai1, ai2, ai3;

		// Calculate e = a * b
		e = this.elements;
		a = this.elements;
		b = matrix4.elements;

		// If e equals b, copy b to temporary matrix.
		if (e === b) {
			b = new Float32Array(16);
			for (i = 0; i < 16; ++i) {
				b[i] = e[i];
			}
		}

		for (i = 0; i < 4; i++) {
			ai0 = a[i];
			ai1 = a[i + 4];
			ai2 = a[i + 8];
			ai3 = a[i + 12];
			e[i] = ai0 * b[0] + ai1 * b[1] + ai2 * b[2] + ai3 * b[3];
			e[i + 4] = ai0 * b[4] + ai1 * b[5] + ai2 * b[6] + ai3 * b[7];
			e[i + 8] = ai0 * b[8] + ai1 * b[9] + ai2 * b[10] + ai3 * b[11];
			e[i + 12] = ai0 * b[12] + ai1 * b[13] + ai2 * b[14] + ai3 * b[15];
		}
		return this;
	}
	/**
	 * 乘以一个点返回一个新点
	 */
	multiplyVector3(vector3) {
		var e = this.elements;
		var p = vector3.elements;
		let x = p[0] * e[0] + p[1] * e[4] + p[2] * e[8] + e[12];
		let y = p[0] * e[1] + p[1] * e[5] + p[2] * e[9] + e[13];
		let z = p[0] * e[2] + p[1] * e[6] + p[2] * e[10] + e[14];
		vector3.x = x;
		vector3.y = y;
		vector3.z = z;
		return vector3;
	}
	// multiplyVector4(vector4) {
	// 	var e = this.elements;
	// 	var p = vector4.elements;
	// 	return new Vector4(
	// 		p[0] * e[0] + p[1] * e[4] + p[2] * e[8] + p[3] * e[12],
	// 		p[0] * e[1] + p[1] * e[5] + p[2] * e[9] + p[3] * e[13],
	// 		p[0] * e[2] + p[1] * e[6] + p[2] * e[10] + p[3] * e[14],
	// 		p[0] * e[3] + p[1] * e[7] + p[2] * e[11] + p[3] * e[15],
	// 	);
	// }

	/**
	 * 转置矩阵
	 */
	transpose() {
		let e = this.elements;
		return this.set(e[0], e[4], e[8], e[12], e[1], e[5], e[9], e[13], e[2], e[6], e[10], e[14], e[3], e[7], e[11], e[15]);
	}
	/**
	 * 设置为逆矩阵
	 */
	invert(matrix4) {
		var i, s, d, inv, det;
		s = matrix4 ? matrix4.elements || matrix4 : this.elements;
		d = this.elements;
		inv = Matrix4.invertHandle || (Matrix4.invertHandle = []);

		inv[0] = s[5] * s[10] * s[15] - s[5] * s[11] * s[14] - s[9] * s[6] * s[15] + s[9] * s[7] * s[14] + s[13] * s[6] * s[11] - s[13] * s[7] * s[10];
		inv[4] = -s[4] * s[10] * s[15] + s[4] * s[11] * s[14] + s[8] * s[6] * s[15] - s[8] * s[7] * s[14] - s[12] * s[6] * s[11] + s[12] * s[7] * s[10];
		inv[8] = s[4] * s[9] * s[15] - s[4] * s[11] * s[13] - s[8] * s[5] * s[15] + s[8] * s[7] * s[13] + s[12] * s[5] * s[11] - s[12] * s[7] * s[9];
		inv[12] = -s[4] * s[9] * s[14] + s[4] * s[10] * s[13] + s[8] * s[5] * s[14] - s[8] * s[6] * s[13] - s[12] * s[5] * s[10] + s[12] * s[6] * s[9];

		inv[1] = -s[1] * s[10] * s[15] + s[1] * s[11] * s[14] + s[9] * s[2] * s[15] - s[9] * s[3] * s[14] - s[13] * s[2] * s[11] + s[13] * s[3] * s[10];
		inv[5] = s[0] * s[10] * s[15] - s[0] * s[11] * s[14] - s[8] * s[2] * s[15] + s[8] * s[3] * s[14] + s[12] * s[2] * s[11] - s[12] * s[3] * s[10];
		inv[9] = -s[0] * s[9] * s[15] + s[0] * s[11] * s[13] + s[8] * s[1] * s[15] - s[8] * s[3] * s[13] - s[12] * s[1] * s[11] + s[12] * s[3] * s[9];
		inv[13] = s[0] * s[9] * s[14] - s[0] * s[10] * s[13] - s[8] * s[1] * s[14] + s[8] * s[2] * s[13] + s[12] * s[1] * s[10] - s[12] * s[2] * s[9];

		inv[2] = s[1] * s[6] * s[15] - s[1] * s[7] * s[14] - s[5] * s[2] * s[15] + s[5] * s[3] * s[14] + s[13] * s[2] * s[7] - s[13] * s[3] * s[6];
		inv[6] = -s[0] * s[6] * s[15] + s[0] * s[7] * s[14] + s[4] * s[2] * s[15] - s[4] * s[3] * s[14] - s[12] * s[2] * s[7] + s[12] * s[3] * s[6];
		inv[10] = s[0] * s[5] * s[15] - s[0] * s[7] * s[13] - s[4] * s[1] * s[15] + s[4] * s[3] * s[13] + s[12] * s[1] * s[7] - s[12] * s[3] * s[5];
		inv[14] = -s[0] * s[5] * s[14] + s[0] * s[6] * s[13] + s[4] * s[1] * s[14] - s[4] * s[2] * s[13] - s[12] * s[1] * s[6] + s[12] * s[2] * s[5];

		inv[3] = -s[1] * s[6] * s[11] + s[1] * s[7] * s[10] + s[5] * s[2] * s[11] - s[5] * s[3] * s[10] - s[9] * s[2] * s[7] + s[9] * s[3] * s[6];
		inv[7] = s[0] * s[6] * s[11] - s[0] * s[7] * s[10] - s[4] * s[2] * s[11] + s[4] * s[3] * s[10] + s[8] * s[2] * s[7] - s[8] * s[3] * s[6];
		inv[11] = -s[0] * s[5] * s[11] + s[0] * s[7] * s[9] + s[4] * s[1] * s[11] - s[4] * s[3] * s[9] - s[8] * s[1] * s[7] + s[8] * s[3] * s[5];
		inv[15] = s[0] * s[5] * s[10] - s[0] * s[6] * s[9] - s[4] * s[1] * s[10] + s[4] * s[2] * s[9] + s[8] * s[1] * s[6] - s[8] * s[2] * s[5];

		det = s[0] * inv[0] + s[1] * inv[4] + s[2] * inv[8] + s[3] * inv[12];
		if (det === 0) return this;
		det = 1 / det;
		for (i = 0; i < 16; i++) d[i] = inv[i] * det;
		return this;
	}
	// /**
	//  * 设置正交投影
	//  */
	setOrtho(left, right, bottom, top, near, far) {
		var e, rw, rh, rd;

		if (left === right || bottom === top || near === far) {
			throw 'null frustum';
		}

		rw = 1 / (right - left);
		rh = 1 / (top - bottom);
		rd = 1 / (far - near);

		e = this.elements;

		e[0] = 2 * rw;
		e[1] = 0;
		e[2] = 0;
		e[3] = 0;

		e[4] = 0;
		e[5] = 2 * rh;
		e[6] = 0;
		e[7] = 0;

		e[8] = 0;
		e[9] = 0;
		e[10] = -2 * rd;
		e[11] = 0;

		e[12] = -(right + left) * rw;
		e[13] = -(top + bottom) * rh;
		e[14] = -(far + near) * rd;
		e[15] = 1;

		return this;
	}
	// ortho(left, right, bottom, top, near, far) {
	//     return this.multiply(new Matrix4().setOrtho(left, right, bottom, top, near, far));
	// }
	// /**
	//  * 设置透视投影
	//  */
	// setFrustum(left, right, bottom, top, near, far) {
	//     var e, rw, rh, rd;

	//     if (left === right || top === bottom || near === far) {
	//         throw 'null frustum';
	//     }
	//     if (near <= 0) {
	//         throw 'near <= 0';
	//     }
	//     if (far <= 0) {
	//         throw 'far <= 0';
	//     }

	//     rw = 1 / (right - left);
	//     rh = 1 / (top - bottom);
	//     rd = 1 / (far - near);

	//     e = this.elements;

	//     e[0] = 2 * near * rw;
	//     e[1] = 0;
	//     e[2] = 0;
	//     e[3] = 0;

	//     e[4] = 0;
	//     e[5] = 2 * near * rh;
	//     e[6] = 0;
	//     e[7] = 0;

	//     e[8] = (right + left) * rw;
	//     e[9] = (top + bottom) * rh;
	//     e[10] = -(far + near) * rd;
	//     e[11] = -1;

	//     e[12] = 0;
	//     e[13] = 0;
	//     e[14] = -2 * near * far * rd;
	//     e[15] = 0;

	//     return this;
	// }
	// frustum (left, right, bottom, top, near, far) {
	//     return this.multiply(new Matrix4().setFrustum(left, right, bottom, top, near, far));
	// }
	// /**
	//  * 通过视锥角度和长宽比设置透视投影
	//  */
	// setPerspective = function(fovy, aspect, near, far) {
	//     var e, rd, s, ct;

	//     if (near === far || aspect === 0) {
	//         throw 'null frustum';
	//     }
	//     if (near <= 0) {
	//         throw 'near <= 0';
	//     }
	//     if (far <= 0) {
	//         throw 'far <= 0';
	//     }

	//     fovy = (Math.PI * fovy) / 180 / 2;
	//     s = Math.sin(fovy);
	//     if (s === 0) {
	//         throw 'null frustum';
	//     }

	//     rd = 1 / (far - near);
	//     ct = Math.cos(fovy) / s;

	//     e = this.elements;

	//     e[0] = ct / aspect;
	//     e[1] = 0;
	//     e[2] = 0;
	//     e[3] = 0;

	//     e[4] = 0;
	//     e[5] = ct;
	//     e[6] = 0;
	//     e[7] = 0;

	//     e[8] = 0;
	//     e[9] = 0;
	//     e[10] = -(far + near) * rd;
	//     e[11] = -1;

	//     e[12] = 0;
	//     e[13] = 0;
	//     e[14] = -2 * near * far * rd;
	//     e[15] = 0;

	//     return this;
	// }
	// perspective (fovy, aspect, near, far) {
	//     return this.multiply(new Matrix4().setPerspective(fovy, aspect, near, far));
	// }
	/**
	 * 矩阵缩放
	 */
	setScale(x = 1, y = 1, z = 1) {
		return this.set(x, 0, 0, 0, 0, y, 0, 0, 0, 0, z, 0, 0, 0, 0, 1);
	}
	scale(x = 1, y = 1, z = 1) {
		return this.mult(x, x, x, x, y, y, y, y, z, z, z, z);
	}
	/**
	 * 矩阵移动
	 */
	setTranslate(x = 0, y = 0, z = 0) {
		return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, x, y, z, 1);
	}
	translate(x = 0, y = 0, z = 0) {
		var e = this.elements;
		e[12] += e[0] * x + e[4] * y + e[8] * z;
		e[13] += e[1] * x + e[5] * y + e[9] * z;
		e[14] += e[2] * x + e[6] * y + e[10] * z;
		e[15] += e[3] * x + e[7] * y + e[11] * z;
		return this;
	}
	/**
	 * 矩阵旋转(弧度)
	 */
	setRotate(angle, x, y, z) {
		var s, c, len, rlen, nc, xy, yz, zx, xs, ys, zs, e;
		e = this.elements;
		s = Math.sin(angle);
		c = Math.cos(angle);
		if (0 !== x && 0 === y && 0 === z) {
			if (x < 0) s = -s;
			return this.set(1, 0, 0, 0, 0, c, -s, 0, 0, s, c, 0, 0, 0, 0, 1);
		} else if (0 === x && 0 !== y && 0 === z) {
			if (y < 0) s = -s;
			return this.set(c, 0, -s, 0, 0, 1, 0, 0, s, 0, c, 0, 0, 0, 0, 1);
		} else if (0 === x && 0 === y && 0 !== z) {
			if (z < 0) s = -s;
			return this.set(c, s, 0, 0, -s, c, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
		} else {
			len = Math.sqrt(x * x + y * y + z * z);
			if (len !== 1) {
				rlen = 1 / len;
				x *= rlen;
				y *= rlen;
				z *= rlen;
			}
			nc = 1 - c;
			xy = x * y;
			yz = y * z;
			zx = z * x;
			xs = x * s;
			ys = y * s;
			zs = z * s;
			return this.set(
				x * x * nc + c,
				xy * nc + zs,
				zx * nc - ys,
				0,
				xy * nc - zs,
				y * y * nc + c,
				yz * nc + xs,
				0,
				zx * nc + ys,
				yz * nc - xs,
				z * z * nc + c,
				0,
				0,
				0,
				0,
				1,
			);
		}
	}
	rotate(angle, x, y, z) {
		return this.multiply(new Matrix4().setRotate(angle, x, y, z));
	}
	// /**
	//  * 设置矩阵视角
	//  */
	// setLookAt = function(eyeX, eyeY, eyeZ, centerX, centerY, centerZ, upX, upY, upZ) {
	// 	var e, fx, fy, fz, rlf, sx, sy, sz, rls, ux, uy, uz;

	// 	fx = centerX - eyeX;
	// 	fy = centerY - eyeY;
	// 	fz = centerZ - eyeZ;

	// 	// Normalize f.
	// 	rlf = 1 / Math.sqrt(fx * fx + fy * fy + fz * fz);
	// 	fx *= rlf;
	// 	fy *= rlf;
	// 	fz *= rlf;

	// 	// Calculate cross product of f and up.
	// 	sx = fy * upZ - fz * upY;
	// 	sy = fz * upX - fx * upZ;
	// 	sz = fx * upY - fy * upX;

	// 	// Normalize s.
	// 	rls = 1 / Math.sqrt(sx * sx + sy * sy + sz * sz);
	// 	sx *= rls;
	// 	sy *= rls;
	// 	sz *= rls;

	// 	// Calculate cross product of s and f.
	// 	ux = sy * fz - sz * fy;
	// 	uy = sz * fx - sx * fz;
	// 	uz = sx * fy - sy * fx;

	// 	return this.set(sx, ux, -fx, 0, sy, uy, -fy, 0, sz, uz, -fz, 0, 0, 0, 0, 1).translate(-eyeX, -eyeY, -eyeZ);
	// };
	// lookAt(eyeX, eyeY, eyeZ, centerX, centerY, centerZ, upX, upY, upZ) {
	// 	return this.multiply(new Matrix4().setLookAt(eyeX, eyeY, eyeZ, centerX, centerY, centerZ, upX, upY, upZ));
	// }
	// /**
	//  * Multiply the matrix for project vertex to plane from the right.
	//  * @param plane The array[A, B, C, D] of the equation of plane "Ax + By + Cz + D = 0".
	//  * @param light The array which stored coordinates of the light. if light[3]=0, treated as parallel light.
	//  * @return this
	//  */
	// dropShadow(plane, light) {
	// 	var mat = new Matrix4();
	// 	var e = mat.elements;

	// 	var dot = plane[0] * light[0] + plane[1] * light[1] + plane[2] * light[2] + plane[3] * light[3];

	// 	e[0] = dot - light[0] * plane[0];
	// 	e[1] = -light[1] * plane[0];
	// 	e[2] = -light[2] * plane[0];
	// 	e[3] = -light[3] * plane[0];

	// 	e[4] = -light[0] * plane[1];
	// 	e[5] = dot - light[1] * plane[1];
	// 	e[6] = -light[2] * plane[1];
	// 	e[7] = -light[3] * plane[1];

	// 	e[8] = -light[0] * plane[2];
	// 	e[9] = -light[1] * plane[2];
	// 	e[10] = dot - light[2] * plane[2];
	// 	e[11] = -light[3] * plane[2];

	// 	e[12] = -light[0] * plane[3];
	// 	e[13] = -light[1] * plane[3];
	// 	e[14] = -light[2] * plane[3];
	// 	e[15] = dot - light[3] * plane[3];

	// 	return this.concat(mat);
	// }
	// /**
	//  * Multiply the matrix for project vertex to plane from the right.(Projected by parallel light.)
	//  * @param normX, normY, normZ The normal vector of the plane.(Not necessary to be normalized.)
	//  * @param planeX, planeY, planeZ The coordinate of arbitrary points on a plane.
	//  * @param lightX, lightY, lightZ The vector of the direction of light.(Not necessary to be normalized.)
	//  * @return this
	//  */
	// ropShadowDirectionally(normX, normY, normZ, planeX, planeY, planeZ, lightX, lightY, lightZ) {
	// 	var a = planeX * normX + planeY * normY + planeZ * normZ;
	// 	return this.dropShadow([normX, normY, normZ, -a], [lightX, lightY, lightZ, 0]);
	// }
}
