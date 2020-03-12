import Event from '../utils/event.js';
import Vector2 from '../vector/vector2.js';
import Color from '../vector/color.js';
import Matrix4 from '../vector/matrix4.js';
export default class Container extends Event {
	constructor(options = {}) {
		super();
		this.id = Container.id ? ++Container.id : (Container.id = 1);
		this.parent = null;
		this.children = [];
		this.touchChildren = true;
		this.visible = !(options.visible === false);
		this.color = options.color || new Color(options.red || 1, options.green || 1, options.blue || 1, options.alpha || 1);
		this.opacity = options.opacity || 1;
		this.zIndex = options.zIndex || 0;

		this.transformParentId = 0;
		this.transformId = 1;
		this.needUpdateTransform = true;
		this.matrix = new Matrix4();
		this.position = new Vector2(options.x || 0, options.y || 0);
		this.scale = new Vector2(options.scaleX || 1, options.scaleY || 1);
		this.angle = options.angle || 0;
		if (options.radian) this.radian = options.radian;

		this.on('destroy', function() {
			for (let i = 0; i < this.children.length; i++) this.children[i].emit('destroy');
		});
	}
	updateTransform(trace = true) {
		if (this.parent) {
			if (trace) this.parent.updateTransform(trace);
			if (!this.needUpdateTransform && this.transformParentId == this.parent.transformId) return;
			this.matrix.setApply(this.parent.matrix);
		} else {
			if (!this.needUpdateTransform) return;
			this.matrix.identity();
		}
		this.matrix.translate(this.x, this.y, 0);
		this.matrix.rotate(this.radian, 0, 0, 1);
		this.matrix.scale(this.scaleX, this.scaleY, 1);
		this.needUpdateTransform = false;
		this.transformId++;
		this.transformParentId = this.parent ? this.parent.transformId : 0;
	}
	get x() {
		return this.position.x;
	}
	set x(x) {
		if (this.position.x == x) return;
		this.position.x = x;
		this.needUpdateTransform = true;
	}
	get y() {
		return this.position.y;
	}
	set y(y) {
		if (this.position.y == y) return;
		this.position.y = y;
		this.needUpdateTransform = true;
	}
	setPosition(x, y) {
		this.x = x;
		this.y = y;
		return this;
	}
	get scaleX() {
		return this.scale.x;
	}
	set scaleX(x) {
		if (this.scale.x == x) return;
		this.scale.x = x;
		this.needUpdateTransform = true;
	}
	get scaleY() {
		return this.scale.y;
	}
	set scaleY(y) {
		if (this.scale.y == y) return;
		this.scale.y = y;
		this.needUpdateTransform = true;
	}
	setScale(x, y) {
		this.scaleX = x;
		this.scaleY = y;
		return this;
	}
	get radian() {
		return this._radian;
	}
	set radian(r) {
		if (r == this._radian) return;
		this._radian = r;
		this.needUpdateTransform = true;
	}
	setRadian(a) {
		this.radian = a;
		return this;
	}
	get angle() {
		return (this.radian * 180) / Math.PI;
	}
	set angle(v) {
		let a = (v * Math.PI) / 180;
		if (a == this._radian) return;
		this._radian = a;
		this.needUpdateTransform = true;
	}
	setAngle(a) {
		this.angle = a;
		return this;
	}

	getWorldVector(vector, clone = false) {
		vector = clone ? vector.clone() : vector;
		return vector.multiplyMatrix4(this.matrix);
	}
	put(object3d) {
		if (this.parent) this.parent.remove(this);
		if (!object3d) return this;
		this.emit('create');
		object3d.children.push(this);
		this.parent = object3d;
		this.transformParentId = 0;
		this.emit('created');
		return this;
	}
	add(object3d) {
		if (arguments.length > 1) {
			for (let i = 0; i < arguments.length; i++) this.add(arguments[i]);
		} else if (object3d instanceof Array) {
			for (let i = 0; i < object3d.length; i++) this.add(object3d[i]);
		} else if (object3d) {
			object3d.put(this);
		}
		return this;
	}
	remove(object3d) {
		if (arguments.length > 1) {
			for (let i = 0; i < arguments.length; i++) this.remove(arguments[i]);
		} else if (object3d instanceof Array) {
			for (let i = 0; i < object3d.length; i++) this.remove(object3d[i]);
		} else if (object3d) {
			object3d.emit('destroy', this);
			let index = this.children.indexOf(object3d);
			this.children.splice(index, 1);
			object3d.parent = null;
			object3d.emit('destroyed', this);
		}
		return this;
	}
	clear() {
		for (let i = 0; i < this.children.length; i++) {
			this.children[i].emit('destroy', this);
			this.children[i].parent = null;
			this.children[i].emit('destroyed', this);
		}
		this.children.length = 0;
		return this;
	}
	pushTo(array = [], opacity = 1) {
		if (!this.visible) return array;
		if (this.preUpdate && this.preUpdate(array)) return array;
		this.updateTransform(false);
		this._opacity = this.opacity == 1 ? opacity : this.opacity;
		array.push(this);
		for (let i = 0, len = this.children.length; i < len; i++) {
			this.children[i].pushTo(array, this._opacity);
		}
		return array;
	}
}
