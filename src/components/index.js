import Minix from '../utils/lib/minix.js';
import Vector2 from '../maths/lib/vector2.js';
import Matrix3 from '../maths/lib/matrix3.js';
// import Render from '../utils/lib/render.js';
import * as Alpha from './lib/alpha.js';
import * as Anchor from './lib/anchor.js';
import * as Angle from './lib/angle.js';
import * as Children from './lib/children.js';
import * as Font from './lib/font.js';
import * as Padding from './lib/padding.js';
import * as Position from './lib/position.js';
import * as Scale from './lib/scale.js';
import * as Size from './lib/size.js';
import * as Style from './lib/style.js';
import * as Visible from './lib/visible.js';
import * as ZIndex from './lib/zindex.js';

export function Factory(source = {}, setOptions = []) {
	class Component {
		constructor(options = {}) {
			this.id = Factory.ID ? ++Factory.ID : (Factory.ID = 1);
			this.touchChildren = true; //是否允许点击子元素
			this.touchStop = false; //点击是否不冒泡到父元素
			this.matrix = new Matrix3(); //计算矩阵
			this.setOptions(options);
		}
		setOptions(options) {
			if (!options) return this;
			if (!setOptions.length) return this;
			for (let i = 0; i < setOptions.length; i++) {
				setOptions[i].call(this, options);
			}
			return this;
		}
	}
	if (source) Minix(Component.prototype, source);
	return Component;
}
export function DisplayFactory() {
	const Display = Factory({
		get empty() {
			return true;
		},
	});
	return Display;
}

let ContainerProperties = [Children, Visible, Position, Scale, Angle, ZIndex, Size, Anchor, Alpha];
let ContainerData = Object.assign.apply(null, [{}].concat(ContainerProperties.map(p => p.data)));
let ContainerOptions = [].concat(ContainerProperties.map(p => p.option));
Object.assign(ContainerData, {
	setAnchorSize(x = 0.5, y = 0.5) {
		this.anchor.x = this.width * x;
		this.anchor.y = this.height * y;
		return this;
	},
	hitMe(touch) {
		return (
			touch.x >= -this.anchorX - this.paddingLeft &&
			touch.y >= -this.anchorY - this.paddingTop &&
			touch.x <= this.width - this.anchorX + this.paddingRight &&
			touch.x <= this.height - this.anchorY + this.paddingBottom
		);
	},
});
export function ContainerFactory() {
	const Container = Factory(Data, ContainerOptions);
	return Container;
}

let SpriteOptions = [].concat(ContainerOptions);
let SpriteData = Object.assign({}, ContainerData);
export function SpriteFactory() {
	return class Sprite extends Factory(SpriteData, SpriteOptions) {
		constructor(texture, options) {
			super((options = Object.assign(typeof texture == 'string' ? { texture } : texture, options)));
			this.texture = null;
			this.useClip = false; //是否切割源图
			this.clipPosition = new Vector2(); //切割位置
			this.clipSize = new Vector2(); //切割大小
			if (options.clip) this.setClip(options.clip.x, options.clip.y, options.clip.width, options.clip.height);
			this.setTexture(texture);
		}
		setClip(x = 0, y = 0, width, height) {
			this.useClip = true;
			this.clipPosition.setTo(x, y);
			this.clipSize.setTo(width, height);
			this.size.setTo(width, height);
			return this;
		}
		setTexture(texture) {
			if (!texture.width || !texture.height) texture = null;
			this.texture = texture;
			if (!this.texture) return this;
			this.useClip = false;
			this.size.setTo(this.texture.width, this.texture.height);
			return this;
		}
		update(Context) {
			if (!this.texture) return;
			if (this.useClip) {
				Context.drawImage(
					this.texture,
					this.clipPosition.x,
					this.clipPosition.y,
					this.clipSize.x,
					this.clipSize.y,
					-this.anchorX,
					-this.anchorX,
					(this.width * this.clipSize.x) / this.texture.width,
					(this.height * this.clipSize.y) / this.texture.height,
				);
			} else {
				Context.drawImage(this.texture, -this.anchorX, -this.anchorX, this.width, this.height);
			}
		}
	};
}

let RectOptions = ContainerOptions.concat(Style.option);
let RectData = Object.assign({}, ContainerData, Style.data);
export function RectFactory() {
	return class Rect extends Factory(RectData, RectOptions) {
		update(Context) {
			if (this.style.lineWidth && !this.style.strokeUp) {
				Context.lineWidth = this.style.lineWidth;
				Context.strokeStyle = this.style.fillStyle;
				Context.strokeRect(-this.anchorX, -this.anchorX, this.width, this.height);
			}
			if (this.style.fillStyle) {
				Context.fillStyle = this.style.fillStyle;
				Context.fillRect(-this.anchorX, -this.anchorX, this.width, this.height);
			}
			if (this.style.lineWidth && this.style.strokeUp) {
				Context.lineWidth = this.style.lineWidth;
				Context.strokeStyle = this.style.fillStyle;
				Context.strokeRect(-this.anchorX, -this.anchorX, this.width, this.height);
			}
		}
	};
}

