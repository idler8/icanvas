/**
 * 获得一个canvas对象
 *
 * @param {String} key 特殊模版标识
 *
 * 打包模式为wxgame时
 * key取share则获得主域内开放canvas
 * key取shared则获得开发域内开放canvas
 */
export default function GetCanvas(key) {
	if (!GetCanvas.main && key != 'main') GetCanvas('main');
	if (key && GetCanvas[key]) return GetCanvas[key];
	let canvas = null;
	if (key == 'share' && typeof wx.getOpenDataContext == 'function') {
		let context = wx.getOpenDataContext();
		context.canvas.getContext = () => context;
		canvas = context.canvas;
	} else if (key == 'shared' && typeof wx.getSharedCanvas == 'function') {
		canvas = wx.getSharedCanvas();
	} else {
		canvas = wx.createCanvas();
	}
	return key ? (GetCanvas[key] = canvas) : canvas;
}
