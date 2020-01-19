export class Texture {
	constructor(baseTexture, x, y, width, height) {
		this.baseTexture = baseTexture;
		this.width = width;
		this.height = height;
		this.source = [x, y, width, height, baseTexture.width, baseTexture.height];
		this.needUpdate = true;
		this.uv = null;
	}
}
export class BaseTexture {
	constructor(source) {
		this.width = source.width;
		this.height = source.height;
		this.source = source;

		this.needUpdate = true;
		this.texture = null;
	}
	getTexture(x, y, width, height) {
		return new Texture(this, x, y, width, height);
	}
}
export class CanvasTexture extends BaseTexture {
	constructor(canvas) {
		let context = null;
		if (canvas.getContext) {
			context = canvas.getContext('2d');
		} else {
			context = canvas;
			canvas = context.canvas;
		}
		super(canvas);
		this.context = canvas.getContext('2d');
	}
}

export class FontTexture extends CanvasTexture {
	constructor(canvas, family, weight, size) {
		super(canvas);
		this.x = (this.source.width / size) | 0;
		this.y = (this.source.height / size) | 0;
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
		this.needUpdate = true;
		let x = (this.used % this.x) * this.size + this.size / 2;
		let y = ((this.used / this.x) | 0) * this.size + this.size / 2;
		this.used++;
		this.context.fillText(value, x, y);
		let width = this.context.measureText(value).width;
		let height = this.size;
		return new Texture(this, x - width / 2, y - height / 2, width, height);
	}
}
export function TextureControlFactory(ImageControl, BaseTexture) {
	return class TextureControl extends ImageControl {
		//读取并生成贴图对象
		Set(url) {
			return super.Set(url).then(img => {
				let baseTexture = new BaseTexture(img);
				return baseTexture.getTexture(0, 0, baseTexture.width, baseTexture.height);
			});
		}
		//生成雪碧图对象
		SetClip(key, name, x, y, width, height) {
			if (!this.resources[key]) return this;
			let baseTexture = this.resources[key].baseTexture;
			this.resources[key + '//' + name] = baseTexture.getTexture(x, y, width, height);
			return this;
		}
	};
}
export function FontControlFactory(getCanvas, FontTexture) {
	return class FontControl {
		constructor() {
			this.familys = {};
			for (let i = 0; i < arguments.length; i++) {
				let family = arguments[i].split(/\s+/);
				this.familys[arguments[i]] = {
					baseTextures: [],
					values: {},
					family: family[1],
					size: parseFloat(family[0]),
					weight: family[2] || '',
				};
			}
			this.default = arguments[0];
			this.used = null;
		}
		addBaseTexture(font) {
			return new FontTexture(getCanvas(), font.family, font.weight, font.size);
		}
		check(font) {
			let baseTexture = font.baseTextures[0];
			if (!baseTexture || baseTexture.used >= baseTexture.max) font.baseTextures.unshift((baseTexture = this.addBaseTexture(font)));
			return baseTexture;
		}
		update(family) {
			this.used = this.familys[family] || this.familys[this.default];
		}
		get(value) {
			let font = this.used;
			if (font.values[value]) return font.values[value];
			font.values[value] = this.check(font).getTexture(value);
			return font.values[value];
		}
	};
}
