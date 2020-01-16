export function getActiveAttrib(gl, Program) {
	let Attributes = {};
	for (let i = 0, len = gl.getProgramParameter(Program, gl.ACTIVE_ATTRIBUTES); i < len; i++) {
		let attr = gl.getActiveAttrib(Program, i); //size,type,name
		let id = (Attributes[attr.name] = gl.getAttribLocation(Program, attr.name));
		gl.enableVertexAttribArray(id);
	}
	return Attributes;
}
export function getActiveUniform(gl, Program) {
	let Uniforms = {};
	for (let i = 0, len = gl.getProgramParameter(Program, gl.ACTIVE_UNIFORMS); i < len; i++) {
		let attr = gl.getActiveUniform(Program, i); //size,type,name
		Uniforms[attr.name] = gl.getUniformLocation(Program, attr.name);
	}
	return Uniforms;
}
export function createShader(gl, type, text) {
	var shader = gl.createShader(gl[type]);
	gl.shaderSource(shader, text);
	gl.compileShader(shader);
	if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
		console.log(gl.getShaderInfoLog(shader));
		gl.deleteShader(shader);
		return null;
	}
	return shader;
}
export function createProgram(gl, vert, frag) {
	let program = gl.createProgram();
	gl.attachShader(program, createShader(gl, 'VERTEX_SHADER', vert));
	gl.attachShader(program, createShader(gl, 'FRAGMENT_SHADER', frag));
	gl.linkProgram(program);
	if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
		gl.deleteProgram(program);
		gl.deleteShader(program);
		gl.deleteShader(program);
		throw '链接程序失败';
	}
	return program;
}
export function createTexture(gl, img, options) {
	let texture = gl.createTexture();
	// this.pixelStorei(this.UNPACK_FLIP_Y_WEBGL, 1);
	gl.activeTexture(gl.TEXTURE0);
	gl.bindTexture(gl.TEXTURE_2D, texture);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
	gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img || null);
	return texture;
}
export function createBuffer(gl, type, data, draw, buffer) {
	if (!buffer) buffer = gl.createBuffer();
	gl.bindBuffer(type, buffer);
	gl.bufferData(type, data, draw);
	return buffer;
}
export function getExtension(gl) {
	//用WEBGL1就够了
	// let drawBuffers = gl.getExtension('WEBGL_draw_buffers');
	// let depthTexture = gl.getExtension('WEBKIT_WEBGL_depth_texture');
	// let loseContext = gl.getExtension('WEBGL_lose_context');
	let vertexArrayObject =
		gl.getExtension('OES_vertex_array_object') || gl.getExtension('MOZ_OES_vertex_array_object') || gl.getExtension('WEBKIT_OES_vertex_array_object');
	// let anisotropicFiltering = gl.getExtension('EXT_texture_filter_anisotropic');
	// let uint32ElementIndex = gl.getExtension('OES_element_index_uint');
	// // Floats and half-floats
	// let floatTexture = gl.getExtension('OES_texture_float');
	// let floatTextureLinear = gl.getExtension('OES_texture_float_linear');
	// let textureHalfFloat = gl.getExtension('OES_texture_half_float');
	// let textureHalfFloatLinear = gl.getExtension('OES_texture_half_float_linear');
	let vertexAttribDivisor = gl.getExtension('ANGLE_instanced_arrays');
	gl.createVertexArray = () => vertexArrayObject.createVertexArrayOES();
	gl.bindVertexArray = vao => vertexArrayObject.bindVertexArrayOES(vao);
	gl.deleteVertexArray = vao => vertexArrayObject.deleteVertexArrayOES(vao);
	gl.vertexAttribDivisor = (a, b) => vertexAttribDivisor.vertexAttribDivisorANGLE(a, b);
	gl.drawElementsInstanced = (a, b, c, d, e) => vertexAttribDivisor.drawElementsInstancedANGLE(a, b, c, d, e);
	gl.drawArraysInstanced = (a, b, c, d) => vertexAttribDivisor.drawArraysInstancedANGLE(a, b, c, d);
	return gl;
}