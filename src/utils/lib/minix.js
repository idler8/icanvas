export default function Factory(prototype, source) {
	const keys = Object.keys(source);
	for (let i = 0; i < keys.length; ++i) {
		const key = keys[i];
		const property = Object.getOwnPropertyDescriptor(source, key);
		Object.defineProperty(prototype, key, property);
	}
}
