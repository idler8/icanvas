import * as Builder from './builder.js';
export default function WebglRender(sprite, gl, dirty) {
	sprite.emit('draw', gl, dirty);
	if (sprite.morph && Builder[sprite.morph]) {
		if (!sprite.builder || sprite.needUpdate || sprite.builder.destroyed) {
			sprite.builder = new Builder[sprite.morph](sprite, gl);
			sprite.builder.createBuffer(gl);
			sprite.builder.createTexture(gl, sprite.texture);
			dirty.add(sprite.builder);
		}

		sprite.builder.updateTexture(gl, sprite.texture);
		gl.shader.blend();
		gl.shader.transform(sprite.matrix);
		sprite.builder.draw(gl);
		dirty.use(sprite.builder);
	}
}
