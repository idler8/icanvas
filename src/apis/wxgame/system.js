/**
 * 获取系统参数
 * pixel 屏幕与设备像素比
 * width 屏幕宽度
 * height 屏幕高度
 * ratio 宽高比
 */
export default function System() {
	System.wx = wx.getSystemInfoSync();

	System.pixel = System.wx.pixelRatio;
	System.width = System.wx.screenWidth;
	System.height = System.wx.screenHeight;
	System.ratio = System.width / System.height;
	return System;
}
