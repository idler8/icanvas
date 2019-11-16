let Storage = {
	/**
	 * 异步获取本地storage
	 * @param {String} key
	 */
	Get(key) {
		return Promise.resolve(window.localStorage.getItem(key))
			.then(res => JSON.parse(res))
			.catch(() => null);
	},
	/**
	 * 异步设置本地storage
	 * @param {String} key
	 * @param {Any} data
	 */
	Set(key, data) {
		window.localStorage.setItem(key, JSON.stringify(data));
		return Promise.resolve(data);
	},
	/**
	 * 同步获取storage
	 */
	GetSync(key) {
		try {
			return JSON.parse(window.localStorage.getItem(key));
		} catch (e) {
			return null;
		}
	},
	/**
	 * 同步设置storage
	 */
	SetSync(key, data) {
		window.localStorage.setItem(key, JSON.stringify(data));
		return data;
	},
};
export default Storage;
