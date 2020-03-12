export class Rectangle {
	constructor(sprite, gl) {
		let { left, top, right, bottom } = sprite;
		let cLeft = 0;
		let cTop = 0;
		let cRight = 1;
		let cBottom = 1;
		if (sprite.clip) {
			cLeft = sprite.clip[0] / sprite.texture.width;
			cTop = sprite.clip[1] / sprite.texture.height;
			cRight = (sprite.clip[0] + sprite.clip[2]) / sprite.texture.width;
			cBottom = (sprite.clip[1] + sprite.clip[3]) / sprite.texture.height;
		}

		this.vectices = new Float32Array([left, top, cLeft, cTop, right, top, cRight, cTop, left, bottom, cLeft, cBottom, right, bottom, cRight, cBottom]);
		this.bufferLength = this.vectices.length / 4;
		this.drawType = gl.TRIANGLE_STRIP;
		sprite.needUpdate = false;
	}
	createTexture(gl, image) {
		if (this.texture) this.deleteTexture(gl);
		if (image.texture) this.texture = image.texture;
		this.texture = image.texture = gl.createTexture();
		gl.activeTexture(gl.TEXTURE0);
		gl.bindTexture(gl.TEXTURE_2D, this.texture);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
		gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
		this.texture.forever = image.src || image.forever;
		image.needUpdate = false;
	}
	createBuffer(gl) {
		if (!this.buffer) this.buffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
		gl.bufferData(gl.ARRAY_BUFFER, this.vectices, gl.STATIC_DRAW);
	}
	updateTexture(gl, image) {
		if (this.texture !== image.texture) return;
		if (image.texture && image.needUpdate) {
			gl.bindTexture(gl.TEXTURE_2D, image.texture);
			gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
			image.needUpdate = false;
		}
	}
	draw(gl) {
		gl.shader.texture(this.texture);
		gl.shader.buffer(this.buffer, 2, 2, 0, 4);
		gl.drawArrays(this.drawType, 0, this.bufferLength);
	}
	destroy(gl) {
		if (this.buffer) gl.deleteBuffer(this.buffer);
		this.buffer = null;
		if (this.texture && !this.texture.forever) gl.deleteTexture(this.texture);
		this.texture = null;
		this.destroyed = true;
	}
}
export class Circle {
	constructor(sprite, gl) {
		let length = ((sprite.width + sprite.height) / 20) | 0;
		let radian = (2 * Math.PI) / length;
		let cx = -sprite.anchorX;
		let cy = -sprite.anchor.y;
		let rx = sprite.width * 0.5;
		let ry = sprite.height * 0.5;
		let rx1 = 0.5;
		let ry1 = 0.5;
		let cx1 = 0.5;
		let cy1 = 0.5;
		if (sprite.clip) {
			rx1 = sprite.clip[2] * 0.5;
			ry1 = sprite.clip[3] * 0.5;
			cx1 = sprite.clip[0] + rx1;
			cy1 = sprite.clip[1] + ry1;
		}
		let points = [cx, cy, cx1, cy1];
		for (let i = 0; i <= length; i++) {
			let r = i * radian;
			let cos = Math.cos(r);
			let sin = Math.sin(r);
			points.push(rx * cos + cx, ry * sin + cy, rx1 * cos + cx1, ry1 * sin + cy1);
		}
		this.vectices = new Float32Array(points);
		this.bufferLength = this.vectices.length / 4;
		this.drawType = gl.TRIANGLE_STRIP;
		sprite.needUpdate = false;
	}
	createTexture(gl, image) {
		if (this.texture) this.deleteTexture(gl);
		if (image.texture) this.texture = image.texture;
		this.texture = image.texture = gl.createTexture();
		gl.activeTexture(gl.TEXTURE0);
		gl.bindTexture(gl.TEXTURE_2D, this.texture);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
		gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
		this.texture.forever = image.src || image.forever;
		image.needUpdate = false;
	}
	createBuffer(gl) {
		if (!this.buffer) this.buffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
		gl.bufferData(gl.ARRAY_BUFFER, this.vectices, gl.STATIC_DRAW);
	}
	updateTexture(gl, image) {
		if (this.texture !== image.texture) return;
		if (image.texture && image.needUpdate) {
			gl.bindTexture(gl.TEXTURE_2D, image.texture);
			gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
			image.needUpdate = false;
		}
	}
	draw(gl) {
		gl.shader.texture(this.texture);
		gl.shader.buffer(this.buffer, 2, 2, 0, 4);
		gl.drawArrays(this.drawType, 0, this.bufferLength);
	}
	destroy(gl) {
		if (this.buffer) gl.deleteBuffer(this.buffer);
		this.buffer = null;
		if (this.texture && !this.texture.forever) gl.deleteTexture(this.texture);
		this.texture = null;
		this.destroyed = true;
	}
}
export class Polygon {
	//TODO
}
