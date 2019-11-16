import Component from './base.js';
import { MathVector2, MathMatrix3 } from '../../maths/index.js';
export default class Text extends Component {
	static Context = null;
	static AlignWidth = { left: 0, center: 0.5, right: 1 };
	static AlignHeight = { top: 0, middle: 0.5, bottom: 1, hanging: 0, alphabetic: 1, ideographic: 1 };
	static defaultHandle = { cursorX: 0, cursorY: 0, nextCursorX: 0, currentString: '', currentText: '', currentWidth: 0, Special: false };
	static defaultSpecial = {};
	static defaultOptions = {
		family: '微软雅黑,黑体', //字体
		size: 26, //字号px
		weight: '', //字宽

		color: '#FFFFFF', //字色

		align: 'center', //横向对齐方式
		baseline: 'middle', //纵向对齐方式

		stroke: 0, //描边
		strokeColor: '#000000', //描边颜色

		wrap: -1, //换行宽度
		lineHeight: 0, //行高

		paddingTop: 10,
		paddingLeft: 10,
		paddingRight: 10,
		paddingBottom: 10,

		value: '',
	};
	options = Object.assign({}, Text.defaultOptions);
	get lineHeight() {
		return this.options.lineHeight || (this.options.lineHeight = (this.options.size * 1.5) | 0);
	}
	set lineHeight(h) {
		this.options.lineHeight = h;
	}
	set font(font) {
		this._cacheFont = font;
	}
	get font() {
		return this._cacheFont || this.cacheFont()._cacheFont;
	}
	_cacheFont = '';
	cacheFont() {
		this._cacheFont = `${this.options.weight} ${this.options.size}px ${this.options.family}`;
		return this;
	}
	constructor(options, baseOptions) {
		super(baseOptions).setStyle(options);
	}
	setStyle(options) {
		if (!options) return this;
		Object.assign(this.options, options);
		if (this.options.value) this.separate(this.options.value);
		return this;
	}
	get width() {
		return this.size.x;
	}
	get height() {
		return this.size.y;
	}
	size = new MathVector2();

	set value(v) {
		if (this.options.value === v) return;
		if (!v && v !== 0) {
			v = '';
		} else if (typeof v != 'string') {
			v = v.toString();
		}
		this.options.value = v;
		this.separate(v);
	}
	get value() {
		return this.options.value;
	}

