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
			this.vecties = Webgl.createBuffer(gl, gl.ARRAY_BUFFER, new Float32Array([1.0, -1.0, -1.0, -1.0, -1.0, 1.0, 1.0, 1.0]), gl.STATIC_DRAW);
			this.uvs = Webgl.createBuffer(gl, gl.ARRAY_BUFFER, new Float32Array([1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 1.0]), gl.STATIC_DRAW);
			this.indices = Webgl.createBuffer(gl, gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([3, 2, 1, 3, 1, 0]), gl.STATIC_DRAW);
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
	bindTexture(texture) {
		if (this.beforeTexture === texture) return false;
		let gl = this.gl;
		this.beforeTexture = texture;
		gl.bindTexture(gl.TEXTURE_2D, texture);
		gl.uniform1i(this.uniforms.uSampler, 0);
		return true;
	}
	bindUvs(uvs = this.uvs) {
		if (this.beforeUvs === uvs) return false;
		this.beforeUvs = uvs;
		let gl = this.gl;
		gl.bindBuffer(gl.ARRAY_BUFFER, uvs);
		gl.vertexAttribPointer(this.attributes.aTextureCoord, 2, gl.FLOAT, false, 0, 0);
		gl.enableVertexAttribArray(this.attributes.aTextureCoord);
		return true;
	}
	bindVecties(vecties = this.vecties) {
		if (this.beforeVecties === vecties) return false;
		this.beforeVecties = vecties;
		let gl = this.gl;
		gl.bindBuffer(gl.ARRAY_BUFFER, vecties);
		gl.vertexAttribPointer(this.attributes.aPosition, 2, gl.FLOAT, false, 0, 0);
		gl.enableVertexAttribArray(this.attributes.aPosition);
		return true;
	}
	bindIndices(indices = this.indices) {
		let gl = this.gl;
		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indices);
		return true;
	}
	draw() {
		let gl = this.gl;
		gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
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
