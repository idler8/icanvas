import * as Elements from './elements/';
import * as Properties from './properties/';
class Base {
	static CID = 0; //全局递增组件id
	id = ++Component.CID;
}
export { Elements, Properties, Base };
