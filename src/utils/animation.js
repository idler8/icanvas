export default class Animation {
	constructor(context, options = {}) {
		this.context = context;
		this.duration = 0; //总时长
		this.timing = []; //时序列表
		this.repeat = options.repeat || 0; //重复次数
		this.speed = options.scale || 1; //动画速度
		this.runtime = {};
		this.currentTime = 0; //开始时间戳
		this.stepTime = 0; //上一步时序
		this.paused = options.paused || false; //暂停状态
	}
	clone(context) {
		return new this.constructor(context, this).set(this.timing);
	}
	set(timing) {
		if (timing instanceof Array) {
			for (let i = 0; i < timing.length; i++) this.set(timing[i]);
		} else {
			let duration = timing.duration || 0;
			if (timing.to) {
				this.to(timing.to, duration, timing.position);
			} else if (duration) {
				this.wait(duration, timing.position);
			}
			this.call(timing.call, duration + timing.position);
		}
		return this;
	}
	add(duration, position) {
		let start = this.duration; //TODO position改变start时间
		let end = start + duration;
		let timing = { start, duration, end };
		this.timing.push(timing);
		this.duration = Math.max(this.duration, end);
		return timing;
	}
	to(to, duration, position) {
		let timing = this.add(duration, position);
		timing.to = to;
		return this;
	}
	wait(duration, position) {
		this.add(duration, position);
		return this;
	}
	call(call, position) {
		let timing = this.add(0, position);
		timing.call = call;
		return this;
	}
	play(position = 0) {
		if (!this.context) return this;
		this.currentTime = Date.now() - position; //开始时间戳
		this.stepTime = 0; //上一步时序
		this.paused = false; //不暂停
		return this;
	}
	pause(paused) {
		this.paused = paused;
		return this;
	}
	scale(scale) {
		if (scale === undefined) return this.speed;
		// let step = this.stepTime / this.duration;
		// this.currentTime += this.stepTime - (this.stepTime * scale) / this.speed;
		// console.log(step, this.stepTime, step - this.stepTime);
		// this.stepTime = step;
		this.speed = scale;
		return this;
	}
	step(current) {
		if (!this.currentTime) return;
		if (!current) current = Date.now();
		let longTime = current - this.currentTime;
		this.currentTime = current;
		if (this.paused) return;
		let stepStart = this.stepTime;
		let stepEnd = stepStart + longTime * this.speed;
		for (let i = 0; i < this.timing.length; i++) {
			let { start, duration, end, call, to } = this.timing[i];
			if (call && start > stepStart && start <= stepEnd) {
				if (typeof call == 'string') {
					if (this.context[call]) this.context[call]();
				} else if (typeof call == 'function') {
					call.call(this.context);
				}
			}
			if (!to) continue;
			if (end > stepStart && end <= stepEnd) {
				for (let key in to) this.context[key] = to[key];
			} else {
				if (start >= stepStart && start < stepEnd) {
					for (let key in to) {
						this.runtime[key] = this.context[key];
					}
				}
				if (stepEnd > start && stepEnd < end) {
					let mult = (stepEnd - start) / duration;
					for (let key in to) {
						this.context[key] = (to[key] - this.runtime[key]) * mult;
					}
				}
			}
		}
		if (stepEnd >= this.duration) {
			this.repeat ? this.play(stepEnd - this.duration) : this.pause();
		} else {
			this.stepTime = stepEnd;
		}
	}
}
