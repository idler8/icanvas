export default class Dirty {
	constructor(interval = 600) {
		this.collect = [];
		this.used = [];
		this.running = false;
		this.interval = interval;
		this.tickid = 0;
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
	tick(n = 1) {
		this.tickid += n;
		if (this.tickid <= this.interval) return;
		this.tickid = 0;
		this.running = true;
	}
}
