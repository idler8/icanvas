import Matrix4 from '../vector/matrix4.js';
import Color from '../vector/color.js';

const Shape = {
	Circle(sprite, vetices) {
		let length = ((sprite.width + sprite.height) / 20) | 0;
		let radian = (2 * Math.PI) / length;
		let cx1 = 0.5;
		let cy1 = 0.5;
		let rx1 = 0.5;
		let ry1 = 0.5;
		if (sprite.clip) {
			cx1 = sprite.clip[0] / sprite.texture.width;
			cy1 = sprite.clip[1] / sprite.texture.height;
			rx1 = sprite.clip[2] / sprite.texture.width / 2;
			ry1 = sprite.clip[3] / sprite.texture.height / 2;
		}
		vetices.push(0, 0, cx1, cy1);
		for (let i = 0; i <= length; i++) {
			let r = i * radian;
			let cos = Math.cos(r);
			let sin = Math.sin(r);
			vetices.push(0.5 * cos, 0.5 * sin, rx1 * cos + cx1, ry1 * sin + cy1);
		}
	},
	Rectangle(sprite, vetices) {
		let cLeft = 0;
		let cTop = 0;
		let cRight = 1;
		let cBottom = 1;
		if (sprite.clip) {
			cLeft = sprite.clip[0] / sprite.texture.width;
			cTop = sprite.clip[1] / sprite.texture.height;
			cRight = (sprite.clip[0] + sprite.clip[2]) / sprite.texture.width;
			cBottom = (sprite.clip[1] + sprite.clip[3]) / sprite.texture.height;
		}
		vetices.push(-0.5, -0.5, cLeft, cTop, 0.5, -0.5, cRight, cTop, -0.5, 0.5, cLeft, cBottom, 0.5, 0.5, cRight, cBottom);
	},
	//TODO 多边形
};
const CompareUpdate = {
	updateRenderMatrix: ['transformId', 'width', 'height', 'anchorX', 'anchorY'],
	updateVetices: ['morph', 'clip'],
	updateBlendColor: [],
	equal(name, compare, sprite) {
		return this[name].every(key => compare[key] === sprite[key]);
	},
	set(name, compare, sprite) {
		this[name].forEach(key => (compare[key] = sprite[key]));
	},
};
export class Builder {
	constructor(gl, sprite) {
		this.compare = {};
		this.vetices = [];
		this.image = null;
		this.matrix = new Matrix4();
		this.color = new Color();
	}
	//更新纹理
	updateTexture(gl, image) {
		if (this.image != image) {
			if (this.image && !this.image.forever) {
				gl.deleteTexture(this.image.texture);
				this.image.texture = null;
			}
			this.image = image;
		}
		if (!image) return;
		if (!image.texture) {
			image.texture = gl.createTexture();
			gl.activeTexture(gl.TEXTURE0);
			gl.bindTexture(gl.TEXTURE_2D, image.texture);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
		} else if (image.textureId != image.sourceId) {
			gl.bindTexture(gl.TEXTURE_2D, image.texture);
		} else {
			return;
		}
		gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image.source);
		if (image.optimization && image.src) image.source = null;
		image.textureId = image.sourceId;
	}
	//更新绘制矩阵
	updateRenderMatrix(gl, sprite) {
		if (CompareUpdate.equal('updateRenderMatrix', this.compare, sprite)) return;
		this.matrix.setApply(sprite.matrix);
		this.matrix.translate(-sprite.anchorX, -sprite.anchorY);
		this.matrix.scale(sprite.width, sprite.height);
		CompareUpdate.set('updateRenderMatrix', this.compare, sprite);
	}
	//更新顶点
	updateVetices(gl, sprite) {
		if (this.buffer && CompareUpdate.equal('updateVetices', this.compare, sprite)) return;
		this.vetices.length = 0;
		Shape[sprite.morph] ? Shape[sprite.morph](sprite, this.vetices) : Shape.Rectangle(sprite, this.vetices);
		this.bufferLength = this.vetices.length / 4;
		this.drawType = gl.TRIANGLE_STRIP;
		if (!this.buffer) this.buffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vetices), gl.STATIC_DRAW);
		CompareUpdate.set('updateVetices', this.compare, sprite);
	}
	//更新颜色
	updateBlendColor(gl, sprite) {
		this.color.setApply(sprite.color);
		if (this.color.alpha == 1) this.color.alpha = sprite.opacity;
	}
	//单帧处理
	update(gl, sprite) {
		this.updateTexture(gl, sprite.texture);
		this.updateRenderMatrix(gl, sprite);
		this.updateVetices(gl, sprite);
		this.updateBlendColor(gl, sprite);
		if (!this.buffer) return;
		gl.shader.texture(sprite.texture.texture);
		gl.shader.transform(this.matrix);
		gl.shader.blend(this.color);
		gl.shader.buffer(this.buffer, 2, 2, 0, 4);
		gl.drawArrays(this.drawType, 0, this.bufferLength);
	}
	destroy(gl) {
		if (this.buffer) {
			gl.deleteBuffer(this.buffer);
			this.buffer = null;
		}
		this.updateTexture(gl);
	}
}
