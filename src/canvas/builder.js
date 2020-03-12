export class Rectangle {
	constructor(sprite) {
		//生成绘制参数
		this.drawImage = [];
		let image = sprite.texture;
		this.drawImage.push(image);
		if (sprite.clip) {
			let clipX = sprite.clip[0];
			let clipY = sprite.clip[1];
			let clipWidth = sprite.clip[2];
			let clipHeight = sprite.clip[3];
			Array.prototype.push.call(this.drawImage, clipX, clipY, clipWidth, clipHeight);
		}
		this.drawImage.push(sprite.left, sprite.top, sprite.width, sprite.height);
		sprite.needUpdate = false;
	}
	draw(context) {
		context.drawImage.apply(context, this.drawImage); //绘制元素
	}
}
export class Circle extends Rectangle {
	constructor(sprite) {
		super(sprite);
		//生成圆形裁切参数
		this.clip = [-sprite.anchorX, -sprite.anchorY, Math.min(sprite.width, sprite.height) * 0.5, 0, 2 * Math.PI];
	}
	draw(context) {
		context.save(); // 保存当前ctx的状态
		context.arc.apply(context, this.clip); //画出圆
		context.clip(); //裁剪上面的圆形
		context.drawImage.apply(context, this.drawImage); //绘制元素
		context.restore(); // 还原状态
	}
}
export class Polygon extends Rectangle {
	constructor(sprite) {
		super(sprite);
		//生成裁切参数
		this.clip = [-sprite.anchorX, -sprite.anchorY, Math.min(sprite.width, shapspritee.height) * 0.5, 0, 2 * Math.PI];
		//TODO 多边形裁切
	}
	draw(context) {
		context.save(); // 保存当前ctx的状态
		context.arc.apply(context, this.clip); //画出圆
		context.clip(); //裁剪上面的圆形
		context.drawImage.apply(context, this.drawImage); //绘制元素
		context.restore(); // 还原状态
	}
}
