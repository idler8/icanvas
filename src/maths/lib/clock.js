export default class Clock {
	time = 0; //本帧时间
	then = 0; //上一帧时间
	change = 0; //与上一帧的时差
	delta = 0; //与上一帧的时差
	interval = 1000 / 60; //步长
	reset(interval = this.interval) {
		this.interval = interval;
		this.then = this.time = Date.now();
	}
	step() {
		this.time = Date.now();
		this.change = this.time - this.then;
		if (this.change > this.interval) {
			this.delta = this.change % this.interval;
			this.then = this.time - this.delta;
			return true;
		}
	}
}
