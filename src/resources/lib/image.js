import Load from './load.js';
export default class ImageControl extends Load {
	static Error = null;
	Set(url) {
		return new Promise((resolve, reject) => {
			let image = this.Get();
			image.onload = function() {
				resolve(image);
			};
			image.onerror = function(e) {
				reject(e);
			};
			image.key = image.src = url;
		});
	}
	get(key) {
		return this.resources[key] || ImageControl.Error || (ImageControl.Error = this.Get());
	}
}
export class WebImage extends ImageControl {
	Get() {
		return new Image();
	}
}
export class WxgameImage extends ImageControl {
	Get() {
		return wx.createImage();
	}
}
