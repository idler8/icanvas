export default class Render {
	/**
	 * 渲染列表中间缓存
	 */
	renderArray = [];
	/**
	 *
	 * @param {Component} Stage 舞台
	 * @param {CanvasRenderingContext2D} Context 渲染上下文
	 * @param {Boolean} Clear 是否清空上下文
	 */
	Update(Stage, Context, Clear) {
		this.PreUpdate(Stage);
		this.renderArray.sort((a, b) => a._HandleParentZIndex - b._HandleParentZIndex || a._HandleZIndex - b._HandleZIndex);
		this.Updating(Context, Clear);
		this.renderArray.length = 0;
	}
	/**
	 * 渲染前
	 * @param {Component} Component
	 */
	PreUpdate(Component) {
		if (!Component) return;
		if (Component instanceof Array) {
			for (let i = 0, l = Component.length; i < l; i++) this.PreUpdate(Component[i]);
		} else {
			if (!Component._visible) return;
			if (Component.preUpdate) Component.preUpdate();
			if (Component.renderPreUpdated(this.renderArray)) return;
			if (Component.preUpdated) Component.preUpdated();
			if (Component.children.length) this.PreUpdate(Component.children);
		}
	}
	/**
	 * 渲染中
	 * @param {CanvasRenderingContext2D} Context 渲染上下文
	 * @param {Boolean} Clear 是否清空
	 */
	Updating(Context, Clear = true) {
		if (Clear) Context.clearRect(0, 0, Context.canvas.width, Context.canvas.height);
		this.renderArray.forEach(Component => {
			if (Component.renderUpdate) Component.beforeUpdate(Context);
			if (Component.renderUpdated(Context)) return;
			if (Component.update) Component.update(Context);
		});
		Context.setTransform(1, 0, 0, 1, 0, 0);
	}
}
