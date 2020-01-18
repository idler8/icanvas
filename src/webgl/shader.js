import * as Webgl from './webgl.js';
export default class Shader {
	constructor(gl) {
		this.gl = gl.gl || gl;
		this.options = {};
	}
	createProgram() {
		if (this.program) return this;
		let gl = this.gl;
		this.program = Webgl.createProgram(gl, this.vert, this.frag);
		this.attributes = Webgl.getActiveAttrib(gl, this.program);
		this.uniforms = Webgl.getActiveUniform(gl, this.program);
		this.options = {
			aPosition: Webgl.createBuffer(gl, gl.ARRAY_BUFFER, new Float32Array([1.0, -1.0, -1.0, -1.0, -1.0, 1.0, 1.0, 1.0]), gl.STATIC_DRAW),
			aTextureCoord: Webgl.createBuffer(gl, gl.ARRAY_BUFFER, new Float32Array([1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 1.0]), gl.STATIC_DRAW),
			drawElements: Webgl.createBuffer(gl, gl.ELEMENT_ARRAY_BUFFER, drawElementsArray || new Uint16Array([3, 2, 1, 3, 1, 0]), gl.STATIC_DRAW),
		};
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
		let aPosition = aPositionArray ? Webgl.createBuffer(gl, gl.ARRAY_BUFFER, aPositionArray, gl.STATIC_DRAW) : this.options.aPosition;
		gl.bindBuffer(gl.ARRAY_BUFFER, aPosition);
		gl.vertexAttribPointer(this.attributes.aPosition, 2, gl.FLOAT, false, 0, 0);
		gl.enableVertexAttribArray(this.attributes.aPosition);
		let aTextureCoord = aTextureCoordArray ? Webgl.createBuffer(gl, gl.ARRAY_BUFFER, aTextureCoordArray, gl.STATIC_DRAW) : this.options.aTextureCoord;
		gl.bindBuffer(gl.ARRAY_BUFFER, aTextureCoord);
		gl.vertexAttribPointer(this.attributes.aTextureCoord, 2, gl.FLOAT, false, 0, 0);
		gl.enableVertexAttribArray(this.attributes.aTextureCoord);
		let drawElements = drawElementsArray ? Webgl.createBuffer(gl, gl.ELEMENT_ARRAY_BUFFER, drawElementsArray, gl.STATIC_DRAW) : this.options.drawElements;
		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, drawElements);
		gl.bindVertexArray(null);
		return vao;
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
	drawImage(texture) {
		let gl = this.gl;
		if (this.beforeTexture === texture) return gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
		this.beforeTexture = texture;
		if (!texture.vao) texture.vao = this.createVertexArray(null, texture.coord ? new Float32Array(texture.coord) : null, null);
		gl.bindVertexArray(texture.vao);

		gl.bindTexture(gl.TEXTURE_2D, texture.baseTexture.texture);
		gl.uniform1i(this.uniforms.uSampler, 0);

		gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
	}
}
