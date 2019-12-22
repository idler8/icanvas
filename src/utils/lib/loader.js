import Event from 'eventemitter3';
export default class Loader extends Event {
	constructor() {
		super();
		this.resources = {};
	}
	Set(url) {
		throw Error('请先挂载加载函数(Set)');
	}
	load(key, url) {
		this.emit('load', key, url);
		return this.Set(url).then(res => {
			this.emit('loaded', key, url, res);
			this.resources[key] = res;
		});
	}
	preLoad(map = {}, prefix = '') {
		let Keys = Object.keys(map);
		this.emit('preLoad', Keys.length);
		return Promise.all(Keys.map(key => this.load(prefix + key, map[key])));
	}
	loadMap(map = {}, root = '', perfix = '', exts) {
		let Result = {};
		Object.keys(map).forEach(k => {
			if (k == '_') {
				if (exts.indexOf(map[k]) == -1) return;
				let key = perfix.slice(0, -1);
				let url = root + perfix.slice(0, -1) + '.' + map[k];
				Result[key] = url;
			} else if (typeof map[k] == 'string') {
				if (exts.indexOf(map[k]) == -1) return;
				let key = perfix + k;
				let url = root + perfix + k + '.' + map[k];
				Result[key] = url;
			} else {
				Object.assign(Result, this.loadMap(map[k], root, perfix + k + '/', exts));
			}
		});
		return Result;
	}
}
