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
#### [基本向量](src/vector/vector.js)`ICanvas.Vector`
#### [二维向量](src/vector/vector2.js)`ICanvas.Vector2`
#### [三维矩阵](src/vector/matrix4.js)`ICanvas.Matrix4`
#### [三维矩阵](src/vector/color.js)`ICanvas.Color`

### 界面组件
#### [容器组件](src/components/container.js)`ICanvas.Container`
#### [场景管理容器组件](src/components/director.js)`ICanvas.Director`
#### [图片精灵组件](src/components/sprite.js)`ICanvas.Sprite`

### 工具包
#### [底层扩展](src/utils/polyfill.js)`ICanvas.Polyfill`
#### [随机函数](src/utils/random.js)`ICanvas.Random`
#### [界面组件碰撞检测类](src/utils/collision.js)`ICanvas.Collision`
#### [触摸事件统一处理类](src/utils/touch.js)`ICanvas.Touch`
#### [时钟步进类](src/utils/clock.js)`ICanvas.Clock`
#### [事件监听类](src/utils/event.js)`ICanvas.Event`
#### [脏检查器类](src/utils/dirty.js)`ICanvas.Dirty`
#### [动画类](src/utils/animation.js)`ICanvas.Animation`

### 资源管理
#### [图片管理器](src/resource.js)`ICanvas.ImageLoader`
#### [音频管理器](src/resource.js)`ICanvas.AudioLoader`
#### [图片资源类](src/resource.js)`ICanvas.ImageSource`
#### [音频资源类](src/resource.js)`ICanvas.AudioSource`
#### [资源加载器](src/resource.js)`ICanvas.Loader`

### 渲染器
#### [Canvas2D渲染器](src/canvas/render.js)`ICanvas.CanvasRender`
#### [Webgl渲染器](src/webgl/render.js)`ICanvas.WebGLRender`
#### [Webgl默认着色器](src/webgl/shader.js)`ICanvas.WebGLShader`
