import Vector2 from '../vector/vector2.js';
import Event from './event.js';
class TouchEvent extends Vector2 {
	constructor(id, time, x, y) {
		super(x, y); //当前位置
		this.start = new Vector2(x, y); //起始位置
		this.tick = new Vector2(0, 0); //本帧移动
		this.begin = this.over = time; //触摸时长
		this.id = id;
	}
	get long() {
		return this.over - this.begin;
	}
	get startX() {
		return this.start.x;
	}
	get startY() {
		return this.start.y;
	}
	get endX() {
		return this.x;
	}
	get endY() {
		return this.y;
	}
	get moveX() {
		return this.x - this.start.x;
	}
	get moveY() {
		return this.y - this.start.y;
	}
	get distance() {
		return this.distVector(this.start);
	}
	set(x, y) {
		this.tick.set(x - this.x, y - this.y);
		return super.set(x, y);
	}
}
export default class Touch extends Event {
	constructor() {
		super();
		this.size = new Vector2();
		this.offset = new Vector2();
		this.touches = {};
	}
	getX(x) {
		return (x - this.offset.x) * this.size.x;
	}
	getY(y) {
		return (y - this.offset.y) * this.size.y;
	}
	start(e) {
		let now = Date.now();
		for (let i = 0, l = e.changedTouches.length; i < l; i++) {
			let touch = e.changedTouches[i];
			let id = touch.identifier;
			this.touches[id] = new TouchEvent(id, now, this.getX(touch.clientX), this.getY(touch.clientY));
			this.emit('touchStart', this.touches[id]);
		}
		return this;
	}
	move(e) {
		for (let i = 0, l = e.changedTouches.length; i < l; i++) {
			let touch = e.changedTouches[i];
			let id = touch.identifier;
			if (!this.touches[id]) continue;
			this.touches[id].set(this.getX(touch.clientX), this.getY(touch.clientY));
			this.emit('touchMove', this.touches[id]);
		}
		return this;
	}
	end(e) {
		let now = Date.now();
		for (let i = 0, l = e.changedTouches.length; i < l; i++) {
			let touch = e.changedTouches[i];
			let id = touch.identifier;
			if (!this.touches[id]) continue;
			this.touches[id].over = now;
			this.touches[id].set(this.getX(touch.clientX), this.getY(touch.clientY), now);
			this.emit('touchEnd', this.touches[id]);
			delete this.touches[id];
		}
		return this;
	}
}
