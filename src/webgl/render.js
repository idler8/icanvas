import * as Webgl from './webgl.js';
import Shader from './shader.js';

export default class WebGLRender {
	constructor(options) {
		if (!options.context) options.context = options.canvas.getContext('webgl');
		let gl = (this.gl = options.context);
		gl.clearColor(1.0, 1.0, 1.0, 1.0);
		gl.enable(gl.BLEND);
		gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
		// Webgl.getExtension(gl);
		this.canvas = gl.canvas;
		this.useProgram(new Shader(this.gl));
		this.renderArray = [];
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
	updateBuffer(array, buffer) {
		// [1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 1.0]
		let gl = this.gl;
		if (buffer) gl.deleteBuffer(buffer);
		if (!array) return;
		let x = array[0];
		let y = array[1];
		let width = array[2];
		let height = array[3];
		let realWidth = array[4];
		let realHeight = array[5];
		if (x == 0 && y == 0 && width == realWidth && height == realHeight) {
			return;
		} else {
			let left = x / realWidth;
			let top = y / realHeight;
			let right = left + width / realWidth;
			let bottom = top + height / realHeight;
			return Webgl.createBuffer(gl, gl.ARRAY_BUFFER, new Float32Array([right, top, left, top, left, bottom, right, bottom]), gl.STATIC_DRAW);
		}
	}
	bindUvs(a) {
		return this.shader.bindUvs(a);
	}
	bindVecties(a) {
		return this.shader.bindVecties(a);
	}
	bindIndices(a) {
		return this.shader.bindIndices(a);
	}
	bindTexture(a) {
		return this.shader.bindTexture(a);
	}
	update() {
		for (let i = 0, len = this.renderArray.length; i < len; i++) {
			this.renderArray[i].emit('update');
			if (this.renderArray[i].update) this.renderArray[i].update(this);
			this.renderArray[i].emit('updated');
		}
		this.renderArray.length = 0;
	}
	blend(color) {
		this.shader.blend(color);
		return this;
	}
	transform(matrix) {
		this.shader.transform(matrix);
		return this;
	}
	texture(texture) {
		if (texture.needUpdate) {
			texture.uv = this.updateBuffer(texture.source, texture.uv);
			texture.needUpdate = false;
		}
		if (texture.baseTexture.needUpdate) {
			texture.baseTexture.texture = this.updateTexture(texture.baseTexture.source, texture.baseTexture.texture);
			texture.baseTexture.needUpdate = false;
		}
		this.bindUvs(texture.uv);
		this.bindTexture(texture.baseTexture.texture);
		return this;
	}
	draw() {
		this.shader.bindVecties();
		this.shader.bindIndices();
		this.shader.draw();
		return this;
	}
	text = this.draw;
}
