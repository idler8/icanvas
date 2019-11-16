let Storage = {
	/**
	 * 异步获取本地storage
	 * @param {String} key
	 */
	Get(key) {
		return new Promise((success, fail) => {
			wx.getStorage({ success, fail, key });
		})
			.then(r => JSON.parse(r.data))
			.catch(() => null);
	},
	/**
	 * 异步设置本地storage
	 * @param {String} key
	 * @param {Any} data
	 */
	Set(key, data) {
		return new Promise((success, fail) => (wx.setStorage({ success, fail, key, data: JSON.stringify(data) }), data));
	},
	/**
	 * 同步获取storage
	 */
	GetSync(key) {
		return JSON.parse(wx.getStorageSync(key));
	},
	/**
	 * 同步设置storage
	 */
	SetSync(key, value) {
		return wx.setStorageSync(key, JSON.stringify(value));
	},
};
export default Storage;
