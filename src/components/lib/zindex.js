export function option(options) {
	this.zIndex = options.zIndex === undefined ? 0 : options.zIndex;
}
export const data = {
	setZIndex(a) {
		this.zIndex = a;
		return this;
	},
	getZIndex() {
		return this.zIndex;
	},
};
