export default superClass => {
	return class Angle extends superClass {
		/**
		 * 角度控制
		 */
		radian = 0; //弧度
		set angle(a) {
			this.radian = (a * Math.PI) / 180;
		}
		get angle() {
			return (this.radian * 180) / Math.PI;
		}
		setRadian(r) {
			this.radian = r;
			return this;
		}
		setAngle(a) {
			this.angle = a;
			return this;
		}
		setOptions(options) {
			super.setOptions(options);
			if (options.radian) this.radian = options.radian;
			if (options.angle) this.angle = options.angle;
			return this;
		}
	};
};
