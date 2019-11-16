import Component from './base.js';
import { MathVector2 } from '../../maths/index.js';
export default class Texture extends Component {
	static GetImage(image) {
		return image;
	}
	texture = null;
	size = new MathVector2(); //绘制大小
	useFrame = false; //是否切割
	framePosition = new MathVector2(); //切割位置
	frameSize = new MathVector2(); //切割大小
	constructor(texture, baseOptions) {
		super(baseOptions).setTexture(texture);
	}
	setTexture(texture) {
		this.texture = Texture.GetImage(texture);
		if (!this.texture) return this;
		this.size.setTo(this.texture.width, this.texture.height);
		if (this.useFrame) this.useFrame = false;
		return this;
	}
	setFrame(frameX, frameY, frameWidth, frameHeight) {
		this.useFrame = true;
		this.framePosition.setTo(frameX || 0, frameY || 0);
		this.frameSize.setTo(frameWidth, frameHeight);
		this.size.setTo(frameWidth, frameHeight);
		return this;
	}
	get width() {
		return this.size.x;
	}
	set width(width) {
		this.size.x = width;
	}
	get height() {
		return this.size.y;
	}
	set height(height) {
		this.size.y = height;
	}
	setAnchorSize(x = 0.5, y = 0.5) {
		this.anchor.x = this.width * x;
		this.anchor.y = this.height * y;
		return this;
	}
	setSize(x, y) {
		this.size.setTo(x, y);
		return this;
	}
	setSizeLimit(maxX, maxY, minX, minY) {
		if (!this.size.y) return this;
		let lv = this.size.x / this.size.y;
		if (maxX && this.size.x > maxX) {
			this.size.x = maxX;
			this.size.y = maxX / lv;
		}
		if (maxY && this.size.y > maxY) {
			this.size.y = maxY;
			this.size.x = maxY * lv;
		}
		if (minX && this.size.x < minX) {
			this.size.x = minX;
			this.size.y = maxX / lv;
		}
		if (minY && this.size.y < minY) {
			this.size.y = maxY;
			this.size.x = maxY * lv;
		}
		return this;
	}
	update(Context) {
		if (!this.texture) return;
		if (this.useFrame) {
			Context.drawImage(
				this.texture,
				this.framePosition.x,
				this.framePosition.y,
				this.frameSize.x,
				this.frameSize.y,
				-this.anchor.x,
				-this.anchor.y,
				this.size.x,
				this.size.y,
			);
		} else {
			Context.drawImage(this.texture, -this.anchor.x, -this.anchor.y, this.size.x, this.size.y);
		}
	}
	hitMe(x, y) {
		return x >= 0 && x <= this.width && y >= 0 && y <= this.height;
	}
}
