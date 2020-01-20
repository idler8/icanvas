import * as Webgl from './webgl.js';
import Shader from './shader.js';
import Matrix4 from '../vector/matrix4.js';

export default class WebGLRender {
	constructor(options) {
		this.renderArray = [];
		this.matrix = new Matrix4();

		if (!options.context) options.context = options.canvas.getContext('webgl');
		let gl = (this.gl = options.context);
		gl.clearColor(1.0, 1.0, 1.0, 1.0);
		gl.enable(gl.BLEND);
		gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
		// Webgl.getExtension(gl);
		this.canvas = gl.canvas;
		this.useProgram(new Shader(this.gl));
	}
	update() {
		for (let i = 0, len = this.renderArray.length; i < len; i++) {
			this.renderArray[i].emit('update');
			if (this.renderArray[i].update) this.renderArray[i].update(this);
			this.renderArray[i].emit('updated');
		}
		this.renderArray.length = 0;
	}
	setTransform(matrix) {
		this.matrix.setApply(matrix);
		return this;
	}
	transform(matrix) {
		this.matrix.multiply(matrix);
		return this;
	}
	drawImage(texture, x, y, width, height) {
		let sx = (width || texture.width) / 2;
		let sy = (height || texture.height) / 2;
		this.matrix.translate(x, y).scale(sx, sy);
		this.bindTexture(texture);
		this.draw();
		this.matrix.scale(1 / sx, 1 / sy).translate(-x, -y);
		return this;
	}

	useProgram(shader) {
		if (shader === this.shader) return this;
		this.shader = shader.use();
		return this;
	}
	updateTexture(image, texture) {
		let gl = this.gl;
		if (!texture) return Webgl.createTexture(gl, image);
		gl.bindTexture(gl.TEXTURE_2D, texture);
		gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
		return texture;
	}
	updateUvs(array, buffer) {
		let gl = this.gl;
		if (buffer) gl.deleteBuffer(buffer);
		if (!array) return;
		let x = array[0];
		let y = array[1];
		let width = array[2];
		let height = array[3];
		let realWidth = array[4];
		let realHeight = array[5];
		if (x == 0 && y == 0 && width == realWidth && height == realHeight) return;
		let left = x / realWidth;
		let top = y / realHeight;
		let right = left + width / realWidth;
		let bottom = top + height / realHeight;
		return Webgl.createBuffer(gl, gl.ARRAY_BUFFER, new Float32Array([right, top, left, top, left, bottom, right, bottom]), gl.STATIC_DRAW);
	}
	updateVectices(array, buffer) {
		let gl = this.gl;
		if (buffer) gl.deleteBuffer(buffer);
		if (!array) return;
		return Webgl.createBuffer(gl, gl.ARRAY_BUFFER, new Float32Array(array), gl.STATIC_DRAW);
	}

	setBlend(color) {
		return this.shader.blend(color);
	}
	bindTexture(texture) {
		if (!texture || !texture.baseTexture) return false;
		if (texture.needUpdate) {
			texture.uv = this.updateUvs(texture.source, texture.uv);
			texture.needUpdate = false;
		}
		if (texture.baseTexture.needUpdate) {
			texture.baseTexture.texture = this.updateTexture(texture.baseTexture.source, texture.baseTexture.texture);
			texture.baseTexture.needUpdate = false;
		}
		this.shader.bindUvs(texture.uv);
		return this.shader.bindTexture(texture.baseTexture.texture);
	}
	draw() {
		this.shader.transform(this.matrix);
		this.shader.bindVecties();
		this.shader.bindIndices();
		this.shader.draw();
		return this;
	}
}
