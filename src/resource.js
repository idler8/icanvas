export class Loader {
	constructor(loader) {
		this.resources = {};
		this.loader = loader;
	}
	loads(map = {}, prefix = '', loaded) {
		let Keys = Object.keys(map);
		return Promise.all(
			Keys.map(key => {
				let load = this.load(prefix + key, map[key]);
				return loaded ? load.then(loaded) : load;
			}),
		);
	}
	get(key) {
		return this.resources[key];
	}
}
export class Image extends Loader {
	//读取并生成贴图对象
	load(key, url) {
		return this.loader.load(url).then(image => {
			this.resources[key] = image;
		});
	}
}
export class Audio extends Loader {
	load(key, url) {
		return this.loader.load(url).then(audio => (this.resources[key] = audio));
	}
	//静音
	_mute = false;
	get mute() {
		return this._mute;
	}
	set mute(mute) {
		this._mute = mute;
		this.loader.mute(mute);
	}
	//设置音量
	set volume(v = 0) {
		this.loader.volume(v);
	}
	get volume() {
		return this.loader.volume();
	}
}
