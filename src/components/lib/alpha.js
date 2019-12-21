export function option(options) {
	this.alpha = options.alpha === undefined ? 1 : options.alpha;
}
export const data = {
	set alpha(a) {
		if (this._alpha < 0 && this.parent) return this.parent.alpha;
		this._alpha = a;
	},
	get alpha() {
		return this._alpha;
	},
	setAlpha(a) {
		this.alpha = a;
		return this;
	},
	getAlpha() {
		return this.alpha;
	},
};
