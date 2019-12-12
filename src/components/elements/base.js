import { MathMatrix3 } from '../../maths/index.js';
let CID = 0; //全局递增组件id
export default superClass => {
	return class ComponentBase extends superClass {
		constructor(options) {
			super();
			if (options) this.setOptions(options);
		}
		id = ++CID;
		zIndex = 0;
		children = []; //子元素列表
		parent = null; //父元素
		lockChild = false; //是否在销毁时同时销毁子元素
		touchChildren = true; //是否允许点击子元素
		touchStop = false; //点击是否不冒泡到父元素
		matrix = new MathMatrix3(); //计算矩阵
		/**
		 * 将本组件加入某个组件下面
		 * @param {Component} Component 父级
		 * @param {Number} index 位置
		 * Component为空时，相当于从父组件卸载本组件
		 */
		setParent(Component, index = -1) {
			if (!Component) return this.parent ? this.parent.removeChild(this) : this;
			if (this.parent == Component) return this;
			if (!this.parent) Component.addChildAt(this, index);
			return this;
		}
		/**
		 * 在固定位置增加子组件
		 * @param {Component} Component 组件
		 * @param {Number} index 位置
		 */
		addChildAt(Component, index = 0) {
			if (!Component) return this;
			if (Component.create) Component.create();
			Component.parent = this;
			if (index == -1) {
				this.children.push(Component);
			} else if (index == 0) {
				this.children.unshift(Component);
			} else {
				this.children.splice(index, 0, Component);
			}
			if (Component.created) Component.created();
			return this;
		}
		/**
		 * 增加子组件
		 * @param {Component} Component 组件
		 */
		addChild(Component) {
			if (arguments.length > 1) {
				for (let i = 0; i < arguments.length; i++) this.addChild(arguments[i]);
				return this;
			}
			if (!Component) return this;
			if (Component instanceof Array) {
				for (let i = 0; i < Component.length; i++) this.addChild(Component[i]);
				return this;
			}
			return this.addChildAt(Component, -1);
		}
		/**
		 * 移除子组件
		 * @param {Component} Component 组件
		 */
		removeChild(Component) {
			if (!Component) return this;
			if (arguments.length > 1) {
				for (let i = 0; i < arguments.length; i++) this.removeChild(arguments[i]);
				return this;
			}
			if (Component instanceof Array) {
				for (let i = 0; i < Component.length; i++) this.removeChild(Component[i]);
				return this;
			}
			if (Component.parent != this) return this;
			if (!Component.lockChild) Component.removeChildren();
			if (Component.destroy) Component.destroy();
			let index = this.children.indexOf(Component);
			if (index >= 0) this.children.splice(index, 1);
			// if (this.children.length == 1) this.children = this.children[0];
			Component.parent = null;
			if (Component.destroyed) Component.destroyed();
			return this;
		}
		/**
		 * 逐个移除所有子组件
		 */
		removeChildren() {
			for (let i = this.children.length - 1; i >= 0; i--) {
				this.removeChild(this.children[i]);
			}
			return this;
		}
		setOptions(options) {
			if(super.setOptions) super.setOptions(options);
			return this;
		}
	};
};
