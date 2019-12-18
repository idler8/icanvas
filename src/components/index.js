import * as Elements from './elements/';
import * as Properties from './properties/';
export { Elements, Properties };
class Component extends subClass {
	static CID = 0; //全局递增组件id
	id = ++Component.CID;
}
export default function Build() {
	let subClass = Component;
	for (let i = 0; i < arguments.length; i++) {
		subClass = arguments[i](subClass);
	}
	return subClass;
}
