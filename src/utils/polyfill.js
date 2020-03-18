export default function polyfill() {
	JSON.parseForce = function(obj, def) {
		try {
			return JSON.parse(obj) || def || {};
		} catch (e) {
			return def || {};
		}
	};
	const numberText = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
	const numberUnit = ['', '十', '百', '千', '万', '亿', '兆', '京', '垓', '秭', '穣', '沟', '涧', '正', '载', '极'];
	const formatActions = {
		Y: date => date.getFullYear(),
		m: date => ('00' + (date.getMonth() + 1)).slice(-2),
		d: date => ('00' + date.getDate()).slice(-2),
		H: date => ('00' + date.getHours()).slice(-2),
		i: date => ('00' + date.getMinutes()).slice(-2),
		s: date => ('00' + date.getSeconds()).slice(-2),
		S: date => ('000' + date.getMilliseconds()).slice(-3),
		w: date => date.getDay(),
		W: date => numberText[formatActions.w(date)],
		q: date => ((date.getMonth() + 3) / 3) | 0,
		Q: date => numberText[formatActions.q(date)],
	};
	Date.prototype.format = function(fmt) {
		return fmt.replace(/[YmdHisSwWqQ]/g, k => formatActions[k](this));
	};
	//前往本周第几天
	Date.prototype.toWeek = function(n = 1) {
		this.setDate(this.getDate() - (formatActions.w(this) || 7) + n);
		return this;
	};
	//判断两个时间是否是同一天
	Date.prototype.oneDay = function(date) {
		return this.format('Ymd') == date.format('Ymd');
	};
	//判断两个时间是否是同一周
	Date.prototype.oneWeek = function(date) {
		return new Date(this).toWeek().format('Ymd') == new Date(date).toWeek().format('Ymd');
	};
	Number.prototype.chinese = function() {
		if (this < 10) return numberText[parseInt(this)];
		let nums = parseInt(this)
			.toString()
			.split('');
		let str = '';
		let uid = 3;
		let index = -1;
		let zero1 = true;
		let zero2 = false;
		for (let i = nums.length - 1; i >= 0; i--) {
			if (++index >= 4) {
				if (zero1) str = str.substr(1);
				uid++;
				index = 0;
				zero1 = true;
				zero2 = false;
				str = numberUnit[uid] + str;
			}
			if (nums[i] === '0' && zero1) continue;
			zero1 = false;
			if (index == 0) {
				str = numberText[nums[i]] + str;
				continue;
			} else if (index == 1) {
				if (nums[i] === '1' && i == 0) {
					str = numberUnit[index] + str;
					continue;
				}
			}
			if (nums[i] === '0') {
				if (zero2) continue;
				str = numberText[nums[i]] + str;
				zero2 = true;
			} else {
				str = numberText[nums[i]] + numberUnit[index] + str;
			}
		}
		return str;
	};
}
