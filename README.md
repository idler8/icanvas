# **iCanvas核心构造器**

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
#### ICanvas.MathArray
#### ICanvas.MathVector
#### ICanvas.MathVector2
#### ICanvas.MathMatrix3
#### ICanvas.MathClock
#### ICanvas.MathTime
#### ICanvas.MathPosition
#### ICanvas.MathRandom

### 界面组件包
#### ICanvas.ComponentBase
#### ICanvas.ComponentTexture
#### ICanvas.ComponentText
#### ICanvas.ComponentScroll

### 资源加载包
#### ICanvas.ResourceLoad
#### ICanvas.ResourceImage
#### ICanvas.ResourceWxgameImage
#### ICanvas.ResourceWebImage
#### ICanvas.ResourceAudio
#### ICanvas.ResourceWxgameAudio
#### ICanvas.ResourceWebAudio

### 特性包
#### ICanvas.ApiWebCanvas
#### ICanvas.ApiWebSystem
#### ICanvas.ApiWebRequest
#### ICanvas.ApiWebStorage
#### ICanvas.ApiWebFont
#### ICanvas.ApiWxgameCanvas
#### ICanvas.ApiWxgameSystem
#### ICanvas.ApiWxgameRequest
#### ICanvas.ApiWxgameStorage
#### ICanvas.ApiWxgameLogin

### 工具包
#### ICanvas.UtilWebTouchListen
#### ICanvas.UtilWebMouseListen
#### ICanvas.UtilWxgameTouchListen
#### ICanvas.UtilCanvas
#### ICanvas.UtilRender
#### ICanvas.UtilTouch
#### ICanvas.UtilCollsion
#### ICanvas.UtilLoaderMap
#### ICanvas.UtilRecursiveMap
#### ICanvas.UtilWxgameVary
