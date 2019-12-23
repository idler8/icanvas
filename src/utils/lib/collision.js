import Vector2 from '../../maths/lib/vector2.js';
import Matrix3 from '../../maths/lib/matrix3.js';
export default class Collision {
	//触发流程
	constructor() {
		this.MatrixHandle = new Matrix3();
		this.TouchHandle = new Vector2();
	}
	InComponent(Component, touch) {
		if (!Component.visible) return false;
		this.MatrixHandle.setToArray(Component.matrix).invert();
		this.TouchHandle.x = this.MatrixHandle.a * touch.x + this.MatrixHandle.c * touch.y + this.MatrixHandle.tx;
		this.TouchHandle.y = this.MatrixHandle.b * touch.x + this.MatrixHandle.d * touch.y + this.MatrixHandle.ty;
		if (!Component.checkPoint) return true;
		this.TouchHandle.addTo(Component.anchorX, Component.anchorY);
		if (Component.checkPoint(this.TouchHandle)) return true;
	}
	//TODO 使用event
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
