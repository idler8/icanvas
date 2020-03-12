// export function getExtension(gl) {
// 	//用WEBGL1就够了
// 	// let drawBuffers = gl.getExtension('WEBGL_draw_buffers');
// 	// let depthTexture = gl.getExtension('WEBKIT_WEBGL_depth_texture');
// 	// let loseContext = gl.getExtension('WEBGL_lose_context');
// 	let vertexArrayObject =
// 		gl.getExtension('OES_vertex_array_object') || gl.getExtension('MOZ_OES_vertex_array_object') || gl.getExtension('WEBKIT_OES_vertex_array_object');
// 	// let anisotropicFiltering = gl.getExtension('EXT_texture_filter_anisotropic');
// 	// let uint32ElementIndex = gl.getExtension('OES_element_index_uint');
// 	// // Floats and half-floats
// 	// let floatTexture = gl.getExtension('OES_texture_float');
// 	// let floatTextureLinear = gl.getExtension('OES_texture_float_linear');
// 	// let textureHalfFloat = gl.getExtension('OES_texture_half_float');
// 	// let textureHalfFloatLinear = gl.getExtension('OES_texture_half_float_linear');
// 	let vertexAttribDivisor = gl.getExtension('ANGLE_instanced_arrays');
// 	gl.createVertexArray = () => vertexArrayObject.createVertexArrayOES();
// 	gl.bindVertexArray = vao => vertexArrayObject.bindVertexArrayOES(vao);
// 	gl.deleteVertexArray = vao => vertexArrayObject.deleteVertexArrayOES(vao);
// 	gl.vertexAttribDivisor = (a, b) => vertexAttribDivisor.vertexAttribDivisorANGLE(a, b);
// 	gl.drawElementsInstanced = (a, b, c, d, e) => vertexAttribDivisor.drawElementsInstancedANGLE(a, b, c, d, e);
// 	gl.drawArraysInstanced = (a, b, c, d) => vertexAttribDivisor.drawArraysInstancedANGLE(a, b, c, d);
// 	return gl;
// }
class Shader {
	constructor(gl) {
		this.gl = gl;
		this.attributes = {};
		this.uniforms = {};

		this.createProgram();
		this.getActiveAttrib();
		this.getActiveUniform();
	}
	get vert() {
		return '';
	}
	get frag() {
		return '';
	}
	createShader(type, text) {
		let { gl } = this;
		let shader = gl.createShader(gl[type]);
		gl.shaderSource(shader, text);
		gl.compileShader(shader);
		if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
			console.log(gl.getShaderInfoLog(shader));
			gl.deleteShader(shader);
			return null;
		}
		return shader;
	}
	getActiveAttrib() {
		let { gl, program, attributes } = this;
		for (let i = 0, len = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES); i < len; i++) {
			let attr = gl.getActiveAttrib(program, i); //size,type,name
			let id = (attributes[attr.name] = gl.getAttribLocation(program, attr.name));
			gl.enableVertexAttribArray(id);
		}
	}
	getActiveUniform() {
		let { gl, program, uniforms } = this;
		for (let i = 0, len = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS); i < len; i++) {
			let attr = gl.getActiveUniform(program, i); //size,type,name
			uniforms[attr.name] = gl.getUniformLocation(program, attr.name);
		}
	}
	createProgram() {
		let gl = this.gl;
		let program = gl.createProgram();
		gl.attachShader(program, this.createShader('VERTEX_SHADER', this.vert));
		gl.attachShader(program, this.createShader('FRAGMENT_SHADER', this.frag));
		gl.linkProgram(program);
		if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
			gl.deleteProgram(program);
			gl.deleteShader(program);
			gl.deleteShader(program);
			throw '链接程序失败';
		}
		this.program = program;
	}
}
export default class WebGLShader extends Shader {
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
	buffer(buffer, vetices = 2, uvs = 2, offset = 0, bpe = 4) {
		let { gl, attributes } = this;
		if (gl.BufferRecord === buffer) return;
		gl.BufferRecord = buffer;
		gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
		gl.vertexAttribPointer(attributes.aPosition, vetices, gl.FLOAT, false, (vetices + uvs) * bpe, offset * bpe);
		gl.enableVertexAttribArray(attributes.aPosition);
		gl.vertexAttribPointer(attributes.aTextureCoord, uvs, gl.FLOAT, false, (vetices + uvs) * bpe, (offset + vetices) * bpe);
		gl.enableVertexAttribArray(attributes.aTextureCoord);
	}
	texture(texture) {
		let { gl, uniforms } = this;
		if (gl.TextureRecord === texture) return;
		gl.TextureRecord = texture;
		gl.bindTexture(gl.TEXTURE_2D, texture);
		gl.uniform1i(uniforms.uSampler, 0);
	}
	transform(matrix) {
		let { gl, uniforms } = this;
		gl.uniformMatrix4fv(uniforms.uModelMatrix, false, matrix.elements || matrix);
	}
	blend(color) {
		let { gl, uniforms } = this;
		if (color) {
			gl.uniform4f(uniforms.uColor, color.elements[0], color.elements[1], color.elements[2], color.elements[3]);
		} else {
			gl.uniform4f(uniforms.uColor, 1, 1, 1, 1);
		}
	}
}
