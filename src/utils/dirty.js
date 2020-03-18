export default class Dirty {
	constructor(interval = 600) {
		this.collect = [];
		this.used = [];
		this.running = false;
		this.interval = interval;
		this.stepid = 0;
	}
	add(cache) {
		if (cache.destroy) this.collect.push(cache);
	}
	use(cache) {
		if (this.running) this.used.push(cache);
	}
	dispose() {
		if (!this.running) return;
		this.collect.forEach(cache => {
			if (this.used.indexOf(cache) === -1) {
				cache.destroy.apply(cache, arguments);
			}
		});
		this.collect = [].concat(this.used);
		this.used.length = 0;
		this.running = false;
	}
	step(n = 1) {
		this.stepid += n;
		if (this.stepid <= this.interval) return;
		this.stepid = 0;
		this.running = true;
	}
}
