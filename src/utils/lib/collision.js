export default class Collision {
	//触发流程
	constructor(MatrixHandle, TouchHandle) {
		if (!MatrixHandle) throw Error('缺少碰撞矩阵');
		if (!TouchHandle) throw Error('缺少碰撞坐标');
		this.MatrixHandle = MatrixHandle;
		this.TouchHandle = TouchHandle;
	}
	InComponent(Component, touch) {
		if (!Component._visible) return false;
		if (Component.matrix) {
			this.MatrixHandle.setToArray(Component.matrix).invert();
		} else {
			this.MatrixHandle.identity();
		}
		this.TouchHandle.x = this.MatrixHandle.a * touch.x + this.MatrixHandle.c * touch.y + this.MatrixHandle.tx;
		this.TouchHandle.y = this.MatrixHandle.b * touch.x + this.MatrixHandle.d * touch.y + this.MatrixHandle.ty;
		if (Component.offsetTouch) Component.offsetTouch(this.TouchHandle);
		if (!Component.hitMe) return this.TouchHandle;
		if (Component.hitMe(this.TouchHandle.x, this.TouchHandle.y)) return this.TouchHandle;
	}
	//TODO 使用event
	Recursive(Component, touch, Action = 'touchTap') {
		if (!Component) return false;
		if (Component instanceof Array) {
			for (let i = Component.length - 1; i >= 0; i--) if (this.Recursive(Component[i], touch, Action)) return true;
		} else {
			if (!Component._visible) return false;
			if (Component.touchChildren && Component.children.length && this.Recursive(Component.children, touch, Action)) return true;
			if (!this.InComponent(Component, touch)) return false;
			if (!Component[Action]) return Component.touchStop;
			let Result = Component[Action](this.TouchHandle.x, this.TouchHandle.y);
			return Result === undefined ? true : Result;
		}
	}
}
