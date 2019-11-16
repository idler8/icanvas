export default class Render {
	/**
	 * 渲染列表中间缓存
	 */
	HandleComponents = [];
	/**
	 *
	 * @param {Component} Stage 舞台
	 * @param {CanvasRenderingContext2D} Context 渲染上下文
	 * @param {Boolean} Clear 是否清空上下文
	 */
	Update(Stage, Context, Clear) {
		this.PreUpdate(Stage);
		this.HandleComponents.sort((a, b) => a._HandleParentZIndex - b._HandleParentZIndex || a._HandleZIndex - b._HandleZIndex);
		this.Updating(Context, Clear);
		this.HandleComponents.length = 0;
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
			Component.parent ? Component.matrix.setToArray(Component.parent.matrix) : Component.matrix.identity();
			Component.matrix
				.translate(Component.x, Component.y)
				.rotate(Component.radian)
				.scale(Component.scaleX, Component.scaleY);

			if (Component.update) {
				Component._HandleParentZIndex = ((Component.parent && Component.parent._HandleParentZIndex) || 0) + Component.zIndex;
				Component._HandleZIndex = this.HandleComponents.push(Component);
			}
			if (Component.preUpdated) Component.preUpdated();
			if (Component.children.length) this.PreUpdate(Component.children);
			if (Component.preChildrenUpdated) Component.preChildrenUpdated();
		}
	}
	/**
	 * 渲染中
	 * @param {CanvasRenderingContext2D} Context 渲染上下文
	 * @param {Boolean} Clear 是否清空
	 */
	Updating(Context, Clear = true) {
		if (Clear) Context.clearRect(0, 0, Context.canvas.width, Context.canvas.height);
		this.HandleComponents.forEach(Component => {
			let Alpha = Component.alpha;
			if (Alpha == 0) return;
			if (Component.beforeUpdate) Component.beforeUpdate(Context);
			if (Alpha > 1) Alpha = 1;
			if (Alpha != Context.globalAlpha) Context.globalAlpha = Alpha;
			Context.setTransform.apply(Context, Component.matrix);
			Component.update(Context);
			if (Component.updated) Component.updated(Context);
		});
		Context.setTransform(1, 0, 0, 1, 0, 0);
	}
}
