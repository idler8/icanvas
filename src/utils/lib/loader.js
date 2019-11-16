export default function Loader(map = {}, root = '', perfix = '', exts) {
	let Result = {};
	Object.keys(map).forEach(k => {
		if (k == '_') {
			if (exts.indexOf(map[k]) == -1) return;
			let key = perfix.slice(0, -1);
			let url = root + perfix.slice(0, -1) + '.' + map[k];
			Result[key] = url;
		} else if (typeof map[k] == 'string') {
			if (exts.indexOf(map[k]) == -1) return;
			let key = perfix + k;
			let url = root + perfix + k + '.' + map[k];
			Result[key] = url;
		} else {
			Object.assign(Result, Loader(map[k], root, perfix + k + '/', exts));
		}
	});
	return Result;
}