	//设置特殊字符表
	special = Object.assign({}, Text.defaultSpecial);
	setSpecial(special) {
		Object.assign(this.special, special);
		return this;
	}
	//绘制行结构
	_LineWidth = [];
	_Lines = [];
	_Handle = Object.assign({}, Text.defaultHandle);
	separate(value) {
		if (!Text.Context) return; //TODO 是否补充测试例
		Text.Context.font = this.font;
		this._Lines.length = 0;
		this._LineWidth.length = 0;
		this.size.setTo(0, this.options.size);
		for (let i = 0; i <= value.length; i++) this.checkCurrentText(value[i]);
		Object.assign(this._Handle, Text.defaultHandle);
		return this.setAnchorSize(Text.AlignWidth[this.options.align], Text.AlignHeight[this.options.baseline]);
	}
	//检查当前字符
	checkCurrentText(value) {
		if (!Text.Context) return; //TODO 是否补充测试例
		if (this.checkSpecial(value)) return;
		this._Handle.currentText = value;
		if (!this._Handle.currentText) {
			this._Handle.currentWidth = 0;
		} else {
			let measureText = Text.Context.measureText(this._Handle.currentText);
			this._Handle.currentWidth = measureText ? measureText.width : 0;
		}
		this._Handle.nextCursorX = this._Handle.cursorX + this._Handle.currentWidth;
		if (this.options.wrap >= 0 && this._Handle.nextCursorX > this.options.wrap) return this.newLine();
		this._Handle.cursorX = this._Handle.nextCursorX;
		this._Handle.currentString += this._Handle.currentText;
	}
	//检查特殊对象
	checkSpecialObject(special) {
		let width = special.width || this.options.size;
		this._Handle.nextCursorX = this._Handle.cursorX + width;
		if (this.options.wrap >= 0 && this._Handle.nextCursorX > this.options.wrap) {
			this._Lines.push('\n', special, '\0', special.width);
			this._LineWidth.push(this._Handle.cursorX);
			if (this._Handle.cursorX > this.size.x) this.size.x = this._Handle.cursorX;
			this.size.y += this.lineHeight;
			this._Handle.cursorX = special.width;
		} else {
			if (this._Handle.cursorX) this._Lines.push('\0', this._Handle.cursorX);
			this._Handle.cursorX = this._Handle.nextCursorX;
			this._Lines.push(special, '\0', this._Handle.cursorX);
		}
		this._Handle.currentString = '';
	}
	//检查特殊字符
	checkSpecial(str) {
		if (str === '\0') {
			this._Handle.Special = !this._Handle.Special;
			if (this._Handle.Special) {
				if (this._Handle.currentString) {
					this._Lines.push(this._Handle.currentString);
					this._Handle.currentString = '';
				}
			} else {
				this.checkSpecialObject(this.special[this._Handle.currentString]);
			}
			return true;
		} else if (this._Handle.Special) {
			this._Handle.currentString += str;
			return true;
		} else if (str === undefined) {
			if (this._Handle.currentString) {
				this._Lines.push(this._Handle.currentString);
			}
			this._LineWidth.push(this._Handle.cursorX);
			if (this._Handle.cursorX > this.size.x) this.size.x = this._Handle.cursorX;
			return true;
		} else if (str === '\n') {
			this.newLine();
			this._Handle.currentString = '';
			this._Handle.cursorX = 0;
			return true;
		}
	}
	//换行
	newLine() {
		//数据记录
		this._Lines.push(this._Handle.currentString, '\n');
		this._LineWidth.push(this._Handle.cursorX);
		//包围判断
		if (this._Handle.cursorX > this.size.x) this.size.x = this._Handle.cursorX;
		this.size.y += this.lineHeight;
		//游标重置
		this._Handle.currentString = this._Handle.currentText;
		this._Handle.cursorX = this._Handle.currentWidth;
	}

	setValue(v) {
		this.value = v;
		return this;
	}
	setAnchorSize(x = 0.5, y = 0.5) {
		this.anchor.x = this.size.x * x;
		this.anchor.y = this.size.y * y;
		return this;
	}
	_defineConfig(Context) {
		if (Context.font != this.font) Context.font = this.font;
		if (Context.fillStyle != this.options.color) Context.fillStyle = this.options.color;
		if (Context.textAlign != 'left') Context.textAlign = 'left';
		if (Context.textBaseline != 'top') Context.textBaseline = 'top';
		if (this.options.stroke > 0) {
			if (Context.strokeStyle != this.options.strokeColor) Context.strokeStyle = this.options.strokeColor;
			if (Context.lineWidth != this.options.stroke) Context.lineWidth = this.options.stroke;
		}
	}
	_offsetX(index) {
		return (this.size.x - this._LineWidth[index]) * Text.AlignWidth[this.options.align] - this.anchor.x;
	}
	_offsetY(index) {
		return ((this._Lines[index].height || this.options.size) - this.options.size) / 2;
	}
	update(Context) {
		if (!this.options.value) return;
		this._defineConfig(Context);
		let lineIndex = 0;
		let offsetX = this._offsetX(lineIndex++);
		let x = offsetX;
		let y = -this.anchor.y;
		for (let i = 0; i < this._Lines.length; i++) {
			if (this._Lines[i] === '\0') {
				x = offsetX + this._Lines[i + 1];
				i++;
				continue;
			}
			if (this._Lines[i] === '\n') {
				x = offsetX = this._offsetX(lineIndex++);
				y += this.lineHeight;
				continue;
			}
			if (typeof this._Lines[i] === 'object') {
				Context.drawImage(this._Lines[i], x, y - this._offsetY(i));
			} else {
				if (this.options.stroke > 0) Context.strokeText(this._Lines[i], x, y);
				Context.fillText(this._Lines[i], x, y);
			}
		}
	}
	hitMe(x, y) {
		return (
			x >= -this.options.paddingLeft &&
			x <= this.width + this.options.paddingRight &&
			y >= -this.options.paddingTop &&
			y <= this.height + this.options.paddingBottom
		);
	}
}
