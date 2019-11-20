export default (superClass = null) => {
	return class Text extends superClass {
		static AlignWidth = { left: 0, center: 0.5, right: 1 };
		static AlignHeight = { top: 0, middle: 0.5, bottom: 1, hanging: 0, alphabetic: 1, ideographic: 1 };
		static defaultHandle = { cursorX: 0, cursorY: 0, nextCursorX: 0, currentString: '', currentText: '', currentWidth: 0, Special: false };
		/**
		 * 当前内容字符串
		 */
		_value = '';
		set value(v) {
			if (this._value === v) return;
			if (!v && v !== 0) {
				v = '';
			} else if (typeof v != 'string') {
				v = v.toString();
			}
			this._value = v;
			this.separate(v);
		}
		get value() {
			return this._value;
		}
		setValue(v) {
			this.value = v;
			return this;
		}
		/**
		 * 特殊插入对象
		 */
		special = null;
		/**
		 * 换行属性
		 */
		wrap = { width: 0, height: 0 };
		get wrapWidth() {
			return this.wrap.width;
		}
		set wrapWidth(width) {
			this.wrap.width = width;
		}
		get lineHeight() {
			return this.wrap.height || (this.wrap.height = this.style ? (this.style.size * 1.5) | 0 : 0);
		}
		set lineHeight(h) {
			this.wrap.height = h;
		}
		/**
		 * @param {*} options
		 */
		setOptions(options) {
			if (super.setOptions) super.setOptions(options);
			if (options.wrapWidth) this.wrapWidth = options.wrapWidth;
			this.lineHeight = options.lineHeight;
			if (options.special) this.special = Object.assign(this.special || {}, options.special);
			if (options.value) this.value = options.value;
			return this;
		}
		/**
		 * 文本切割配置
		 */
		_LineWidth = [];
		_Lines = [];
		_Handle = Object.assign({}, Text.defaultHandle);
		separate(value) {
			if (!Text.Context) return; //TODO 是否补充测试例
			Text.Context.font = this.font;
			this._Lines.length = 0;
			this._LineWidth.length = 0;
			this.size.setTo(0, this.lineHeight);
			for (let i = 0; i <= value.length; i++) this.checkCurrentText(value[i]);
			Object.assign(this._Handle, Text.defaultHandle);
			return this.setAnchorSize(Text.AlignWidth[this.style.align], Text.AlignHeight[this.style.baseline]);
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
			if (this.wrapWidth >= 0 && this._Handle.nextCursorX > this.wrapWidth) return this.newLine();
			this._Handle.cursorX = this._Handle.nextCursorX;
			this._Handle.currentString += this._Handle.currentText;
		}
		//检查特殊对象
		checkSpecialObject(special) {
			let width = special.width || this.style.size;
			this._Handle.nextCursorX = this._Handle.cursorX + width;
			if (this.wrapWidth >= 0 && this._Handle.nextCursorX > this.wrapWidth) {
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
		/**
		 * 正式绘制
		 */
		_defineConfig(Context) {
			if (Context.font != this.font) Context.font = this.font;
			if (Context.fillStyle != this.style.color) Context.fillStyle = this.style.color;
			if (Context.textAlign != 'left') Context.textAlign = 'left';
			if (Context.textBaseline != 'top') Context.textBaseline = 'top';
			if (this.style.stroke > 0) {
				if (Context.strokeStyle != this.style.strokeColor) Context.strokeStyle = this.style.strokeColor;
				if (Context.lineWidth != this.style.stroke) Context.lineWidth = this.style.stroke;
			}
		}
		_offsetX(index) {
			return (this.size.x - this._LineWidth[index]) * Text.AlignWidth[this.style.align] - this.anchor.x;
		}
		_offsetY(index) {
			return ((this._Lines[index].height || this.style.size) - this.style.size) / 2;
		}
		update(Context) {
			if (!this.value) return;
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
					if (this.style.stroke > 0) Context.strokeText(this._Lines[i], x, y);
					Context.fillText(this._Lines[i], x, y);
				}
			}
		}
	};
};
