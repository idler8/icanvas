import { MathMatrix3 } from '../../../maths/index.js';
export default superClass => {
	return class ComponentBase extends superClass {
		// lockChild = false; //是否在销毁时同时销毁子元素
		touchChildren = true; //是否允许点击子元素
		touchStop = false; //点击是否不冒泡到父元素
		matrix = new MathMatrix3(); //计算矩阵
	};
};
