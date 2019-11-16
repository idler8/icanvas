/**
 * 模拟axios请求
 * 增加方法download 下载资源
 * @param {String} url 资源路径
 * @param {String} filePath 本地路径
 * @param {Function} callback 下载进度回调
 * @return {Promise}
 */
/**
 * 模拟axios请求
 * @param {String} url 请求路径
 * @param {Object} data 请求参数
 * @return {Promise}
 */

export default class Request {
	baseURL = ''; //全局请求路径
	baseData = {}; //全局附加参数
	request(method, url, data) {
		return new Promise((success, fail) => {
			wx.request({ method, data, url, success, fail });
		}).then(res => {
			if (res.statusCode == 200) return res.data;
			return Promise.reject('接口请求失败');
		});
	}
	post(url, data) {
		return this.request('post', this.baseURL + url, Object.assign({}, this.baseData, data));
	}
	get(url, data) {
		return this.request('get', this.baseURL + url, Object.assign({}, this.baseData, data));
	}
	create() {
		return new Req();
	}
	download(url, filePath, callback) {
		return new Promise(function(success, fail) {
			let task = wx.downloadFile({ url, filePath, success, fail });
			if (callback) task.onProgressUpdate(callback);
		});
	}
}
