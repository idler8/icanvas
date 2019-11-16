import Event from 'eventemitter3';
export default class Load extends Event {
	Set(url) {
		throw Error('请先挂载加载函数(Set)');
	}
	Get() {
		throw Error('请先挂载读取函数(Get)');
	}
	resources = {};
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
}
