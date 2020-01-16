/**
 * 获取随机值
 * @param {Number} a 随机范围从0到a(不包含a)
 * @param {Number} b 随机结果增加值
 * @return {Number} 一个随机值
 */
let Random = function(a = 2, b = 0) {
	return ((Math.random() * a) | 0) + b;
};
/**
 * 获取随机值
 * @param {Number} min 最小值
 * @param {Number} max 最大值
 * @return {Number} 一个随机值
 */
Random.To = function(min, max) {
	return Random(max - min, min);
};
/**
 * 从数组获取随机项
 * @param {Array} a 源数组
 * @return {*} a中的随机值
 */
Random.Array = function(a) {
	return a[Random(a.length)];
};
/**
 * 从键值对获取任意随机项键的数组
 * @param {Array|Object} a 数据源
 * @param {Number} b 获取数量
 * @return {Array[*]} b个不重复的a中的键组成的数组
 */
Random.Array.Keys = Random.Keys = function(a, b = 1) {
	if (!a || !b) return [];
	let out = [];
	let keys = Object.keys(a);
	while (keys.length > 0 && out.length < b) out.push(keys.splice(Random(keys.length), 1)[0]);
	return out;
};
/**
 * 从键值对获取任意随机项值的数组
 * @param {Array|Object} a 数据源
 * @param {Number} b 获取数量
 * @return {Array[*]} b个不重复的a中的键组成的数组
 */
Random.Array.Values = Random.Values = function(a, b = 1) {
	if (!a || !b) return [];
	let out = [];
	let keys = Object.keys(a);
	while (keys.length > 0 && out.length < b) {
		let key = keys.splice(Random(keys.length), 1)[0];
		out.push(a[key]);
	}
	return out;
};
export default Random;
