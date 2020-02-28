import Vector2 from './vector/vector2.js';
import Matrix4 from './vector/matrix4.js';
export class Transform {
	constructor(options = {}) {
		this.matrix = new Matrix4();
		this.position = new Vector2(options.x || 0, options.y || 0);
		this.scale = new Vector2(options.scaleX || 1, options.scaleY || 1);
		this._radian = options.radian || 0;
		if (options.angle) this.angle = options.angle;

		this.id = Transform.id ? ++Transform.id : (Transform.id = 1);
		this.loopId = 0;
		this.parentId = 0;
		this.worldId = 1;
		this.needUpdate = true;
	}
	get x() {
		return this.position.x;
	}
	set x(x) {
		if (this.position.x == x) return;
		this.position.x = x;
		this.needUpdate = true;
	}
	get y() {
		return this.position.y;
	}
	set y(y) {
		if (this.position.y == y) return;
		this.position.y = y;
		this.needUpdate = true;
	}
	get scaleX() {
		return this.scale.x;
	}
	set scaleX(x) {
		if (this.scale.x == x) return;
		this.scale.x = x;
		this.needUpdate = true;
	}
	get scaleY() {
		return this.scale.y;
	}
	set scaleY(y) {
		if (this.scale.y == y) return;
		this.scale.y = y;
		this.needUpdate = true;
	}
	get radian() {
		return this._radian;
	}
	set radian(r) {
		if (r == this._radian) return;
		this._radian = r;
		this.needUpdate = true;
	}
	get angle() {
		return (this.radian * 180) / Math.PI;
	}
	set angle(v) {
		let a = (v * Math.PI) / 180;
		if (a == this._radian) return;
		this._radian = a;
		this.needUpdate = true;
	}
	isStop(now) {
		if (this.loopId === now) return true;
		this.loopId = now;
	}
	isFollow(transform) {
		if (transform.worldId == this.parentId) return;
		this.parentId = transform.worldId;
		this.needUpdate = true;
	}
	update(matrix) {
		if (!this.needUpdate) return;
		matrix ? this.matrix.setApply(matrix) : this.matrix.identity();
		this.matrix.translate(this.position.x, this.position.y, 0);
		this.matrix.rotate(this.radian, 0, 0, 1);
		this.matrix.scale(this.scale.x, this.scale.y, 1);
		this.needUpdate = false;
		this.worldId++;
	}
}
export class Shape {
	constructor(options = {}) {
		this.anchor = new Vector2(options.anchorX || 0, options.anchorY || 0);
		this.size = new Vector2(options.width || 0, options.height || 0);
		this.staticWidth = options.width ? true : false;
		this.staticHeight = options.height ? true : false;

		this.clipPosition = new Vector2();
		this.clipSize = new Vector2();

		this.morph = options.morph || 'Rectangle';
		this.needUpdate = true;

		this.buffer = null;
	}
	set width(a) {
		this.size.x = a;
		this.staticWidth = true;
		this.needUpdate = true;
	}
	get width() {
		return this.size.x;
	}
	set height(a) {
		this.size.y = a;
		this.staticHeight = true;
		this.needUpdate = true;
	}
	get height() {
		return this.size.y;
	}
	set anchorX(x) {
		this.anchor.x = x;
		this.needUpdate = true;
	}
	get anchorX() {
		return this.anchor.x;
	}
	set anchorY(y) {
		this.anchor.y = y;
		this.needUpdate = true;
	}
	get anchorY() {
		return this.anchor.y;
	}