let TextData = Object.assign({}, ContainerData, Font.data, Style.data, Padding.data);
let TextOptions = ContainerOptions.concat([Font.option, Style.option, Padding.option]);
const AlignWidth = { left: 0, center: 0.5, right: 1 };
const AlignHeight = { top: 0, middle: 0.5, bottom: 1, hanging: 0, alphabetic: 1, ideographic: 1 };
export function TextFactory(GetCanvas2D) {
	return class Text extends Factory(TextData, TextOptions) {
		static defaultFont = Font.defaultFont;
		constructor(options) {
			super(options);
			this.context = GetCanvas2D();
			this._value = '';
			if (options.value) this._value = options.value;
		}
		set value(v) {
			if (this._value === v) return;
			if (!v && v !== 0) v = '';
			if (typeof v != 'string') v = v.toString();
			this._value = v;
			this.separate(this.context, v);
		}
		get value() {
			return this._value;
		}
		setValue(v) {
			this.value = v;
			return this;
		}
		getValue() {
			return this.value;
		}
		separate(Context, value) {
			let tags = {};
			let taglength = 0;
			let string = value.replace(/\<(fillStyle|strokeStyle|lineWidth|family|weight|size|i)\=(\S+?)\>/g, function(tag, action, arg, index) {
				tags[index - taglength] = { action, arg };
				taglength += tag.length;
				return '';
			});
			let font = { weight: this.font.weight, size: this.fontSize, family: this.font.family };
			Context.font = `${font.weight} ${font.size}px ${font.family}`;
			let lines = { index: 0, content: [] };
			let line = { index: 0, width: 0, height: font.size, content: [] };
			for (let i = 0, len = string.length; i++; i < len) {
				if (tags[i]) {
					if (tags[i].action == 'fillStyle' || tags[i].action == 'strokeStyle' || tags[i].action == 'lineWidth') {
						line.index = line.content.push({ [tags[i].action]: tags[i].arg });
					} else if (tags[i].action == 'size' || tags[i].action == 'family' || tags[i].action == 'weight') {
						font[tags[i].action] = tags[i].arg == '@' ? this.font[tags[i].action] : tags[i].arg;
						Context.font = `${font.weight} ${font.size}px ${font.family}`;
						line.index = line.content.push({ font: Context.font });
						if (font.size > line.height) line.height = font.size;
					} else if (tags[i].action == 'i') {
						if (this.special && this.special[tags[i].arg] && this.special[tags[i].arg].width) {
							let texture = this.special[tags[i].arg];
							if (this.wrapWidth > 0 && line.width + texture.width > this.wrapWidth) {
								lines.index = lines.content.push(line);
								line = { index: 0, width: 0, height: font.size, content: [] };
							}
							line.width += texture.width;
							line.index = line.content.push({ texture });
							if (texture.height > line.height) line.height = texture.height;
						}
					}
				}
				let v = string[i];
				if (v === '' || v === '\n') {
					lines.index = lines.content.push(line);
					line = { index: 0, width: 0, content: [] };
				} else {
					let width = Context.measureText(v).width;
					if (this.wrapWidth > 0 && line.width + width > this.wrapWidth) {
						lines.index = lines.content.push(line);
						line = { index: 0, width: 0, height: font.size, content: [] };
					}
					line.width += width;
					if (!line.content[line.index]) line.content[line.index] = { value: '', width: 0, height: font.size };
					line.content[line.index].width += width;
					line.content[line.index].value += v;
				}
			}
			let widths = lines.content.map(l => l.width);
			this.width = Math.max.apply(null, widths);
			this.height = lines.content.reduce((r, line) => r + Math.max(line.height, this.lineHeight), 0);
			Context.canvas.width = maxWidth + this.paddingLeft + this.paddingRight;
			Context.canvas.height = maxHeight - Math.max(0, this.lineHeight - lines.content[lines.index - 1].height) + this.paddingTop + this.paddingBottom;
			Context.textAlign = 'left';
			Context.textBaseline = 'top';
			Context.fillStyle = this.style.fillStyle;
			Context.font = this.family;

			let lineWidth = this.style.lineWidth;
			let strokeStyle = this.style.strokeStyle;
			if (lineWidth && strokeStyle) {
				Context.lineWidth = lineWidth;
				Context.strokeStyle = strokeStyle;
			}
			let y = this.paddingTop;
			lines.content.forEach(line => {
				let x = this.paddingLeft + AlignWidth[this.textAlign] * (this.width - line.width);
				let lineY = y + Math.max(line.height, this.lineHeight);
				y += AlignWidth[this.textAlign] * (line.height - this.fontSize);
				line.content.forEach(cont => {
					if (cont.fillStyle) {
						Context.fillStyle = cont.color;
					} else if (cont.lineWidth) {
						lineWidth = cont.lineWidth;
						if (lineWidth && strokeStyle) {
							Context.lineWidth = lineWidth;
							Context.strokeStyle = strokeStyle;
						}
					} else if (cont.strokeStyle) {
						strokeStyle = cont.strokeStyle;
						if (lineWidth && strokeStyle) {
							Context.lineWidth = lineWidth;
							Context.strokeStyle = strokeStyle;
						}
					} else if (cont.font) {
						Context.font = cont.font;
					} else if (cont.texture) {
						Context.drawImage(cont.texture, x, y - AlignHeight[this.textBaseline] * (cont.texture.height - this.fontSize));
						x += cont.texture.width;
					} else if (cont.value) {
						let fontY = y - AlignHeight[this.textBaseline] * (cont.height - this.fontSize);
						if (lineWidth && strokeStyle && !this.style.strokeUp) Context.strokeStyle(cont.value, x, fontY);
						Context.fillStyle(cont.value, x, fontY);
						if (lineWidth && strokeStyle && this.style.strokeUp) Context.strokeStyle(cont.value, x, fontY);
						x += cont.width;
					}
				});
				y = lineY;
			});
		}
		update(Context) {
			if (!this.context || !this.context.canvs) return;
			Context.drawImage(this.context.canvs, -this.anchorX, -this.anchorX, this.width, this.height);
		}
	};
}
