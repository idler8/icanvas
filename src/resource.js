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
export class ImageSource {
	constructor(image) {
		this.source = image;
		this.src = image.src;
		this.sourceId = 0; //资源Id
		this.width = 0; //资源宽
		this.height = 0; //资源高

		this.texture = null; //webgl纹理储存位置
		this.textureId = 0; //纹理ID
		this.forever = this.src ? true : false; //生成纹理后禁止删除
		this.optimization = false; //在生成纹理后干掉源内存
		this.update();
	}
	update() {
		this.sourceId++;
		this.width = this.source.width;
		this.height = this.source.height;
	}
	getContext(type) {
		if (this.context) return this.context;
		if (!this.source || !this.source.getContext) return;
		this.context = this.source.getContext(type);
		return this.context;
	}
}
export class Image extends Loader {
	//读取并生成贴图对象
	load(key, url) {
		return this.loader.load(url).then(image => {
			this.resources[key] = new ImageSource(image);
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
