export default (superClass, Vector2) => {
	return class Position extends superClass {
		/**
		 * 定位控制
		 */
		position = new Vector2();
		get x() {
			return this.position.x;
		}
		get y() {
			return this.position.y;
		}
		set x(x) {
			this.position.x = x;
		}
		set y(y) {
			this.position.y = y;
		}
		setPosition(x, y) {
			this.position.setTo(x, y);
			return this;
		}
		constructor(options) {
			super(options);
			if (options) {
				if (options.position) Object.assign(this.position, options.position);
				if (options.x !== undefined) this.position.x = options.x;
				if (options.y !== undefined) this.position.y = options.y;
			}
		}
	};
};
