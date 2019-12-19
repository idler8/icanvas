# **iCanvas核心构造器**
![npm](https://img.shields.io/npm/dm/@icanvas/core)

![NPM](https://img.shields.io/npm/l/@icanvas/core)

![npm](https://img.shields.io/npm/v/@icanvas/core) ![npm bundle size](https://img.shields.io/bundlephobia/min/@icanvas/core) ![GitHub top language](https://img.shields.io/github/languages/top/idler8/icanvas)
## 安装
```bash
    npm install -s @icanvas/core
```
## 调用
es6调用完整支持Tree Shake
```javascript
    import * as ICanvas from '@icanvas/core';
    // OR
    const ICanvas = require('@icanvas/core');
```

## API列表

### 数学包
#### [扩展数组](src/maths/lib/array.js)`ICanvas.MathArray`
#### [基本向量](src/maths/lib/vector.js)`ICanvas.MathVector`
#### [二维向量](src/maths/lib/vector2.js)`ICanvas.MathVector2`
#### [二维矩阵](src/maths/lib/matrix3.js)`ICanvas.MathMatrix3`
#### [时钟跳动类](src/maths/lib/clock.js)`ICanvas.MathClock`
#### [时间处理类](src/maths/lib/time.js)`ICanvas.MathTime`
#### [位置处理类](src/maths/lib/position.js)`ICanvas.MathPosition`
#### [随机方法](src/maths/lib/random.js)`ICanvas.MathRandom`

### 界面组件构造器包
#### [基本垫底组件类](src/components/index.js)`ICanvas.ComponentBase`
#### [基础组件构造器](src/component/elements/lib/base.js)`ICanvas.ComponentElementBase`
#### [纹理图组件](src/components/elements/lib/texture.js)`ICanvas.ComponentElementTexture`
#### [富文本组件](src/components/elements/lib/text.js)`ICanvas.ComponentElementText`
#### [滚动框组件](src/components/elements/lib/scroll.js)`ICanvas.ComponentElementScroll`

#### [透明度](src/components/properties/lib/alpha.js)`ICanvas.ComponentPropertyAlpha`
#### [锚点](src/components/properties/lib/anchor.js)`ICanvas.ComponentPropertyAnchor`
#### [角度](src/components/properties/lib/angle.js)`ICanvas.ComponentPropertyAngle`
#### [子元素](src/components/properties/lib/children.js)`ICanvas.ComponentPropertyChildren`
#### [裁剪](src/components/properties/lib/clip.js)`ICanvas.ComponentPropertyClip`
#### [边距](src/components/properties/lib/padding.js)`ICanvas.ComponentPropertyPadding`
#### [定位](src/components/properties/lib/position.js)`ICanvas.ComponentPropertyPosition`
#### [缩放](src/components/properties/lib/scale.js)`ICanvas.ComponentPropertyScale`
#### [大小](src/components/properties/lib/size.js)`ICanvas.ComponentPropertySize`
#### [样式](src/components/properties/lib/style.js)`ICanvas.ComponentPropertyStyle`
#### [显示状态](src/components/properties/lib/visible.js)`ICanvas.ComponentPropertyVisible`
#### [偏移层级](src/components/properties/lib/zIndex.js)`ICanvas.ComponentPropertyZIndex`

### 资源加载包
#### [基本加载器](src/resources/lib/loader.js)`ICanvas.ResourceLoader`
#### [浏览器图片管理器](src/resources/lib/image.js)`ICanvas.ResourceImage`
#### [浏览器音频管理器](src/resources/lib/audio.js)`ICanvas.ResourceAudio`

### 特性包
#### [浏览器生成Canvas方法](src/apis/web/canvas.js)`ICanvas.ApiCanvas`
#### [浏览器获取系统属性方法](src/apis/web/system.js)`ICanvas.ApiSystem`
#### [浏览器外部字体加载方法](src/apis/web/font.js)`ICanvas.ApiFont`
#### [浏览器触摸监听传递](src/utils/index.js)`ICanvas.ApiTouch`

### 工具包
#### [Canvas2D扩展](src/utils/lib/canvas2d.js)`ICanvas.UtilCanvas2D`
#### [界面组件渲染类](src/utils/lib/render.js)`ICanvas.UtilRender`
#### [触摸事件统一处理类](src/utils/lib/touch.js)`ICanvas.UtilTouch`
#### [界面组件碰撞检测类](src/utils/lib/collision.js)`ICanvas.UtilCollsion`
#### [文件夹资源结构JSON转键值对](src/utils/index.js)`ICanvas.UtilLoaderMap`
#### [Object属性递归获取方法](src/utils/index.js)`ICanvas.UtilRecursiveMap`
