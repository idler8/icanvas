export function option(options) {
	this.radian = options.radian !== undefined ? options.radian : 0;
	if (options.angle !== undefined) this.angle = options.angle;
}
export const data = {
	/**
	 * 角度控制
	 */
	set angle(a) {
		this.radian = (a * Math.PI) / 180;
	},
	get angle() {
		return (this.radian * 180) / Math.PI;
	},
	getRadian() {
		return this.radian;
	},
	getAngle() {
		return this.angle;
	},
	setRadian(r) {
		this.radian = r;
		return this;
	},
	setAngle(a) {
		this.angle = a;
		return this;
	},
};
