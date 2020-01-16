import Vector2 from '../vector/vector2.js';
import Matrix4 from '../vector/matrix4.js';
import Event from '../utils/event.js';
export default class Container extends Event {
	define(key, object, okey, event, set, get) {
		let setgetkey = key.substr(0, 1).toUpperCase() + key.substr(1).toLowerCase();
		this['set' + setgetkey] =
			set ||
			function(v) {
				if (object[okey] == v) return this;
				object[okey] = v;
				if (event) this.emit(event, key, v);
				return this;
			};
		this['get' + setgetkey] =
			get ||
			function(v) {
				return object[okey];
			};
		Object.defineProperty(this, key, {
			set: this['set' + setgetkey],
			get: this['get' + setgetkey],
		});
	}
	constructor(options = {}) {
		super();
		this.id = Container.id ? ++Container.id : (Container.id = 1);
		this.visible = true;
		this.parent = null;
		this.children = [];
		this.touchChildren = true;
		if (options.visible === false) this.visible = false;
		if (options.children && options.children.length) this.add(options.children);

		this.worldMatrix = new Matrix4(); //矩阵
		this._updateMatrix = true; //将在下一帧更新矩阵
		this._updateMatrixInvert = true; //将在下一次需要时更新矩阵
		this.on('updateMatrix', function() {
			this._updateMatrix = true;
			for (let i = 0, len = this.children.length; i < len; i++) {
				this.children[i].emit('updateMatrix');
			}
		});

		this.radian = 0;
		if (options.angle) this.angle = options.angle;

		this._zIndex = 0;
		this.define('zIndex', this, '_zIndex');
		if (options.zIndex) this.zIndex = options.zIndex;

		this.position = new Vector2();
		if (options.position) this.position.setApply(options.position);
		this.define('x', this.position, 'x', 'updateMatrix');
		if (options.x) this.x = options.x;
		this.define('y', this.position, 'y', 'updateMatrix');
		if (options.y) this.y = options.y;

		this.scale = new Vector2(1, 1);
		if (options.scale) this.scale.same(options.scale);
		this.define('scaleX', this.scale, 'x', 'updateMatrix');
		if (options.scaleX) this.scaleX = options.scaleX;
		this.define('scaleY', this.scale, 'y', 'updateMatrix');
		if (options.scaleY) this.scaleY = options.scaleY;

		this.anchor = new Vector2(0, 0);
		this.define('anchorX', this.anchor, 'x', 'updateMatrix');
		if (options.anchorX) this.anchorX = options.anchorX;
		this.define('anchorY', this.anchor, 'y', 'updateMatrix');
		if (options.anchorY) this.anchorY = options.anchorY;

		this.size = new Vector2();
		if (options.size) this.size.setApply(options.size);
		this.define('width', this.size, 'x', 'updateMatrix');
		if (options.width !== undefined) this.width = options.width;
		this.define('height', this.size, 'y', 'updateMatrix');
		if (options.height !== undefined) this.height = options.height;

		this.define(
			'angle',
			this,
			'radian',
			'updateMatrix',
			function(v) {
				let a = (v * Math.PI) / 180;
				if (a == this.radian) return this;
				this.radian = a;
				this.emit('updateMatrix');
				return this;
			},
			function() {
				return (this.radian * 180) / Math.PI;
			},
		);
		if (options.angle !== undefined) this.angle = options.angle;
	}
	setSize(x, y) {
		this.width = x;
		this.height = y;
		return this;
	}
	setPosition(x, y) {
		this.x = x;
		this.y = y;
		return this;
	}
	setScale(x, y) {
		this.scaleX = x;
		this.scaleY = y;
		return this;
	}
	get updateMatrix() {
		return this._updateMatrix;
	}
	set updateMatrix(u) {
		if (u) {
			this.emit('updateMatrix');
		} else {
			this._updateMatrix = u;
		}
	}
	put(object3d) {
		return object3d.add(this);
	}
	add(object3d) {
		if (arguments.length > 1) {
			for (let i = 0; i < arguments.length; i++) this.add(arguments[i]);
		} else if (object3d instanceof Array) {
			for (let i = 0; i < object3d.length; i++) this.add(object3d[i]);
		} else if (object3d) {
			object3d.emit('create');
			if (object3d.parent) object3d.remove(this);
			this.children.push(object3d);
			object3d.parent = this;
			object3d.emit('created');
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
			object3d.clear();
			let index = this.children.indexOf(object3d);
			this.children.splice(index, 1);
			object3d.parent = null;
			object3d.emit('destroyd', this);
		}
		return this;
	}
	clear() {
		//TODO lockChildren
		return this.remove(this.children);
	}
	preUpdate(render) {
		if (!this.visible) return true;
		if (this._updateMatrix) this.updateTransform();
		render.renderArray.push(this);
		for (let i = 0, len = this.children.length; i < len; i++) this.children[i].preUpdate(render);
	}
	updateTransform(matrix) {
		this._updateMatrix = false;
		if (matrix) {
			this.worldMatrix.setApply(matrix);
		} else {
			if (this.parent) {
				if (this.parent._updateMatrix) this.parent.updateTransform();
				this.worldMatrix.setApply(this.parent.worldMatrix);
			} else {
				this.worldMatrix.identity();
			}
		}
		this.worldMatrix.translate(this.x, this.y, 0);
		this.worldMatrix.rotate(this.radian, 0, 0, 1);
		this.worldMatrix.scale(this.scaleX, this.scaleY, 1);
		this.worldMatrix.translate(-this.anchorX, -this.anchorY, 0);
		this._updateMatrixInvert = true;
		return this;
	}
	getWorldVector(vector, clone = false) {
		if (this._updateMatrix) this.updateTransform();
		if (!vector) {
			vector = new Vector2();
		} else if (clone) {
			vector = vector.clone();
		}
		return vector.multiplyMatrix4(this.worldMatrix);
	}
	getLocalVector(vector) {
		if (this._updateMatrixInvert) {
			if (this._updateMatrix) this.updateTransform();
			if (!this.worldMatrixInvert) this.worldMatrixInvert = new Matrix4();
			this.worldMatrixInvert.setApply(this.worldMatrix).invert();
			this._updateMatrixInvert = false;
		}
		return vector.multiplyMatrix4(this.worldMatrixInvert);
	}
}
