import * as Webgl from './webgl.js';
import Shader from './shader.js';
export default class WebGLRender {
	constructor(options = {}) {
		this.renderArray = [];

		this.context = options.context || options.canvas.getContext('webgl');
		this.canvas = this.context.canvas;

		let gl = this.context;
		gl.clearColor(1.0, 1.0, 1.0, 1.0);
		gl.enable(gl.BLEND);
		gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
		// Webgl.getExtension(gl);
		this.useProgram(new Shader(gl));
	}
	look(matrix, x, y) {
		matrix.setOrtho(-x / 2, x / 2, y / 2, -y / 2, 0, 1);
		this.context.viewport(0, 0, x, y);
		return this;
	}
	get gl() {
		return this.context;
	}

	useProgram(shader) {
		if (shader === this.shader) return this;
		this.shader = shader.use();
		return this;
	}
	updateTexture(image, texture) {
		let gl = this.context;
		if (!texture) return Webgl.createTexture(gl, image);
		gl.bindTexture(gl.TEXTURE_2D, texture);
		gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
		return texture;
	}
	updateBuffer(array, buffer) {
		let gl = this.context;
		if (buffer) gl.deleteBuffer(buffer);
		if (!array) return;
		return Webgl.createBuffer(gl, gl.ARRAY_BUFFER, new Float32Array(array), gl.STATIC_DRAW);
	}
	updateIndices(array, buffer) {
		let gl = this.context;
		if (buffer) gl.deleteBuffer(buffer);
		if (!array) return;
		return Webgl.createBuffer(gl, gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(array), gl.STATIC_DRAW);
	}
	shapeToBuffer(shape) {
		if (!shape.buffer) shape.buffer = {};
		if (shape.morph == 'Rectangle') {
			let left = shape.left;
			let top = shape.top;
			let right = shape.right;
			let bottom = shape.bottom;
			let cLeft = shape.clipPosition.x;
			let cTop = shape.clipPosition.y;
			let cRight = shape.clipPosition.x + shape.clipSize.x;
			let cBottom = shape.clipPosition.y + shape.clipSize.y;
			shape.buffer.array = [left, top, cLeft, cTop, right, top, cRight, cTop, left, bottom, cLeft, cBottom, right, bottom, cRight, cBottom];
			shape.buffer.buffers = this.updateBuffer(shape.buffer.array, shape.buffer.buffers);
			shape.buffer.length = 4;
			shape.buffer.type = this.gl.TRIANGLE_STRIP;
		} else if (shape.morph == 'Circle') {
			let length = ((shape.size.x + shape.size.y) / 20) | 0;
			let radian = (2 * Math.PI) / length;
			let cx = -shape.anchor.x;
			let cy = -shape.anchor.y;
			let rx = shape.size.x * 0.5;
			let ry = shape.size.y * 0.5;

			let rx1 = shape.clipSize.x * 0.5;
			let ry1 = shape.clipSize.y * 0.5;
			let cx1 = shape.clipPosition.x + rx1;
			let cy1 = shape.clipPosition.y + ry1;

			shape.buffer.array = [cx, cy, cx1, cy1];
			for (let i = 0; i <= length; i++) {
				let r = i * radian;
				let cos = Math.cos(r);
				let sin = Math.sin(r);
				shape.buffer.array.push(rx * cos + cx, ry * sin + cy, rx1 * cos + cx1, ry1 * sin + cy1);
			}
			shape.buffer.buffers = this.updateBuffer(shape.buffer.array, shape.buffer.buffers);
			shape.buffer.length = shape.buffer.array.length / 4;
			shape.buffer.type = this.gl.TRIANGLE_FAN;
		} else if (typeof shape.morph == 'object') {
			//TODO 多边形
		}
	}
	blend() {
		this.shader.blend();
	}
	transform(matrix) {
		this.shader.transform(matrix);
	}
	texture(texture) {
		this.shader.bindTexture(texture);
	}
	draw(buffer) {
		if (!buffer) return;
		this.shader.bindBuffer(buffer.buffers, 2, 2, 0, 4);
		this.gl.drawArrays(buffer.type, 0, buffer.length);
	}
}
