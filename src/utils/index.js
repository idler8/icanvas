/**
 * Canvas2D上下文扩展函数
 */
export { default as UtilCanvas2D } from './lib/canvas2d.js';
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
 * 点是否在矩形范围内
 * @param {Number} x 点x坐标
 * @param {Number} y 点y坐标
 * @param {Number} bx 矩形x坐标
 * @param {Number} by 矩形y坐标
 * @param {Number} bw 矩形宽度
 * @param {Number} bh 矩形高度
 */
export function UtilPointInRect(x, y, bx, by, bw, bh) {
	return x >= bx && x <= bx + bw && y >= by && y <= by + bh;
}
