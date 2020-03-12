function Render(sprite, context, dirty) {
	let targetAlpha = sprite.color.alpha < 1 ? sprite.color.alpha : sprite._opacity;
	if (targetAlpha == 0) return;
	if (context.globalAlpha != targetAlpha) context.globalAlpha = targetAlpha;
	if (sprite.render) sprite.render(context, dirty);
	if (sprite.texture) {
		let e = sprite.matrix.elements;
		context.setTransform(e[0], e[1], e[4], e[5], e[12], e[13]);
		if (!sprite.builder) sprite.builder = [];
		sprite.builder.length = 0;
		sprite.builder.push(sprite.texture.source);
		if (sprite.clip) Array.prototype.push.apply(sprite.builder, sprite.clip);
		sprite.builder.push(sprite.left, sprite.top, sprite.width, sprite.height);
		if (sprite.morph == 'Cricle') {
			context.save(); // 保存当前ctx的状态
			context.arc(-sprite.anchorX, -sprite.anchorY, Math.min(sprite.width, sprite.height) * 0.5, 0, 2 * Math.PI); //画出圆
			context.clip(); //裁剪上面的圆形
		}
		context.drawImage.apply(context, sprite.builder); //绘制元素
		if (sprite.morph == 'Cricle') context.restore(); // 还原状态
	}
}
export default function CanvasRender(sprite, context, dirty) {
	if (!(sprite instanceof Array)) return Render(sprite, context, dirty);
	for (let i = 0; i < sprite.length; i++) Render(sprite[i], context, dirty);
}
