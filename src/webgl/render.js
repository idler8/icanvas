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

	update() {
		for (let i = 0, len = this.renderArray.length; i < len; i++) {
			this.renderArray[i].emit('update');
			if (this.renderArray[i].update) this.renderArray[i].update(this);
			this.renderArray[i].emit('updated');
		}
		this.renderArray.length = 0;
	}
	buildWebGL(gl) {
		this.gl = gl;
		gl.clearColor(1.0, 1.0, 1.0, 1.0);
		// gl.enable(gl.DEPTH_TEST);
		gl.enable(gl.BLEND);
		gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
		//gl.clearDepth(1);
		//gl.depthFunc(gl.LEQUAL);
		Webgl.getExtension(gl);
		return this;
	}
	useProgram(shader) {
		if (shader === this.shader) return this;
		this.shader = shader.useProgram();
		return this;
	}
	createTexture(image) {
		return Webgl.createTexture(this.gl, image);
	}
	drawElements(texture, Matrix, blendColor) {
		this.shader.drawElements(texture, Matrix, blendColor);
		return this;
	}
}
