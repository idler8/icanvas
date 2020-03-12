import Vector from '../vector/vector.js';

export function hex2rgb(hex, out) {
	out = out || [];

	out[0] = ((hex >> 16) & 0xff) / 255;
	out[1] = ((hex >> 8) & 0xff) / 255;
	out[2] = (hex & 0xff) / 255;

	return out;
}
export function hex2string(hex) {
	hex = hex.toString(16);
	hex = '000000'.substr(0, 6 - hex.length) + hex;

	return `#${hex}`;
}
export function string2hex(string) {
	if (typeof string === 'string' && string[0] === '#') {
		string = string.substr(1);
	}

	return parseInt(string, 16);
}
export function rgb2hex(rgb) {
	return ((rgb[0] * 255) << 16) + ((rgb[1] * 255) << 8) + ((rgb[2] * 255) | 0);
}
export default class Color extends Vector {
	constructor(color) {
		super(1, 1, 1, 1);
		if (color !== undefined) this.setApply(arguments.length > 1 ? arguments : color);
	}
	set number(n) {
		hex2rgb(n, this.elements);
	}
	get number() {
		return rgb2hex(this.elements);
	}
	set string(s) {
		hex2rgb(string2hex(s), this.elements);
	}
	get string() {
		return hex2string(rgb2hex(this.elements));
	}
	setApply(vector) {
		if (typeof vector == 'string') {
			this.string = vector;
		} else if (typeof vector == 'number') {
			this.number = vector;
		} else {
			super.setApply(vector);
		}
		return this;
	}
	get red() {
		return this.elements[0];
	}
	set red(x) {
		this.elements[0] = x;
	}
	get green() {
		return this.elements[1];
	}
	set green(y) {
		this.elements[1] = y;
	}
	get blue() {
		return this.elements[2];
	}
	set blue(z) {
		this.elements[2] = z;
	}
	get alpha() {
		return this.elements[3];
	}
	set alpha(z) {
		this.elements[3] = z;
	}
}
