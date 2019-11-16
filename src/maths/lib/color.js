export default {
	/**
	 * 16进制颜色转10进制颜色数组
	 * @param {*} hex
	 * @param {*} out
	 */
	hex2rgb(hex, out) {
		out = out || [];

		out[0] = ((hex >> 16) & 0xff) / 255;
		out[1] = ((hex >> 8) & 0xff) / 255;
		out[2] = (hex & 0xff) / 255;

		return out;
	},
	/**
	 * 16进制转16进制字符串颜色
	 * @param {*} hex
	 */
	hex2string(hex) {
		hex = hex.toString(16);
		hex = '000000'.substr(0, 6 - hex.length) + hex;

		return `#${hex}`;
	},
	/**
	 * 16进制字符串颜色转16进制
	 * @param {*} string
	 */
	string2hex(string) {
		if (typeof string === 'string' && string[0] === '#') {
			string = string.substr(1);
		}

		return parseInt(string, 16);
	},
	/**
	 * 10进制颜色数组转16进制
	 * @param {*} rgb
	 */
	rgb2hex(rgb) {
		return ((rgb[0] * 255) << 16) + ((rgb[1] * 255) << 8) + ((rgb[2] * 255) | 0);
	},
};
