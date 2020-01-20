import Container from './container.js';
export class TextLine extends Container {
	//最大行宽,默认行高,是否自动行高
	constructor() {
		super();
		this.needSplit = true; //需要打断
		this.textures = [];
	}
	addTexture(sprite) {
		this.textures.push(sprite);
		this.width += sprite.width;
		sprite.anchorX = -sprite.width / 2;
		sprite.anchorY = -sprite.height / 2;
	}
	align(y) {
		for (let j = 0; j < this.textures.length; j++) {
			let sprite = this.textures[j];
			sprite.y -= (sprite.height - this.height) * y; //本行水平对齐方式
		}
	}
	updateTransform(matrix) {
		super.updateTransform(matrix);
		for (let j = 0; j < this.textures.length; j++) {
			this.textures[j].updateTransform(this.worldMatrix);
		}
	}
	update(render) {
		for (let j = 0; j < this.textures.length; j++) {
			this.textures[j].update(render);
		}
	}
}
export class TextElement extends Container {
	constructor(value, options = {}) {
		super(options);
		this.family = options.family || '36px 微软雅黑';
		this.color = options.color || '#FFFFFF';
		this.stroke = options.stroke || 0;
		this.anchorY = -this.height / 2;
		this.values = value;
	}
	addValue(value, width) {
		this.values += value;
		this.width += width;
		this.anchorX = -this.width / 2;
	}
	update(render) {
		render.setTransform(this.worldMatrix);
		let ctx = render.context;
		if (ctx.font != this.family) ctx.font = this.family;
		if (ctx.textAlign != 'center') ctx.textAlign = 'center';
		if (ctx.textBaseline != 'middle') ctx.textBaseline = 'middle';
		if (this.stroke > 0) {
			if (ctx.lineWidth != this.stroke) ctx.lineWidth = this.stroke;
			if (ctx.strokeStyle != this.color) ctx.strokeStyle = this.color;
			render.context.strokeText(this.values, 0, 0);
		} else {
			if (ctx.fillStyle != this.color) ctx.fillStyle = this.color;
			render.context.fillText(this.values, 0, 0);
		}
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
		this.icons = Object.assign({}, options.icons);

		this.wrapWidth = options.wrapWidth || -1;
		if (options.lineHeight > 0) {
			this.lineHeight = options.lineHeight;
			this.autoLineHeight = false;
		} else {
			this.lineHeight = this.font.size;
			this.autoLineHeight = true;
		}

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
			fillStyle: this.font.fillStyle || '#FFFFFF',
		}; //默认属性
		let handle = Object.assign({}, family); //当前临时属性
		let line = null; //当前行精灵
		let icons = this.icons;

		let string = value.replace(/\<(fillStyle|strokeStyle|lineWidth|family|weight|size|i)\=(\S+?)\>/g, function(tag, action, arg, index) {
			if (action == 'i') {
				if (icons[arg]) tags[index] = { action, arg: icons[arg], length: tag.length - 1 };
				return tag;
			}
			tags[index] = { action, arg, length: tag.length - 1 };
			return tag;
		});
		for (let i = 0, len = string.length; i < len; i++) {
			let v = string[i];
			if (tags[i]) {
				if (tags[i].action != 'i') {
					handle[tags[i].action] = tags[i].arg == '@' ? family[tags[i].action] : tags[i].arg;
					if (line) line.needSplit = true;
				} else {
					if (this.linePushSpecial(line, tags[i].arg)) {
						line = new TextLine().setSize(0, this.lineHeight).setPosition(0, line ? line.y + line.height : 0);
						this.textures.push(line);
						this.linePushSpecial(line, tags[i].arg);
					}
				}
				i += tags[i].length;
			} else if (v === '\n') {
				line = new TextLine().setSize(0, this.lineHeight).setPosition(0, line ? line.y + line.height : 0);
				this.textures.push(line);
			} else {
				//如果当前行精灵不存在或者无法加入当前字，则生成一个新的行精灵推入纹理组
				if (this.linePush(line, handle, v)) {
					line = new TextLine().setSize(0, this.lineHeight).setPosition(0, line ? line.y + line.height : 0);
					this.textures.push(line);
					this.linePush(line, handle, v);
				}
			}
		}
		this.updateTextures();
	}
	get allFontSplit() {
		return true;
	}
	getElement() {
		throw '请设置getElement函数';
	}
	linePushSpecial(line, special) {
		if (this.lineWrapCheck(line, special.width)) return true;
		if (this.autoLineHeight && special.height > line.height) line.height = special.height;
		line.addTexture(this.getElement(special, false, { x: line.width }, true));
		line.needSplit = true;
	}
	linePush(line, handle, value, isSpecial) {
		if (!line) return true;
		if (isSpecial) {
		} else {
			let font = this.getElement(line.needSplit, value, handle);
			let width = font.baseTexture ? (font.width * handle.size) / font.baseTexture.size : font.width;
			if (this.lineWrapCheck(line, width)) return true;
			if (line.needSplit) {
				if (this.autoLineHeight && handle.size > line.height) line.height = handle.size;
				let option = { family: handle.size + 'px ' + handle.family, color: handle.fillStyle, width, height: handle.size, x: line.width };
				line.addTexture(this.getElement(font, value, option, true));
				line.needSplit = this.allFontSplit;
			} else {
				line.textures[line.textures.length - 1].addValue(value, width);
				line.width += width;
			}
		}
	}
	lineWrapCheck(line, width) {
		return this.wrapWidth >= 0 && line.width + width > this.wrapWidth;
	}
	updateTextures() {
		let widths = this.textures.map(l => l.width);
		this.width = Math.max.apply(null, widths);
		this.height = this.textures.reduce((r, line) => r + line.height, 0);
		for (let i = 0; i < this.textures.length; i++) {
			let line = this.textures[i];
			line.x -= this.width * 0.5; //整体垂直对齐方式
			line.y -= this.height * 0.5; //整体水平对齐方式
			line.x -= (line.width - this.width) * 0.5; //本行垂直对齐方式
			line.align(0.5);
		}
		this.updateMatrix = true;
	}
	updateTransform() {
		super.updateTransform();
		if (!this.textures || !this.textures.length) return;
		for (let i = 0; i < this.textures.length; i++) {
			let line = this.textures[i];
			line.updateTransform(this.worldMatrix);
		}
	}
	update(render) {
		if (!this.textures || !this.textures.length) return;
		for (let i = 0; i < this.textures.length; i++) {
			let line = this.textures[i];
			line.update(render);
		}
	}
}
