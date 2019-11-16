/**
 * 模拟axios请求
 * @param {String} url 请求路径
 * @param {Object} data 请求参数
 * @param {Boolean} base 是否跳过附带默认参数
 * @return {Promise}
 */
import axios from 'axios';
export default class Request {
	baseURL = ''; //全局请求路径
	baseData = {}; //全局附加参数
	request(method, url, data) {
		return axios({ method, url, data }).then(res => {
			if (res.status == 200) return res.data;
			return Promise.reject('接口请求失败');
		});
	}
	post(url, data) {
		return this.request('post', this.baseURL + url, Object.assign({}, this.baseData, data));
	}
	get(url, data) {
		return this.request('get', this.baseURL + url, Object.assign({}, this.baseData, data));
	}
}
