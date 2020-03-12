import { Builder } from './builder.js';
function Render(sprite, gl, dirty) {
	if (sprite.render) sprite.render(gl, dirty);
	if (sprite.texture) {
		if (!sprite.builder) dirty.add((sprite.builder = new Builder(gl, sprite)));
		sprite.builder.update(gl, sprite);
		dirty.use(sprite.builder);
	}
}
export default function WebglRender(sprite, context, dirty) {
	if (!(sprite instanceof Array)) return Render(sprite, context, dirty);
	for (let i = 0; i < sprite.length; i++) Render(sprite[i], context, dirty);
}
