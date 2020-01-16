export function CanvasTextureFactory(ImageTexture) {
	return class CanvasTexture extends ImageTexture {
		constructor(gl, canvas) {
			super(canvas);
			this.gl = gl;
			this.canvas = canvas;
			this.context = canvas.getContext('2d');
			this.updateTexture = false;
		}
		update() {
			this.updateTexture = false;
			let gl = this.gl;
			gl.bindTexture(gl.TEXTURE_2D, this.texture);
			gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this.canvas);
		}
	};
}
export function FontTextureFactory(CanvasTexture, Texture) {
	return class FontTexture extends CanvasTexture {
		constructor(gl, canvas, family, weight, size) {
			super(gl, canvas);
			this.x = (canvas.width / size) | 0;
			this.y = (canvas.height / size) | 0;
			this.size = size;
			this.max = this.x * this.y;
			this.used = 0;
			this.context.font = weight + ' ' + size + 'px ' + family;
			this.context.textBaseline = 'middle';
			this.context.textAlign = 'center';
			this.context.fillStyle = '#FFFFFF';
		}
		getTexture(value) {
			if (this.used >= this.max) return;
			this.updateTexture = true;
			let x = (this.used % this.x) * this.size + this.size / 2;
			let y = ((this.used / this.x) | 0) * this.size + this.size / 2;
			this.used++;
			this.context.fillText(value, x, y);
			let width = this.context.measureText(value).width;
			let height = this.size;
			return new Texture(this, x - width / 2, y - height / 2, width, height);
		}
		update() {
			if (!this.updateTexture) return;
			super.update();
		}
	};
}
