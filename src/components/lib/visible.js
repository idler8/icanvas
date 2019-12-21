export function option(options) {
	this.visible = options.visible === undefined ? true : options.visible;
}
export const data = {
	setVisible(a) {
		this.visible = a;
		return this;
	},
	getVisible() {
		return this.visible;
	},
};
