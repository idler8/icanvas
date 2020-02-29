const GetAB = function(a, b) {
	return a;
};
export default class CanvasRender {
	constructor(options = {}) {
		this.renderArray = [];

		this.context = options.context || options.canvas.getContext('2d');
		this.canvas = this.context.canvas;
	}
	look(matrix, x, y) {
		matrix.translate(x / 2, y / 2);
		return this;
	}
	useProgram() {
		return this;
	}
	updateTexture = GetAB;
	updateBuffer = GetAB;
	updateIndices = GetAB;
	//形状混合
	shapeToBuffer(shape) {
		if (!shape.buffer) shape.buffer = {};
		shape.buffer.morph = shape.morph;
		if (shape.morph == 'Rectangle') {
			shape.buffer.morph = 'Rectangle';
			shape.buffer.clipData = [shape.clipPosition.x, shape.clipPosition.y, shape.clipSize.x, shape.clipSize.y];
			shape.buffer.drawData = [shape.left, shape.top, shape.width, shape.height];
		} else if (shape.morph == 'Circle') {
			shape.buffer.morph = 'Circle';
			shape.buffer.clipData = [shape.clipPosition.x, shape.clipPosition.y, shape.clipSize.x, shape.clipSize.y];
			shape.buffer.drawData = [shape.left, shape.top, shape.width, shape.height];
			//TODO 椭圆
			shape.buffer.circle = [-shape.anchor.x, -shape.anchor.y, Math.min(shape.size.x, shape.size.y) * 0.5];
		} else if (typeof shape.morph == 'object') {
			shape.buffer.morph = 'Polygon';
			//TODO 多边形
		}
	}
	//颜色混合
	blend(color) {}
	//颜色混合
	transform(matrix) {
		let e = matrix.elements || matrix;
		this.context.setTransform(e[0], e[1], e[4], e[5], e[12], e[13]);
		return this;
	}
	texture(texture) {
		if (this.beforeTexture === texture) return false;
		this.beforeTexture = texture;
	}
	draw(buffer) {
		if (!buffer) return;
		if (!this.beforeTexture) return;
		let ctx = this.context;
		if (buffer.morph == 'Circle') {
			ctx.save(); // 保存当前ctx的状态
			ctx.arc(buffer.circle[0], buffer.circle[1], buffer.circle[2], 0, 2 * Math.PI); //画出圆
			ctx.clip(); //裁剪上面的圆形
			ctx.drawImage(
				this.beforeTexture,
				buffer.clipData[0] * this.beforeTexture.width,
				buffer.clipData[1] * this.beforeTexture.height,
				buffer.clipData[2] * this.beforeTexture.width,
				buffer.clipData[3] * this.beforeTexture.height,
				buffer.drawData[0],
				buffer.drawData[1],
				buffer.drawData[2],
				buffer.drawData[3],
			);
			ctx.restore(); // 还原状态
		}
		if (buffer.morph == 'Rectangle') {
			ctx.drawImage(
				this.beforeTexture,
				buffer.clipData[0] * this.beforeTexture.width,
				buffer.clipData[1] * this.beforeTexture.height,
				buffer.clipData[2] * this.beforeTexture.width,
				buffer.clipData[3] * this.beforeTexture.height,
				buffer.drawData[0],
				buffer.drawData[1],
				buffer.drawData[2],
				buffer.drawData[3],
			);
		}
	}
}
