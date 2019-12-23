# **iCanvas核心构造器**
![npm](https://img.shields.io/npm/dm/@icanvas/core)

![NPM](https://img.shields.io/npm/l/@icanvas/core)

![npm](https://img.shields.io/npm/v/@icanvas/core) ![npm bundle size](https://img.shields.io/bundlephobia/min/@icanvas/core) ![GitHub top language](https://img.shields.io/github/languages/top/idler8/icanvas)
## 安装
```bash
    npm install -s @icanvas/core
```
## 调用
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
#### [基本垫底组件类](src/components/index.js)`ICanvas.Factory`
#### [基础组件构造器](src/component/index.js)`ICanvas.Sprite`
#### [纹理图组件](src/components/index.js)`ICanvas.Rect`
#### [富文本组件](src/components/index.js)`ICanvas.Text`

### 工具包
#### [Canvas2D扩展](src/utils/lib/canvas2d.js)`ICanvas.UtilCanvas2D`
#### [界面组件渲染类](src/utils/lib/render.js)`ICanvas.UtilRender`
#### [触摸事件统一处理类](src/utils/lib/touch.js)`ICanvas.UtilTouch`
#### [界面组件碰撞检测类](src/utils/lib/collision.js)`ICanvas.UtilCollision`
#### [文件夹资源结构JSON转键值对](src/utils/index.js)`ICanvas.UtilLoaderMap`
#### [Object属性递归获取方法](src/utils/index.js)`ICanvas.UtilRecursiveMap`
