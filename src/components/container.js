import Event from '../utils/event.js';
import { Transform } from '../prototype.js';
export default class Container extends Event {
	constructor(options = {}) {
		super();
		this.id = Container.id ? ++Container.id : (Container.id = 1);
		this.parent = null;
		this.children = [];
		this.touchChildren = true;
		this.visible = !(options.visible === false);
		this.zIndex = options.zIndex || 0;
		this.on('destroy', function() {
			for (let i = 0; i < this.children.length; i++) this.children[i].emit('destroy');
		});

		this.transform = options.transform || new Transform(options);
		this.on('updateTransform', function(now) {
			if (now && this.transform.isStop(now)) return;
			if (this.parent) {
				this.parent.emit('updateTransform', now);
				this.transform.isFollow(this.parent.transform);
				this.transform.update(this.parent.transform.matrix);
			} else {
				this.transform.update();
			}
		});
	}
	set x(a) {
		this.transform.x = a;
	}
	get x() {
		return this.transform.x;
	}
	set y(a) {
		this.transform.y = a;
	}
	get y() {
		return this.transform.y;
	}
	setPosition(x, y) {
		this.transform.x = x;
		this.transform.y = y;
		return this;
	}
	set scaleX(a) {
		this.transform.scaleX = a;
	}
	get scaleX() {
		return this.transform.scaleX;
	}
	set scaleY(a) {
		this.transform.scaleY = a;
	}
	get scaleY() {
		return this.transform.scaleY;
	}
	setScale(x, y) {
		this.transform.scaleX = x;
		this.transform.scaleY = y;
		return this;
	}
	set radian(a) {
		this.transform.radian = a;
	}
	get radian() {
		return this.transform.radian;
	}
	setRadian(a) {
		this.transform.radian = a;
		return this;
	}
	set angle(a) {
		this.transform.angle = a;
	}
	get angle() {
		return this.transform.angle;
	}
	setAngle(a) {
		this.transform.angle = a;
		return this;
	}

	getWorldVector(vector, clone = false) {
		vector = clone ? vector.clone() : vector;
		this.emit('updateTransform');
		return vector.multiplyMatrix4(this.transform.matrix);
	}
	put(object3d) {
		if (this.parent) this.parent.remove(this);
		if (!object3d) return this;
		this.emit('create');
		object3d.children.push(this);
		this.parent = object3d;
		this.transform.parentId = 0;
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
}
