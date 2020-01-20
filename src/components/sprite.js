import Container from './container.js';
import Color from '../vector/color.js';
import Matrix4 from '../vector/matrix4.js';
export default class Sprite extends Container {
	constructor(texture, options = {}) {
		super(options);
		this.localMatrix = new Matrix4(); //矩阵
		this.setTexture(texture);
		if (options.width) this.width = options.width;
		if (options.height) this.height = options.height;

		this._color = new Color(1, 1, 1, 1);
		this.define('color', this, '_color', null, function(color) {
			this._color.setApply(color);
			return this;
		});
		if (options.color !== undefined) this.color = options.color;
		this.define('alpha', this._color, 'alpha');
		if (options.alpha !== undefined) this.alpha = options.alpha;
		this.define('red', this._color, 'red');
		if (options.red !== undefined) this.red = options.red;
		this.define('green', this._color, 'green');
		if (options.green !== undefined) this.green = options.green;
		this.define('blue', this._color, 'blue');
		if (options.blue !== undefined) this.blue = options.blue;
	}
	checkPoint(vector) {
		this.getLocalVector(vector);
		return vector.x >= -this.width / 2 && vector.y >= -this.height / 2 && vector.x <= this.width / 2 && vector.y <= this.height / 2;
	}
	setTexture(texture) {
		if (!texture) {
			this.texture = null;
			this.width = 0;
			this.height = 0;
		} else {
			this.texture = texture;
			this.width = texture.width;
			this.height = texture.height;
		}
		return this;
	}
	update(render) {
		if (!this.texture) return;
		render.setBlend(this.color);
		render.setTransform(this.localMatrix);
		render.bindTexture(this.texture);
		render.draw();
	}
	updateTransform(matrix) {
		super.updateTransform(matrix);
		if (!this.texture) return;
		this.localMatrix.setApply(this.worldMatrix).scale(this.width / 2, this.height / 2);
	}
}
