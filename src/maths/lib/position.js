export default class Position {
	_options = {
		left: 0,
		top: 0,
		right: 750,
		bottom: 1334,
		cacheY: {},
		cacheX: {},
	};
	/**
	 * 设置宽度
	 */
	set width(right) {
		this._options.right = right;
		this._options.center = right / 2;
		this._options.cacheX = {};
	}
	/**
	 * 获取宽度
	 */
	get width() {
		return this._options.right;
	}
	/**
	 * 设置高度
	 */
	set height(bottom) {
		this._options.bottom = bottom;
		this._options.middle = bottom / 2;
		this._options.cacheY = {};
	}
	/**
	 * 获取宽
	 */
	get height() {
		return this._options.bottom;
	}
	/**
	 * 获得总宽度的比例
	 * @param {Number} n 比例
	 */
	getX(n) {
		if (this._options.cacheX[n]) return this._options.cacheX[n];
		return (this._options.cacheX[n] = this._options.right * n);
	}
	/**
	 * 获得总高度的比例
	 * @param {Number} n 比例
	 */
	getY(n) {
		if (this._options.cacheY[n]) return this._options.cacheY[n];
		return (this._options.cacheY[n] = this._options.bottom * n);
	}
	/**
	 * 获取半宽
	 */
	get center() {
		return this.getX(0.5);
	}
	/**
	 * 获取半高
	 */
	get middle() {
		return this.getY(0.5);
	}
}
