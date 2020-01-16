import Color from '../vector/color.js';
import Container from './container.js';
export class TextLine extends Container {
	//最大行宽,默认行高,是否自动行高
	constructor() {
		super();
		this.updateFamily = true; //字体更新
		this.textures = [];
	}
}
export class TextGroup extends Container {
	constructor(family, fillStyle) {
		super();
		this.family = family || '36px 微软雅黑';
		this.fillStyle = fillStyle || '#FFFFFF';
		this.values = '';
	}
	update(render) {
		render.transform(this.worldMatrix);
		render.fillText(this.values, this.family, this.fillStyle);
	}
}
export class Text extends Container {
	defaultFont(font) {
		return Object.assign({}, font);
	}
	constructor(options = {}) {
		super(options);
		this.font = this.defaultFont(options.font);
		this.value = '';
		this.textures = [];

		this.wrapWidth = -1;
		this.lineHeight = this.font.size;
		this.autoLineHeight = true;

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

		if (options.value) this.setValue(options.value);
	}
	setValue(value) {
		if (value == this.value) return this;
		this.textures.length = 0;
		this.value = value === 0 ? '0' : value ? value.toString() : '';
		if (!this.value) return this;
		this.updateText(this.value);
		return this;
	}
	updateText(value) {
		let tags = {}; //文本内特殊标签
		let family = {
			size: this.font.size,
			family: this.font.family,
			weight: this.font.weight,
			lineWidth: this.font.lineWidth || 0,
			strokeStyle: this.font.strokeStyle || '#000000',
			fillStyle: this.color.string,
		}; //默认属性
		let handle = Object.assign({}, family); //当前临时属性
		let line = null; //当前行精灵

		let string = value.replace(/\<(fillStyle|family|weight|size|i)\=(\S+?)\>/g, function(tag, action, arg, index) {
			tags[index] = { action, arg, length: tag.length - 1 };
			return tag;
		});
		for (let i = 0, len = string.length; i < len; i++) {
			let v = string[i];
			if (tags[i]) {
				if (tags[i].action != 'i') {
					handle[tags[i].action] = tags[i].arg == '@' ? family[tags[i].action] : tags[i].arg;
					if (line) line.updateFamily = true;
				} else {
					if (!this.getTexture(line, handle, tags[i].arg, true)) {
						line = new TextLine().setSize(0, this.lineHeight).setPosition(0, line ? line.y + line.height : 0);
						this.textures.push(line);
						this.getTexture(line, handle, tags[i].arg, true);
					}
				}
				i += tags[i].length;
			} else if (v === '\n') {
				line = new TextLine().setSize(0, this.lineHeight).setPosition(0, line ? line.y + line.height : 0);
				this.textures.push(line);
			} else {
				//如果当前行精灵不存在或者无法加入当前字，则生成一个新的行精灵推入纹理组
				if (!this.getTexture(line, handle, v)) {
					line = new TextLine().setSize(0, this.lineHeight).setPosition(0, line ? line.y + line.height : 0);
					this.textures.push(line);
					this.getTexture(line, handle, v);
				}
			}
		}
		this.updateTextures();
	}
	getTexture(line, handle, sprite) {
		throw '请设置getTexture函数';
	}
	update(render) {
		if (!this.textures || !this.textures.length) return;
		for (let i = 0; i < this.textures.length; i++) {
			let line = this.textures[i];
			for (let j = 0; j < line.textures.length; j++) {
				let sprite = line.textures[j];
				sprite.update(render);
			}
		}
	}
	updateTextures() {
		let widths = this.textures.map(l => l.width);
		this.width = Math.max.apply(null, widths);
		this.height = this.textures.reduce((r, line) => r + line.height, 0);
		for (let i = 0; i < this.textures.length; i++) {
			let line = this.textures[i];
			line.x -= this.width / 2; //整体垂直对齐方式
			line.y -= this.height / 2; //整体水平对齐方式

			line.x -= (line.width - this.width) * 0.5; //本行垂直对齐方式
			for (let j = 0; j < line.textures.length; j++) {
				let sprite = line.textures[j];
				if (sprite.texture && sprite.texture.baseTexture.updateTexture) {
					sprite.texture.baseTexture.update();
				}
				sprite.y -= (sprite.height - line.height) * 0.5; //本行水平对齐方式
				//整行水平对齐方式
			}
		}
		this.updateMatrix = true;
	}
	updateTransform() {
		super.updateTransform();
		if (!this.textures || !this.textures.length) return;
		for (let i = 0; i < this.textures.length; i++) {
			let line = this.textures[i];
			line.updateTransform(this.worldMatrix);
			if (line.textures.length == 3) console.log(line);
			for (let j = 0; j < line.textures.length; j++) {
				let sprite = line.textures[j];
				sprite.updateTransform(line.worldMatrix);
			}
		}
	}
}
