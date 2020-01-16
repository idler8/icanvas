import * as Webgl from './webgl.js';
export default class Shader {
	constructor(gl) {
		this.gl = gl.gl || gl;
	}
	createProgram() {
		if (this.program) return this;
		this.program = Webgl.createProgram(this.gl, this.vert, this.frag);
		this.attributes = Webgl.getActiveAttrib(this.gl, this.program);
		this.uniforms = Webgl.getActiveUniform(this.gl, this.program);
		return this;
	}
	useProgram() {
		this.createProgram();
		this.gl.useProgram(this.program);
		return this;
	}
	get vert() {
		return [
			'attribute vec4 aPosition;',
			'attribute vec2 aTextureCoord;',
			'uniform mat4 uModelMatrix;',
			'varying vec2 vTextureCoord;',
			'void main()',
			'{',
			'gl_Position =  uModelMatrix * aPosition;',
			// 'gl_PointSize = 100.0;',
			'vTextureCoord = aTextureCoord;',
			'}',
		].join('\n');
	}
	get frag() {
		return [
			'precision highp float;',

			'uniform sampler2D uSampler;',
			'varying vec2 vTextureCoord;',
			'uniform vec4 uColor;',
			'void main()',
			'{',
			'vec4 color;',
			'color = texture2D(uSampler,vTextureCoord);',
			// gl_FragCoord
			// gl_PointCoord
			'gl_FragColor = uColor * color;',
			// gl_FragData
			'}',
		].join('\n');
	}
	createVertexArray(aPositionArray, aTextureCoordArray, drawElementsArray) {
		let gl = this.gl;
		let vao = gl.createVertexArray();
		gl.bindVertexArray(vao);
		let aPosition = Webgl.createBuffer(
			gl,
			gl.ARRAY_BUFFER,
			aPositionArray || new Float32Array([1.0, -1.0, -1.0, -1.0, -1.0, 1.0, 1.0, 1.0]),
			gl.STATIC_DRAW,
		);
		gl.bindBuffer(gl.ARRAY_BUFFER, aPosition);
		gl.vertexAttribPointer(this.attributes.aPosition, 2, gl.FLOAT, false, 0, 0);
		gl.enableVertexAttribArray(this.attributes.aPosition);
		let aTextureCoord = Webgl.createBuffer(
			gl,
			gl.ARRAY_BUFFER,
			aTextureCoordArray || new Float32Array([1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 1.0]),
			gl.STATIC_DRAW,
		);
		gl.bindBuffer(gl.ARRAY_BUFFER, aTextureCoord);
		gl.vertexAttribPointer(this.attributes.aTextureCoord, 2, gl.FLOAT, false, 0, 0);
		gl.enableVertexAttribArray(this.attributes.aTextureCoord);
		let drawElements = Webgl.createBuffer(gl, gl.ELEMENT_ARRAY_BUFFER, drawElementsArray || new Uint16Array([3, 2, 1, 3, 1, 0]), gl.STATIC_DRAW);
		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, drawElements);
		gl.bindVertexArray(null);
		return vao;
	}
	drawElements(texture, Matrix, blendColor) {
		let gl = this.gl;
		if (blendColor) {
			gl.uniform4f(this.uniforms.uColor, blendColor.elements[0], blendColor.elements[1], blendColor.elements[2], blendColor.elements[3]);
		} else {
			gl.uniform4f(this.uniforms.uColor, 1, 1, 1, 1);
		}
		gl.uniformMatrix4fv(this.uniforms.uModelMatrix, false, Matrix.elements);
		if (this.beforeTexture === texture) return gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
		this.beforeTexture = texture;
		if (!texture.vao) texture.vao = this.createVertexArray(null, texture.coord ? new Float32Array(texture.coord) : null, null);
		gl.bindVertexArray(texture.vao);

		gl.bindTexture(gl.TEXTURE_2D, texture.baseTexture.texture);
		gl.uniform1i(this.uniforms.uSampler, 0);

		gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
	}
}
