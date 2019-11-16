let Week = ['日', '一', '二', '三', '四', '五', '六'];
let Time = class {
	Date = null;
	/**
	 * 设置时间
	 * @param {Any} value 设置时间值
	 * @param {String} fmt 源格式
	 * jstimestamp 13位时间戳 到毫秒
	 * timestamp 10位时间戳 到秒
	 */
	Set(value, fmt = 'jstimestamp') {
		if (!value) {
			this.Date = null;
		} else if (value instanceof Date) {
			this.Data = value;
		} else if (typeof value == 'object') {
			this.Data = null;
		} else if (typeof value == 'function') {
			this.Set(value(), fmt);
		} else if (value > 0) {
			this.Date = fmt == 'jstimestamp' ? new Date(value * 1) : new Date(value * 1000);
		} else if (typeof value == 'string') {
			this.Date = new Date(value);
			//todo 格式化年月日时分秒
		} else {
			this.Date = null;
		}
		if (!this.Date) this.Date = new Date();
		return this;
	}
	/**
	 * 获取时间
	 * @param {String} fmt 获取格式
	 * jstimestamp 13位时间戳 到毫秒
	 * timestamp 10位时间戳 到秒
	 * Date 日期类格式
	 * YmdHisSwWqQ 根据不同格式取得得值合成字符串
	 */
	Get(fmt = 'jstimestamp') {
		if (!this.Date) this.Date = new Date();
		switch (fmt) {
			case 'Date':
				return this.Date;
			case 'timestamp':
				return parseInt(this.Date.getTime() / 1000);
			case 'jstimestamp':
				return this.Date.getTime();
		}
		return fmt.replace(/[YmdHisSwWqQ]/g, k => this[k]);
	}
	/**
	 * 判断两个时间是否是同一天
	 * @param {*} a 时间1
	 * @param {*} b 时间2
	 * @param {*} c 时间1格式
	 * @param {*} d 时间2格式
	 */
	OneDay(a, b, c, d) {
		return this.Set(a, c).Get('Ymd') == this.Set(b, d).Get('Ymd');
	}
	/**
	 * 判断两个时间是否是同一周
	 * @param {*} a 时间1
	 * @param {*} b 时间2
	 * @param {*} c 时间1格式
	 * @param {*} d 时间2格式
	 */
	OneWeek(a, b, c, d) {
		return (
			this.Set(a, c)
				.ToWeek()
				.Get('Ymd') ==
			this.Set(b, d)
				.ToWeek()
				.Get('Ymd')
		);
	}
	/**
	 * 将时间前往本周的某一天
	 * @param {*} WeekN
	 */
	ToWeek(WeekN = 1) {
		this.Date.setDate(this.Date.getDate() - (this.w || 7) + WeekN);
		return this;
	}
	/**
	 * 获取本周某一天的当前时间
	 * @param {*} WeekN
	 * @param {*} fmt
	 */
	GetWeek(WeeN, fmt) {
		return this.ToWeek(WeeN).Get(fmt);
	}
	get Y() {
		return this.Date.getFullYear();
	}
	get m() {
		return ('00' + (this.Date.getMonth() + 1)).slice(-2);
	}
	get d() {
		return ('00' + this.Date.getDate()).slice(-2);
	}
	get H() {
		return ('00' + this.Date.getHours()).slice(-2);
	}
	get i() {
		return ('00' + this.Date.getMinutes()).slice(-2);
	}
	get s() {
		return ('00' + this.Date.getSeconds()).slice(-2);
	}
	get S() {
		return ('000' + this.Date.getMilliseconds()).slice(-3);
	}
	get w() {
		return this.Date.getDay();
	}
	get W() {
		return Week[this.w];
	}
	get q() {
		return ((this.Date.getMonth() + 3) / 3) | 0;
	}
	get Q() {
		return Week[this.q];
	}
};
export default new Time();
