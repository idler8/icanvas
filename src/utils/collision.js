import Vector3 from '../vector/vector3.js';
export default class Collision {
	constructor() {
		this.TouchHandle = new Vector3();
	}
	InComponent(Component, touch) {
		if (!Component.visible) return false;
		if (!Component.checkPoint) return true;
		this.TouchHandle.setApply(touch);
		if (Component.checkPoint(Component.getLocalVector(this.TouchHandle))) return true;
	}
	Recursive(Component, touch, Action = 'touchTap') {
		if (!Component) return false;
		if (Component instanceof Array) {
			for (let i = Component.length - 1; i >= 0; i--) {
				let Res = this.Recursive(Component[i], touch, Action);
				if (Res) return Res;
			}
		} else {
			if (!Component.visible) return false;
			if (Component.touchChildren && Component.children.length) {
				let Res = this.Recursive(Component.children, touch, Action);
				if (Res) return Res;
			}
			if (!this.InComponent(Component, touch)) return false;
			if (!Component[Action]) return Component.touchStop;
			let Result = Component[Action](this.TouchHandle);
			return Result === undefined ? true : Result;
		}
	}
}
