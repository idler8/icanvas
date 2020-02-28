import * as Webgl from './webgl.js';
export default class Shader {
	constructor(gl) {
		this.gl = gl.gl || gl;
		this.options = {};
	}
	use() {
		let gl = this.gl;
		if (!this.program) {
			this.program = Webgl.createProgram(gl, this.vert, this.frag);
			this.attributes = Webgl.getActiveAttrib(gl, this.program);
			this.uniforms = Webgl.getActiveUniform(gl, this.program);
		}
		gl.useProgram(this.program);
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
			'gl_Position = uModelMatrix * aPosition;',
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
	bindTexture(texture) {
		if (this.beforeTexture === texture) return false;
		let gl = this.gl;
		this.beforeTexture = texture;
		gl.bindTexture(gl.TEXTURE_2D, texture);
		gl.uniform1i(this.uniforms.uSampler, 0);
		return true;
	}
	bindBuffer(buffer, vetices = 2, uvs = 2, offset = 0, bpe = 4) {
		if (this.beforeBuffer === buffer) return false;
		this.beforeBuffer = buffer;
		let gl = this.gl;
		gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
		gl.vertexAttribPointer(this.attributes.aPosition, vetices, gl.FLOAT, false, (vetices + uvs) * bpe, offset * bpe);
		gl.enableVertexAttribArray(this.attributes.aPosition);
		gl.vertexAttribPointer(this.attributes.aTextureCoord, uvs, gl.FLOAT, false, (vetices + uvs) * bpe, (offset + vetices) * bpe);
		gl.enableVertexAttribArray(this.attributes.aTextureCoord);
	}
	transform(matrix) {
		this.gl.uniformMatrix4fv(this.uniforms.uModelMatrix, false, matrix.elements);
	}
	blend(color) {
		if (color) {
			this.gl.uniform4f(this.uniforms.uColor, color.elements[0], color.elements[1], color.elements[2], color.elements[3]);
		} else {
			this.gl.uniform4f(this.uniforms.uColor, 1, 1, 1, 1);
		}
	}
}
