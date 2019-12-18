import Loader from './loader.js';
export default class ImageControl extends Loader {
	static Error = null;
	Set(url) {
		return new Promise((resolve, reject) => {
			let image = new Image();
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
