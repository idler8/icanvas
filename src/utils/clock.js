import Event from './event.js';
export default class Clock extends Event {
	constructor() {
		super();
		this.time = this.then = this.history = Date.now();
		this.interval = 1000 / 60;
		this.tick = this.move = 0;
	}
	step() {
		this.time = Date.now(); //当前时间
		let change = this.time - this.then; //当前时间和上一帧的差
		if (change < this.interval) return false; //小于一帧
		this.tick = (change / this.interval) | 0; //本次步进帧数
		let delta = change % this.interval; //最多步进整数帧时长
		this.then = this.time - delta; //记录本帧执行到的时间点
		this.move = this.time - this.history; //真实变化时长
		this.history = this.time; //记录上一次变化时间
		return true; //真实变化时长
	}
	run(Interval = 1000 / 60) {
		this.interval = Interval;
		let render = this;
		let HandleUpdate = function() {
			requestAnimationFrame(HandleUpdate);
			if (!render.step()) return;
			render.emit('tick');
		};
		requestAnimationFrame(HandleUpdate);
		return this;
	}
}