	updateTexture(texture) {
		if (!texture) return (this.needUpdate = false);
		if (!this.staticWidth) this.size.x = texture.width;
		if (!this.staticHeight) this.size.y = texture.height;

		let real = texture.baseTexture || texture;
		this.clipPosition.set(texture.x ? texture.x / real.width : 0, texture.y ? texture.y / real.height : 0);
		this.clipSize.set(texture.width ? texture.width / real.width : 0, texture.height ? texture.height / real.height : 0);

		this.needUpdate = true;
	}
	update(render) {
		if (!this.needUpdate) return;
		render.shapeToBuffer(this);
		this.needUpdate = false;
	}
	get left() {
		return -this.size.x / 2 - this.anchor.x;
	}
	get right() {
		return this.size.x / 2 - this.anchor.x;
	}
	get top() {
		return -this.size.y / 2 - this.anchor.y;
	}
	get bottom() {
		return this.size.y / 2 - this.anchor.y;
	}
}
export class RichText {
	constructor(context, options = {}) {
		this.fillStyle = options.fillStyle || '#FFFFFF';
		this.strokeStyle = options.strokeStyle || '#000000';
		this.lineWidth = options.lineWidth || 0;
		this.family = options.family || 'icanvas';
		this.size = options.size || 36;
		this.weight = options.weight || false;
		this.align = options.align || 'center';
		this.baseline = options.baseline || 'middle';
		this.wrapWidth = options.wrapWidth || -1;
		if (options.lineHeight > 0) {
			this.lineHeight = options.lineHeight;
			this.autoLineHeight = false;
		} else {
			this.lineHeight = this.size;
			this.autoLineHeight = true;
		}
		this.context = context;
		this.icons = options.icons;
	}
	get value() {
		return this._value;
	}
	set value(v) {
		v = '' + v;
		if (v == this._value) return;
		this._value = v;
		this.updateValue(v, this.icons);
		if (this.update) this.update();
	}
	mergeStyle(handle) {
		handle.fillStyle = this.fillStyle;
		handle.strokeStyle = this.strokeStyle;
		handle.lineWidth = this.lineWidth;
		handle.family = this.family;
		handle.size = this.size;
		handle.weight = this.weight;
	}
	mergeContext(handle, init = false) {
		let context = this.context;
		context.fillStyle = handle.fillStyle;
		context.strokeStyle = handle.strokeStyle;
		context.lineWidth = handle.lineWidth;
		if (!init) return;
		context.textAlign = 'left';
		context.textBaseline = 'top';
	}
	mergeFamily(handle) {
		this.context.font = handle.size + 'px ' + handle.family + (handle.weight ? ' bold' : '');
	}
	checkSize(structure, width, height) {
		let lines = structure.contents;
		if (this.wrapWidth >= 0 && lines[0].width + width > this.wrapWidth) this.addLine();
		if (this.autoLineHeight && height > lines[0].height) lines[0].height = height;
		lines[0].width += width;
	}
	addLine(structure) {
		let lines = structure.contents;
		structure.height += lines[0].height;
		if (lines[0].width > structure.width) structure.width = lines[0].width;
		structure.contents.unshift({ width: 0, height: this.lineHeight, contents: [] });
	}
	updateValue(values, icons) {
		if (!values) return; //this.Empty;
		let context = this.context;
		let handle = {};
		this.mergeStyle(handle);
		this.mergeFamily(handle);
		let tags = {}; //文本内特殊标签
		values.replace(/\<(fillStyle|strokeStyle|lineWidth|family|weight|size|i)\=(\S+?)\>/g, function(tag, action, arg, index) {
			if (action == 'i') {
				if (!icons[arg]) return tag;
				tags[index] = { action, arg: icons[arg], length: tag.length - 1 };
			} else {
				tags[index] = { action, arg: arg == '@' ? family[action] : arg, length: tag.length - 1 };
			}
			return tag;
		});

		let structure = { width: this.wrapWidth, height: 0, contents: [{ width: 0, height: this.lineHeight, contents: [] }] };
		for (let i = 0, len = values.length; i < len; i++) {
			let v = values[i];
			if (tags[i]) {
				let tag = tags[i];
				i += tag.length;
				if (tag.action != 'i') {
					handle[tag.action] = tag.arg;
					this.mergeFamily(handle);
				} else {
					this.checkSize(structure, tag.arg.width, tag.arg.height);
				}
				structure.contents[0].contents.push(tag);
			} else if (v === '\n') {
				this.addLine(structure);
			} else {
				let width = context.measureText(v).width;
				this.checkSize(structure, width, handle.size);
				structure.contents[0].contents.push({ value: v, width, height: handle.size });
			}
		}
		structure.height += structure.contents[0].height;
		if (structure.contents[0].width > structure.width) structure.width = structure.contents[0].width;
		this.mergeStyle(handle);
		let totalWidth = (context.canvas.width = structure.width);
		context.canvas.height = structure.height;
		this.mergeFamily(handle);
		this.mergeContext(handle, true);
		let offsetTop = 0;
		for (let i = structure.contents.length - 1; i >= 0; i--) {
			let { width, height, contents } = structure.contents[i];
			let offsetLeft = (totalWidth - width) * 0.5; //handle.align
			for (let j = 0; j < contents.length; j++) {
				let element = contents[j];
				if (element.value) {
					context.fillText(element.value, offsetLeft, offsetTop + (height - element.height) * 0.5); //handle.baseline
					offsetLeft += element.width;
				} else if (element.action == 'i') {
					let texture = element.arg;
					let dy = offsetTop + (height - element.arg.height) * 0.5;
					if (texture.baseTexture) {
						let image = texture.baseTexture.source;
						context.drawImage(image, texture.x, texture.y, texture.width, texture.height, offsetLeft, dy, texture.width, texture.height);
					} else {
						let image = texture.source;
						context.drawImage(image, offsetLeft, dy, texture.width, texture.height);
					}
					offsetLeft += element.arg.width;
				} else {
					handle[element.action] = element.arg;
					this.mergeFamily(handle);
					this.mergeContext(handle);
				}
			}
			offsetTop += height;
		}
	}
}
