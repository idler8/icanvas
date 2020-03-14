import Container from './container.js';
export default class Director extends Container {
	constructor(options) {
		super(options);
		this.scenes = {};
		this.needUpdateTransform = false;
		this.widthCache = {};
		this.heightCache = {};
	}
	get width() {
		return this._width;
	}
	set width(w) {
		this._width = w;
		this.widthCache = {};
	}
	getX(n = 1) {
		return this.widthCache[n] || (this.widthCache[n] = this._width * n);
	}
	get height() {
		return this._height;
	}
	set height(h) {
		this._height = h;
		this.heightCache = {};
	}
	getY(n = 1) {
		return this.heightCache[n] || (this.heightCache[n] = this._height * n);
	}
	get center() {
		return this.getX(0.5);
	}
	get middle() {
		return this.getY(0.5);
	}
	set(name, scene) {
		if (Object.prototype.toString.call(scene) == '[object Function]') {
			if (scene.constructor) this.scenes[name] = scene;
		}
		return this;
	}
	go(scene) {
		let type = Object.prototype.toString.call(scene);
		if (type == '[object String]') {
			if (this.scenes[scene]) this.clear().add(new this.scenes[scene](...Array.prototype.splice(1)));
		} else if (type == '[object Function]') {
			if (scene.constructor) {
				this.clear().add(new scene(...Array.prototype.splice(1)));
			} else {
				let res = scene(...Array.prototype.splice(1));
				if (res instanceof Container) this.clear().add(res);
			}
		} else if (type == '[object Object]') {
			if (scene instanceof Container) this.clear().add(scene);
		}
		return this;
	}
}
