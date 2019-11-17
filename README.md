# **iCanvas核心构造器**
![npm](https://img.shields.io/npm/dm/@icanvas/core)

![NPM](https://img.shields.io/npm/l/@icanvas/core)

![npm](https://img.shields.io/npm/v/@icanvas/core) ![npm bundle size](https://img.shields.io/bundlephobia/min/@icanvas/core) ![GitHub top language](https://img.shields.io/github/languages/top/idler8/icanvas)
## 安装
```bash
    npm install -s @icanvas/core
```
## 调用
### cjs
```html
    <script src="@icnavas/core/dist/icanvas/web.js">//window.ICanvas
```
### umd
```javascript
    const ICanvas = require('@icanvas/core')
```
### es6
```javascript
    const ICanvas = require('@icanvas/core/dist/icanvas.es.js')
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

### 界面组件包
#### [基础组件](src/components/lib/base.js)`ICanvas.ComponentBase`
#### [纹理图组件](src/components/lib/texture.js)`ICanvas.ComponentTexture`
#### [富文本组件](src/components/lib/text.js)`ICanvas.ComponentText`
#### [滚动框组件](src/components/lib/scroll.js)`ICanvas.ComponentScroll`

### 资源加载包
#### [基本资源加载器类](src/resources/lib/load.js)`ICanvas.ResourceLoad`
#### [图片资源管理类](src/resources/lib/image.js)`ICanvas.ResourceImage`
#### [微信图片资源管理类](src/resources/lib/image.js#L25)`ICanvas.ResourceWxgameImage`
#### [浏览器图片资源管理类](src/resources/lib/image.js#L20)`ICanvas.ResourceWebImage`
#### [音频资源管理类](src/resources/lib/audio.js)`ICanvas.ResourceAudio`
#### [微信音频资源管理类](src/resources/lib/audio.js#L70)`ICanvas.ResourceWxgameAudio`
#### [浏览器音频资源管理类](src/resources/lib/audio.js#L97)`ICanvas.ResourceWebAudio`

### 特性包
#### [浏览器生成Canvas方法](src/apis/web/canvas.js)`ICanvas.ApiWebCanvas`
#### [浏览器获取系统属性方法](src/apis/web/system.js)`ICanvas.ApiWebSystem`
#### [浏览器网络请求类](src/apis/web/request.js)`ICanvas.ApiWebRequest`
#### [浏览器数据缓存方法](src/apis/web/storage.js)`ICanvas.ApiWebStorage`
#### [浏览器外部字体加载方法](src/apis/web/font.js)`ICanvas.ApiWebFont`
#### [微信生成Canvas方法](src/apis/wxgame/canvas.js)`ICanvas.ApiWxgameCanvas`
#### [微信获取系统属性方法](src/apis/wxgame/system.js)`ICanvas.ApiWxgameSystem`
#### [微信网络请求类](src/apis/wxgame/request.js)`ICanvas.ApiWxgameRequest`
#### [微信数据缓存方法](src/apis/wxgame/storage.js)`ICanvas.ApiWxgameStorage`
#### [微信登陆工厂方法](src/apis/wxgame/login.js)`ICanvas.ApiWxgameLogin`

### 工具包
#### [浏览器触摸监听](src/utils/index.js)`ICanvas.UtilWebTouchListen`
#### [浏览器鼠标监听](src/utils/index.js)`ICanvas.UtilWebMouseListen`
#### [微信触摸监听](src/utils/index.js)`ICanvas.UtilWxgameTouchListen`
#### [Canvas2D上下文扩展方法](src/utils/lib/canvas.js)`ICanvas.UtilCanvas`
#### [界面组件渲染类](src/utils/lib/render.js)`ICanvas.UtilRender`
#### [触摸事件统一处理类](src/utils/lib/touch.js)`ICanvas.UtilTouch`
#### [界面组件碰撞检测类](src/utils/lib/collision.js)`ICanvas.UtilCollsion`
#### [文件夹资源结构JSON转键值对](src/utils/index.js)`ICanvas.UtilLoaderMap`
#### [Object属性递归获取方法](src/utils/index.js)`ICanvas.UtilRecursiveMap`
#### [微信方法变种工厂](src/utils/index.js)`ICanvas.UtilWxgameVary`
