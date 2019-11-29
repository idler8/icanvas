import Load from './load.js';
export default class AudioControl extends Load {
	//获取音效
	_get(key) {
		if (!this.resources[key]) throw Error('音频不存在');
		return this.Get(this.resources[key].src);
	}
	channels = {};
	//单声道音效
	channel(name = '', key = '', loop = true) {
		if (this.channels[name]) {
			this.channels[name].pause();
			if (this.channels[name].destroy) this.channels[name].destroy();
			delete this.channels[name];
		}
		if (key) {
			let audio = this._get(key);
			audio.Loop = loop;
			this.channels[name] = audio;
			if (!this._mute) audio.play();
		}
		return this;
	}
	channelMute(name) {
		if (name === true) {
			Object.keys(this.channels).forEach(k => this.channelMute(k));
			return this;
		}
		if (!this.channels[name]) return this;
		this.channels[name].pause();
		if (this.channels[name].loop) return this;
		if (this.channels[name].destroy) this.channels[name].destroy();
		delete this.channels[name];
		return this;
	}
	pools = {};
	//声道池
	pool(key) {
		if (!this.pools[key]) this.pools[key] = [];
		if (this._mute) return this;
		let audio = this.pools[key].find(a => a.paused);
		if (!audio) this.pools[key].push((audio = this._get(key)));
		audio.play();
		return this;
	}
	poolMute(key) {
		if (key === true) {
			Object.keys(this.pools).forEach(k => this.poolMute(k));
			return this;
		}
		if (!this.pools[key]) return this;
		this.pools[key].forEach(a => a.pause());
		return this;
	}
	//静音
	_mute = false;
	get mute() {
		return this._mute;
	}
	set mute(mute) {
		this._mute = mute;
		if (mute) {
			Object.keys(this.pools).forEach(name => this.poolMute(true));
			Object.keys(this.channels).forEach(name => this.channelMute(true));
		} else {
			Object.keys(this.channels).forEach(name => this.channels[name].loop && this.channels[name].play());
		}
	}
}
export class WxgameAudio extends AudioControl {
	Set(url) {
		return new Promise((resolve, reject) => {
			let audio = wx.createInnerAudioContext();
			audio.loop = false;
			audio.autoplay = false;
			audio.onCanplay(function() {
				resolve(audio);
			});
			audio.onError(function(e) {
				reject(e);
			});
			audio.key = audio.src = url;
		});
	}
	Get(url) {
		let audio = wx.createInnerAudioContext();
		audio.loop = false;
		audio.autoplay = false;
		audio.onCanplay(function() {
			if (audio.Loop) audio.loop = audio.Loop;
			if (!audio.paused) audio.play();
		});
		audio.src = url;
		return audio;
	}
}
export class WebAudio extends AudioControl {
	Set(url) {
		return new Promise((resolve, reject) => {
			let audio = new Audio();
			audio.loop = false;
			audio.autoplay = false;
			audio.onloadedmetadata = function() {
				resolve(audio);
			};
			audio.onerror = function(e) {
				reject(e);
			};
			audio.key = audio.src = url;
		});
	}
	Get(url) {
		let audio = new Audio();
		audio.loop = false;
		audio.autoplay = false;
		audio.onloadeddata = function() {
			if (audio.Loop) audio.loop = audio.Loop;
			if (!audio.paused) audio.play();
		};
		audio.src = url;
		return audio;
	}
}
