export class Loader {
	constructor() {
		this.resources = {};
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
export class ImageLoader extends Loader {
	//读取并生成贴图对象
	load(key, url) {
		return new Promise((resolve, reject) => {
			let image = new Image();
			image.onload = () => resolve((this.resources[key] = new ImageSource(image)));
			image.onerror = reject;
			image.key = image.src = url;
		});
	}
}
export class AudioSource {
	constructor(options = {}) {
		if (!options.src) throw '错误的音频地址';
		this._src = options.src;
		this._volume = options.volume || 1;
		this._loop = options.loop || false;
		this._muted = options.muted || false;

		this._loaded = false;
		this._onload = options.onload;

		this._sounds = [];
		this.load();
	}
	load() {
		let sound = this._sounds.find(s => s.paused);
		if (!sound) {
			sound = new Audio();
			sound.muted = this.muted;
			sound.volume = this.volume;
			sound.loop = this.loop;
			if (!this._loaded) {
				sound.oncanplay = () => {
					if (!this._loaded && this._onload) {
						this._onload();
					}
				};
			}
			sound.src = this._src;
			this._sounds.push(sound);
		}
		return sound;
	}
	get loop() {
		return this._loop;
	}
	set loop(loop) {
		this._loop = loop;
		for (let i = 0; i < this._sounds.length; i++) this._sounds[i].loop = loop;
	}
	get volume() {
		return this._volume;
	}
	set volume(volume) {
		this._volume = volume;
		for (let i = 0; i < this._sounds.length; i++) this._sounds[i].volume = volume;
	}
	get muted() {
		return this._muted;
	}
	set muted(muted) {
		this._muted = muted;
		for (let i = 0; i < this._sounds.length; i++) this._sounds[i].muted = muted;
	}
	play(loop) {
		if (loop !== undefined) this.loop = loop;
		let sound = this.load();
		sound.play().catch(() => (sound.__played = true));
		return sound;
	}
	pause() {
		for (let i = 0; i < this._sounds.length; i++) {
			if (this._sounds[i].__played) this._sounds[i].__played = false;
			this._sounds[i].pause();
		}
		return this;
	}
	stop() {
		for (let i = 0; i < this._sounds.length; i++) {
			if (this._sounds[i].__played) this._sounds[i].__played = false;
			this._sounds[i].pause();
			this._sounds[i].currentTime = 0;
		}
		return this;
	}
	destroy(ready = 1) {
		let clearArr = ready ? this._sounds.splice(ready) : this._sounds;
		for (let i = 0; i < clearArr.length; i++) {
			if (clearArr[i].destroy) clearArr[i].destroy();
		}
		return this;
	}
	check() {
		for (let i = 0; i < this._sounds.length; i++) {
			if (this._sounds[i].__played || !this._sounds[i].paused) {
				this._sounds[i].play();
			} else {
				this._sounds[i].pause();
			}
		}
	}
}
export class AudioLoader extends Loader {
	constructor() {
		super();
		this._muted = false;
		this._volume = 1;
	}
	load(key, url) {
		return new Promise((resolve, reject) => {
			this.resources[key] = new AudioSource({ src: url, onload: resolve });
		});
	}
	get muted() {
		return this._muted;
	}
	set muted(muted) {
		this._muted = muted;
		return Object.keys(this.resources).forEach(key => {
			this.resources[key].muted = muted;
		});
	}
	get volume() {
		return this._volume;
	}
	set volume(volume) {
		this._volume = volume;
		return Object.keys(this.resources).forEach(key => {
			this.resources[key].volume = volume;
		});
	}
	play(key, loop) {
		if (!this.resources[key]) return;
		return this.resources[key].play(loop);
	}
	check() {
		Object.keys(this.resources).forEach(key => {
			this.resources[key].check();
		});
	}
}
