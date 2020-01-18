import * as Webgl from './webgl.js';
import Shader from './shader.js';

export default class WebGLRender {
	constructor(options) {
		if (!options.context) options.context = options.canvas.getContext('webgl');
		let gl = this.buildWebGL(options.context).gl;
		this.canvas = gl.canvas;
		this.useProgram(new Shader(this.gl));
		this.renderArray = [];
	}
	buildWebGL(gl) {
		this.gl = gl;
		gl.clearColor(1.0, 1.0, 1.0, 1.0);
		gl.enable(gl.BLEND);
		gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
		Webgl.getExtension(gl);
		return this;
	}
	useProgram(shader) {
		if (shader === this.shader) return this;
		this.shader = shader.useProgram();
		return this;
	}
	update() {
		for (let i = 0, len = this.renderArray.length; i < len; i++) {
			this.renderArray[i].emit('update');
			if (this.renderArray[i].update) this.renderArray[i].update(this);
			this.renderArray[i].emit('updated');
		}
		this.renderArray.length = 0;
	}
	createTexture(image) {
		return Webgl.createTexture(this.gl, image);
	}
	transform(matrix) {
		this.shader.transform(matrix);
		return this;
	}
	drawElements(texture, Matrix, blendColor) {
		this.shader.blend(blendColor);
		this.shader.transform(Matrix);
		this.shader.drawElements(texture);
		return this;
	}
}
