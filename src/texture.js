export function TextureFactory(webgl) {
	return class Texture {
		constructor(baseTexture, x, y, width, height) {
			this.baseTexture = baseTexture;
			this.width = width;
			this.height = height;
			this.coord = this.getCoord(x, y, width, height, baseTexture.width, baseTexture.height);
		}
		getCoord(x, y, width, height, realWidth, realHeight) {
			if (x == 0 && y == 0 && width == realWidth && height == realHeight) return false;
			if (webgl) {
				let left = x / realWidth;
				let top = y / realHeight;
				let right = left + width / realWidth;
				let bottom = top + height / realHeight;
				return [right, top, left, top, left, bottom, right, bottom];
			} else {
				return [x, y, width, height];
			}
		}
	};
}
export function ImageTextureFactory(Texture, buildTexture) {
	return class ImageTexture {
		constructor(image) {
			this.width = image.width;
			this.height = image.height;
			this.texture = buildTexture ? buildTexture(image) : image;
		}
		getTexture(x, y, width, height) {
			return new Texture(this, x, y, width, height);
		}
	};
}
export function TextureControlFactory(ImageControl, ImageTexture) {
	return class TextureControl extends ImageControl {
		//读取并生成贴图对象
		Set(url) {
			return super.Set(url).then(img => {
				let baseTexture = new ImageTexture(img);
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
export function FontControlFactory(gl, getCanvas, FontTexture) {
	return class FontControl {
		constructor() {
			this.familys = {};
			for (let i = 0; i < arguments.length; i++) {
				let family = arguments[i].split(/s+/);
				this.familys[arguments[i]] = {
					baseTextures: [],
					values: {},
					family: family[1],
					size: parseFloat(family[0]),
					weight: family[2] || '',
				};
			}
			this.default = arguments[0];
		}
		addBaseTexture(font) {
			return new FontTexture(gl, getCanvas(), font.family, font.weight, font.size);
		}
		check(font) {
			let baseTexture = font.baseTextures[0];
			if (!baseTexture || baseTexture.used >= baseTexture.max) font.baseTextures.unshift((baseTexture = this.addBaseTexture(font)));
			return baseTexture;
		}
		get(family, value) {
			let font = this.familys[family] || this.familys[this.default];
			if (font.values[value]) return font.values[value];
			font.values[value] = this.check(font).getTexture(value);
			return font.values[value];
		}
	};
}
