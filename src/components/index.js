export * from './elements/';
export * from './properties/';
export class ComponentBase {
	static CID = 0; //全局递增组件id
	id = ++ComponentBase.CID;
}
