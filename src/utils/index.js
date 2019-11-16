/**
 * Canvas2D上下文扩展函数
 */
export { default as UtilCanvas } from './lib/canvas.js';
/**
 * 渲染器类
 * 将界面组件渲染到Canvas2D上下文
 */
export { default as UtilRender } from './lib/render.js';
/**
 * 触摸事件类
 * 整合计算整个touchStart/touchMove/touchEnd过程
 */
export { default as UtilTouch } from './lib/touch.js';
/**
 * 碰撞检测类
 * 将点和界面组件进行比较判断碰撞
 */
export { default as UtilCollsion } from './lib/collision.js';
/**
 * 资源文件夹结构转化成一维键值对
 */
export { default as UtilLoaderMap } from './lib/loader.js';
/**
 * 将dom元素触摸事件和Touch类进行关联
 * @param {HTMLElement} dom
 * @param {ICanvas.UtilTouch} Touch
 */
export function UtilWebTouchListen(dom, Touch) {
	dom.addEventListener('touchstart', e => Touch.onTouchStart(e), { passive: true });
	dom.addEventListener('touchmove', e => Touch.onTouchMove(e), { passive: true });
	dom.addEventListener('touchend', e => Touch.onTouchEnd(e), { passive: true });
	dom.addEventListener('touchcancel', e => Touch.onTouchEnd(e), { passive: true });
}
/**
 * 将dom元素鼠标事件和Touch类进行关联
 * @param {HTMLElement} dom
 * @param {ICanvas.UtilTouch} Touch
 */
export function UtilWebMouseListen(dom, Touch) {
	dom.addEventListener('mousedown', e => Touch.onTouchStart(e), { passive: true });
	dom.addEventListener('mousemove', e => Touch.onTouchMove(e), { passive: true });
	dom.addEventListener('mouseup', e => Touch.onTouchEnd(e), { passive: true });
	dom.addEventListener('mouseout', e => Touch.onTouchEnd(e), { passive: true });
}
/**
 * 微信触摸事件和Touch类进行关联
 * @param {ICanvas.UtilTouch} Touch
 */
export function UtilWxgameTouchListen(Touch) {
	wx.onTouchStart(e => Touch.onTouchStart(e));
	wx.onTouchMove(e => Touch.onTouchMove(e));
	wx.onTouchEnd(e => Touch.onTouchEnd(e));
	wx.onTouchCancel(e => Touch.onTouchEnd(e));
}
/**
 * 从键值对中递归获取某个值
 * @param {Object} root
 * @param {string} keys
 * @param {string} split
 */
export function UtilRecursiveMap(root, keys, split = '.') {
	if (typeof key == 'string') keys = keys.split(split);
	return keys.reduce((obj, key) => {
		if (!obj) return obj;
		return obj[key];
	}, root);
}
/**
 * 将微信方法进行变种
 * @param {string} action 方法名
 * @param {Any} root 根元素/上下文
 * @param {Number} mode 变种方式 0:Promise返回success和fail,1:Promise返回执行结果,2:原样子调用
 */
export function UtilWxgameVary(action, root = wx, mode = 0) {
	if (mode == 2) {
		return root[action];
	} else if (mode == 1) {
		return function(args, key) {
			return new Promise(resolve => resolve(root[action](key ? { [key]: args } : args)));
		};
	} else if (mode == 0) {
		return function(args, key) {
			return new Promise((success, fail) => root[action](Object.assign({ success, fail }, key ? { [key]: args } : args)));
		};
	}
}
