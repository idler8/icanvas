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
#### [扩展数组](src/maths/lib/array.js)`ICanvas.Math.Array`
#### [基本向量](src/maths/lib/vector.js)`ICanvas.Math.Vector`
#### [二维向量](src/maths/lib/vector2.js)`ICanvas.Math.Vector2`
#### [二维矩阵](src/maths/lib/matrix3.js)`ICanvas.Math.Matrix3`
#### [时钟跳动类](src/maths/lib/clock.js)`ICanvas.Math.Clock`
#### [时间处理类](src/maths/lib/time.js)`ICanvas.Math.Time`
#### [位置处理类](src/maths/lib/position.js)`ICanvas.Math.Position`
#### [随机方法](src/maths/lib/random.js)`ICanvas.Math.Random`

### 界面组件构造器包
#### [组件构造器](src/components/index.js)`ICanvas.Component`
#### [基础组件构造器](src/component/elements/lib/base.js)`ICanvas.Component.Elements.Base`
#### [纹理图组件](src/components/elements/lib/texture.js)`ICanvas.Component.Elements.Texture`
#### [富文本组件](src/components/elements/lib/text.js)`ICanvas.Component.Elements.Text`
#### [滚动框组件](src/components/elements/lib/scroll.js)`ICanvas.Component.Elements.Scroll`

#### [透明度](src/components/properties/lib/alpha.js)`ICanvas.Component.Properties.Alpha`
#### [锚点](src/components/properties/lib/anchor.js)`ICanvas.Component.Properties.Anchor`
#### [角度](src/components/properties/lib/angle.js)`ICanvas.Component.Properties.Angle`
#### [子元素](src/components/properties/lib/children.js)`ICanvas.Component.Properties.Children`
#### [裁剪](src/components/properties/lib/clip.js)`ICanvas.Component.Properties.Clip`
#### [边距](src/components/properties/lib/padding.js)`ICanvas.Component.Properties.Padding`
#### [定位](src/components/properties/lib/position.js)`ICanvas.Component.Properties.Position`
#### [缩放](src/components/properties/lib/scale.js)`ICanvas.Component.Properties.Scale`
#### [大小](src/components/properties/lib/size.js)`ICanvas.Component.Properties.Size`
#### [样式](src/components/properties/lib/style.js)`ICanvas.Component.Properties.Style`
#### [显示状态](src/components/properties/lib/visible.js)`ICanvas.Component.Properties.Visible`
#### [偏移层级](src/components/properties/lib/zIndex.js)`ICanvas.Component.Properties.ZIndex`

### 资源加载包
#### [基本加载器](src/resources/lib/loader.js)`ICanvas.Resource.Loader`
#### [浏览器图片管理器](src/resources/lib/image.js)`ICanvas.Resource.Image`
#### [浏览器音频管理器](src/resources/lib/audio.js)`ICanvas.Resource.Audio`

### 特性包
#### [浏览器生成Canvas方法](src/apis/web/canvas.js)`ICanvas.Api.Canvas`
#### [浏览器获取系统属性方法](src/apis/web/system.js)`ICanvas.Api.System`
#### [浏览器外部字体加载方法](src/apis/web/font.js)`ICanvas.Api.Font`
#### [浏览器触摸监听传递](src/utils/index.js)`ICanvas.Util.TouchListen`

### 工具包
#### [Canvas2D扩展](src/utils/lib/canvas2d.js)`ICanvas.Util.Canvas2D`
#### [界面组件渲染类](src/utils/lib/render.js)`ICanvas.Util.Render`
#### [触摸事件统一处理类](src/utils/lib/touch.js)`ICanvas.Util.Touch`
#### [界面组件碰撞检测类](src/utils/lib/collision.js)`ICanvas.Util.Collsion`
#### [文件夹资源结构JSON转键值对](src/utils/index.js)`ICanvas.Util.LoaderMap`
#### [Object属性递归获取方法](src/utils/index.js)`ICanvas.Util.RecursiveMap`
