import Load from './load.js';
export default class AudioControl extends Load {
	channels = {};
	channelPause(name, kill = false) {
		this.channels[name].pause();
		if (!kill) return this;
		delete this.channels[name];
	}
	channelContinue(name) {
		if (name === true) {
			Object.keys(this.channels).forEach(k => this.channelContinue(k));
			return this;
		}
		this.channels[name].play();
		return this;
	}
	//单声道音效
	channel(name = '', key = '', loop = true) {
		if (this.channels[name]) this.channelPause(name, true);
		if (key) {
			let audio = this.Get(key, loop);
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
		this.channelPause(name, !this.channels[name].Loop);
		return this;
	}
	pools = {};
	//声道池
	pool(key) {
		if (!this.pools[key]) this.pools[key] = [];
		if (this._mute) return this;
		let audio = this.pools[key].find(a => a.paused);
		if (!audio) this.pools[key].push((audio = this.Get(key)));
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
		mute ? this.poolMute(true).channelMute(true) : this.channelContinue(true);
	}
}
export class WxgameAudio extends AudioControl {
	channelPause(name, kill = false) {
		this.channels[name].pause();
		if (!kill) return;
		this.channels[name].destroy();
		delete this.channels[name];
	}
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
			audio.src = url;
		});
	}
	Get(key, loop = false) {
		if (!this.resources[key]) throw Error('音频不存在');
		let audio = wx.createInnerAudioContext();
		audio.Loop = audio.loop = loop;
		audio.autoplay = false;
		audio.src = this.resources[key].src;
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
	Get(key, loop = false) {
		if (!this.resources[key]) throw Error('音频不存在');
		let audio = new Audio();
		audio.Loop = audio.loop = loop;
		audio.autoplay = false;
		audio.src = this.resources[key].src;
		return audio;
	}
}
