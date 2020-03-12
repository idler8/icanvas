import * as Builder from './builder.js';
export default function CanvasRender(sprite, context, dirty) {
	sprite.emit('draw', context, dirty);
	if (sprite.morph && Builder[sprite.morph]) {
		if (!sprite.builder || sprite.needUpdate) sprite.builder = new Builder[sprite.morph](sprite, context);
		let e = sprite.matrix.elements;
		context.setTransform(e[0], e[1], e[4], e[5], e[12], e[13]);
		sprite.builder.draw(context);
	}
}
