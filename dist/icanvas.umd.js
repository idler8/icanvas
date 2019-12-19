(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.ICanvas = {}));
}(this, (function (exports) { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var classCallCheck = _classCallCheck;

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var createClass = _createClass;

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var _typeof_1 = createCommonjsModule(function (module) {
  function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

  function _typeof(obj) {
    if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
      module.exports = _typeof = function _typeof(obj) {
        return _typeof2(obj);
      };
    } else {
      module.exports = _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
      };
    }

    return _typeof(obj);
  }

  module.exports = _typeof;
  });

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  var assertThisInitialized = _assertThisInitialized;

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof_1(call) === "object" || typeof call === "function")) {
      return call;
    }

    return assertThisInitialized(self);
  }

  var possibleConstructorReturn = _possibleConstructorReturn;

  var getPrototypeOf = createCommonjsModule(function (module) {
  function _getPrototypeOf(o) {
    module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  module.exports = _getPrototypeOf;
  });

  var setPrototypeOf = createCommonjsModule(function (module) {
  function _setPrototypeOf(o, p) {
    module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  module.exports = _setPrototypeOf;
  });

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) setPrototypeOf(subClass, superClass);
  }

  var inherits = _inherits;

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  var isNativeFunction = _isNativeFunction;

  var construct = createCommonjsModule(function (module) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
      module.exports = _construct = Reflect.construct;
    } else {
      module.exports = _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  module.exports = _construct;
  });

  var wrapNativeSuper = createCommonjsModule(function (module) {
  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return construct(Class, arguments, getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  module.exports = _wrapNativeSuper;
  });

  /**
   * @class 扩展数组类
   */
  var BaseArray =
  /*#__PURE__*/
  function (_Array) {
    inherits(BaseArray, _Array);

    function BaseArray() {
      var _this;

      classCallCheck(this, BaseArray);

      _this = possibleConstructorReturn(this, getPrototypeOf(BaseArray).call(this, arguments.length));

      _this.setTo.apply(assertThisInitialized(_this), arguments);

      return _this;
    }
    /**
     * 将数组所有内容设置为同一个值
     * @param {Any} n
     */


    createClass(BaseArray, [{
      key: "set",
      value: function set(n) {
        for (var i = 0; i < this.length; i++) {
          this[i] = n;
        }

        return this;
      }
      /**
       * 将数组内容分别设置为各参数值
       */

    }, {
      key: "setTo",
      value: function setTo() {
        return this.setToArray(arguments);
      }
      /**
       * 将数组参数分别设置为float数组的值
       * @param {Array} float
       */

    }, {
      key: "setToArray",
      value: function setToArray(_float) {
        if (_float === this) return this;

        for (var i = 0; i < _float.length; i++) {
          this[i] = _float[i];
        }

        return this;
      }
      /**
       * 拷贝本类
       */

    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor().setToArray(this);
      }
      /**
       * 判断数组长度和内部值全部相同
       * @param {Array} float 用来比较的数组
       * @param {Boolean} absolute 是否判断长度相同
       */

    }, {
      key: "equals",
      value: function equals(_float2) {
        var absolute = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        if (absolute && this.length != _float2.length) return false;
        var length = absolute ? this.length : Math.min(this.length, _float2.length);

        for (var i = 0; i < length; i++) {
          if (this[i] != _float2[i]) return false;
        }

        return true;
      }
      /**
       * 判断数组各值和各实参相同
       */

    }, {
      key: "equalsSome",
      value: function equalsSome() {
        return this.equals(arguments);
      }
      /**
       * 获取各种TypeArray
       */

    }, {
      key: "Int8Array",
      get: function get() {
        return new Int8Array(this);
      }
    }, {
      key: "Uint8Array",
      get: function get() {
        return new Uint8Array(this);
      }
    }, {
      key: "Uint8ClampedArray",
      get: function get() {
        return new Uint8ClampedArray(this);
      }
    }, {
      key: "Int16Array",
      get: function get() {
        return new Int16Array(this);
      }
    }, {
      key: "Uint16Array",
      get: function get() {
        return new Uint16Array(this);
      }
    }, {
      key: "Int32Array",
      get: function get() {
        return new Int32Array(this);
      }
    }, {
      key: "Uint32Array",
      get: function get() {
        return new Uint32Array(this);
      }
    }, {
      key: "Float32Array",
      get: function get() {
        return new Float32Array(this);
      }
    }, {
      key: "Float64Array",
      get: function get() {
        return new Float64Array(this);
      }
    }, {
      key: "BigInt64Array",
      get: function get() {
        return new BigInt64Array(this);
      }
    }, {
      key: "BigUint64Array",
      get: function get() {
        return new BigUint64Array(this);
      }
    }]);

    return BaseArray;
  }(wrapNativeSuper(Array));

  var Vector =
  /*#__PURE__*/
  function (_BaseArray) {
    inherits(Vector, _BaseArray);

    function Vector() {
      classCallCheck(this, Vector);

      return possibleConstructorReturn(this, getPrototypeOf(Vector).apply(this, arguments));
    }

    createClass(Vector, [{
      key: "add",
      //向量加
      value: function add(n) {
        for (var i = 0; i < this.length; i++) {
          this[i] += n;
        }

        return this;
      }
    }, {
      key: "addTo",
      value: function addTo() {
        return this.addToVector(arguments);
      }
    }, {
      key: "addToVector",
      value: function addToVector(vector) {
        for (var i = 0; i < vector.length; i++) {
          this[i] += vector[i];
        }

        return this;
      } //向量减

    }, {
      key: "sub",
      value: function sub(n) {
        for (var i = 0; i < this.length; i++) {
          this[i] -= n;
        }

        return this;
      }
    }, {
      key: "subTo",
      value: function subTo() {
        return this.subToVector(arguments);
      }
    }, {
      key: "subToVector",
      value: function subToVector(vector) {
        for (var i = 0; i < vector.length; i++) {
          this[i] -= vector[i];
        }

        return this;
      } //向量乘

    }, {
      key: "mult",
      value: function mult(n) {
        for (var i = 0; i < this.length; i++) {
          this[i] *= n;
        }

        return this;
      }
    }, {
      key: "multTo",
      value: function multTo() {
        return this.multToVector(arguments);
      }
    }, {
      key: "multToVector",
      value: function multToVector(vector) {
        for (var i = 0; i < vector.length; i++) {
          this[i] *= vector[i];
        }

        return this;
      } //向量除

    }, {
      key: "div",
      value: function div(n) {
        for (var i = 0; i < this.length; i++) {
          this[i] /= n;
        }

        return this;
      }
    }, {
      key: "divTo",
      value: function divTo() {
        return this.divToVector(arguments);
      }
    }, {
      key: "divToVector",
      value: function divToVector(vector) {
        for (var i = 0; i < vector.length; i++) {
          this[i] /= vector[i];
        }

        return this;
      } //向量置零

    }, {
      key: "zero",
      value: function zero() {
        for (var i = 0; i < this.length; i++) {
          this[i] = 0;
        }

        return this;
      }
    }]);

    return Vector;
  }(BaseArray);

  var Vector2 =
  /*#__PURE__*/
  function (_Vector) {
    inherits(Vector2, _Vector);

    function Vector2() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      classCallCheck(this, Vector2);

      return possibleConstructorReturn(this, getPrototypeOf(Vector2).call(this, x, y));
    }

    createClass(Vector2, [{
      key: "rotate",
      //旋转向量
      value: function rotate(rads) {
        var s = Math.sin(rads);
        var c = Math.cos(rads);
        var xrot = c * this.x - s * this.y;
        this.y = s * this.x + c * this.y;
        this.x = xrot;
        return this;
      } //距离计算

    }, {
      key: "dist",
      value: function dist(vector2) {
        return this.distTo(vector2.x, vector2.y);
      }
    }, {
      key: "distTo",
      value: function distTo(x, y) {
        var dx = this.x - x;
        var dy = this.y - y;
        return Math.sqrt(dx * dx + dy * dy);
      } //计算向量到0的长度

    }, {
      key: "mag",
      value: function mag() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
      } //比较并设置为最小向量

    }, {
      key: "min",
      value: function min(vector2) {
        if (vector2.x < this.x) this.x = vector2.x;
        if (vector2.y < this.y) this.y = vector2.y;
        return this;
      } //比较并设置为最大向量

    }, {
      key: "max",
      value: function max(vector2) {
        if (vector2.x > this.x) this.x = vector2.x;
        if (vector2.y > this.y) this.y = vector2.y;
        return this;
      } //判断不规则碰撞

    }, {
      key: "inPolygon",
      value: function inPolygon(vs) {
        if (arguments.length > 1) vs = arguments;
        if (vs.length < 3) return false;
        var inside = false;

        for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
          var xi = vs[i].x,
              yi = vs[i].y,
              xj = vs[j].x,
              yj = vs[j].y,
              intersect = yi > this[1] != yj > this[1] && this[0] < (xj - xi) * (this[1] - yi) / (yj - yi) + xi;
          if (intersect) inside = !inside;
        }

        return inside;
      }
    }, {
      key: "dot",
      value: function dot(vector2) {
        return this.x * vector2.x + this.y * vector2.y;
      } // dotCoords(x, y) {
      // 	return this.x * x + this.y + y;
      // }
      // normalize() {
      // 	var m = this.mag();
      // 	if (m != 0 && m != 1) {
      // 		this.div(m);
      // 	}
      // 	return this;
      // }
      // limit(max) {
      // 	if (this.mag() > max) {
      // 		this.normalize();
      // 		this.mult(max);
      // 	}
      // 	return this;
      // }
      // heading2d() {
      // 	var angle = Math.atan2(-y, x);
      // 	return -1 * angle;
      // }

    }, {
      key: "angle",
      value: function angle(vector) {
        return Math.acos(this.dot(vector) / (this.mag() * vector.mag()));
      } // normal() {
      // 	var temp = this.vector.x;
      // 	this.x = -this.vector.y;
      // 	this.y = temp;
      // 	return this;
      // }
      // random(mag) {
      // 	this.x = Math.random();
      // 	this.y = Math.random();
      // 	if (mag) this.scale(mag);
      // 	return this;
      // }

    }, {
      key: "x",
      get: function get() {
        return this[0];
      },
      set: function set(x) {
        this[0] = x;
      }
    }, {
      key: "y",
      get: function get() {
        return this[1];
      },
      set: function set(y) {
        this[1] = y;
      }
    }]);

    return Vector2;
  }(Vector);

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var defineProperty = _defineProperty;

  var _temp;
  var Vector3 = (_temp =
  /*#__PURE__*/
  function (_Vector) {
    inherits(Vector3, _Vector);

    function Vector3() {
      var _this;

      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      classCallCheck(this, Vector3);

      _this = possibleConstructorReturn(this, getPrototypeOf(Vector3).call(this, x, y, z));

      defineProperty(assertThisInitialized(_this), "normalize", function () {
        var v = this;
        var c = v[0],
            d = v[1],
            e = v[2],
            g = Math.sqrt(c * c + d * d + e * e);

        if (g) {
          if (g == 1) return this;
        } else {
          v[0] = 0;
          v[1] = 0;
          v[2] = 0;
          return this;
        }

        g = 1 / g;
        v[0] = c * g;
        v[1] = d * g;
        v[2] = e * g;
        return this;
      });

      return _this;
    }

    return Vector3;
  }(Vector), _temp);

  var Vector4 =
  /*#__PURE__*/
  function (_Vector) {
    inherits(Vector4, _Vector);

    function Vector4() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var w = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

      classCallCheck(this, Vector4);

      return possibleConstructorReturn(this, getPrototypeOf(Vector4).call(this, x, y, z, w));
    }

    return Vector4;
  }(Vector);

  var Matrix3 =
  /*#__PURE__*/
  function (_BaseArray) {
    inherits(Matrix3, _BaseArray);

    createClass(Matrix3, [{
      key: "a",
      get: function get() {
        return this[0];
      },
      set: function set(x) {
        this[0] = x;
      }
    }, {
      key: "b",
      get: function get() {
        return this[1];
      },
      set: function set(y) {
        this[1] = y;
      }
    }, {
      key: "c",
      get: function get() {
        return this[2];
      },
      set: function set(x) {
        this[2] = x;
      }
    }, {
      key: "d",
      get: function get() {
        return this[3];
      },
      set: function set(y) {
        this[3] = y;
      }
    }, {
      key: "tx",
      get: function get() {
        return this[4];
      },
      set: function set(x) {
        this[4] = x;
      }
    }, {
      key: "ty",
      get: function get() {
        return this[5];
      },
      set: function set(y) {
        this[5] = y;
      }
    }]);

    function Matrix3() {
      var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var d = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
      var tx = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
      var ty = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

      classCallCheck(this, Matrix3);

      return possibleConstructorReturn(this, getPrototypeOf(Matrix3).call(this, a, b, c, d, tx, ty, 0, 0, 1));
    } //重置矩阵


    createClass(Matrix3, [{
      key: "identity",
      value: function identity() {
        return this.setTo(1, 0, 0, 1, 0, 0, 0, 0, 1);
      } //位移

    }, {
      key: "translate",
      value: function translate(x, y) {
        this[4] = this[0] * x + this[2] * y + this[4];
        this[5] = this[1] * x + this[3] * y + this[5];
        return this;
      } //旋转

    }, {
      key: "rotate",
      value: function rotate(a) {
        var s = Math.sin(a),
            c = Math.cos(a);
        var a0 = this[0],
            a1 = this[1],
            a2 = this[2],
            a3 = this[3];
        this[0] = a0 * c + a2 * s;
        this[1] = a1 * c + a3 * s;
        this[2] = a0 * -s + a2 * c;
        this[3] = a1 * -s + a3 * c;
        return this;
      } //缩放

    }, {
      key: "scale",
      value: function scale(x, y) {
        this[0] *= x;
        this[1] *= x;
        this[2] *= y;
        this[3] *= y;
        return this;
      } //斜切

    }, {
      key: "skew",
      value: function skew(x, y) {
        var tanX = Math.tan(x),
            tanY = Math.tan(y),
            mx0 = this[0],
            mx1 = this[1];
        this[0] += tanY * this[2];
        this[1] += tanY * this[3];
        this[2] += tanX * mx0;
        this[3] += tanX * mx1;
        return this;
      } //倒置

    }, {
      key: "invert",
      value: function invert() {
        var aa = this[0],
            ab = this[1],
            ac = this[2],
            ad = this[3],
            atx = this[4],
            aty = this[5];
        var det = aa * ad - ab * ac;
        if (!det) return this;
        det = 1.0 / det;
        this[0] = ad * det;
        this[1] = -ab * det;
        this[2] = -ac * det;
        this[3] = aa * det;
        this[4] = (ac * aty - ad * atx) * det;
        this[5] = (ab * atx - aa * aty) * det;
        return this;
      }
    }, {
      key: "append",
      value: function append(matrix) {
        var a1 = this.a;
        var b1 = this.b;
        var c1 = this.c;
        var d1 = this.d;
        this.a = matrix.a * a1 + matrix.b * c1;
        this.b = matrix.a * b1 + matrix.b * d1;
        this.c = matrix.c * a1 + matrix.d * c1;
        this.d = matrix.c * b1 + matrix.d * d1;
        this.tx = matrix.tx * a1 + matrix.ty * c1 + this.tx;
        this.ty = matrix.tx * b1 + matrix.ty * d1 + this.ty;
        return this;
      }
    }, {
      key: "prepend",
      value: function prepend(matrix) {
        var tx1 = this.tx;

        if (matrix.a !== 1 || matrix.b !== 0 || matrix.c !== 0 || matrix.d !== 1) {
          var a1 = this.a;
          var c1 = this.c;
          this.a = a1 * matrix.a + this.b * matrix.c;
          this.b = a1 * matrix.b + this.b * matrix.d;
          this.c = c1 * matrix.a + this.d * matrix.c;
          this.d = c1 * matrix.b + this.d * matrix.d;
        }

        this.tx = tx1 * matrix.a + this.ty * matrix.c + matrix.tx;
        this.ty = tx1 * matrix.b + this.ty * matrix.d + matrix.ty;
        return this;
      } // determinant(a) {
      //  return a[0] * a[3] - a[1] * a[2];
      // }
      // multiply(out, a, b) {
      // 	let a0 = a[0],
      // 		a1 = a[1],
      // 		a2 = a[2],
      // 		a3 = a[3],
      // 		a4 = a[4],
      // 		a5 = a[5];
      // 	let b0 = b[0],
      // 		b1 = b[1],
      // 		b2 = b[2],
      // 		b3 = b[3],
      // 		b4 = b[4],
      // 		b5 = b[5];
      // 	out[0] = a0 * b0 + a2 * b1;
      // 	out[1] = a1 * b0 + a3 * b1;
      // 	out[2] = a0 * b2 + a2 * b3;
      // 	out[3] = a1 * b2 + a3 * b3;
      // 	out[4] = a0 * b4 + a2 * b5 + a4;
      // 	out[5] = a1 * b4 + a3 * b5 + a5;
      // 	return out;
      // }

    }]);

    return Matrix3;
  }(BaseArray);

  var Matrix4 =
  /*#__PURE__*/
  function (_BaseArray) {
    inherits(Matrix4, _BaseArray);

    function Matrix4() {
      var _this;

      classCallCheck(this, Matrix4);

      _this = possibleConstructorReturn(this, getPrototypeOf(Matrix4).call(this, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1));

      _this.setTo.apply(assertThisInitialized(_this), arguments);

      return _this;
    } //重置


    createClass(Matrix4, [{
      key: "identity",
      value: function identity() {
        return this.setTo(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      } //相乘

    }, {
      key: "multiply",
      value: function multiply(other) {
        var i, e, a, b, ai0, ai1, ai2, ai3; // Calculate e = a * b

        e = this;
        a = this;
        b = other; // If e equals b, copy b to temporary matrix.

        if (e === b) {
          b = new Float32Array(16);

          for (i = 0; i < 16; ++i) {
            b[i] = e[i];
          }
        }

        for (i = 0; i < 4; i++) {
          ai0 = a[i];
          ai1 = a[i + 4];
          ai2 = a[i + 8];
          ai3 = a[i + 12];
          e[i] = ai0 * b[0] + ai1 * b[1] + ai2 * b[2] + ai3 * b[3];
          e[i + 4] = ai0 * b[4] + ai1 * b[5] + ai2 * b[6] + ai3 * b[7];
          e[i + 8] = ai0 * b[8] + ai1 * b[9] + ai2 * b[10] + ai3 * b[11];
          e[i + 12] = ai0 * b[12] + ai1 * b[13] + ai2 * b[14] + ai3 * b[15];
        }

        return this;
      } //与Vertor3相乘

    }, {
      key: "multiplyVector3",
      value: function multiplyVector3(pos) {
        var e = this;
        var p = pos;
        var result = new Vector3();
        result[0] = p[0] * e[0] + p[1] * e[4] + p[2] * e[8] + e[11];
        result[1] = p[0] * e[1] + p[1] * e[5] + p[2] * e[9] + e[12];
        result[2] = p[0] * e[2] + p[1] * e[6] + p[2] * e[10] + e[13];
        return v;
      } //与Vertor4相乘

    }, {
      key: "multiplyVector4",
      value: function multiplyVector4(pos) {
        var e = this;
        var p = pos;
        var result = new Vector4();
        result[0] = p[0] * e[0] + p[1] * e[4] + p[2] * e[8] + p[3] * e[12];
        result[1] = p[0] * e[1] + p[1] * e[5] + p[2] * e[9] + p[3] * e[13];
        result[2] = p[0] * e[2] + p[1] * e[6] + p[2] * e[10] + p[3] * e[14];
        result[3] = p[0] * e[3] + p[1] * e[7] + p[2] * e[11] + p[3] * e[15];
        return v;
      }
    }, {
      key: "transpose",
      value: function transpose() {
        var e, t;
        e = this;
        t = e[1];
        e[1] = e[4];
        e[4] = t;
        t = e[2];
        e[2] = e[8];
        e[8] = t;
        t = e[3];
        e[3] = e[12];
        e[12] = t;
        t = e[6];
        e[6] = e[9];
        e[9] = t;
        t = e[7];
        e[7] = e[13];
        e[13] = t;
        t = e[11];
        e[11] = e[14];
        e[14] = t;
        return this;
      }
    }, {
      key: "setInverseOf",
      value: function setInverseOf(other) {
        var i, s, d, inv, det;
        s = other;
        d = this;
        inv = new Float32Array(16);
        inv[0] = s[5] * s[10] * s[15] - s[5] * s[11] * s[14] - s[9] * s[6] * s[15] + s[9] * s[7] * s[14] + s[13] * s[6] * s[11] - s[13] * s[7] * s[10];
        inv[4] = -s[4] * s[10] * s[15] + s[4] * s[11] * s[14] + s[8] * s[6] * s[15] - s[8] * s[7] * s[14] - s[12] * s[6] * s[11] + s[12] * s[7] * s[10];
        inv[8] = s[4] * s[9] * s[15] - s[4] * s[11] * s[13] - s[8] * s[5] * s[15] + s[8] * s[7] * s[13] + s[12] * s[5] * s[11] - s[12] * s[7] * s[9];
        inv[12] = -s[4] * s[9] * s[14] + s[4] * s[10] * s[13] + s[8] * s[5] * s[14] - s[8] * s[6] * s[13] - s[12] * s[5] * s[10] + s[12] * s[6] * s[9];
        inv[1] = -s[1] * s[10] * s[15] + s[1] * s[11] * s[14] + s[9] * s[2] * s[15] - s[9] * s[3] * s[14] - s[13] * s[2] * s[11] + s[13] * s[3] * s[10];
        inv[5] = s[0] * s[10] * s[15] - s[0] * s[11] * s[14] - s[8] * s[2] * s[15] + s[8] * s[3] * s[14] + s[12] * s[2] * s[11] - s[12] * s[3] * s[10];
        inv[9] = -s[0] * s[9] * s[15] + s[0] * s[11] * s[13] + s[8] * s[1] * s[15] - s[8] * s[3] * s[13] - s[12] * s[1] * s[11] + s[12] * s[3] * s[9];
        inv[13] = s[0] * s[9] * s[14] - s[0] * s[10] * s[13] - s[8] * s[1] * s[14] + s[8] * s[2] * s[13] + s[12] * s[1] * s[10] - s[12] * s[2] * s[9];
        inv[2] = s[1] * s[6] * s[15] - s[1] * s[7] * s[14] - s[5] * s[2] * s[15] + s[5] * s[3] * s[14] + s[13] * s[2] * s[7] - s[13] * s[3] * s[6];
        inv[6] = -s[0] * s[6] * s[15] + s[0] * s[7] * s[14] + s[4] * s[2] * s[15] - s[4] * s[3] * s[14] - s[12] * s[2] * s[7] + s[12] * s[3] * s[6];
        inv[10] = s[0] * s[5] * s[15] - s[0] * s[7] * s[13] - s[4] * s[1] * s[15] + s[4] * s[3] * s[13] + s[12] * s[1] * s[7] - s[12] * s[3] * s[5];
        inv[14] = -s[0] * s[5] * s[14] + s[0] * s[6] * s[13] + s[4] * s[1] * s[14] - s[4] * s[2] * s[13] - s[12] * s[1] * s[6] + s[12] * s[2] * s[5];
        inv[3] = -s[1] * s[6] * s[11] + s[1] * s[7] * s[10] + s[5] * s[2] * s[11] - s[5] * s[3] * s[10] - s[9] * s[2] * s[7] + s[9] * s[3] * s[6];
        inv[7] = s[0] * s[6] * s[11] - s[0] * s[7] * s[10] - s[4] * s[2] * s[11] + s[4] * s[3] * s[10] + s[8] * s[2] * s[7] - s[8] * s[3] * s[6];
        inv[11] = -s[0] * s[5] * s[11] + s[0] * s[7] * s[9] + s[4] * s[1] * s[11] - s[4] * s[3] * s[9] - s[8] * s[1] * s[7] + s[8] * s[3] * s[5];
        inv[15] = s[0] * s[5] * s[10] - s[0] * s[6] * s[9] - s[4] * s[1] * s[10] + s[4] * s[2] * s[9] + s[8] * s[1] * s[6] - s[8] * s[2] * s[5];
        det = s[0] * inv[0] + s[1] * inv[4] + s[2] * inv[8] + s[3] * inv[12];

        if (det === 0) {
          return this;
        }

        det = 1 / det;

        for (i = 0; i < 16; i++) {
          d[i] = inv[i] * det;
        }

        return this;
      }
    }, {
      key: "invert",
      value: function invert() {
        return this.setInverseOf(this);
      }
    }, {
      key: "setOrtho",
      value: function setOrtho(left, right, bottom, top, near, far) {
        var e, rw, rh, rd;

        if (left === right || bottom === top || near === far) {
          throw 'null frustum';
        }

        rw = 1 / (right - left);
        rh = 1 / (top - bottom);
        rd = 1 / (far - near);
        e = this;
        e[0] = 2 * rw;
        e[1] = 0;
        e[2] = 0;
        e[3] = 0;
        e[4] = 0;
        e[5] = 2 * rh;
        e[6] = 0;
        e[7] = 0;
        e[8] = 0;
        e[9] = 0;
        e[10] = -2 * rd;
        e[11] = 0;
        e[12] = -(right + left) * rw;
        e[13] = -(top + bottom) * rh;
        e[14] = -(far + near) * rd;
        e[15] = 1;
        return this;
      }
    }, {
      key: "ortho",
      value: function ortho(left, right, bottom, top, near, far) {
        return this.multiply(new this.constructor().setOrtho(left, right, bottom, top, near, far));
      }
    }, {
      key: "setFrustum",
      value: function setFrustum(left, right, bottom, top, near, far) {
        var e, rw, rh, rd;

        if (left === right || top === bottom || near === far) {
          throw 'null frustum';
        }

        if (near <= 0) {
          throw 'near <= 0';
        }

        if (far <= 0) {
          throw 'far <= 0';
        }

        rw = 1 / (right - left);
        rh = 1 / (top - bottom);
        rd = 1 / (far - near);
        e = this;
        e[0] = 2 * near * rw;
        e[1] = 0;
        e[2] = 0;
        e[3] = 0;
        e[4] = 0;
        e[5] = 2 * near * rh;
        e[6] = 0;
        e[7] = 0;
        e[8] = (right + left) * rw;
        e[9] = (top + bottom) * rh;
        e[10] = -(far + near) * rd;
        e[11] = -1;
        e[12] = 0;
        e[13] = 0;
        e[14] = -2 * near * far * rd;
        e[15] = 0;
        return this;
      }
    }, {
      key: "frustum",
      value: function frustum(left, right, bottom, top, near, far) {
        return this.multiply(new this.constructor().setFrustum(left, right, bottom, top, near, far));
      }
    }, {
      key: "setPerspective",
      value: function setPerspective(fovy, aspect, near, far) {
        var e, rd, s, ct;

        if (near === far || aspect === 0) {
          throw 'null frustum';
        }

        if (near <= 0) {
          throw 'near <= 0';
        }

        if (far <= 0) {
          throw 'far <= 0';
        }

        fovy = Math.PI * fovy / 180 / 2;
        s = Math.sin(fovy);

        if (s === 0) {
          throw 'null frustum';
        }

        rd = 1 / (far - near);
        ct = Math.cos(fovy) / s;
        e = this;
        e[0] = ct / aspect;
        e[1] = 0;
        e[2] = 0;
        e[3] = 0;
        e[4] = 0;
        e[5] = ct;
        e[6] = 0;
        e[7] = 0;
        e[8] = 0;
        e[9] = 0;
        e[10] = -(far + near) * rd;
        e[11] = -1;
        e[12] = 0;
        e[13] = 0;
        e[14] = -2 * near * far * rd;
        e[15] = 0;
        return this;
      }
    }, {
      key: "perspective",
      value: function perspective(fovy, aspect, near, far) {
        return this.multiply(new this.constructor().setPerspective(fovy, aspect, near, far));
      }
    }, {
      key: "setScale",
      value: function setScale() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
        var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
        var e = this;
        e[0] = x;
        e[4] = 0;
        e[8] = 0;
        e[12] = 0;
        e[1] = 0;
        e[5] = y;
        e[9] = 0;
        e[13] = 0;
        e[2] = 0;
        e[6] = 0;
        e[10] = z;
        e[14] = 0;
        e[3] = 0;
        e[7] = 0;
        e[11] = 0;
        e[15] = 1;
        return this;
      }
    }, {
      key: "scale",
      value: function scale() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
        var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
        var e = this;
        e[0] *= x;
        e[4] *= y;
        e[8] *= z;
        e[1] *= x;
        e[5] *= y;
        e[9] *= z;
        e[2] *= x;
        e[6] *= y;
        e[10] *= z;
        e[3] *= x;
        e[7] *= y;
        e[11] *= z;
        return this;
      }
    }, {
      key: "setTranslate",
      value: function setTranslate() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var e = this;
        e[0] = 1;
        e[4] = 0;
        e[8] = 0;
        e[12] = x;
        e[1] = 0;
        e[5] = 1;
        e[9] = 0;
        e[13] = y;
        e[2] = 0;
        e[6] = 0;
        e[10] = 1;
        e[14] = z;
        e[3] = 0;
        e[7] = 0;
        e[11] = 0;
        e[15] = 1;
        return this;
      }
    }, {
      key: "translate",
      value: function translate() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var e = this;
        e[12] += e[0] * x + e[4] * y + e[8] * z;
        e[13] += e[1] * x + e[5] * y + e[9] * z;
        e[14] += e[2] * x + e[6] * y + e[10] * z;
        e[15] += e[3] * x + e[7] * y + e[11] * z;
        return this;
      }
    }, {
      key: "setRotate",
      value: function setRotate(angle) {
        var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var z = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : -1;
        var e, s, c, len, rlen, nc, xy, yz, zx, xs, ys, zs;
        e = this;
        s = Math.sin(angle);
        c = Math.cos(angle);

        if (0 !== x && 0 === y && 0 === z) {
          // Rotation around X axis
          if (x < 0) {
            s = -s;
          }

          e[0] = 1;
          e[4] = 0;
          e[8] = 0;
          e[12] = 0;
          e[1] = 0;
          e[5] = c;
          e[9] = -s;
          e[13] = 0;
          e[2] = 0;
          e[6] = s;
          e[10] = c;
          e[14] = 0;
          e[3] = 0;
          e[7] = 0;
          e[11] = 0;
          e[15] = 1;
        } else if (0 === x && 0 !== y && 0 === z) {
          // Rotation around Y axis
          if (y < 0) {
            s = -s;
          }

          e[0] = c;
          e[4] = 0;
          e[8] = s;
          e[12] = 0;
          e[1] = 0;
          e[5] = 1;
          e[9] = 0;
          e[13] = 0;
          e[2] = -s;
          e[6] = 0;
          e[10] = c;
          e[14] = 0;
          e[3] = 0;
          e[7] = 0;
          e[11] = 0;
          e[15] = 1;
        } else if (0 === x && 0 === y && 0 !== z) {
          // Rotation around Z axis
          if (z < 0) {
            s = -s;
          }

          e[0] = c;
          e[4] = -s;
          e[8] = 0;
          e[12] = 0;
          e[1] = s;
          e[5] = c;
          e[9] = 0;
          e[13] = 0;
          e[2] = 0;
          e[6] = 0;
          e[10] = 1;
          e[14] = 0;
          e[3] = 0;
          e[7] = 0;
          e[11] = 0;
          e[15] = 1;
        } else {
          // Rotation around another axis
          len = Math.sqrt(x * x + y * y + z * z);

          if (len !== 1) {
            rlen = 1 / len;
            x *= rlen;
            y *= rlen;
            z *= rlen;
          }

          nc = 1 - c;
          xy = x * y;
          yz = y * z;
          zx = z * x;
          xs = x * s;
          ys = y * s;
          zs = z * s;
          e[0] = x * x * nc + c;
          e[1] = xy * nc + zs;
          e[2] = zx * nc - ys;
          e[3] = 0;
          e[4] = xy * nc - zs;
          e[5] = y * y * nc + c;
          e[6] = yz * nc + xs;
          e[7] = 0;
          e[8] = zx * nc + ys;
          e[9] = yz * nc - xs;
          e[10] = z * z * nc + c;
          e[11] = 0;
          e[12] = 0;
          e[13] = 0;
          e[14] = 0;
          e[15] = 1;
        }

        return this;
      }
    }, {
      key: "rotate",
      value: function rotate() {
        var angle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var z = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : -1;
        return this.multiply(new this.constructor().setRotate(angle, x, y, z));
      }
    }, {
      key: "setLookAt",
      value: function setLookAt(eyeX, eyeY, eyeZ, centerX, centerY, centerZ, upX, upY, upZ) {
        var e, fx, fy, fz, rlf, sx, sy, sz, rls, ux, uy, uz;
        fx = centerX - eyeX;
        fy = centerY - eyeY;
        fz = centerZ - eyeZ; // Normalize f.

        rlf = 1 / Math.sqrt(fx * fx + fy * fy + fz * fz);
        fx *= rlf;
        fy *= rlf;
        fz *= rlf; // Calculate cross product of f and up.

        sx = fy * upZ - fz * upY;
        sy = fz * upX - fx * upZ;
        sz = fx * upY - fy * upX; // Normalize s.

        rls = 1 / Math.sqrt(sx * sx + sy * sy + sz * sz);
        sx *= rls;
        sy *= rls;
        sz *= rls; // Calculate cross product of s and f.

        ux = sy * fz - sz * fy;
        uy = sz * fx - sx * fz;
        uz = sx * fy - sy * fx; // Set to this.

        e = this;
        e[0] = sx;
        e[1] = ux;
        e[2] = -fx;
        e[3] = 0;
        e[4] = sy;
        e[5] = uy;
        e[6] = -fy;
        e[7] = 0;
        e[8] = sz;
        e[9] = uz;
        e[10] = -fz;
        e[11] = 0;
        e[12] = 0;
        e[13] = 0;
        e[14] = 0;
        e[15] = 1; // Translate.

        return this.translate(-eyeX, -eyeY, -eyeZ);
      }
    }, {
      key: "lookAt",
      value: function lookAt(eyeX, eyeY, eyeZ, centerX, centerY, centerZ, upX, upY, upZ) {
        return this.multiply(new this.constructor().setLookAt(eyeX, eyeY, eyeZ, centerX, centerY, centerZ, upX, upY, upZ));
      }
    }, {
      key: "dropShadow",
      value: function dropShadow(plane, light) {
        var mat = new this.constructor();
        var e = mat;
        var dot = plane[0] * light[0] + plane[1] * light[1] + plane[2] * light[2] + plane[3] * light[3];
        e[0] = dot - light[0] * plane[0];
        e[1] = -light[1] * plane[0];
        e[2] = -light[2] * plane[0];
        e[3] = -light[3] * plane[0];
        e[4] = -light[0] * plane[1];
        e[5] = dot - light[1] * plane[1];
        e[6] = -light[2] * plane[1];
        e[7] = -light[3] * plane[1];
        e[8] = -light[0] * plane[2];
        e[9] = -light[1] * plane[2];
        e[10] = dot - light[2] * plane[2];
        e[11] = -light[3] * plane[2];
        e[12] = -light[0] * plane[3];
        e[13] = -light[1] * plane[3];
        e[14] = -light[2] * plane[3];
        e[15] = dot - light[3] * plane[3];
        return this.multiply(mat);
      }
    }, {
      key: "dropShadowDirectionally",
      value: function dropShadowDirectionally(normX, normY, normZ, planeX, planeY, planeZ, lightX, lightY, lightZ) {
        var a = planeX * normX + planeY * normY + planeZ * normZ;
        return this.dropShadow([normX, normY, normZ, -a], [lightX, lightY, lightZ, 0]);
      }
    }]);

    return Matrix4;
  }(BaseArray);

  /**
   * 获取随机值
   * @param {Number} a 随机范围从0到a(不包含a)
   * @param {Number} b 随机结果增加值
   * @return {Number} 一个随机值
   */
  var Random = function Random() {
    var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return (Math.random() * a | 0) + b;
  };
  /**
   * 获取随机值
   * @param {Number} min 最小值
   * @param {Number} max 最大值
   * @return {Number} 一个随机值
   */


  Random.To = function (min, max) {
    return Random(max - min, min);
  };
  /**
   * 从数组获取随机项
   * @param {Array} a 源数组
   * @return {*} a中的随机值
   */


  Random.Array = function (a) {
    return a[Random(a.length)];
  };
  /**
   * 从键值对获取任意随机项键的数组
   * @param {Array|Object} a 数据源
   * @param {Number} b 获取数量
   * @return {Array[*]} b个不重复的a中的键组成的数组
   */


  Random.Array.Keys = Random.Keys = function (a) {
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    if (!a || !b) return [];
    var out = [];
    var keys = Object.keys(a);

    while (keys.length > 0 && out.length < b) {
      out.push(keys.splice(Random(keys.length), 1)[0]);
    }

    return out;
  };
  /**
   * 从键值对获取任意随机项值的数组
   * @param {Array|Object} a 数据源
   * @param {Number} b 获取数量
   * @return {Array[*]} b个不重复的a中的键组成的数组
   */


  Random.Array.Values = Random.Values = function (a) {
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    if (!a || !b) return [];
    var out = [];
    var keys = Object.keys(a);

    while (keys.length > 0 && out.length < b) {
      var key = keys.splice(Random(keys.length), 1)[0];
      out.push(a[key]);
    }

    return out;
  };

  var _temp$1;

  var Week = ['日', '一', '二', '三', '四', '五', '六'];
  var Time = (_temp$1 =
  /*#__PURE__*/
  function () {
    function Time() {
      classCallCheck(this, Time);

      defineProperty(this, "Date", null);
    }

    createClass(Time, [{
      key: "Set",

      /**
       * 设置时间
       * @param {Any} value 设置时间值
       * @param {String} fmt 源格式
       * jstimestamp 13位时间戳 到毫秒
       * timestamp 10位时间戳 到秒
       */
      value: function Set(value) {
        var fmt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'jstimestamp';

        if (!value) {
          this.Date = null;
        } else if (value instanceof Date) {
          this.Data = value;
        } else if (_typeof_1(value) == 'object') {
          this.Data = null;
        } else if (typeof value == 'function') {
          this.Set(value(), fmt);
        } else if (value > 0) {
          this.Date = fmt == 'jstimestamp' ? new Date(value * 1) : new Date(value * 1000);
        } else if (typeof value == 'string') {
          this.Date = new Date(value); //todo 格式化年月日时分秒
        } else {
          this.Date = null;
        }

        if (!this.Date) this.Date = new Date();
        return this;
      }
      /**
       * 获取时间
       * @param {String} fmt 获取格式
       * jstimestamp 13位时间戳 到毫秒
       * timestamp 10位时间戳 到秒
       * Date 日期类格式
       * YmdHisSwWqQ 根据不同格式取得得值合成字符串
       */

    }, {
      key: "Get",
      value: function Get() {
        var _this = this;

        var fmt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'jstimestamp';
        if (!this.Date) this.Date = new Date();

        switch (fmt) {
          case 'Date':
            return this.Date;

          case 'timestamp':
            return parseInt(this.Date.getTime() / 1000);

          case 'jstimestamp':
            return this.Date.getTime();
        }

        return fmt.replace(/[YmdHisSwWqQ]/g, function (k) {
          return _this[k];
        });
      }
      /**
       * 判断两个时间是否是同一天
       * @param {*} a 时间1
       * @param {*} b 时间2
       * @param {*} c 时间1格式
       * @param {*} d 时间2格式
       */

    }, {
      key: "OneDay",
      value: function OneDay(a, b, c, d) {
        return this.Set(a, c).Get('Ymd') == this.Set(b, d).Get('Ymd');
      }
      /**
       * 判断两个时间是否是同一周
       * @param {*} a 时间1
       * @param {*} b 时间2
       * @param {*} c 时间1格式
       * @param {*} d 时间2格式
       */

    }, {
      key: "OneWeek",
      value: function OneWeek(a, b, c, d) {
        return this.Set(a, c).ToWeek().Get('Ymd') == this.Set(b, d).ToWeek().Get('Ymd');
      }
      /**
       * 将时间前往本周的某一天
       * @param {*} WeekN
       */

    }, {
      key: "ToWeek",
      value: function ToWeek() {
        var WeekN = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
        this.Date.setDate(this.Date.getDate() - (this.w || 7) + WeekN);
        return this;
      }
      /**
       * 获取本周某一天的当前时间
       * @param {*} WeekN
       * @param {*} fmt
       */

    }, {
      key: "GetWeek",
      value: function GetWeek(WeeN, fmt) {
        return this.ToWeek(WeeN).Get(fmt);
      }
    }, {
      key: "Y",
      get: function get() {
        return this.Date.getFullYear();
      }
    }, {
      key: "m",
      get: function get() {
        return ('00' + (this.Date.getMonth() + 1)).slice(-2);
      }
    }, {
      key: "d",
      get: function get() {
        return ('00' + this.Date.getDate()).slice(-2);
      }
    }, {
      key: "H",
      get: function get() {
        return ('00' + this.Date.getHours()).slice(-2);
      }
    }, {
      key: "i",
      get: function get() {
        return ('00' + this.Date.getMinutes()).slice(-2);
      }
    }, {
      key: "s",
      get: function get() {
        return ('00' + this.Date.getSeconds()).slice(-2);
      }
    }, {
      key: "S",
      get: function get() {
        return ('000' + this.Date.getMilliseconds()).slice(-3);
      }
    }, {
      key: "w",
      get: function get() {
        return this.Date.getDay();
      }
    }, {
      key: "W",
      get: function get() {
        return Week[this.w];
      }
    }, {
      key: "q",
      get: function get() {
        return (this.Date.getMonth() + 3) / 3 | 0;
      }
    }, {
      key: "Q",
      get: function get() {
        return Week[this.q];
      }
    }]);

    return Time;
  }(), _temp$1);
  var time = new Time();

  var color = {
    /**
     * 16进制颜色转10进制颜色数组
     * @param {*} hex
     * @param {*} out
     */
    hex2rgb: function hex2rgb(hex, out) {
      out = out || [];
      out[0] = (hex >> 16 & 0xff) / 255;
      out[1] = (hex >> 8 & 0xff) / 255;
      out[2] = (hex & 0xff) / 255;
      return out;
    },

    /**
     * 16进制转16进制字符串颜色
     * @param {*} hex
     */
    hex2string: function hex2string(hex) {
      hex = hex.toString(16);
      hex = '000000'.substr(0, 6 - hex.length) + hex;
      return "#".concat(hex);
    },

    /**
     * 16进制字符串颜色转16进制
     * @param {*} string
     */
    string2hex: function string2hex(string) {
      if (typeof string === 'string' && string[0] === '#') {
        string = string.substr(1);
      }

      return parseInt(string, 16);
    },

    /**
     * 10进制颜色数组转16进制
     * @param {*} rgb
     */
    rgb2hex: function rgb2hex(rgb) {
      return (rgb[0] * 255 << 16) + (rgb[1] * 255 << 8) + (rgb[2] * 255 | 0);
    }
  };

  var Position =
  /*#__PURE__*/
  function () {
    function Position() {
      classCallCheck(this, Position);

      defineProperty(this, "_options", {
        left: 0,
        top: 0,
        right: 750,
        bottom: 1334,
        cacheY: {},
        cacheX: {}
      });
    }

    createClass(Position, [{
      key: "getX",

      /**
       * 获得总宽度的比例
       * @param {Number} n 比例
       */
      value: function getX(n) {
        if (this._options.cacheX[n]) return this._options.cacheX[n];
        return this._options.cacheX[n] = this._options.right * n;
      }
      /**
       * 获得总高度的比例
       * @param {Number} n 比例
       */

    }, {
      key: "getY",
      value: function getY(n) {
        if (this._options.cacheY[n]) return this._options.cacheY[n];
        return this._options.cacheY[n] = this._options.bottom * n;
      }
      /**
       * 获取半宽
       */

    }, {
      key: "width",

      /**
       * 设置宽度
       */
      set: function set(right) {
        this._options.right = right;
        this._options.center = right / 2;
        this._options.cacheX = {};
      }
      /**
       * 获取宽度
       */
      ,
      get: function get() {
        return this._options.right;
      }
      /**
       * 设置高度
       */

    }, {
      key: "height",
      set: function set(bottom) {
        this._options.bottom = bottom;
        this._options.middle = bottom / 2;
        this._options.cacheY = {};
      }
      /**
       * 获取宽
       */
      ,
      get: function get() {
        return this._options.bottom;
      }
    }, {
      key: "center",
      get: function get() {
        return this.getX(0.5);
      }
      /**
       * 获取半高
       */

    }, {
      key: "middle",
      get: function get() {
        return this.getY(0.5);
      }
    }]);

    return Position;
  }();

  var Clock =
  /*#__PURE__*/
  function () {
    function Clock() {
      classCallCheck(this, Clock);

      defineProperty(this, "time", 0);

      defineProperty(this, "then", 0);

      defineProperty(this, "change", 0);

      defineProperty(this, "delta", 0);

      defineProperty(this, "interval", 1000 / 60);
    }

    createClass(Clock, [{
      key: "reset",
      //步长
      value: function reset() {
        var interval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.interval;
        this.interval = interval;
        this.then = this.time = Date.now();
      }
    }, {
      key: "step",
      value: function step() {
        this.time = Date.now();
        this.change = this.time - this.then;

        if (this.change > this.interval) {
          this.delta = this.change % this.interval;
          this.then = this.time - this.delta;
          return true;
        }
      }
    }]);

    return Clock;
  }();



  var index = /*#__PURE__*/Object.freeze({
    __proto__: null,
    MathArray: BaseArray,
    MathVector: Vector,
    MathVector2: Vector2,
    MathVector3: Vector3,
    MathVector4: Vector4,
    MathMatrix3: Matrix3,
    MathMatrix4: Matrix4,
    MathRandom: Random,
    MathTime: time,
    MathColor: color,
    MathPosition: Position,
    MathClock: Clock
  });

  var base = (function (superClass, Matrix) {
    var _temp;

    return _temp =
    /*#__PURE__*/
    function (_superClass) {
      inherits(ComponentBase, _superClass);

      function ComponentBase() {
        var _getPrototypeOf2;

        var _this;

        classCallCheck(this, ComponentBase);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = possibleConstructorReturn(this, (_getPrototypeOf2 = getPrototypeOf(ComponentBase)).call.apply(_getPrototypeOf2, [this].concat(args)));

        defineProperty(assertThisInitialized(_this), "touchChildren", true);

        defineProperty(assertThisInitialized(_this), "touchStop", false);

        defineProperty(assertThisInitialized(_this), "matrix", new Matrix());

        return _this;
      } //计算矩阵


      return ComponentBase;
    }(superClass), _temp;
  });

  var texture = (function (superClass) {
    var _temp;

    return _temp =
    /*#__PURE__*/
    function (_superClass) {
      inherits(Texture, _superClass);

      createClass(Texture, [{
        key: "setTexture",
        value: function setTexture(texture) {
          this.texture = texture;
          if (!this.texture) return this;
          if (this.size) this.size.setTo(this.texture.width, this.texture.height);
          if (this.useFrame) this.useFrame = false;
          return this;
        }
      }]);

      function Texture(texture, options) {
        var _this;

        classCallCheck(this, Texture);

        _this = possibleConstructorReturn(this, getPrototypeOf(Texture).call(this, options));

        defineProperty(assertThisInitialized(_this), "texture", null);

        _this.setTexture(options && options.texture ? options.texture : texture);

        return _this;
      }

      createClass(Texture, [{
        key: "update",
        value: function update(Context) {
          if (!this.texture) return;

          if (this.useClip) {
            Context.drawImage(this.texture, this.clipPosition.x, this.clipPosition.y, this.clipSize.x, this.clipSize.y, -this.anchor.x, -this.anchor.y, this.size.x, this.size.y);
          } else {
            Context.drawImage(this.texture, -this.anchor.x, -this.anchor.y, this.size.x, this.size.y);
          }
        }
      }]);

      return Texture;
    }(superClass), _temp;
  });

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  var superPropBase = _superPropBase;

  var get = createCommonjsModule(function (module) {
  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      module.exports = _get = Reflect.get;
    } else {
      module.exports = _get = function _get(target, property, receiver) {
        var base = superPropBase(target, property);
        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  module.exports = _get;
  });

  var scroll = (function (superClass) {
    var _temp;

    return _temp =
    /*#__PURE__*/
    function (_superClass) {
      inherits(Scroll, _superClass);

      function Scroll() {
        var _getPrototypeOf2;

        var _this;

        classCallCheck(this, Scroll);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = possibleConstructorReturn(this, (_getPrototypeOf2 = getPrototypeOf(Scroll)).call.apply(_getPrototypeOf2, [this].concat(args)));

        defineProperty(assertThisInitialized(_this), "context", null);

        return _this;
      }

      createClass(Scroll, [{
        key: "setRealSize",
        value: function setRealSize(x, y) {
          this.context.SetSize(x, y);
          return this;
        }
      }, {
        key: "touchMoveX",

        /**
         * 横向移动
         * @param {Number} mx 轴X移动量
         */
        value: function touchMoveX(mx) {
          var X = this.clipPosition.x;
          var Max = this.scrollWidth;
          this.clipPosition.x -= mx;
          if (this.clipPosition.x > Max) this.clipPosition.x = Max;
          if (this.clipPosition.x < 0) this.clipPosition.x = 0;
          return this.clipPosition.x != X;
        }
        /**
         * 纵向移动
         * @param {Number} my 轴Y移动量
         */

      }, {
        key: "touchMoveY",
        value: function touchMoveY(my) {
          var Y = this.clipPosition.y;
          var Max = this.scrollHeight;
          this.clipPosition.y -= my;
          if (this.clipPosition.y > Max) this.clipPosition.y = Max;
          if (this.clipPosition.y < 0) this.clipPosition.y = 0;
          return this.clipPosition.y != Y;
        }
        /**
         * @param {*} options
         */

      }, {
        key: "setOptions",
        value: function setOptions(options) {
          if (get(getPrototypeOf(Scroll.prototype), "setOptions", this)) get(getPrototypeOf(Scroll.prototype), "setOptions", this).call(this, options);
          this.context = options.context;
          this.setClip(0, 0, options.width || 1, options.height || 1);
          this.setRealSize(options.realWidth || options.width || 1, options.realHeight || options.width || 1);
          return this;
        }
        /**
         * 绘制函数
         * @param {*} Context
         */

      }, {
        key: "update",
        value: function update(Context) {
          Context.drawImage(this.context.canvas, this.clipPosition.x, this.clipPosition.y, this.size.x, this.size.y, -this.anchor.x, -this.anchor.y, this.size.x, this.size.y);
        }
        /**
         * 触摸事件位置偏移量
         * @param {*} touch
         */

      }, {
        key: "offsetTouch",
        value: function offsetTouch(touch) {
          if (get(getPrototypeOf(Scroll.prototype), "offsetTouch", this)) get(getPrototypeOf(Scroll.prototype), "offsetTouch", this).call(this, touch);
          return touch.addToVector(this.clipPosition);
        }
        /**
         * 检查触摸到自身
         * @param {x} x
         * @param {*} y
         */

      }, {
        key: "hitMe",
        value: function hitMe(x, y) {
          x -= this.clipPosition.x;
          y -= this.clipPosition.y;
          return get(getPrototypeOf(Scroll.prototype), "hitMe", this).call(this, x, y);
        }
      }, {
        key: "realWidth",
        get: function get() {
          return this.context.canvas.width;
        }
      }, {
        key: "realHeight",
        get: function get() {
          return this.context.canvas.height;
        } //滚动位置

      }, {
        key: "scrollHeight",
        get: function get() {
          return this.realHeight - this.height;
        }
      }, {
        key: "scrollWidth",
        get: function get() {
          return this.realWidth - this.width;
        }
      }]);

      return Scroll;
    }(superClass), _temp;
  });

  var text = (function (superClass, Context) {
    var _class, _temp;

    return _temp = _class =
    /*#__PURE__*/
    function (_superClass) {
      inherits(Text, _superClass);

      function Text() {
        var _getPrototypeOf2;

        var _this;

        classCallCheck(this, Text);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = possibleConstructorReturn(this, (_getPrototypeOf2 = getPrototypeOf(Text)).call.apply(_getPrototypeOf2, [this].concat(args)));

        defineProperty(assertThisInitialized(_this), "_value", '');

        defineProperty(assertThisInitialized(_this), "special", null);

        defineProperty(assertThisInitialized(_this), "wrap", {
          width: 0,
          height: 0
        });

        defineProperty(assertThisInitialized(_this), "_LineWidth", []);

        defineProperty(assertThisInitialized(_this), "_Lines", []);

        defineProperty(assertThisInitialized(_this), "_Handle", Object.assign({}, Text.defaultHandle));

        return _this;
      }

      createClass(Text, [{
        key: "setValue",
        value: function setValue(v) {
          this.value = v;
          return this;
        }
        /**
         * 特殊插入对象
         */

      }, {
        key: "setOptions",

        /**
         * @param {*} options
         */
        value: function setOptions(options) {
          if (get(getPrototypeOf(Text.prototype), "setOptions", this)) get(getPrototypeOf(Text.prototype), "setOptions", this).call(this, options);
          if (options.wrapWidth > 0) this.wrapWidth = options.wrapWidth;
          this.lineHeight = options.lineHeight || 0;
          if (options.special) this.special = Object.assign(this.special || {}, options.special);
          if (options.value) this.value = options.value;
          return this;
        }
        /**
         * 文本切割配置
         */

      }, {
        key: "separate",
        value: function separate(value) {
          if (!Context) return; //TODO 是否补充测试例

          Context.font = this.font;
          this._Lines.length = 0;
          this._LineWidth.length = 0;
          this.size.setTo(0, this.style ? this.style.size : this.lineHeight);

          for (var i = 0; i <= value.length; i++) {
            this.checkCurrentText(value[i]);
          }

          Object.assign(this._Handle, Text.defaultHandle);
          return this.setAnchorSize(Text.AlignWidth[this.style.align], Text.AlignHeight[this.style.baseline]);
        } //检查当前字符

      }, {
        key: "checkCurrentText",
        value: function checkCurrentText(value) {
          if (!Context) return; //TODO 是否补充测试例

          if (this.checkSpecial(value)) return;
          this._Handle.currentText = value;

          if (!this._Handle.currentText) {
            this._Handle.currentWidth = 0;
          } else {
            var measureText = Context.measureText(this._Handle.currentText);
            this._Handle.currentWidth = measureText ? measureText.width : 0;
          }

          this._Handle.nextCursorX = this._Handle.cursorX + this._Handle.currentWidth;
          if (this.wrapWidth > 0 && this._Handle.nextCursorX > this.wrapWidth) return this.newLine();
          this._Handle.cursorX = this._Handle.nextCursorX;
          this._Handle.currentString += this._Handle.currentText;
        } //检查特殊对象

      }, {
        key: "checkSpecialObject",
        value: function checkSpecialObject(special) {
          var width = special.width || this.style.size;
          this._Handle.nextCursorX = this._Handle.cursorX + width;

          if (this.wrapWidth > 0 && this._Handle.nextCursorX > this.wrapWidth) {
            this._Lines.push('\n', special, '\0', special.width);

            this._LineWidth.push(this._Handle.cursorX);

            if (this._Handle.cursorX > this.size.x) this.size.x = this._Handle.cursorX;
            this.size.y += this.lineHeight;
            this._Handle.cursorX = special.width;
          } else {
            if (this._Handle.cursorX) this._Lines.push('\0', this._Handle.cursorX);
            this._Handle.cursorX = this._Handle.nextCursorX;

            this._Lines.push(special, '\0', this._Handle.cursorX);
          }

          this._Handle.currentString = '';
        } //检查特殊字符

      }, {
        key: "checkSpecial",
        value: function checkSpecial(str) {
          if (str === '\0') {
            this._Handle.Special = !this._Handle.Special;

            if (this._Handle.Special) {
              if (this._Handle.currentString) {
                this._Lines.push(this._Handle.currentString);

                this._Handle.currentString = '';
              }
            } else {
              this.checkSpecialObject(this.special[this._Handle.currentString]);
            }

            return true;
          } else if (this._Handle.Special) {
            this._Handle.currentString += str;
            return true;
          } else if (str === undefined) {
            if (this._Handle.currentString) {
              this._Lines.push(this._Handle.currentString);
            }

            this._LineWidth.push(this._Handle.cursorX);

            if (this._Handle.cursorX > this.size.x) this.size.x = this._Handle.cursorX;
            return true;
          } else if (str === '\n') {
            this.newLine();
            this._Handle.currentString = '';
            this._Handle.cursorX = 0;
            return true;
          }
        } //换行

      }, {
        key: "newLine",
        value: function newLine() {
          //数据记录
          this._Lines.push(this._Handle.currentString, '\n');

          this._LineWidth.push(this._Handle.cursorX); //包围判断


          if (this._Handle.cursorX > this.size.x) this.size.x = this._Handle.cursorX;
          this.size.y += this.lineHeight; //游标重置

          this._Handle.currentString = this._Handle.currentText;
          this._Handle.cursorX = this._Handle.currentWidth;
        }
        /**
         * 正式绘制
         */

      }, {
        key: "_defineConfig",
        value: function _defineConfig(Context) {
          if (Context.font != this.font) Context.font = this.font;
          if (Context.fillStyle != this.style.color) Context.fillStyle = this.style.color;
          if (Context.textAlign != 'left') Context.textAlign = 'left';
          if (Context.textBaseline != 'top') Context.textBaseline = 'top';

          if (this.style.stroke > 0) {
            if (Context.strokeStyle != this.style.strokeColor) Context.strokeStyle = this.style.strokeColor;
            if (Context.lineWidth != this.style.stroke) Context.lineWidth = this.style.stroke;
          }
        }
      }, {
        key: "_offsetX",
        value: function _offsetX(index) {
          return (this.size.x - this._LineWidth[index]) * Text.AlignWidth[this.style.align] - this.anchor.x;
        }
      }, {
        key: "_offsetY",
        value: function _offsetY(index) {
          return ((this._Lines[index].height || this.style.size) - this.style.size) / 2;
        }
      }, {
        key: "update",
        value: function update(Context) {
          if (!this.value) return;

          this._defineConfig(Context);

          var lineIndex = 0;

          var offsetX = this._offsetX(lineIndex++);

          var x = offsetX;
          var y = -this.anchor.y;

          for (var i = 0; i < this._Lines.length; i++) {
            if (this._Lines[i] === '\0') {
              x = offsetX + this._Lines[i + 1];
              i++;
              continue;
            }

            if (this._Lines[i] === '\n') {
              x = offsetX = this._offsetX(lineIndex++);
              y += this.lineHeight;
              continue;
            }

            if (_typeof_1(this._Lines[i]) === 'object') {
              Context.drawImage(this._Lines[i], x, y - this._offsetY(i));
            } else {
              if (this.style.stroke > 0) Context.strokeText(this._Lines[i], x, y);
              Context.fillText(this._Lines[i], x, y);
            }
          }
        }
      }, {
        key: "value",
        set: function set(v) {
          if (this._value === v) return;

          if (!v && v !== 0) {
            v = '';
          } else if (typeof v != 'string') {
            v = v.toString();
          }

          this._value = v;
          this.separate(v);
        },
        get: function get() {
          return this._value;
        }
      }, {
        key: "wrapWidth",
        get: function get() {
          return this.wrap.width;
        },
        set: function set(width) {
          this.wrap.width = width;
        }
      }, {
        key: "lineHeight",
        get: function get() {
          return this.wrap.height || (this.wrap.height = this.style ? this.style.size * 1.5 | 0 : 0);
        },
        set: function set(h) {
          this.wrap.height = h;
        }
      }]);

      return Text;
    }(superClass), defineProperty(_class, "AlignWidth", {
      left: 0,
      center: 0.5,
      right: 1
    }), defineProperty(_class, "AlignHeight", {
      top: 0,
      middle: 0.5,
      bottom: 1,
      hanging: 0,
      alphabetic: 1,
      ideographic: 1
    }), defineProperty(_class, "defaultHandle", {
      cursorX: 0,
      cursorY: 0,
      nextCursorX: 0,
      currentString: '',
      currentText: '',
      currentWidth: 0,
      Special: false
    }), _temp;
  });



  var index$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Base: base,
    Texture: texture,
    Scroll: scroll,
    Text: text
  });

  var position = (function (superClass, Vector2) {
    var _temp;

    return _temp =
    /*#__PURE__*/
    function (_superClass) {
      inherits(Position, _superClass);

      createClass(Position, [{
        key: "setPosition",
        value: function setPosition(x, y) {
          this.position.setTo(x, y);
          return this;
        }
      }, {
        key: "x",

        /**
         * 定位控制
         */
        get: function get() {
          return this.position.x;
        },
        set: function set(x) {
          this.position.x = x;
        }
      }, {
        key: "y",
        get: function get() {
          return this.position.y;
        },
        set: function set(y) {
          this.position.y = y;
        }
      }]);

      function Position(options) {
        var _this;

        classCallCheck(this, Position);

        _this = possibleConstructorReturn(this, getPrototypeOf(Position).call(this, options));

        defineProperty(assertThisInitialized(_this), "position", new Vector2());

        if (options.position) Object.assign(_this.position, options.position);
        if (options.x !== undefined) _this.position.x = options.x;
        if (options.y !== undefined) _this.position.y = options.y;
        return _this;
      }

      return Position;
    }(superClass), _temp;
  });

  var angle = (function (superClass) {
    var _temp;

    return _temp =
    /*#__PURE__*/
    function (_superClass) {
      inherits(Angle, _superClass);

      createClass(Angle, [{
        key: "setRadian",
        value: function setRadian(r) {
          this.radian = r;
          return this;
        }
      }, {
        key: "setAngle",
        value: function setAngle(a) {
          this.angle = a;
          return this;
        }
      }, {
        key: "angle",

        /**
         * 角度控制
         */
        //弧度
        set: function set(a) {
          this.radian = a * Math.PI / 180;
        },
        get: function get() {
          return this.radian * 180 / Math.PI;
        }
      }]);

      function Angle(options) {
        var _this;

        classCallCheck(this, Angle);

        _this = possibleConstructorReturn(this, getPrototypeOf(Angle).call(this, options));

        defineProperty(assertThisInitialized(_this), "radian", 0);

        if (options.radian !== undefined) _this.radian = options.radian;
        if (options.angle !== undefined) _this.angle = options.angle;
        return _this;
      }

      return Angle;
    }(superClass), _temp;
  });

  var scale = (function (superClass, Vector2) {
    var _temp;

    return _temp =
    /*#__PURE__*/
    function (_superClass) {
      inherits(Scale, _superClass);

      createClass(Scale, [{
        key: "setScale",
        value: function setScale(x, y) {
          this.scale.x = x;
          this.scale.y = y;
          return this;
        }
      }, {
        key: "scaleX",

        /**
         * 缩放控制
         */
        get: function get() {
          return this.scale.x;
        },
        set: function set(x) {
          this.scale.x = x;
        }
      }, {
        key: "scaleY",
        get: function get() {
          return this.scale.y;
        },
        set: function set(y) {
          this.scale.y = y;
        }
      }]);

      function Scale(options) {
        var _this;

        classCallCheck(this, Scale);

        _this = possibleConstructorReturn(this, getPrototypeOf(Scale).call(this, options));

        defineProperty(assertThisInitialized(_this), "scale", new Vector2(1, 1));

        if (options.scale !== undefined) _this.scale.set(options.scale);
        if (options.scaleX !== undefined) _this.scale.x = options.scaleX;
        if (options.scaleY !== undefined) _this.scale.y = options.scaleY;
        return _this;
      }

      return Scale;
    }(superClass), _temp;
  });

  var anchor = (function (superClass, Vector2) {
    var _temp;

    return _temp =
    /*#__PURE__*/
    function (_superClass) {
      inherits(Anchor, _superClass);

      createClass(Anchor, [{
        key: "setAnchor",
        value: function setAnchor(x, y) {
          this.anchor.x = x;
          this.anchor.y = y;
          return this;
        }
      }, {
        key: "setAnchorSize",
        value: function setAnchorSize() {
          var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.5;
          var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.5;
          if (!this.size) return this;
          this.anchor.x = this.width * x;
          this.anchor.y = this.height * y;
          return this;
        }
      }, {
        key: "anchorX",

        /**
         * 锚点控制
         */
        get: function get() {
          return this.anchor.x;
        },
        set: function set(x) {
          this.anchor.x = x;
        }
      }, {
        key: "anchorY",
        get: function get() {
          return this.anchor.y;
        },
        set: function set(y) {
          this.anchor.y = y;
        }
      }]);

      function Anchor(options) {
        var _this;

        classCallCheck(this, Anchor);

        _this = possibleConstructorReturn(this, getPrototypeOf(Anchor).call(this, options));

        defineProperty(assertThisInitialized(_this), "anchor", new Vector2());

        if (options.anchor) Object.assign(_this.anchor, options.anchor);
        if (options.anchorX) _this.anchor.x = options.anchorX;
        if (options.anchorY) _this.anchor.y = options.anchorY;
        return _this;
      }
      /**
       * 触摸事件位置偏移量
       * @param {*} touch
       */


      createClass(Anchor, [{
        key: "offsetTouch",
        value: function offsetTouch(touch) {
          if (get(getPrototypeOf(Anchor.prototype), "offsetTouch", this)) get(getPrototypeOf(Anchor.prototype), "offsetTouch", this).call(this, touch);
          return touch.addToVector(this.anchor);
        }
      }]);

      return Anchor;
    }(superClass), _temp;
  });

  var alpha = (function (superClass) {
    var _temp;

    return _temp =
    /*#__PURE__*/
    function (_superClass) {
      inherits(Alpha, _superClass);

      function Alpha(options) {
        var _this;

        classCallCheck(this, Alpha);

        _this = possibleConstructorReturn(this, getPrototypeOf(Alpha).call(this, options));

        defineProperty(assertThisInitialized(_this), "_alpha", 1);

        if (options.alpha !== undefined) _this.alpha = options.alpha;
        return _this;
      }
      /**
       * 透明度控制
       * 当透明度小于0时，使用上级透明度
       */


      createClass(Alpha, [{
        key: "setAlpha",
        value: function setAlpha(n) {
          this.alpha = n;
          return this;
        }
      }, {
        key: "alpha",
        set: function set(a) {
          this._alpha = a;
        },
        get: function get() {
          if (this._alpha < 0 && this.parent) return this.parent.alpha;
          return this._alpha;
        }
      }]);

      return Alpha;
    }(superClass), _temp;
  });

  var visible = (function (superClass) {
    var _temp;

    return _temp =
    /*#__PURE__*/
    function (_superClass) {
      inherits(Visible, _superClass);

      createClass(Visible, [{
        key: "setVisible",
        value: function setVisible(n) {
          this.visible = n;
          return this;
        }
      }, {
        key: "visible",

        /**
         * 显示状态控制
         */
        get: function get() {
          if (!this.parent) return this._visible;
          return this._visible && this.parent.visible;
        },
        set: function set(v) {
          if (this._visible == v) return;
          this._visible = v;
          v ? this.show && this.show() : this.hide && this.hide();
        }
      }]);

      function Visible(options) {
        var _this;

        classCallCheck(this, Visible);

        _this = possibleConstructorReturn(this, getPrototypeOf(Visible).call(this, options));

        defineProperty(assertThisInitialized(_this), "_visible", true);

        if (options.visible !== undefined) _this.visible = options.visible;
        return _this;
      }

      return Visible;
    }(superClass), _temp;
  });

  var size = (function (superClass, Vector2) {
    var _temp;

    return _temp =
    /*#__PURE__*/
    function (_superClass) {
      inherits(Size, _superClass);

      createClass(Size, [{
        key: "setSize",
        value: function setSize(x, y) {
          this.size.setTo(x, y);
          return this;
        }
      }, {
        key: "setSizeLimit",
        value: function setSizeLimit(maxX, maxY, minX, minY) {
          if (!this.size.y) return this;
          var lv = this.size.x / this.size.y;

          if (maxX && this.size.x > maxX) {
            this.size.x = maxX;
            this.size.y = maxX / lv;
          }

          if (maxY && this.size.y > maxY) {
            this.size.y = maxY;
            this.size.x = maxY * lv;
          }

          if (minX && this.size.x < minX) {
            this.size.x = minX;
            this.size.y = maxX / lv;
          }

          if (minY && this.size.y < minY) {
            this.size.y = maxY;
            this.size.x = maxY * lv;
          }

          return this;
        }
      }, {
        key: "width",

        /**
         * 大小控制
         */
        get: function get() {
          return this.size.x;
        },
        set: function set(x) {
          this.size.x = x;
        }
      }, {
        key: "height",
        get: function get() {
          return this.size.y;
        },
        set: function set(y) {
          this.size.y = y;
        }
      }]);

      function Size(options) {
        var _this;

        classCallCheck(this, Size);

        _this = possibleConstructorReturn(this, getPrototypeOf(Size).call(this, options));

        defineProperty(assertThisInitialized(_this), "size", new Vector2());

        if (options.size) Object.assign(_this.size, options.size);
        if (options.width !== undefined) _this.size.x = options.width;
        if (options.height !== undefined) _this.size.y = options.height;
        return _this;
      }

      createClass(Size, [{
        key: "hitMe",
        value: function hitMe(x, y) {
          if (this.padding) {
            return x >= -this.paddingLeft && x <= this.width + this.paddingRight && y >= -this.paddingTop && y <= this.height + this.paddingBottom;
          } else {
            return x >= 0 && x <= this.width && y >= 0 && y <= this.height;
          }
        }
      }]);

      return Size;
    }(superClass), _temp;
  });

  var clip = (function (superClass, Vector2) {
    var _temp;

    return _temp =
    /*#__PURE__*/
    function (_superClass) {
      inherits(Clip, _superClass);

      createClass(Clip, [{
        key: "setClip",

        /**
         * 裁剪控制
         */
        //是否切割
        //切割位置
        //切割大小
        value: function setClip() {
          var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var width = arguments.length > 2 ? arguments[2] : undefined;
          var height = arguments.length > 3 ? arguments[3] : undefined;
          this.useClip = true;
          this.clipPosition.setTo(x, y);
          this.clipSize.setTo(width, height);
          if (this.size) this.size.setTo(width, height);
          return this;
        }
      }]);

      function Clip(options) {
        var _this;

        classCallCheck(this, Clip);

        _this = possibleConstructorReturn(this, getPrototypeOf(Clip).call(this, options));

        defineProperty(assertThisInitialized(_this), "useClip", false);

        defineProperty(assertThisInitialized(_this), "clipPosition", new Vector2());

        defineProperty(assertThisInitialized(_this), "clipSize", new Vector2());

        if (options.clip) _this.setClip.apply(assertThisInitialized(_this), options.clip);
        return _this;
      }

      return Clip;
    }(superClass), _temp;
  });

  var padding = (function (superClass, Vector) {
    var _temp;

    return _temp =
    /*#__PURE__*/
    function (_superClass) {
      inherits(Padding, _superClass);

      createClass(Padding, [{
        key: "setPadding",
        value: function setPadding(top, right, botton, left) {
          this.padding.setTo(top, right, botton, left);
          return this;
        }
      }, {
        key: "paddingTop",

        /**
         * 边距控制
         */
        get: function get() {
          return this.padding[0];
        }
      }, {
        key: "paddingRight",
        get: function get() {
          return this.padding[1];
        }
      }, {
        key: "paddingBottom",
        get: function get() {
          return this.padding[2];
        }
      }, {
        key: "paddingLeft",
        get: function get() {
          return this.padding[3];
        }
      }]);

      function Padding(options) {
        var _this;

        classCallCheck(this, Padding);

        _this = possibleConstructorReturn(this, getPrototypeOf(Padding).call(this, options));

        defineProperty(assertThisInitialized(_this), "padding", new Vector(0, 0, 0, 0));

        if (options.padding) Object.assign(_this.padding, options.padding);
        return _this;
      }

      return Padding;
    }(superClass), _temp;
  });

  var style = (function (superClass) {
    var _class, _temp;

    return _temp = _class =
    /*#__PURE__*/
    function (_superClass) {
      inherits(Style, _superClass);

      createClass(Style, [{
        key: "setStyle",

        /**
         * 绘制样式控制
         */
        value: function setStyle(options) {
          if (!options.cacheFont) this.style.cacheFont = '';
          Object.assign(this.style, options);
          return this;
        }
      }]);

      function Style(options) {
        var _this;

        classCallCheck(this, Style);

        _this = possibleConstructorReturn(this, getPrototypeOf(Style).call(this, options));

        defineProperty(assertThisInitialized(_this), "style", Object.assign({}, Style.defaultStyle));

        if (options.style) _this.setStyle(options.style);
        return _this;
      }

      createClass(Style, [{
        key: "font",
        set: function set(font) {
          this.style.cacheFont = font;
        },
        get: function get() {
          return this.style.cacheFont || (this._cacheFont = "".concat(this.style.weight, " ").concat(this.style.size, "px ").concat(this.style.family));
        }
      }]);

      return Style;
    }(superClass), defineProperty(_class, "defaultStyle", {
      color: '#FFFFFF',
      //填充色
      stroke: 0,
      //线宽
      strokeColor: '#FFFFFF',
      //线框色
      family: '微软雅黑,黑体',
      //字体
      size: 26,
      //字号px
      weight: '',
      //字宽
      align: 'center',
      //横向对齐方式
      baseline: 'middle',
      //纵向对齐方式
      cacheFont: '' //组合字体

    }), _temp;
  });

  var zIndex = (function (superClass) {
    var _temp;

    return _temp =
    /*#__PURE__*/
    function (_superClass) {
      inherits(ZIndex, _superClass);

      createClass(ZIndex, [{
        key: "setZIndex",

        /**
         * 渲染层级
         */
        //层级
        value: function setZIndex(a) {
          this.zIndex = a;
          return this;
        }
      }]);

      function ZIndex(options) {
        var _this;

        classCallCheck(this, ZIndex);

        _this = possibleConstructorReturn(this, getPrototypeOf(ZIndex).call(this, options));

        defineProperty(assertThisInitialized(_this), "zIndex", 0);

        if (options.zIndex) _this.zIndex = options.zIndex;
        return _this;
      }

      return ZIndex;
    }(superClass), _temp;
  });

  var children = (function (superClass) {
    var _temp;

    return _temp =
    /*#__PURE__*/
    function (_superClass) {
      inherits(Children, _superClass);

      function Children() {
        var _getPrototypeOf2;

        var _this;

        classCallCheck(this, Children);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = possibleConstructorReturn(this, (_getPrototypeOf2 = getPrototypeOf(Children)).call.apply(_getPrototypeOf2, [this].concat(args)));

        defineProperty(assertThisInitialized(_this), "parent", null);

        defineProperty(assertThisInitialized(_this), "children", []);

        return _this;
      }

      createClass(Children, [{
        key: "setParent",
        //子元素列表

        /**
         * 将本组件加入某个组件下面
         * @param {Component} Component 父级
         * @param {Number} index 位置
         * Component为空时，相当于从父组件卸载本组件
         */
        value: function setParent(Component) {
          var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
          if (!Component) return this.parent ? this.parent.removeChild(this) : this;
          if (this.parent == Component) return this;
          if (!this.parent) Component.addChildAt(this, index);
          return this;
        }
        /**
         * 在固定位置增加子组件
         * @param {Component} Component 组件
         * @param {Number} index 位置
         */

      }, {
        key: "addChildAt",
        value: function addChildAt(Component) {
          var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          if (!Component) return this;
          if (Component.create) Component.create();
          Component.parent = this;

          if (index == -1) {
            this.children.push(Component);
          } else if (index == 0) {
            this.children.unshift(Component);
          } else {
            this.children.splice(index, 0, Component);
          }

          if (Component.created) Component.created();
          return this;
        }
        /**
         * 增加子组件
         * @param {Component} Component 组件
         */

      }, {
        key: "addChild",
        value: function addChild(Component) {
          if (arguments.length > 1) {
            for (var i = 0; i < arguments.length; i++) {
              this.addChild(arguments[i]);
            }

            return this;
          }

          if (!Component) return this;

          if (Component instanceof Array) {
            for (var _i = 0; _i < Component.length; _i++) {
              this.addChild(Component[_i]);
            }

            return this;
          }

          return this.addChildAt(Component, -1);
        }
        /**
         * 移除子组件
         * @param {Component} Component 组件
         */

      }, {
        key: "removeChild",
        value: function removeChild(Component) {
          if (!Component) return this;

          if (arguments.length > 1) {
            for (var i = 0; i < arguments.length; i++) {
              this.removeChild(arguments[i]);
            }

            return this;
          }

          if (Component instanceof Array) {
            for (var _i2 = 0; _i2 < Component.length; _i2++) {
              this.removeChild(Component[_i2]);
            }

            return this;
          }

          if (Component.parent != this) return this;
          Component.removeChildren();
          if (Component.destroy) Component.destroy();
          var index = this.children.indexOf(Component);
          if (index >= 0) this.children.splice(index, 1); // if (this.children.length == 1) this.children = this.children[0];

          Component.parent = null;
          if (Component.destroyed) Component.destroyed();
          return this;
        }
        /**
         * 逐个移除所有子组件
         */

      }, {
        key: "removeChildren",
        value: function removeChildren() {
          for (var i = this.children.length - 1; i >= 0; i--) {
            this.removeChild(this.children[i]);
          }

          return this;
        }
      }]);

      return Children;
    }(superClass), _temp;
  });



  var index$2 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Position: position,
    Angle: angle,
    Scale: scale,
    Anchor: anchor,
    Alpha: alpha,
    Visible: visible,
    Size: size,
    Clip: clip,
    Padding: padding,
    Style: style,
    ZIndex: zIndex,
    Children: children
  });

  var Base = function Base() {
    classCallCheck(this, Base);

    defineProperty(this, "id", ++Component.CID);
  };

  defineProperty(Base, "CID", 0);

  var index$3 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Elements: index$1,
    Properties: index$2,
    Base: Base
  });

  var eventemitter3 = createCommonjsModule(function (module) {

  var has = Object.prototype.hasOwnProperty
    , prefix = '~';

  /**
   * Constructor to create a storage for our `EE` objects.
   * An `Events` instance is a plain object whose properties are event names.
   *
   * @constructor
   * @private
   */
  function Events() {}

  //
  // We try to not inherit from `Object.prototype`. In some engines creating an
  // instance in this way is faster than calling `Object.create(null)` directly.
  // If `Object.create(null)` is not supported we prefix the event names with a
  // character to make sure that the built-in object properties are not
  // overridden or used as an attack vector.
  //
  if (Object.create) {
    Events.prototype = Object.create(null);

    //
    // This hack is needed because the `__proto__` property is still inherited in
    // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
    //
    if (!new Events().__proto__) prefix = false;
  }

  /**
   * Representation of a single event listener.
   *
   * @param {Function} fn The listener function.
   * @param {*} context The context to invoke the listener with.
   * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
   * @constructor
   * @private
   */
  function EE(fn, context, once) {
    this.fn = fn;
    this.context = context;
    this.once = once || false;
  }

  /**
   * Add a listener for a given event.
   *
   * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
   * @param {(String|Symbol)} event The event name.
   * @param {Function} fn The listener function.
   * @param {*} context The context to invoke the listener with.
   * @param {Boolean} once Specify if the listener is a one-time listener.
   * @returns {EventEmitter}
   * @private
   */
  function addListener(emitter, event, fn, context, once) {
    if (typeof fn !== 'function') {
      throw new TypeError('The listener must be a function');
    }

    var listener = new EE(fn, context || emitter, once)
      , evt = prefix ? prefix + event : event;

    if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
    else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
    else emitter._events[evt] = [emitter._events[evt], listener];

    return emitter;
  }

  /**
   * Clear event by name.
   *
   * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
   * @param {(String|Symbol)} evt The Event name.
   * @private
   */
  function clearEvent(emitter, evt) {
    if (--emitter._eventsCount === 0) emitter._events = new Events();
    else delete emitter._events[evt];
  }

  /**
   * Minimal `EventEmitter` interface that is molded against the Node.js
   * `EventEmitter` interface.
   *
   * @constructor
   * @public
   */
  function EventEmitter() {
    this._events = new Events();
    this._eventsCount = 0;
  }

  /**
   * Return an array listing the events for which the emitter has registered
   * listeners.
   *
   * @returns {Array}
   * @public
   */
  EventEmitter.prototype.eventNames = function eventNames() {
    var names = []
      , events
      , name;

    if (this._eventsCount === 0) return names;

    for (name in (events = this._events)) {
      if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
    }

    if (Object.getOwnPropertySymbols) {
      return names.concat(Object.getOwnPropertySymbols(events));
    }

    return names;
  };

  /**
   * Return the listeners registered for a given event.
   *
   * @param {(String|Symbol)} event The event name.
   * @returns {Array} The registered listeners.
   * @public
   */
  EventEmitter.prototype.listeners = function listeners(event) {
    var evt = prefix ? prefix + event : event
      , handlers = this._events[evt];

    if (!handlers) return [];
    if (handlers.fn) return [handlers.fn];

    for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
      ee[i] = handlers[i].fn;
    }

    return ee;
  };

  /**
   * Return the number of listeners listening to a given event.
   *
   * @param {(String|Symbol)} event The event name.
   * @returns {Number} The number of listeners.
   * @public
   */
  EventEmitter.prototype.listenerCount = function listenerCount(event) {
    var evt = prefix ? prefix + event : event
      , listeners = this._events[evt];

    if (!listeners) return 0;
    if (listeners.fn) return 1;
    return listeners.length;
  };

  /**
   * Calls each of the listeners registered for a given event.
   *
   * @param {(String|Symbol)} event The event name.
   * @returns {Boolean} `true` if the event had listeners, else `false`.
   * @public
   */
  EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
    var evt = prefix ? prefix + event : event;

    if (!this._events[evt]) return false;

    var listeners = this._events[evt]
      , len = arguments.length
      , args
      , i;

    if (listeners.fn) {
      if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

      switch (len) {
        case 1: return listeners.fn.call(listeners.context), true;
        case 2: return listeners.fn.call(listeners.context, a1), true;
        case 3: return listeners.fn.call(listeners.context, a1, a2), true;
        case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
        case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
        case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
      }

      for (i = 1, args = new Array(len -1); i < len; i++) {
        args[i - 1] = arguments[i];
      }

      listeners.fn.apply(listeners.context, args);
    } else {
      var length = listeners.length
        , j;

      for (i = 0; i < length; i++) {
        if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

        switch (len) {
          case 1: listeners[i].fn.call(listeners[i].context); break;
          case 2: listeners[i].fn.call(listeners[i].context, a1); break;
          case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
          case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
          default:
            if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
              args[j - 1] = arguments[j];
            }

            listeners[i].fn.apply(listeners[i].context, args);
        }
      }
    }

    return true;
  };

  /**
   * Add a listener for a given event.
   *
   * @param {(String|Symbol)} event The event name.
   * @param {Function} fn The listener function.
   * @param {*} [context=this] The context to invoke the listener with.
   * @returns {EventEmitter} `this`.
   * @public
   */
  EventEmitter.prototype.on = function on(event, fn, context) {
    return addListener(this, event, fn, context, false);
  };

  /**
   * Add a one-time listener for a given event.
   *
   * @param {(String|Symbol)} event The event name.
   * @param {Function} fn The listener function.
   * @param {*} [context=this] The context to invoke the listener with.
   * @returns {EventEmitter} `this`.
   * @public
   */
  EventEmitter.prototype.once = function once(event, fn, context) {
    return addListener(this, event, fn, context, true);
  };

  /**
   * Remove the listeners of a given event.
   *
   * @param {(String|Symbol)} event The event name.
   * @param {Function} fn Only remove the listeners that match this function.
   * @param {*} context Only remove the listeners that have this context.
   * @param {Boolean} once Only remove one-time listeners.
   * @returns {EventEmitter} `this`.
   * @public
   */
  EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
    var evt = prefix ? prefix + event : event;

    if (!this._events[evt]) return this;
    if (!fn) {
      clearEvent(this, evt);
      return this;
    }

    var listeners = this._events[evt];

    if (listeners.fn) {
      if (
        listeners.fn === fn &&
        (!once || listeners.once) &&
        (!context || listeners.context === context)
      ) {
        clearEvent(this, evt);
      }
    } else {
      for (var i = 0, events = [], length = listeners.length; i < length; i++) {
        if (
          listeners[i].fn !== fn ||
          (once && !listeners[i].once) ||
          (context && listeners[i].context !== context)
        ) {
          events.push(listeners[i]);
        }
      }

      //
      // Reset the array, or remove it completely if we have no more listeners.
      //
      if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
      else clearEvent(this, evt);
    }

    return this;
  };

  /**
   * Remove all listeners, or those of the specified event.
   *
   * @param {(String|Symbol)} [event] The event name.
   * @returns {EventEmitter} `this`.
   * @public
   */
  EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
    var evt;

    if (event) {
      evt = prefix ? prefix + event : event;
      if (this._events[evt]) clearEvent(this, evt);
    } else {
      this._events = new Events();
      this._eventsCount = 0;
    }

    return this;
  };

  //
  // Alias methods names because people roll like that.
  //
  EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
  EventEmitter.prototype.addListener = EventEmitter.prototype.on;

  //
  // Expose the prefix.
  //
  EventEmitter.prefixed = prefix;

  //
  // Allow `EventEmitter` to be imported as module namespace.
  //
  EventEmitter.EventEmitter = EventEmitter;

  //
  // Expose the module.
  //
  {
    module.exports = EventEmitter;
  }
  });

  var Loader =
  /*#__PURE__*/
  function (_Event) {
    inherits(Loader, _Event);

    function Loader() {
      var _getPrototypeOf2;

      var _this;

      classCallCheck(this, Loader);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = possibleConstructorReturn(this, (_getPrototypeOf2 = getPrototypeOf(Loader)).call.apply(_getPrototypeOf2, [this].concat(args)));

      defineProperty(assertThisInitialized(_this), "resources", {});

      return _this;
    }

    createClass(Loader, [{
      key: "Set",
      value: function Set(url) {
        throw Error('请先挂载加载函数(Set)');
      }
    }, {
      key: "load",
      value: function load(key, url) {
        var _this2 = this;

        this.emit('load', key, url);
        return this.Set(url).then(function (res) {
          _this2.emit('loaded', key, url, res);

          _this2.resources[key] = res;
        });
      }
    }, {
      key: "preLoad",
      value: function preLoad() {
        var _this3 = this;

        var map = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
        var Keys = Object.keys(map);
        this.emit('preLoad', Keys.length);
        return Promise.all(Keys.map(function (key) {
          return _this3.load(prefix + key, map[key]);
        }));
      }
    }]);

    return Loader;
  }(eventemitter3);

  var ImageControl =
  /*#__PURE__*/
  function (_Loader) {
    inherits(ImageControl, _Loader);

    function ImageControl() {
      classCallCheck(this, ImageControl);

      return possibleConstructorReturn(this, getPrototypeOf(ImageControl).apply(this, arguments));
    }

    createClass(ImageControl, [{
      key: "Set",
      value: function Set(url) {
        return new Promise(function (resolve, reject) {
          var image = new Image();

          image.onload = function () {
            resolve(image);
          };

          image.onerror = function (e) {
            reject(e);
          };

          image.key = image.src = url;
        });
      }
    }, {
      key: "get",
      value: function get(key) {
        return this.resources[key] || ImageControl.Error || (ImageControl.Error = this.Get());
      }
    }]);

    return ImageControl;
  }(Loader);

  defineProperty(ImageControl, "Error", null);

  var howler = createCommonjsModule(function (module, exports) {
  /*!
   *  howler.js v2.1.2
   *  howlerjs.com
   *
   *  (c) 2013-2019, James Simpson of GoldFire Studios
   *  goldfirestudios.com
   *
   *  MIT License
   */

  (function() {

    /** Global Methods **/
    /***************************************************************************/

    /**
     * Create the global controller. All contained methods and properties apply
     * to all sounds that are currently playing or will be in the future.
     */
    var HowlerGlobal = function() {
      this.init();
    };
    HowlerGlobal.prototype = {
      /**
       * Initialize the global Howler object.
       * @return {Howler}
       */
      init: function() {
        var self = this || Howler;

        // Create a global ID counter.
        self._counter = 1000;

        // Pool of unlocked HTML5 Audio objects.
        self._html5AudioPool = [];
        self.html5PoolSize = 10;

        // Internal properties.
        self._codecs = {};
        self._howls = [];
        self._muted = false;
        self._volume = 1;
        self._canPlayEvent = 'canplaythrough';
        self._navigator = (typeof window !== 'undefined' && window.navigator) ? window.navigator : null;

        // Public properties.
        self.masterGain = null;
        self.noAudio = false;
        self.usingWebAudio = true;
        self.autoSuspend = true;
        self.ctx = null;

        // Set to false to disable the auto audio unlocker.
        self.autoUnlock = true;

        // Setup the various state values for global tracking.
        self._setup();

        return self;
      },

      /**
       * Get/set the global volume for all sounds.
       * @param  {Float} vol Volume from 0.0 to 1.0.
       * @return {Howler/Float}     Returns self or current volume.
       */
      volume: function(vol) {
        var self = this || Howler;
        vol = parseFloat(vol);

        // If we don't have an AudioContext created yet, run the setup.
        if (!self.ctx) {
          setupAudioContext();
        }

        if (typeof vol !== 'undefined' && vol >= 0 && vol <= 1) {
          self._volume = vol;

          // Don't update any of the nodes if we are muted.
          if (self._muted) {
            return self;
          }

          // When using Web Audio, we just need to adjust the master gain.
          if (self.usingWebAudio) {
            self.masterGain.gain.setValueAtTime(vol, Howler.ctx.currentTime);
          }

          // Loop through and change volume for all HTML5 audio nodes.
          for (var i=0; i<self._howls.length; i++) {
            if (!self._howls[i]._webAudio) {
              // Get all of the sounds in this Howl group.
              var ids = self._howls[i]._getSoundIds();

              // Loop through all sounds and change the volumes.
              for (var j=0; j<ids.length; j++) {
                var sound = self._howls[i]._soundById(ids[j]);

                if (sound && sound._node) {
                  sound._node.volume = sound._volume * vol;
                }
              }
            }
          }

          return self;
        }

        return self._volume;
      },

      /**
       * Handle muting and unmuting globally.
       * @param  {Boolean} muted Is muted or not.
       */
      mute: function(muted) {
        var self = this || Howler;

        // If we don't have an AudioContext created yet, run the setup.
        if (!self.ctx) {
          setupAudioContext();
        }

        self._muted = muted;

        // With Web Audio, we just need to mute the master gain.
        if (self.usingWebAudio) {
          self.masterGain.gain.setValueAtTime(muted ? 0 : self._volume, Howler.ctx.currentTime);
        }

        // Loop through and mute all HTML5 Audio nodes.
        for (var i=0; i<self._howls.length; i++) {
          if (!self._howls[i]._webAudio) {
            // Get all of the sounds in this Howl group.
            var ids = self._howls[i]._getSoundIds();

            // Loop through all sounds and mark the audio node as muted.
            for (var j=0; j<ids.length; j++) {
              var sound = self._howls[i]._soundById(ids[j]);

              if (sound && sound._node) {
                sound._node.muted = (muted) ? true : sound._muted;
              }
            }
          }
        }

        return self;
      },

      /**
       * Unload and destroy all currently loaded Howl objects.
       * @return {Howler}
       */
      unload: function() {
        var self = this || Howler;

        for (var i=self._howls.length-1; i>=0; i--) {
          self._howls[i].unload();
        }

        // Create a new AudioContext to make sure it is fully reset.
        if (self.usingWebAudio && self.ctx && typeof self.ctx.close !== 'undefined') {
          self.ctx.close();
          self.ctx = null;
          setupAudioContext();
        }

        return self;
      },

      /**
       * Check for codec support of specific extension.
       * @param  {String} ext Audio file extention.
       * @return {Boolean}
       */
      codecs: function(ext) {
        return (this || Howler)._codecs[ext.replace(/^x-/, '')];
      },

      /**
       * Setup various state values for global tracking.
       * @return {Howler}
       */
      _setup: function() {
        var self = this || Howler;

        // Keeps track of the suspend/resume state of the AudioContext.
        self.state = self.ctx ? self.ctx.state || 'suspended' : 'suspended';

        // Automatically begin the 30-second suspend process
        self._autoSuspend();

        // Check if audio is available.
        if (!self.usingWebAudio) {
          // No audio is available on this system if noAudio is set to true.
          if (typeof Audio !== 'undefined') {
            try {
              var test = new Audio();

              // Check if the canplaythrough event is available.
              if (typeof test.oncanplaythrough === 'undefined') {
                self._canPlayEvent = 'canplay';
              }
            } catch(e) {
              self.noAudio = true;
            }
          } else {
            self.noAudio = true;
          }
        }

        // Test to make sure audio isn't disabled in Internet Explorer.
        try {
          var test = new Audio();
          if (test.muted) {
            self.noAudio = true;
          }
        } catch (e) {}

        // Check for supported codecs.
        if (!self.noAudio) {
          self._setupCodecs();
        }

        return self;
      },

      /**
       * Check for browser support for various codecs and cache the results.
       * @return {Howler}
       */
      _setupCodecs: function() {
        var self = this || Howler;
        var audioTest = null;

        // Must wrap in a try/catch because IE11 in server mode throws an error.
        try {
          audioTest = (typeof Audio !== 'undefined') ? new Audio() : null;
        } catch (err) {
          return self;
        }

        if (!audioTest || typeof audioTest.canPlayType !== 'function') {
          return self;
        }

        var mpegTest = audioTest.canPlayType('audio/mpeg;').replace(/^no$/, '');

        // Opera version <33 has mixed MP3 support, so we need to check for and block it.
        var checkOpera = self._navigator && self._navigator.userAgent.match(/OPR\/([0-6].)/g);
        var isOldOpera = (checkOpera && parseInt(checkOpera[0].split('/')[1], 10) < 33);

        self._codecs = {
          mp3: !!(!isOldOpera && (mpegTest || audioTest.canPlayType('audio/mp3;').replace(/^no$/, ''))),
          mpeg: !!mpegTest,
          opus: !!audioTest.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ''),
          ogg: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
          oga: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
          wav: !!audioTest.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ''),
          aac: !!audioTest.canPlayType('audio/aac;').replace(/^no$/, ''),
          caf: !!audioTest.canPlayType('audio/x-caf;').replace(/^no$/, ''),
          m4a: !!(audioTest.canPlayType('audio/x-m4a;') || audioTest.canPlayType('audio/m4a;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, ''),
          mp4: !!(audioTest.canPlayType('audio/x-mp4;') || audioTest.canPlayType('audio/mp4;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, ''),
          weba: !!audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ''),
          webm: !!audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ''),
          dolby: !!audioTest.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ''),
          flac: !!(audioTest.canPlayType('audio/x-flac;') || audioTest.canPlayType('audio/flac;')).replace(/^no$/, '')
        };

        return self;
      },

      /**
       * Some browsers/devices will only allow audio to be played after a user interaction.
       * Attempt to automatically unlock audio on the first user interaction.
       * Concept from: http://paulbakaus.com/tutorials/html5/web-audio-on-ios/
       * @return {Howler}
       */
      _unlockAudio: function() {
        var self = this || Howler;

        // Only run this if Web Audio is supported and it hasn't already been unlocked.
        if (self._audioUnlocked || !self.ctx) {
          return;
        }

        self._audioUnlocked = false;
        self.autoUnlock = false;

        // Some mobile devices/platforms have distortion issues when opening/closing tabs and/or web views.
        // Bugs in the browser (especially Mobile Safari) can cause the sampleRate to change from 44100 to 48000.
        // By calling Howler.unload(), we create a new AudioContext with the correct sampleRate.
        if (!self._mobileUnloaded && self.ctx.sampleRate !== 44100) {
          self._mobileUnloaded = true;
          self.unload();
        }

        // Scratch buffer for enabling iOS to dispose of web audio buffers correctly, as per:
        // http://stackoverflow.com/questions/24119684
        self._scratchBuffer = self.ctx.createBuffer(1, 1, 22050);

        // Call this method on touch start to create and play a buffer,
        // then check if the audio actually played to determine if
        // audio has now been unlocked on iOS, Android, etc.
        var unlock = function(e) {
          // Create a pool of unlocked HTML5 Audio objects that can
          // be used for playing sounds without user interaction. HTML5
          // Audio objects must be individually unlocked, as opposed
          // to the WebAudio API which only needs a single activation.
          // This must occur before WebAudio setup or the source.onended
          // event will not fire.
          for (var i=0; i<self.html5PoolSize; i++) {
            try {
              var audioNode = new Audio();

              // Mark this Audio object as unlocked to ensure it can get returned
              // to the unlocked pool when released.
              audioNode._unlocked = true;

              // Add the audio node to the pool.
              self._releaseHtml5Audio(audioNode);
            } catch (e) {
              self.noAudio = true;
            }
          }

          // Loop through any assigned audio nodes and unlock them.
          for (var i=0; i<self._howls.length; i++) {
            if (!self._howls[i]._webAudio) {
              // Get all of the sounds in this Howl group.
              var ids = self._howls[i]._getSoundIds();

              // Loop through all sounds and unlock the audio nodes.
              for (var j=0; j<ids.length; j++) {
                var sound = self._howls[i]._soundById(ids[j]);

                if (sound && sound._node && !sound._node._unlocked) {
                  sound._node._unlocked = true;
                  sound._node.load();
                }
              }
            }
          }

          // Fix Android can not play in suspend state.
          self._autoResume();

          // Create an empty buffer.
          var source = self.ctx.createBufferSource();
          source.buffer = self._scratchBuffer;
          source.connect(self.ctx.destination);

          // Play the empty buffer.
          if (typeof source.start === 'undefined') {
            source.noteOn(0);
          } else {
            source.start(0);
          }

          // Calling resume() on a stack initiated by user gesture is what actually unlocks the audio on Android Chrome >= 55.
          if (typeof self.ctx.resume === 'function') {
            self.ctx.resume();
          }

          // Setup a timeout to check that we are unlocked on the next event loop.
          source.onended = function() {
            source.disconnect(0);

            // Update the unlocked state and prevent this check from happening again.
            self._audioUnlocked = true;

            // Remove the touch start listener.
            document.removeEventListener('touchstart', unlock, true);
            document.removeEventListener('touchend', unlock, true);
            document.removeEventListener('click', unlock, true);

            // Let all sounds know that audio has been unlocked.
            for (var i=0; i<self._howls.length; i++) {
              self._howls[i]._emit('unlock');
            }
          };
        };

        // Setup a touch start listener to attempt an unlock in.
        document.addEventListener('touchstart', unlock, true);
        document.addEventListener('touchend', unlock, true);
        document.addEventListener('click', unlock, true);

        return self;
      },

      /**
       * Get an unlocked HTML5 Audio object from the pool. If none are left,
       * return a new Audio object and throw a warning.
       * @return {Audio} HTML5 Audio object.
       */
      _obtainHtml5Audio: function() {
        var self = this || Howler;

        // Return the next object from the pool if one exists.
        if (self._html5AudioPool.length) {
          return self._html5AudioPool.pop();
        }

        //.Check if the audio is locked and throw a warning.
        var testPlay = new Audio().play();
        if (testPlay && typeof Promise !== 'undefined' && (testPlay instanceof Promise || typeof testPlay.then === 'function')) {
          testPlay.catch(function() {
            console.warn('HTML5 Audio pool exhausted, returning potentially locked audio object.');
          });
        }

        return new Audio();
      },

      /**
       * Return an activated HTML5 Audio object to the pool.
       * @return {Howler}
       */
      _releaseHtml5Audio: function(audio) {
        var self = this || Howler;

        // Don't add audio to the pool if we don't know if it has been unlocked.
        if (audio._unlocked) {
          self._html5AudioPool.push(audio);
        }

        return self;
      },

      /**
       * Automatically suspend the Web Audio AudioContext after no sound has played for 30 seconds.
       * This saves processing/energy and fixes various browser-specific bugs with audio getting stuck.
       * @return {Howler}
       */
      _autoSuspend: function() {
        var self = this;

        if (!self.autoSuspend || !self.ctx || typeof self.ctx.suspend === 'undefined' || !Howler.usingWebAudio) {
          return;
        }

        // Check if any sounds are playing.
        for (var i=0; i<self._howls.length; i++) {
          if (self._howls[i]._webAudio) {
            for (var j=0; j<self._howls[i]._sounds.length; j++) {
              if (!self._howls[i]._sounds[j]._paused) {
                return self;
              }
            }
          }
        }

        if (self._suspendTimer) {
          clearTimeout(self._suspendTimer);
        }

        // If no sound has played after 30 seconds, suspend the context.
        self._suspendTimer = setTimeout(function() {
          if (!self.autoSuspend) {
            return;
          }

          self._suspendTimer = null;
          self.state = 'suspending';
          self.ctx.suspend().then(function() {
            self.state = 'suspended';

            if (self._resumeAfterSuspend) {
              delete self._resumeAfterSuspend;
              self._autoResume();
            }
          });
        }, 30000);

        return self;
      },

      /**
       * Automatically resume the Web Audio AudioContext when a new sound is played.
       * @return {Howler}
       */
      _autoResume: function() {
        var self = this;

        if (!self.ctx || typeof self.ctx.resume === 'undefined' || !Howler.usingWebAudio) {
          return;
        }

        if (self.state === 'running' && self._suspendTimer) {
          clearTimeout(self._suspendTimer);
          self._suspendTimer = null;
        } else if (self.state === 'suspended') {
          self.ctx.resume().then(function() {
            self.state = 'running';

            // Emit to all Howls that the audio has resumed.
            for (var i=0; i<self._howls.length; i++) {
              self._howls[i]._emit('resume');
            }
          });

          if (self._suspendTimer) {
            clearTimeout(self._suspendTimer);
            self._suspendTimer = null;
          }
        } else if (self.state === 'suspending') {
          self._resumeAfterSuspend = true;
        }

        return self;
      }
    };

    // Setup the global audio controller.
    var Howler = new HowlerGlobal();

    /** Group Methods **/
    /***************************************************************************/

    /**
     * Create an audio group controller.
     * @param {Object} o Passed in properties for this group.
     */
    var Howl = function(o) {
      var self = this;

      // Throw an error if no source is provided.
      if (!o.src || o.src.length === 0) {
        console.error('An array of source files must be passed with any new Howl.');
        return;
      }

      self.init(o);
    };
    Howl.prototype = {
      /**
       * Initialize a new Howl group object.
       * @param  {Object} o Passed in properties for this group.
       * @return {Howl}
       */
      init: function(o) {
        var self = this;

        // If we don't have an AudioContext created yet, run the setup.
        if (!Howler.ctx) {
          setupAudioContext();
        }

        // Setup user-defined default properties.
        self._autoplay = o.autoplay || false;
        self._format = (typeof o.format !== 'string') ? o.format : [o.format];
        self._html5 = o.html5 || false;
        self._muted = o.mute || false;
        self._loop = o.loop || false;
        self._pool = o.pool || 5;
        self._preload = (typeof o.preload === 'boolean') ? o.preload : true;
        self._rate = o.rate || 1;
        self._sprite = o.sprite || {};
        self._src = (typeof o.src !== 'string') ? o.src : [o.src];
        self._volume = o.volume !== undefined ? o.volume : 1;
        self._xhrWithCredentials = o.xhrWithCredentials || false;

        // Setup all other default properties.
        self._duration = 0;
        self._state = 'unloaded';
        self._sounds = [];
        self._endTimers = {};
        self._queue = [];
        self._playLock = false;

        // Setup event listeners.
        self._onend = o.onend ? [{fn: o.onend}] : [];
        self._onfade = o.onfade ? [{fn: o.onfade}] : [];
        self._onload = o.onload ? [{fn: o.onload}] : [];
        self._onloaderror = o.onloaderror ? [{fn: o.onloaderror}] : [];
        self._onplayerror = o.onplayerror ? [{fn: o.onplayerror}] : [];
        self._onpause = o.onpause ? [{fn: o.onpause}] : [];
        self._onplay = o.onplay ? [{fn: o.onplay}] : [];
        self._onstop = o.onstop ? [{fn: o.onstop}] : [];
        self._onmute = o.onmute ? [{fn: o.onmute}] : [];
        self._onvolume = o.onvolume ? [{fn: o.onvolume}] : [];
        self._onrate = o.onrate ? [{fn: o.onrate}] : [];
        self._onseek = o.onseek ? [{fn: o.onseek}] : [];
        self._onunlock = o.onunlock ? [{fn: o.onunlock}] : [];
        self._onresume = [];

        // Web Audio or HTML5 Audio?
        self._webAudio = Howler.usingWebAudio && !self._html5;

        // Automatically try to enable audio.
        if (typeof Howler.ctx !== 'undefined' && Howler.ctx && Howler.autoUnlock) {
          Howler._unlockAudio();
        }

        // Keep track of this Howl group in the global controller.
        Howler._howls.push(self);

        // If they selected autoplay, add a play event to the load queue.
        if (self._autoplay) {
          self._queue.push({
            event: 'play',
            action: function() {
              self.play();
            }
          });
        }

        // Load the source file unless otherwise specified.
        if (self._preload) {
          self.load();
        }

        return self;
      },

      /**
       * Load the audio file.
       * @return {Howler}
       */
      load: function() {
        var self = this;
        var url = null;

        // If no audio is available, quit immediately.
        if (Howler.noAudio) {
          self._emit('loaderror', null, 'No audio support.');
          return;
        }

        // Make sure our source is in an array.
        if (typeof self._src === 'string') {
          self._src = [self._src];
        }

        // Loop through the sources and pick the first one that is compatible.
        for (var i=0; i<self._src.length; i++) {
          var ext, str;

          if (self._format && self._format[i]) {
            // If an extension was specified, use that instead.
            ext = self._format[i];
          } else {
            // Make sure the source is a string.
            str = self._src[i];
            if (typeof str !== 'string') {
              self._emit('loaderror', null, 'Non-string found in selected audio sources - ignoring.');
              continue;
            }

            // Extract the file extension from the URL or base64 data URI.
            ext = /^data:audio\/([^;,]+);/i.exec(str);
            if (!ext) {
              ext = /\.([^.]+)$/.exec(str.split('?', 1)[0]);
            }

            if (ext) {
              ext = ext[1].toLowerCase();
            }
          }

          // Log a warning if no extension was found.
          if (!ext) {
            console.warn('No file extension was found. Consider using the "format" property or specify an extension.');
          }

          // Check if this extension is available.
          if (ext && Howler.codecs(ext)) {
            url = self._src[i];
            break;
          }
        }

        if (!url) {
          self._emit('loaderror', null, 'No codec support for selected audio sources.');
          return;
        }

        self._src = url;
        self._state = 'loading';

        // If the hosting page is HTTPS and the source isn't,
        // drop down to HTML5 Audio to avoid Mixed Content errors.
        if (window.location.protocol === 'https:' && url.slice(0, 5) === 'http:') {
          self._html5 = true;
          self._webAudio = false;
        }

        // Create a new sound object and add it to the pool.
        new Sound(self);

        // Load and decode the audio data for playback.
        if (self._webAudio) {
          loadBuffer(self);
        }

        return self;
      },

      /**
       * Play a sound or resume previous playback.
       * @param  {String/Number} sprite   Sprite name for sprite playback or sound id to continue previous.
       * @param  {Boolean} internal Internal Use: true prevents event firing.
       * @return {Number}          Sound ID.
       */
      play: function(sprite, internal) {
        var self = this;
        var id = null;

        // Determine if a sprite, sound id or nothing was passed
        if (typeof sprite === 'number') {
          id = sprite;
          sprite = null;
        } else if (typeof sprite === 'string' && self._state === 'loaded' && !self._sprite[sprite]) {
          // If the passed sprite doesn't exist, do nothing.
          return null;
        } else if (typeof sprite === 'undefined') {
          // Use the default sound sprite (plays the full audio length).
          sprite = '__default';

          // Check if there is a single paused sound that isn't ended. 
          // If there is, play that sound. If not, continue as usual.  
          if (!self._playLock) {
            var num = 0;
            for (var i=0; i<self._sounds.length; i++) {
              if (self._sounds[i]._paused && !self._sounds[i]._ended) {
                num++;
                id = self._sounds[i]._id;
              }
            }

            if (num === 1) {
              sprite = null;
            } else {
              id = null;
            }
          }
        }

        // Get the selected node, or get one from the pool.
        var sound = id ? self._soundById(id) : self._inactiveSound();

        // If the sound doesn't exist, do nothing.
        if (!sound) {
          return null;
        }

        // Select the sprite definition.
        if (id && !sprite) {
          sprite = sound._sprite || '__default';
        }

        // If the sound hasn't loaded, we must wait to get the audio's duration.
        // We also need to wait to make sure we don't run into race conditions with
        // the order of function calls.
        if (self._state !== 'loaded') {
          // Set the sprite value on this sound.
          sound._sprite = sprite;

          // Mark this sound as not ended in case another sound is played before this one loads.
          sound._ended = false;

          // Add the sound to the queue to be played on load.
          var soundId = sound._id;
          self._queue.push({
            event: 'play',
            action: function() {
              self.play(soundId);
            }
          });

          return soundId;
        }

        // Don't play the sound if an id was passed and it is already playing.
        if (id && !sound._paused) {
          // Trigger the play event, in order to keep iterating through queue.
          if (!internal) {
            self._loadQueue('play');
          }

          return sound._id;
        }

        // Make sure the AudioContext isn't suspended, and resume it if it is.
        if (self._webAudio) {
          Howler._autoResume();
        }

        // Determine how long to play for and where to start playing.
        var seek = Math.max(0, sound._seek > 0 ? sound._seek : self._sprite[sprite][0] / 1000);
        var duration = Math.max(0, ((self._sprite[sprite][0] + self._sprite[sprite][1]) / 1000) - seek);
        var timeout = (duration * 1000) / Math.abs(sound._rate);
        var start = self._sprite[sprite][0] / 1000;
        var stop = (self._sprite[sprite][0] + self._sprite[sprite][1]) / 1000;
        var loop = !!(sound._loop || self._sprite[sprite][2]);
        sound._sprite = sprite;

        // Mark the sound as ended instantly so that this async playback
        // doesn't get grabbed by another call to play while this one waits to start.
        sound._ended = false;

        // Update the parameters of the sound.
        var setParams = function() {
          sound._paused = false;
          sound._seek = seek;
          sound._start = start;
          sound._stop = stop;
          sound._loop = loop;
        };

        // End the sound instantly if seek is at the end.
        if (seek >= stop) {
          self._ended(sound);
          return;
        }

        // Begin the actual playback.
        var node = sound._node;
        if (self._webAudio) {
          // Fire this when the sound is ready to play to begin Web Audio playback.
          var playWebAudio = function() {
            self._playLock = false;
            setParams();
            self._refreshBuffer(sound);

            // Setup the playback params.
            var vol = (sound._muted || self._muted) ? 0 : sound._volume;
            node.gain.setValueAtTime(vol, Howler.ctx.currentTime);
            sound._playStart = Howler.ctx.currentTime;

            // Play the sound using the supported method.
            if (typeof node.bufferSource.start === 'undefined') {
              sound._loop ? node.bufferSource.noteGrainOn(0, seek, 86400) : node.bufferSource.noteGrainOn(0, seek, duration);
            } else {
              sound._loop ? node.bufferSource.start(0, seek, 86400) : node.bufferSource.start(0, seek, duration);
            }

            // Start a new timer if none is present.
            if (timeout !== Infinity) {
              self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
            }

            if (!internal) {
              setTimeout(function() {
                self._emit('play', sound._id);
                self._loadQueue();
              }, 0);
            }
          };

          if (Howler.state === 'running') {
            playWebAudio();
          } else {
            self._playLock = true;

            // Wait for the audio context to resume before playing.
            self.once('resume', playWebAudio);

            // Cancel the end timer.
            self._clearTimer(sound._id);
          }
        } else {
          // Fire this when the sound is ready to play to begin HTML5 Audio playback.
          var playHtml5 = function() {
            node.currentTime = seek;
            node.muted = sound._muted || self._muted || Howler._muted || node.muted;
            node.volume = sound._volume * Howler.volume();
            node.playbackRate = sound._rate;

            // Some browsers will throw an error if this is called without user interaction.
            try {
              var play = node.play();

              // Support older browsers that don't support promises, and thus don't have this issue.
              if (play && typeof Promise !== 'undefined' && (play instanceof Promise || typeof play.then === 'function')) {
                // Implements a lock to prevent DOMException: The play() request was interrupted by a call to pause().
                self._playLock = true;

                // Set param values immediately.
                setParams();

                // Releases the lock and executes queued actions.
                play
                  .then(function() {
                    self._playLock = false;
                    node._unlocked = true;
                    if (!internal) {
                      self._emit('play', sound._id);
                      self._loadQueue();
                    }
                  })
                  .catch(function() {
                    self._playLock = false;
                    self._emit('playerror', sound._id, 'Playback was unable to start. This is most commonly an issue ' +
                      'on mobile devices and Chrome where playback was not within a user interaction.');

                    // Reset the ended and paused values.
                    sound._ended = true;
                    sound._paused = true;
                  });
              } else if (!internal) {
                self._playLock = false;
                setParams();
                self._emit('play', sound._id);
                self._loadQueue();
              }

              // Setting rate before playing won't work in IE, so we set it again here.
              node.playbackRate = sound._rate;

              // If the node is still paused, then we can assume there was a playback issue.
              if (node.paused) {
                self._emit('playerror', sound._id, 'Playback was unable to start. This is most commonly an issue ' +
                  'on mobile devices and Chrome where playback was not within a user interaction.');
                return;
              }

              // Setup the end timer on sprites or listen for the ended event.
              if (sprite !== '__default' || sound._loop) {
                self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
              } else {
                self._endTimers[sound._id] = function() {
                  // Fire ended on this audio node.
                  self._ended(sound);

                  // Clear this listener.
                  node.removeEventListener('ended', self._endTimers[sound._id], false);
                };
                node.addEventListener('ended', self._endTimers[sound._id], false);
              }
            } catch (err) {
              self._emit('playerror', sound._id, err);
            }
          };

          // If this is streaming audio, make sure the src is set and load again.
          if (node.src === 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA') {
            node.src = self._src;
            node.load();
          }

          // Play immediately if ready, or wait for the 'canplaythrough'e vent.
          var loadedNoReadyState = (window && window.ejecta) || (!node.readyState && Howler._navigator.isCocoonJS);
          if (node.readyState >= 3 || loadedNoReadyState) {
            playHtml5();
          } else {
            self._playLock = true;

            var listener = function() {
              // Begin playback.
              playHtml5();

              // Clear this listener.
              node.removeEventListener(Howler._canPlayEvent, listener, false);
            };
            node.addEventListener(Howler._canPlayEvent, listener, false);

            // Cancel the end timer.
            self._clearTimer(sound._id);
          }
        }

        return sound._id;
      },

      /**
       * Pause playback and save current position.
       * @param  {Number} id The sound ID (empty to pause all in group).
       * @return {Howl}
       */
      pause: function(id) {
        var self = this;

        // If the sound hasn't loaded or a play() promise is pending, add it to the load queue to pause when capable.
        if (self._state !== 'loaded' || self._playLock) {
          self._queue.push({
            event: 'pause',
            action: function() {
              self.pause(id);
            }
          });

          return self;
        }

        // If no id is passed, get all ID's to be paused.
        var ids = self._getSoundIds(id);

        for (var i=0; i<ids.length; i++) {
          // Clear the end timer.
          self._clearTimer(ids[i]);

          // Get the sound.
          var sound = self._soundById(ids[i]);

          if (sound && !sound._paused) {
            // Reset the seek position.
            sound._seek = self.seek(ids[i]);
            sound._rateSeek = 0;
            sound._paused = true;

            // Stop currently running fades.
            self._stopFade(ids[i]);

            if (sound._node) {
              if (self._webAudio) {
                // Make sure the sound has been created.
                if (!sound._node.bufferSource) {
                  continue;
                }

                if (typeof sound._node.bufferSource.stop === 'undefined') {
                  sound._node.bufferSource.noteOff(0);
                } else {
                  sound._node.bufferSource.stop(0);
                }

                // Clean up the buffer source.
                self._cleanBuffer(sound._node);
              } else if (!isNaN(sound._node.duration) || sound._node.duration === Infinity) {
                sound._node.pause();
              }
            }
          }

          // Fire the pause event, unless `true` is passed as the 2nd argument.
          if (!arguments[1]) {
            self._emit('pause', sound ? sound._id : null);
          }
        }

        return self;
      },

      /**
       * Stop playback and reset to start.
       * @param  {Number} id The sound ID (empty to stop all in group).
       * @param  {Boolean} internal Internal Use: true prevents event firing.
       * @return {Howl}
       */
      stop: function(id, internal) {
        var self = this;

        // If the sound hasn't loaded, add it to the load queue to stop when capable.
        if (self._state !== 'loaded' || self._playLock) {
          self._queue.push({
            event: 'stop',
            action: function() {
              self.stop(id);
            }
          });

          return self;
        }

        // If no id is passed, get all ID's to be stopped.
        var ids = self._getSoundIds(id);

        for (var i=0; i<ids.length; i++) {
          // Clear the end timer.
          self._clearTimer(ids[i]);

          // Get the sound.
          var sound = self._soundById(ids[i]);

          if (sound) {
            // Reset the seek position.
            sound._seek = sound._start || 0;
            sound._rateSeek = 0;
            sound._paused = true;
            sound._ended = true;

            // Stop currently running fades.
            self._stopFade(ids[i]);

            if (sound._node) {
              if (self._webAudio) {
                // Make sure the sound's AudioBufferSourceNode has been created.
                if (sound._node.bufferSource) {
                  if (typeof sound._node.bufferSource.stop === 'undefined') {
                    sound._node.bufferSource.noteOff(0);
                  } else {
                    sound._node.bufferSource.stop(0);
                  }

                  // Clean up the buffer source.
                  self._cleanBuffer(sound._node);
                }
              } else if (!isNaN(sound._node.duration) || sound._node.duration === Infinity) {
                sound._node.currentTime = sound._start || 0;
                sound._node.pause();

                // If this is a live stream, stop download once the audio is stopped.
                if (sound._node.duration === Infinity) {
                  self._clearSound(sound._node);
                }
              }
            }

            if (!internal) {
              self._emit('stop', sound._id);
            }
          }
        }

        return self;
      },

      /**
       * Mute/unmute a single sound or all sounds in this Howl group.
       * @param  {Boolean} muted Set to true to mute and false to unmute.
       * @param  {Number} id    The sound ID to update (omit to mute/unmute all).
       * @return {Howl}
       */
      mute: function(muted, id) {
        var self = this;

        // If the sound hasn't loaded, add it to the load queue to mute when capable.
        if (self._state !== 'loaded'|| self._playLock) {
          self._queue.push({
            event: 'mute',
            action: function() {
              self.mute(muted, id);
            }
          });

          return self;
        }

        // If applying mute/unmute to all sounds, update the group's value.
        if (typeof id === 'undefined') {
          if (typeof muted === 'boolean') {
            self._muted = muted;
          } else {
            return self._muted;
          }
        }

        // If no id is passed, get all ID's to be muted.
        var ids = self._getSoundIds(id);

        for (var i=0; i<ids.length; i++) {
          // Get the sound.
          var sound = self._soundById(ids[i]);

          if (sound) {
            sound._muted = muted;

            // Cancel active fade and set the volume to the end value.
            if (sound._interval) {
              self._stopFade(sound._id);
            }

            if (self._webAudio && sound._node) {
              sound._node.gain.setValueAtTime(muted ? 0 : sound._volume, Howler.ctx.currentTime);
            } else if (sound._node) {
              sound._node.muted = Howler._muted ? true : muted;
            }

            self._emit('mute', sound._id);
          }
        }

        return self;
      },

      /**
       * Get/set the volume of this sound or of the Howl group. This method can optionally take 0, 1 or 2 arguments.
       *   volume() -> Returns the group's volume value.
       *   volume(id) -> Returns the sound id's current volume.
       *   volume(vol) -> Sets the volume of all sounds in this Howl group.
       *   volume(vol, id) -> Sets the volume of passed sound id.
       * @return {Howl/Number} Returns self or current volume.
       */
      volume: function() {
        var self = this;
        var args = arguments;
        var vol, id;

        // Determine the values based on arguments.
        if (args.length === 0) {
          // Return the value of the groups' volume.
          return self._volume;
        } else if (args.length === 1 || args.length === 2 && typeof args[1] === 'undefined') {
          // First check if this is an ID, and if not, assume it is a new volume.
          var ids = self._getSoundIds();
          var index = ids.indexOf(args[0]);
          if (index >= 0) {
            id = parseInt(args[0], 10);
          } else {
            vol = parseFloat(args[0]);
          }
        } else if (args.length >= 2) {
          vol = parseFloat(args[0]);
          id = parseInt(args[1], 10);
        }

        // Update the volume or return the current volume.
        var sound;
        if (typeof vol !== 'undefined' && vol >= 0 && vol <= 1) {
          // If the sound hasn't loaded, add it to the load queue to change volume when capable.
          if (self._state !== 'loaded'|| self._playLock) {
            self._queue.push({
              event: 'volume',
              action: function() {
                self.volume.apply(self, args);
              }
            });

            return self;
          }

          // Set the group volume.
          if (typeof id === 'undefined') {
            self._volume = vol;
          }

          // Update one or all volumes.
          id = self._getSoundIds(id);
          for (var i=0; i<id.length; i++) {
            // Get the sound.
            sound = self._soundById(id[i]);

            if (sound) {
              sound._volume = vol;

              // Stop currently running fades.
              if (!args[2]) {
                self._stopFade(id[i]);
              }

              if (self._webAudio && sound._node && !sound._muted) {
                sound._node.gain.setValueAtTime(vol, Howler.ctx.currentTime);
              } else if (sound._node && !sound._muted) {
                sound._node.volume = vol * Howler.volume();
              }

              self._emit('volume', sound._id);
            }
          }
        } else {
          sound = id ? self._soundById(id) : self._sounds[0];
          return sound ? sound._volume : 0;
        }

        return self;
      },

      /**
       * Fade a currently playing sound between two volumes (if no id is passsed, all sounds will fade).
       * @param  {Number} from The value to fade from (0.0 to 1.0).
       * @param  {Number} to   The volume to fade to (0.0 to 1.0).
       * @param  {Number} len  Time in milliseconds to fade.
       * @param  {Number} id   The sound id (omit to fade all sounds).
       * @return {Howl}
       */
      fade: function(from, to, len, id) {
        var self = this;

        // If the sound hasn't loaded, add it to the load queue to fade when capable.
        if (self._state !== 'loaded' || self._playLock) {
          self._queue.push({
            event: 'fade',
            action: function() {
              self.fade(from, to, len, id);
            }
          });

          return self;
        }

        // Make sure the to/from/len values are numbers.
        from = parseFloat(from);
        to = parseFloat(to);
        len = parseFloat(len);

        // Set the volume to the start position.
        self.volume(from, id);

        // Fade the volume of one or all sounds.
        var ids = self._getSoundIds(id);
        for (var i=0; i<ids.length; i++) {
          // Get the sound.
          var sound = self._soundById(ids[i]);

          // Create a linear fade or fall back to timeouts with HTML5 Audio.
          if (sound) {
            // Stop the previous fade if no sprite is being used (otherwise, volume handles this).
            if (!id) {
              self._stopFade(ids[i]);
            }

            // If we are using Web Audio, let the native methods do the actual fade.
            if (self._webAudio && !sound._muted) {
              var currentTime = Howler.ctx.currentTime;
              var end = currentTime + (len / 1000);
              sound._volume = from;
              sound._node.gain.setValueAtTime(from, currentTime);
              sound._node.gain.linearRampToValueAtTime(to, end);
            }

            self._startFadeInterval(sound, from, to, len, ids[i], typeof id === 'undefined');
          }
        }

        return self;
      },

      /**
       * Starts the internal interval to fade a sound.
       * @param  {Object} sound Reference to sound to fade.
       * @param  {Number} from The value to fade from (0.0 to 1.0).
       * @param  {Number} to   The volume to fade to (0.0 to 1.0).
       * @param  {Number} len  Time in milliseconds to fade.
       * @param  {Number} id   The sound id to fade.
       * @param  {Boolean} isGroup   If true, set the volume on the group.
       */
      _startFadeInterval: function(sound, from, to, len, id, isGroup) {
        var self = this;
        var vol = from;
        var diff = to - from;
        var steps = Math.abs(diff / 0.01);
        var stepLen = Math.max(4, (steps > 0) ? len / steps : len);
        var lastTick = Date.now();

        // Store the value being faded to.
        sound._fadeTo = to;

        // Update the volume value on each interval tick.
        sound._interval = setInterval(function() {
          // Update the volume based on the time since the last tick.
          var tick = (Date.now() - lastTick) / len;
          lastTick = Date.now();
          vol += diff * tick;

          // Make sure the volume is in the right bounds.
          vol = Math.max(0, vol);
          vol = Math.min(1, vol);

          // Round to within 2 decimal points.
          vol = Math.round(vol * 100) / 100;

          // Change the volume.
          if (self._webAudio) {
            sound._volume = vol;
          } else {
            self.volume(vol, sound._id, true);
          }

          // Set the group's volume.
          if (isGroup) {
            self._volume = vol;
          }

          // When the fade is complete, stop it and fire event.
          if ((to < from && vol <= to) || (to > from && vol >= to)) {
            clearInterval(sound._interval);
            sound._interval = null;
            sound._fadeTo = null;
            self.volume(to, sound._id);
            self._emit('fade', sound._id);
          }
        }, stepLen);
      },

      /**
       * Internal method that stops the currently playing fade when
       * a new fade starts, volume is changed or the sound is stopped.
       * @param  {Number} id The sound id.
       * @return {Howl}
       */
      _stopFade: function(id) {
        var self = this;
        var sound = self._soundById(id);

        if (sound && sound._interval) {
          if (self._webAudio) {
            sound._node.gain.cancelScheduledValues(Howler.ctx.currentTime);
          }

          clearInterval(sound._interval);
          sound._interval = null;
          self.volume(sound._fadeTo, id);
          sound._fadeTo = null;
          self._emit('fade', id);
        }

        return self;
      },

      /**
       * Get/set the loop parameter on a sound. This method can optionally take 0, 1 or 2 arguments.
       *   loop() -> Returns the group's loop value.
       *   loop(id) -> Returns the sound id's loop value.
       *   loop(loop) -> Sets the loop value for all sounds in this Howl group.
       *   loop(loop, id) -> Sets the loop value of passed sound id.
       * @return {Howl/Boolean} Returns self or current loop value.
       */
      loop: function() {
        var self = this;
        var args = arguments;
        var loop, id, sound;

        // Determine the values for loop and id.
        if (args.length === 0) {
          // Return the grou's loop value.
          return self._loop;
        } else if (args.length === 1) {
          if (typeof args[0] === 'boolean') {
            loop = args[0];
            self._loop = loop;
          } else {
            // Return this sound's loop value.
            sound = self._soundById(parseInt(args[0], 10));
            return sound ? sound._loop : false;
          }
        } else if (args.length === 2) {
          loop = args[0];
          id = parseInt(args[1], 10);
        }

        // If no id is passed, get all ID's to be looped.
        var ids = self._getSoundIds(id);
        for (var i=0; i<ids.length; i++) {
          sound = self._soundById(ids[i]);

          if (sound) {
            sound._loop = loop;
            if (self._webAudio && sound._node && sound._node.bufferSource) {
              sound._node.bufferSource.loop = loop;
              if (loop) {
                sound._node.bufferSource.loopStart = sound._start || 0;
                sound._node.bufferSource.loopEnd = sound._stop;
              }
            }
          }
        }

        return self;
      },

      /**
       * Get/set the playback rate of a sound. This method can optionally take 0, 1 or 2 arguments.
       *   rate() -> Returns the first sound node's current playback rate.
       *   rate(id) -> Returns the sound id's current playback rate.
       *   rate(rate) -> Sets the playback rate of all sounds in this Howl group.
       *   rate(rate, id) -> Sets the playback rate of passed sound id.
       * @return {Howl/Number} Returns self or the current playback rate.
       */
      rate: function() {
        var self = this;
        var args = arguments;
        var rate, id;

        // Determine the values based on arguments.
        if (args.length === 0) {
          // We will simply return the current rate of the first node.
          id = self._sounds[0]._id;
        } else if (args.length === 1) {
          // First check if this is an ID, and if not, assume it is a new rate value.
          var ids = self._getSoundIds();
          var index = ids.indexOf(args[0]);
          if (index >= 0) {
            id = parseInt(args[0], 10);
          } else {
            rate = parseFloat(args[0]);
          }
        } else if (args.length === 2) {
          rate = parseFloat(args[0]);
          id = parseInt(args[1], 10);
        }

        // Update the playback rate or return the current value.
        var sound;
        if (typeof rate === 'number') {
          // If the sound hasn't loaded, add it to the load queue to change playback rate when capable.
          if (self._state !== 'loaded' || self._playLock) {
            self._queue.push({
              event: 'rate',
              action: function() {
                self.rate.apply(self, args);
              }
            });

            return self;
          }

          // Set the group rate.
          if (typeof id === 'undefined') {
            self._rate = rate;
          }

          // Update one or all volumes.
          id = self._getSoundIds(id);
          for (var i=0; i<id.length; i++) {
            // Get the sound.
            sound = self._soundById(id[i]);

            if (sound) {
              // Keep track of our position when the rate changed and update the playback
              // start position so we can properly adjust the seek position for time elapsed.
              if (self.playing(id[i])) {
                sound._rateSeek = self.seek(id[i]);
                sound._playStart = self._webAudio ? Howler.ctx.currentTime : sound._playStart;
              }
              sound._rate = rate;

              // Change the playback rate.
              if (self._webAudio && sound._node && sound._node.bufferSource) {
                sound._node.bufferSource.playbackRate.setValueAtTime(rate, Howler.ctx.currentTime);
              } else if (sound._node) {
                sound._node.playbackRate = rate;
              }

              // Reset the timers.
              var seek = self.seek(id[i]);
              var duration = ((self._sprite[sound._sprite][0] + self._sprite[sound._sprite][1]) / 1000) - seek;
              var timeout = (duration * 1000) / Math.abs(sound._rate);

              // Start a new end timer if sound is already playing.
              if (self._endTimers[id[i]] || !sound._paused) {
                self._clearTimer(id[i]);
                self._endTimers[id[i]] = setTimeout(self._ended.bind(self, sound), timeout);
              }

              self._emit('rate', sound._id);
            }
          }
        } else {
          sound = self._soundById(id);
          return sound ? sound._rate : self._rate;
        }

        return self;
      },

      /**
       * Get/set the seek position of a sound. This method can optionally take 0, 1 or 2 arguments.
       *   seek() -> Returns the first sound node's current seek position.
       *   seek(id) -> Returns the sound id's current seek position.
       *   seek(seek) -> Sets the seek position of the first sound node.
       *   seek(seek, id) -> Sets the seek position of passed sound id.
       * @return {Howl/Number} Returns self or the current seek position.
       */
      seek: function() {
        var self = this;
        var args = arguments;
        var seek, id;

        // Determine the values based on arguments.
        if (args.length === 0) {
          // We will simply return the current position of the first node.
          id = self._sounds[0]._id;
        } else if (args.length === 1) {
          // First check if this is an ID, and if not, assume it is a new seek position.
          var ids = self._getSoundIds();
          var index = ids.indexOf(args[0]);
          if (index >= 0) {
            id = parseInt(args[0], 10);
          } else if (self._sounds.length) {
            id = self._sounds[0]._id;
            seek = parseFloat(args[0]);
          }
        } else if (args.length === 2) {
          seek = parseFloat(args[0]);
          id = parseInt(args[1], 10);
        }

        // If there is no ID, bail out.
        if (typeof id === 'undefined') {
          return self;
        }

        // If the sound hasn't loaded, add it to the load queue to seek when capable.
        if (self._state !== 'loaded' || self._playLock) {
          self._queue.push({
            event: 'seek',
            action: function() {
              self.seek.apply(self, args);
            }
          });

          return self;
        }

        // Get the sound.
        var sound = self._soundById(id);

        if (sound) {
          if (typeof seek === 'number' && seek >= 0) {
            // Pause the sound and update position for restarting playback.
            var playing = self.playing(id);
            if (playing) {
              self.pause(id, true);
            }

            // Move the position of the track and cancel timer.
            sound._seek = seek;
            sound._ended = false;
            self._clearTimer(id);

            // Update the seek position for HTML5 Audio.
            if (!self._webAudio && sound._node && !isNaN(sound._node.duration)) {
              sound._node.currentTime = seek;
            }

            // Seek and emit when ready.
            var seekAndEmit = function() {
              self._emit('seek', id);

              // Restart the playback if the sound was playing.
              if (playing) {
                self.play(id, true);
              }
            };

            // Wait for the play lock to be unset before emitting (HTML5 Audio).
            if (playing && !self._webAudio) {
              var emitSeek = function() {
                if (!self._playLock) {
                  seekAndEmit();
                } else {
                  setTimeout(emitSeek, 0);
                }
              };
              setTimeout(emitSeek, 0);
            } else {
              seekAndEmit();
            }
          } else {
            if (self._webAudio) {
              var realTime = self.playing(id) ? Howler.ctx.currentTime - sound._playStart : 0;
              var rateSeek = sound._rateSeek ? sound._rateSeek - sound._seek : 0;
              return sound._seek + (rateSeek + realTime * Math.abs(sound._rate));
            } else {
              return sound._node.currentTime;
            }
          }
        }

        return self;
      },

      /**
       * Check if a specific sound is currently playing or not (if id is provided), or check if at least one of the sounds in the group is playing or not.
       * @param  {Number}  id The sound id to check. If none is passed, the whole sound group is checked.
       * @return {Boolean} True if playing and false if not.
       */
      playing: function(id) {
        var self = this;

        // Check the passed sound ID (if any).
        if (typeof id === 'number') {
          var sound = self._soundById(id);
          return sound ? !sound._paused : false;
        }

        // Otherwise, loop through all sounds and check if any are playing.
        for (var i=0; i<self._sounds.length; i++) {
          if (!self._sounds[i]._paused) {
            return true;
          }
        }

        return false;
      },

      /**
       * Get the duration of this sound. Passing a sound id will return the sprite duration.
       * @param  {Number} id The sound id to check. If none is passed, return full source duration.
       * @return {Number} Audio duration in seconds.
       */
      duration: function(id) {
        var self = this;
        var duration = self._duration;

        // If we pass an ID, get the sound and return the sprite length.
        var sound = self._soundById(id);
        if (sound) {
          duration = self._sprite[sound._sprite][1] / 1000;
        }

        return duration;
      },

      /**
       * Returns the current loaded state of this Howl.
       * @return {String} 'unloaded', 'loading', 'loaded'
       */
      state: function() {
        return this._state;
      },

      /**
       * Unload and destroy the current Howl object.
       * This will immediately stop all sound instances attached to this group.
       */
      unload: function() {
        var self = this;

        // Stop playing any active sounds.
        var sounds = self._sounds;
        for (var i=0; i<sounds.length; i++) {
          // Stop the sound if it is currently playing.
          if (!sounds[i]._paused) {
            self.stop(sounds[i]._id);
          }

          // Remove the source or disconnect.
          if (!self._webAudio) {
            // Set the source to 0-second silence to stop any downloading (except in IE).
            self._clearSound(sounds[i]._node);

            // Remove any event listeners.
            sounds[i]._node.removeEventListener('error', sounds[i]._errorFn, false);
            sounds[i]._node.removeEventListener(Howler._canPlayEvent, sounds[i]._loadFn, false);

            // Release the Audio object back to the pool.
            Howler._releaseHtml5Audio(sounds[i]._node);
          }

          // Empty out all of the nodes.
          delete sounds[i]._node;

          // Make sure all timers are cleared out.
          self._clearTimer(sounds[i]._id);
        }

        // Remove the references in the global Howler object.
        var index = Howler._howls.indexOf(self);
        if (index >= 0) {
          Howler._howls.splice(index, 1);
        }

        // Delete this sound from the cache (if no other Howl is using it).
        var remCache = true;
        for (i=0; i<Howler._howls.length; i++) {
          if (Howler._howls[i]._src === self._src || self._src.indexOf(Howler._howls[i]._src) >= 0) {
            remCache = false;
            break;
          }
        }

        if (cache && remCache) {
          delete cache[self._src];
        }

        // Clear global errors.
        Howler.noAudio = false;

        // Clear out `self`.
        self._state = 'unloaded';
        self._sounds = [];
        self = null;

        return null;
      },

      /**
       * Listen to a custom event.
       * @param  {String}   event Event name.
       * @param  {Function} fn    Listener to call.
       * @param  {Number}   id    (optional) Only listen to events for this sound.
       * @param  {Number}   once  (INTERNAL) Marks event to fire only once.
       * @return {Howl}
       */
      on: function(event, fn, id, once) {
        var self = this;
        var events = self['_on' + event];

        if (typeof fn === 'function') {
          events.push(once ? {id: id, fn: fn, once: once} : {id: id, fn: fn});
        }

        return self;
      },

      /**
       * Remove a custom event. Call without parameters to remove all events.
       * @param  {String}   event Event name.
       * @param  {Function} fn    Listener to remove. Leave empty to remove all.
       * @param  {Number}   id    (optional) Only remove events for this sound.
       * @return {Howl}
       */
      off: function(event, fn, id) {
        var self = this;
        var events = self['_on' + event];
        var i = 0;

        // Allow passing just an event and ID.
        if (typeof fn === 'number') {
          id = fn;
          fn = null;
        }

        if (fn || id) {
          // Loop through event store and remove the passed function.
          for (i=0; i<events.length; i++) {
            var isId = (id === events[i].id);
            if (fn === events[i].fn && isId || !fn && isId) {
              events.splice(i, 1);
              break;
            }
          }
        } else if (event) {
          // Clear out all events of this type.
          self['_on' + event] = [];
        } else {
          // Clear out all events of every type.
          var keys = Object.keys(self);
          for (i=0; i<keys.length; i++) {
            if ((keys[i].indexOf('_on') === 0) && Array.isArray(self[keys[i]])) {
              self[keys[i]] = [];
            }
          }
        }

        return self;
      },

      /**
       * Listen to a custom event and remove it once fired.
       * @param  {String}   event Event name.
       * @param  {Function} fn    Listener to call.
       * @param  {Number}   id    (optional) Only listen to events for this sound.
       * @return {Howl}
       */
      once: function(event, fn, id) {
        var self = this;

        // Setup the event listener.
        self.on(event, fn, id, 1);

        return self;
      },

      /**
       * Emit all events of a specific type and pass the sound id.
       * @param  {String} event Event name.
       * @param  {Number} id    Sound ID.
       * @param  {Number} msg   Message to go with event.
       * @return {Howl}
       */
      _emit: function(event, id, msg) {
        var self = this;
        var events = self['_on' + event];

        // Loop through event store and fire all functions.
        for (var i=events.length-1; i>=0; i--) {
          // Only fire the listener if the correct ID is used.
          if (!events[i].id || events[i].id === id || event === 'load') {
            setTimeout(function(fn) {
              fn.call(this, id, msg);
            }.bind(self, events[i].fn), 0);

            // If this event was setup with `once`, remove it.
            if (events[i].once) {
              self.off(event, events[i].fn, events[i].id);
            }
          }
        }

        // Pass the event type into load queue so that it can continue stepping.
        self._loadQueue(event);

        return self;
      },

      /**
       * Queue of actions initiated before the sound has loaded.
       * These will be called in sequence, with the next only firing
       * after the previous has finished executing (even if async like play).
       * @return {Howl}
       */
      _loadQueue: function(event) {
        var self = this;

        if (self._queue.length > 0) {
          var task = self._queue[0];

          // Remove this task if a matching event was passed.
          if (task.event === event) {
            self._queue.shift();
            self._loadQueue();
          }

          // Run the task if no event type is passed.
          if (!event) {
            task.action();
          }
        }

        return self;
      },

      /**
       * Fired when playback ends at the end of the duration.
       * @param  {Sound} sound The sound object to work with.
       * @return {Howl}
       */
      _ended: function(sound) {
        var self = this;
        var sprite = sound._sprite;

        // If we are using IE and there was network latency we may be clipping
        // audio before it completes playing. Lets check the node to make sure it
        // believes it has completed, before ending the playback.
        if (!self._webAudio && sound._node && !sound._node.paused && !sound._node.ended && sound._node.currentTime < sound._stop) {
          setTimeout(self._ended.bind(self, sound), 100);
          return self;
        }

        // Should this sound loop?
        var loop = !!(sound._loop || self._sprite[sprite][2]);

        // Fire the ended event.
        self._emit('end', sound._id);

        // Restart the playback for HTML5 Audio loop.
        if (!self._webAudio && loop) {
          self.stop(sound._id, true).play(sound._id);
        }

        // Restart this timer if on a Web Audio loop.
        if (self._webAudio && loop) {
          self._emit('play', sound._id);
          sound._seek = sound._start || 0;
          sound._rateSeek = 0;
          sound._playStart = Howler.ctx.currentTime;

          var timeout = ((sound._stop - sound._start) * 1000) / Math.abs(sound._rate);
          self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
        }

        // Mark the node as paused.
        if (self._webAudio && !loop) {
          sound._paused = true;
          sound._ended = true;
          sound._seek = sound._start || 0;
          sound._rateSeek = 0;
          self._clearTimer(sound._id);

          // Clean up the buffer source.
          self._cleanBuffer(sound._node);

          // Attempt to auto-suspend AudioContext if no sounds are still playing.
          Howler._autoSuspend();
        }

        // When using a sprite, end the track.
        if (!self._webAudio && !loop) {
          self.stop(sound._id, true);
        }

        return self;
      },

      /**
       * Clear the end timer for a sound playback.
       * @param  {Number} id The sound ID.
       * @return {Howl}
       */
      _clearTimer: function(id) {
        var self = this;

        if (self._endTimers[id]) {
          // Clear the timeout or remove the ended listener.
          if (typeof self._endTimers[id] !== 'function') {
            clearTimeout(self._endTimers[id]);
          } else {
            var sound = self._soundById(id);
            if (sound && sound._node) {
              sound._node.removeEventListener('ended', self._endTimers[id], false);
            }
          }

          delete self._endTimers[id];
        }

        return self;
      },

      /**
       * Return the sound identified by this ID, or return null.
       * @param  {Number} id Sound ID
       * @return {Object}    Sound object or null.
       */
      _soundById: function(id) {
        var self = this;

        // Loop through all sounds and find the one with this ID.
        for (var i=0; i<self._sounds.length; i++) {
          if (id === self._sounds[i]._id) {
            return self._sounds[i];
          }
        }

        return null;
      },

      /**
       * Return an inactive sound from the pool or create a new one.
       * @return {Sound} Sound playback object.
       */
      _inactiveSound: function() {
        var self = this;

        self._drain();

        // Find the first inactive node to recycle.
        for (var i=0; i<self._sounds.length; i++) {
          if (self._sounds[i]._ended) {
            return self._sounds[i].reset();
          }
        }

        // If no inactive node was found, create a new one.
        return new Sound(self);
      },

      /**
       * Drain excess inactive sounds from the pool.
       */
      _drain: function() {
        var self = this;
        var limit = self._pool;
        var cnt = 0;
        var i = 0;

        // If there are less sounds than the max pool size, we are done.
        if (self._sounds.length < limit) {
          return;
        }

        // Count the number of inactive sounds.
        for (i=0; i<self._sounds.length; i++) {
          if (self._sounds[i]._ended) {
            cnt++;
          }
        }

        // Remove excess inactive sounds, going in reverse order.
        for (i=self._sounds.length - 1; i>=0; i--) {
          if (cnt <= limit) {
            return;
          }

          if (self._sounds[i]._ended) {
            // Disconnect the audio source when using Web Audio.
            if (self._webAudio && self._sounds[i]._node) {
              self._sounds[i]._node.disconnect(0);
            }

            // Remove sounds until we have the pool size.
            self._sounds.splice(i, 1);
            cnt--;
          }
        }
      },

      /**
       * Get all ID's from the sounds pool.
       * @param  {Number} id Only return one ID if one is passed.
       * @return {Array}    Array of IDs.
       */
      _getSoundIds: function(id) {
        var self = this;

        if (typeof id === 'undefined') {
          var ids = [];
          for (var i=0; i<self._sounds.length; i++) {
            ids.push(self._sounds[i]._id);
          }

          return ids;
        } else {
          return [id];
        }
      },

      /**
       * Load the sound back into the buffer source.
       * @param  {Sound} sound The sound object to work with.
       * @return {Howl}
       */
      _refreshBuffer: function(sound) {
        var self = this;

        // Setup the buffer source for playback.
        sound._node.bufferSource = Howler.ctx.createBufferSource();
        sound._node.bufferSource.buffer = cache[self._src];

        // Connect to the correct node.
        if (sound._panner) {
          sound._node.bufferSource.connect(sound._panner);
        } else {
          sound._node.bufferSource.connect(sound._node);
        }

        // Setup looping and playback rate.
        sound._node.bufferSource.loop = sound._loop;
        if (sound._loop) {
          sound._node.bufferSource.loopStart = sound._start || 0;
          sound._node.bufferSource.loopEnd = sound._stop || 0;
        }
        sound._node.bufferSource.playbackRate.setValueAtTime(sound._rate, Howler.ctx.currentTime);

        return self;
      },

      /**
       * Prevent memory leaks by cleaning up the buffer source after playback.
       * @param  {Object} node Sound's audio node containing the buffer source.
       * @return {Howl}
       */
      _cleanBuffer: function(node) {
        var self = this;
        var isIOS = Howler._navigator && Howler._navigator.vendor.indexOf('Apple') >= 0;

        if (Howler._scratchBuffer && node.bufferSource) {
          node.bufferSource.onended = null;
          node.bufferSource.disconnect(0);
          if (isIOS) {
            try { node.bufferSource.buffer = Howler._scratchBuffer; } catch(e) {}
          }
        }
        node.bufferSource = null;

        return self;
      },

      /**
       * Set the source to a 0-second silence to stop any downloading (except in IE).
       * @param  {Object} node Audio node to clear.
       */
      _clearSound: function(node) {
        var checkIE = /MSIE |Trident\//.test(Howler._navigator && Howler._navigator.userAgent);
        if (!checkIE) {
          node.src = 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA';
        }
      }
    };

    /** Single Sound Methods **/
    /***************************************************************************/

    /**
     * Setup the sound object, which each node attached to a Howl group is contained in.
     * @param {Object} howl The Howl parent group.
     */
    var Sound = function(howl) {
      this._parent = howl;
      this.init();
    };
    Sound.prototype = {
      /**
       * Initialize a new Sound object.
       * @return {Sound}
       */
      init: function() {
        var self = this;
        var parent = self._parent;

        // Setup the default parameters.
        self._muted = parent._muted;
        self._loop = parent._loop;
        self._volume = parent._volume;
        self._rate = parent._rate;
        self._seek = 0;
        self._paused = true;
        self._ended = true;
        self._sprite = '__default';

        // Generate a unique ID for this sound.
        self._id = ++Howler._counter;

        // Add itself to the parent's pool.
        parent._sounds.push(self);

        // Create the new node.
        self.create();

        return self;
      },

      /**
       * Create and setup a new sound object, whether HTML5 Audio or Web Audio.
       * @return {Sound}
       */
      create: function() {
        var self = this;
        var parent = self._parent;
        var volume = (Howler._muted || self._muted || self._parent._muted) ? 0 : self._volume;

        if (parent._webAudio) {
          // Create the gain node for controlling volume (the source will connect to this).
          self._node = (typeof Howler.ctx.createGain === 'undefined') ? Howler.ctx.createGainNode() : Howler.ctx.createGain();
          self._node.gain.setValueAtTime(volume, Howler.ctx.currentTime);
          self._node.paused = true;
          self._node.connect(Howler.masterGain);
        } else {
          // Get an unlocked Audio object from the pool.
          self._node = Howler._obtainHtml5Audio();

          // Listen for errors (http://dev.w3.org/html5/spec-author-view/spec.html#mediaerror).
          self._errorFn = self._errorListener.bind(self);
          self._node.addEventListener('error', self._errorFn, false);

          // Listen for 'canplaythrough' event to let us know the sound is ready.
          self._loadFn = self._loadListener.bind(self);
          self._node.addEventListener(Howler._canPlayEvent, self._loadFn, false);

          // Setup the new audio node.
          self._node.src = parent._src;
          self._node.preload = 'auto';
          self._node.volume = volume * Howler.volume();

          // Begin loading the source.
          self._node.load();
        }

        return self;
      },

      /**
       * Reset the parameters of this sound to the original state (for recycle).
       * @return {Sound}
       */
      reset: function() {
        var self = this;
        var parent = self._parent;

        // Reset all of the parameters of this sound.
        self._muted = parent._muted;
        self._loop = parent._loop;
        self._volume = parent._volume;
        self._rate = parent._rate;
        self._seek = 0;
        self._rateSeek = 0;
        self._paused = true;
        self._ended = true;
        self._sprite = '__default';

        // Generate a new ID so that it isn't confused with the previous sound.
        self._id = ++Howler._counter;

        return self;
      },

      /**
       * HTML5 Audio error listener callback.
       */
      _errorListener: function() {
        var self = this;

        // Fire an error event and pass back the code.
        self._parent._emit('loaderror', self._id, self._node.error ? self._node.error.code : 0);

        // Clear the event listener.
        self._node.removeEventListener('error', self._errorFn, false);
      },

      /**
       * HTML5 Audio canplaythrough listener callback.
       */
      _loadListener: function() {
        var self = this;
        var parent = self._parent;

        // Round up the duration to account for the lower precision in HTML5 Audio.
        parent._duration = Math.ceil(self._node.duration * 10) / 10;

        // Setup a sprite if none is defined.
        if (Object.keys(parent._sprite).length === 0) {
          parent._sprite = {__default: [0, parent._duration * 1000]};
        }

        if (parent._state !== 'loaded') {
          parent._state = 'loaded';
          parent._emit('load');
          parent._loadQueue();
        }

        // Clear the event listener.
        self._node.removeEventListener(Howler._canPlayEvent, self._loadFn, false);
      }
    };

    /** Helper Methods **/
    /***************************************************************************/

    var cache = {};

    /**
     * Buffer a sound from URL, Data URI or cache and decode to audio source (Web Audio API).
     * @param  {Howl} self
     */
    var loadBuffer = function(self) {
      var url = self._src;

      // Check if the buffer has already been cached and use it instead.
      if (cache[url]) {
        // Set the duration from the cache.
        self._duration = cache[url].duration;

        // Load the sound into this Howl.
        loadSound(self);

        return;
      }

      if (/^data:[^;]+;base64,/.test(url)) {
        // Decode the base64 data URI without XHR, since some browsers don't support it.
        var data = atob(url.split(',')[1]);
        var dataView = new Uint8Array(data.length);
        for (var i=0; i<data.length; ++i) {
          dataView[i] = data.charCodeAt(i);
        }

        decodeAudioData(dataView.buffer, self);
      } else {
        // Load the buffer from the URL.
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.withCredentials = self._xhrWithCredentials;
        xhr.responseType = 'arraybuffer';
        xhr.onload = function() {
          // Make sure we get a successful response back.
          var code = (xhr.status + '')[0];
          if (code !== '0' && code !== '2' && code !== '3') {
            self._emit('loaderror', null, 'Failed loading audio file with status: ' + xhr.status + '.');
            return;
          }

          decodeAudioData(xhr.response, self);
        };
        xhr.onerror = function() {
          // If there is an error, switch to HTML5 Audio.
          if (self._webAudio) {
            self._html5 = true;
            self._webAudio = false;
            self._sounds = [];
            delete cache[url];
            self.load();
          }
        };
        safeXhrSend(xhr);
      }
    };

    /**
     * Send the XHR request wrapped in a try/catch.
     * @param  {Object} xhr XHR to send.
     */
    var safeXhrSend = function(xhr) {
      try {
        xhr.send();
      } catch (e) {
        xhr.onerror();
      }
    };

    /**
     * Decode audio data from an array buffer.
     * @param  {ArrayBuffer} arraybuffer The audio data.
     * @param  {Howl}        self
     */
    var decodeAudioData = function(arraybuffer, self) {
      // Fire a load error if something broke.
      var error = function() {
        self._emit('loaderror', null, 'Decoding audio data failed.');
      };

      // Load the sound on success.
      var success = function(buffer) {
        if (buffer && self._sounds.length > 0) {
          cache[self._src] = buffer;
          loadSound(self, buffer);
        } else {
          error();
        }
      };

      // Decode the buffer into an audio source.
      if (typeof Promise !== 'undefined' && Howler.ctx.decodeAudioData.length === 1) {
        Howler.ctx.decodeAudioData(arraybuffer).then(success).catch(error);
      } else {
        Howler.ctx.decodeAudioData(arraybuffer, success, error);
      }
    };

    /**
     * Sound is now loaded, so finish setting everything up and fire the loaded event.
     * @param  {Howl} self
     * @param  {Object} buffer The decoded buffer sound source.
     */
    var loadSound = function(self, buffer) {
      // Set the duration.
      if (buffer && !self._duration) {
        self._duration = buffer.duration;
      }

      // Setup a sprite if none is defined.
      if (Object.keys(self._sprite).length === 0) {
        self._sprite = {__default: [0, self._duration * 1000]};
      }

      // Fire the loaded event.
      if (self._state !== 'loaded') {
        self._state = 'loaded';
        self._emit('load');
        self._loadQueue();
      }
    };

    /**
     * Setup the audio context when available, or switch to HTML5 Audio mode.
     */
    var setupAudioContext = function() {
      // If we have already detected that Web Audio isn't supported, don't run this step again.
      if (!Howler.usingWebAudio) {
        return;
      }

      // Check if we are using Web Audio and setup the AudioContext if we are.
      try {
        if (typeof AudioContext !== 'undefined') {
          Howler.ctx = new AudioContext();
        } else if (typeof webkitAudioContext !== 'undefined') {
          Howler.ctx = new webkitAudioContext();
        } else {
          Howler.usingWebAudio = false;
        }
      } catch(e) {
        Howler.usingWebAudio = false;
      }

      // If the audio context creation still failed, set using web audio to false.
      if (!Howler.ctx) {
        Howler.usingWebAudio = false;
      }

      // Check if a webview is being used on iOS8 or earlier (rather than the browser).
      // If it is, disable Web Audio as it causes crashing.
      var iOS = (/iP(hone|od|ad)/.test(Howler._navigator && Howler._navigator.platform));
      var appVersion = Howler._navigator && Howler._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
      var version = appVersion ? parseInt(appVersion[1], 10) : null;
      if (iOS && version && version < 9) {
        var safari = /safari/.test(Howler._navigator && Howler._navigator.userAgent.toLowerCase());
        if (Howler._navigator && Howler._navigator.standalone && !safari || Howler._navigator && !Howler._navigator.standalone && !safari) {
          Howler.usingWebAudio = false;
        }
      }

      // Create and expose the master GainNode when using Web Audio (useful for plugins or advanced usage).
      if (Howler.usingWebAudio) {
        Howler.masterGain = (typeof Howler.ctx.createGain === 'undefined') ? Howler.ctx.createGainNode() : Howler.ctx.createGain();
        Howler.masterGain.gain.setValueAtTime(Howler._muted ? 0 : 1, Howler.ctx.currentTime);
        Howler.masterGain.connect(Howler.ctx.destination);
      }

      // Re-run the setup on Howler.
      Howler._setup();
    };

    // Add support for CommonJS libraries such as browserify.
    {
      exports.Howler = Howler;
      exports.Howl = Howl;
    }

    // Define globally in case AMD is not available or unused.
    if (typeof window !== 'undefined') {
      window.HowlerGlobal = HowlerGlobal;
      window.Howler = Howler;
      window.Howl = Howl;
      window.Sound = Sound;
    } else if (typeof commonjsGlobal !== 'undefined') { // Add to global in Node.js (for testing, etc).
      commonjsGlobal.HowlerGlobal = HowlerGlobal;
      commonjsGlobal.Howler = Howler;
      commonjsGlobal.Howl = Howl;
      commonjsGlobal.Sound = Sound;
    }
  })();


  /*!
   *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
   *  
   *  howler.js v2.1.2
   *  howlerjs.com
   *
   *  (c) 2013-2019, James Simpson of GoldFire Studios
   *  goldfirestudios.com
   *
   *  MIT License
   */

  (function() {

    // Setup default properties.
    HowlerGlobal.prototype._pos = [0, 0, 0];
    HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0];

    /** Global Methods **/
    /***************************************************************************/

    /**
     * Helper method to update the stereo panning position of all current Howls.
     * Future Howls will not use this value unless explicitly set.
     * @param  {Number} pan A value of -1.0 is all the way left and 1.0 is all the way right.
     * @return {Howler/Number}     Self or current stereo panning value.
     */
    HowlerGlobal.prototype.stereo = function(pan) {
      var self = this;

      // Stop right here if not using Web Audio.
      if (!self.ctx || !self.ctx.listener) {
        return self;
      }

      // Loop through all Howls and update their stereo panning.
      for (var i=self._howls.length-1; i>=0; i--) {
        self._howls[i].stereo(pan);
      }

      return self;
    };

    /**
     * Get/set the position of the listener in 3D cartesian space. Sounds using
     * 3D position will be relative to the listener's position.
     * @param  {Number} x The x-position of the listener.
     * @param  {Number} y The y-position of the listener.
     * @param  {Number} z The z-position of the listener.
     * @return {Howler/Array}   Self or current listener position.
     */
    HowlerGlobal.prototype.pos = function(x, y, z) {
      var self = this;

      // Stop right here if not using Web Audio.
      if (!self.ctx || !self.ctx.listener) {
        return self;
      }

      // Set the defaults for optional 'y' & 'z'.
      y = (typeof y !== 'number') ? self._pos[1] : y;
      z = (typeof z !== 'number') ? self._pos[2] : z;

      if (typeof x === 'number') {
        self._pos = [x, y, z];

        if (typeof self.ctx.listener.positionX !== 'undefined') {
          self.ctx.listener.positionX.setTargetAtTime(self._pos[0], Howler.ctx.currentTime, 0.1);
          self.ctx.listener.positionY.setTargetAtTime(self._pos[1], Howler.ctx.currentTime, 0.1);
          self.ctx.listener.positionZ.setTargetAtTime(self._pos[2], Howler.ctx.currentTime, 0.1);
        } else {
          self.ctx.listener.setPosition(self._pos[0], self._pos[1], self._pos[2]);
        }
      } else {
        return self._pos;
      }

      return self;
    };

    /**
     * Get/set the direction the listener is pointing in the 3D cartesian space.
     * A front and up vector must be provided. The front is the direction the
     * face of the listener is pointing, and up is the direction the top of the
     * listener is pointing. Thus, these values are expected to be at right angles
     * from each other.
     * @param  {Number} x   The x-orientation of the listener.
     * @param  {Number} y   The y-orientation of the listener.
     * @param  {Number} z   The z-orientation of the listener.
     * @param  {Number} xUp The x-orientation of the top of the listener.
     * @param  {Number} yUp The y-orientation of the top of the listener.
     * @param  {Number} zUp The z-orientation of the top of the listener.
     * @return {Howler/Array}     Returns self or the current orientation vectors.
     */
    HowlerGlobal.prototype.orientation = function(x, y, z, xUp, yUp, zUp) {
      var self = this;

      // Stop right here if not using Web Audio.
      if (!self.ctx || !self.ctx.listener) {
        return self;
      }

      // Set the defaults for optional 'y' & 'z'.
      var or = self._orientation;
      y = (typeof y !== 'number') ? or[1] : y;
      z = (typeof z !== 'number') ? or[2] : z;
      xUp = (typeof xUp !== 'number') ? or[3] : xUp;
      yUp = (typeof yUp !== 'number') ? or[4] : yUp;
      zUp = (typeof zUp !== 'number') ? or[5] : zUp;

      if (typeof x === 'number') {
        self._orientation = [x, y, z, xUp, yUp, zUp];

        if (typeof self.ctx.listener.forwardX !== 'undefined') {
          self.ctx.listener.forwardX.setTargetAtTime(x, Howler.ctx.currentTime, 0.1);
          self.ctx.listener.forwardY.setTargetAtTime(y, Howler.ctx.currentTime, 0.1);
          self.ctx.listener.forwardZ.setTargetAtTime(z, Howler.ctx.currentTime, 0.1);
          self.ctx.listener.upX.setTargetAtTime(x, Howler.ctx.currentTime, 0.1);
          self.ctx.listener.upY.setTargetAtTime(y, Howler.ctx.currentTime, 0.1);
          self.ctx.listener.upZ.setTargetAtTime(z, Howler.ctx.currentTime, 0.1);
        } else {
          self.ctx.listener.setOrientation(x, y, z, xUp, yUp, zUp);
        }
      } else {
        return or;
      }

      return self;
    };

    /** Group Methods **/
    /***************************************************************************/

    /**
     * Add new properties to the core init.
     * @param  {Function} _super Core init method.
     * @return {Howl}
     */
    Howl.prototype.init = (function(_super) {
      return function(o) {
        var self = this;

        // Setup user-defined default properties.
        self._orientation = o.orientation || [1, 0, 0];
        self._stereo = o.stereo || null;
        self._pos = o.pos || null;
        self._pannerAttr = {
          coneInnerAngle: typeof o.coneInnerAngle !== 'undefined' ? o.coneInnerAngle : 360,
          coneOuterAngle: typeof o.coneOuterAngle !== 'undefined' ? o.coneOuterAngle : 360,
          coneOuterGain: typeof o.coneOuterGain !== 'undefined' ? o.coneOuterGain : 0,
          distanceModel: typeof o.distanceModel !== 'undefined' ? o.distanceModel : 'inverse',
          maxDistance: typeof o.maxDistance !== 'undefined' ? o.maxDistance : 10000,
          panningModel: typeof o.panningModel !== 'undefined' ? o.panningModel : 'HRTF',
          refDistance: typeof o.refDistance !== 'undefined' ? o.refDistance : 1,
          rolloffFactor: typeof o.rolloffFactor !== 'undefined' ? o.rolloffFactor : 1
        };

        // Setup event listeners.
        self._onstereo = o.onstereo ? [{fn: o.onstereo}] : [];
        self._onpos = o.onpos ? [{fn: o.onpos}] : [];
        self._onorientation = o.onorientation ? [{fn: o.onorientation}] : [];

        // Complete initilization with howler.js core's init function.
        return _super.call(this, o);
      };
    })(Howl.prototype.init);

    /**
     * Get/set the stereo panning of the audio source for this sound or all in the group.
     * @param  {Number} pan  A value of -1.0 is all the way left and 1.0 is all the way right.
     * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
     * @return {Howl/Number}    Returns self or the current stereo panning value.
     */
    Howl.prototype.stereo = function(pan, id) {
      var self = this;

      // Stop right here if not using Web Audio.
      if (!self._webAudio) {
        return self;
      }

      // If the sound hasn't loaded, add it to the load queue to change stereo pan when capable.
      if (self._state !== 'loaded') {
        self._queue.push({
          event: 'stereo',
          action: function() {
            self.stereo(pan, id);
          }
        });

        return self;
      }

      // Check for PannerStereoNode support and fallback to PannerNode if it doesn't exist.
      var pannerType = (typeof Howler.ctx.createStereoPanner === 'undefined') ? 'spatial' : 'stereo';

      // Setup the group's stereo panning if no ID is passed.
      if (typeof id === 'undefined') {
        // Return the group's stereo panning if no parameters are passed.
        if (typeof pan === 'number') {
          self._stereo = pan;
          self._pos = [pan, 0, 0];
        } else {
          return self._stereo;
        }
      }

      // Change the streo panning of one or all sounds in group.
      var ids = self._getSoundIds(id);
      for (var i=0; i<ids.length; i++) {
        // Get the sound.
        var sound = self._soundById(ids[i]);

        if (sound) {
          if (typeof pan === 'number') {
            sound._stereo = pan;
            sound._pos = [pan, 0, 0];

            if (sound._node) {
              // If we are falling back, make sure the panningModel is equalpower.
              sound._pannerAttr.panningModel = 'equalpower';

              // Check if there is a panner setup and create a new one if not.
              if (!sound._panner || !sound._panner.pan) {
                setupPanner(sound, pannerType);
              }

              if (pannerType === 'spatial') {
                if (typeof sound._panner.positionX !== 'undefined') {
                  sound._panner.positionX.setValueAtTime(pan, Howler.ctx.currentTime);
                  sound._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime);
                  sound._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime);
                } else {
                  sound._panner.setPosition(pan, 0, 0);
                }
              } else {
                sound._panner.pan.setValueAtTime(pan, Howler.ctx.currentTime);
              }
            }

            self._emit('stereo', sound._id);
          } else {
            return sound._stereo;
          }
        }
      }

      return self;
    };

    /**
     * Get/set the 3D spatial position of the audio source for this sound or group relative to the global listener.
     * @param  {Number} x  The x-position of the audio source.
     * @param  {Number} y  The y-position of the audio source.
     * @param  {Number} z  The z-position of the audio source.
     * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
     * @return {Howl/Array}    Returns self or the current 3D spatial position: [x, y, z].
     */
    Howl.prototype.pos = function(x, y, z, id) {
      var self = this;

      // Stop right here if not using Web Audio.
      if (!self._webAudio) {
        return self;
      }

      // If the sound hasn't loaded, add it to the load queue to change position when capable.
      if (self._state !== 'loaded') {
        self._queue.push({
          event: 'pos',
          action: function() {
            self.pos(x, y, z, id);
          }
        });

        return self;
      }

      // Set the defaults for optional 'y' & 'z'.
      y = (typeof y !== 'number') ? 0 : y;
      z = (typeof z !== 'number') ? -0.5 : z;

      // Setup the group's spatial position if no ID is passed.
      if (typeof id === 'undefined') {
        // Return the group's spatial position if no parameters are passed.
        if (typeof x === 'number') {
          self._pos = [x, y, z];
        } else {
          return self._pos;
        }
      }

      // Change the spatial position of one or all sounds in group.
      var ids = self._getSoundIds(id);
      for (var i=0; i<ids.length; i++) {
        // Get the sound.
        var sound = self._soundById(ids[i]);

        if (sound) {
          if (typeof x === 'number') {
            sound._pos = [x, y, z];

            if (sound._node) {
              // Check if there is a panner setup and create a new one if not.
              if (!sound._panner || sound._panner.pan) {
                setupPanner(sound, 'spatial');
              }

              if (typeof sound._panner.positionX !== 'undefined') {
                sound._panner.positionX.setValueAtTime(x, Howler.ctx.currentTime);
                sound._panner.positionY.setValueAtTime(y, Howler.ctx.currentTime);
                sound._panner.positionZ.setValueAtTime(z, Howler.ctx.currentTime);
              } else {
                sound._panner.setPosition(x, y, z);
              }
            }

            self._emit('pos', sound._id);
          } else {
            return sound._pos;
          }
        }
      }

      return self;
    };

    /**
     * Get/set the direction the audio source is pointing in the 3D cartesian coordinate
     * space. Depending on how direction the sound is, based on the `cone` attributes,
     * a sound pointing away from the listener can be quiet or silent.
     * @param  {Number} x  The x-orientation of the source.
     * @param  {Number} y  The y-orientation of the source.
     * @param  {Number} z  The z-orientation of the source.
     * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
     * @return {Howl/Array}    Returns self or the current 3D spatial orientation: [x, y, z].
     */
    Howl.prototype.orientation = function(x, y, z, id) {
      var self = this;

      // Stop right here if not using Web Audio.
      if (!self._webAudio) {
        return self;
      }

      // If the sound hasn't loaded, add it to the load queue to change orientation when capable.
      if (self._state !== 'loaded') {
        self._queue.push({
          event: 'orientation',
          action: function() {
            self.orientation(x, y, z, id);
          }
        });

        return self;
      }

      // Set the defaults for optional 'y' & 'z'.
      y = (typeof y !== 'number') ? self._orientation[1] : y;
      z = (typeof z !== 'number') ? self._orientation[2] : z;

      // Setup the group's spatial orientation if no ID is passed.
      if (typeof id === 'undefined') {
        // Return the group's spatial orientation if no parameters are passed.
        if (typeof x === 'number') {
          self._orientation = [x, y, z];
        } else {
          return self._orientation;
        }
      }

      // Change the spatial orientation of one or all sounds in group.
      var ids = self._getSoundIds(id);
      for (var i=0; i<ids.length; i++) {
        // Get the sound.
        var sound = self._soundById(ids[i]);

        if (sound) {
          if (typeof x === 'number') {
            sound._orientation = [x, y, z];

            if (sound._node) {
              // Check if there is a panner setup and create a new one if not.
              if (!sound._panner) {
                // Make sure we have a position to setup the node with.
                if (!sound._pos) {
                  sound._pos = self._pos || [0, 0, -0.5];
                }

                setupPanner(sound, 'spatial');
              }

              if (typeof sound._panner.orientationX !== 'undefined') {
                sound._panner.orientationX.setValueAtTime(x, Howler.ctx.currentTime);
                sound._panner.orientationY.setValueAtTime(y, Howler.ctx.currentTime);
                sound._panner.orientationZ.setValueAtTime(z, Howler.ctx.currentTime);
              } else {
                sound._panner.setOrientation(x, y, z);
              }
            }

            self._emit('orientation', sound._id);
          } else {
            return sound._orientation;
          }
        }
      }

      return self;
    };

    /**
     * Get/set the panner node's attributes for a sound or group of sounds.
     * This method can optionall take 0, 1 or 2 arguments.
     *   pannerAttr() -> Returns the group's values.
     *   pannerAttr(id) -> Returns the sound id's values.
     *   pannerAttr(o) -> Set's the values of all sounds in this Howl group.
     *   pannerAttr(o, id) -> Set's the values of passed sound id.
     *
     *   Attributes:
     *     coneInnerAngle - (360 by default) A parameter for directional audio sources, this is an angle, in degrees,
     *                      inside of which there will be no volume reduction.
     *     coneOuterAngle - (360 by default) A parameter for directional audio sources, this is an angle, in degrees,
     *                      outside of which the volume will be reduced to a constant value of `coneOuterGain`.
     *     coneOuterGain - (0 by default) A parameter for directional audio sources, this is the gain outside of the
     *                     `coneOuterAngle`. It is a linear value in the range `[0, 1]`.
     *     distanceModel - ('inverse' by default) Determines algorithm used to reduce volume as audio moves away from
     *                     listener. Can be `linear`, `inverse` or `exponential.
     *     maxDistance - (10000 by default) The maximum distance between source and listener, after which the volume
     *                   will not be reduced any further.
     *     refDistance - (1 by default) A reference distance for reducing volume as source moves further from the listener.
     *                   This is simply a variable of the distance model and has a different effect depending on which model
     *                   is used and the scale of your coordinates. Generally, volume will be equal to 1 at this distance.
     *     rolloffFactor - (1 by default) How quickly the volume reduces as source moves from listener. This is simply a
     *                     variable of the distance model and can be in the range of `[0, 1]` with `linear` and `[0, ∞]`
     *                     with `inverse` and `exponential`.
     *     panningModel - ('HRTF' by default) Determines which spatialization algorithm is used to position audio.
     *                     Can be `HRTF` or `equalpower`.
     *
     * @return {Howl/Object} Returns self or current panner attributes.
     */
    Howl.prototype.pannerAttr = function() {
      var self = this;
      var args = arguments;
      var o, id, sound;

      // Stop right here if not using Web Audio.
      if (!self._webAudio) {
        return self;
      }

      // Determine the values based on arguments.
      if (args.length === 0) {
        // Return the group's panner attribute values.
        return self._pannerAttr;
      } else if (args.length === 1) {
        if (typeof args[0] === 'object') {
          o = args[0];

          // Set the grou's panner attribute values.
          if (typeof id === 'undefined') {
            if (!o.pannerAttr) {
              o.pannerAttr = {
                coneInnerAngle: o.coneInnerAngle,
                coneOuterAngle: o.coneOuterAngle,
                coneOuterGain: o.coneOuterGain,
                distanceModel: o.distanceModel,
                maxDistance: o.maxDistance,
                refDistance: o.refDistance,
                rolloffFactor: o.rolloffFactor,
                panningModel: o.panningModel
              };
            }

            self._pannerAttr = {
              coneInnerAngle: typeof o.pannerAttr.coneInnerAngle !== 'undefined' ? o.pannerAttr.coneInnerAngle : self._coneInnerAngle,
              coneOuterAngle: typeof o.pannerAttr.coneOuterAngle !== 'undefined' ? o.pannerAttr.coneOuterAngle : self._coneOuterAngle,
              coneOuterGain: typeof o.pannerAttr.coneOuterGain !== 'undefined' ? o.pannerAttr.coneOuterGain : self._coneOuterGain,
              distanceModel: typeof o.pannerAttr.distanceModel !== 'undefined' ? o.pannerAttr.distanceModel : self._distanceModel,
              maxDistance: typeof o.pannerAttr.maxDistance !== 'undefined' ? o.pannerAttr.maxDistance : self._maxDistance,
              refDistance: typeof o.pannerAttr.refDistance !== 'undefined' ? o.pannerAttr.refDistance : self._refDistance,
              rolloffFactor: typeof o.pannerAttr.rolloffFactor !== 'undefined' ? o.pannerAttr.rolloffFactor : self._rolloffFactor,
              panningModel: typeof o.pannerAttr.panningModel !== 'undefined' ? o.pannerAttr.panningModel : self._panningModel
            };
          }
        } else {
          // Return this sound's panner attribute values.
          sound = self._soundById(parseInt(args[0], 10));
          return sound ? sound._pannerAttr : self._pannerAttr;
        }
      } else if (args.length === 2) {
        o = args[0];
        id = parseInt(args[1], 10);
      }

      // Update the values of the specified sounds.
      var ids = self._getSoundIds(id);
      for (var i=0; i<ids.length; i++) {
        sound = self._soundById(ids[i]);

        if (sound) {
          // Merge the new values into the sound.
          var pa = sound._pannerAttr;
          pa = {
            coneInnerAngle: typeof o.coneInnerAngle !== 'undefined' ? o.coneInnerAngle : pa.coneInnerAngle,
            coneOuterAngle: typeof o.coneOuterAngle !== 'undefined' ? o.coneOuterAngle : pa.coneOuterAngle,
            coneOuterGain: typeof o.coneOuterGain !== 'undefined' ? o.coneOuterGain : pa.coneOuterGain,
            distanceModel: typeof o.distanceModel !== 'undefined' ? o.distanceModel : pa.distanceModel,
            maxDistance: typeof o.maxDistance !== 'undefined' ? o.maxDistance : pa.maxDistance,
            refDistance: typeof o.refDistance !== 'undefined' ? o.refDistance : pa.refDistance,
            rolloffFactor: typeof o.rolloffFactor !== 'undefined' ? o.rolloffFactor : pa.rolloffFactor,
            panningModel: typeof o.panningModel !== 'undefined' ? o.panningModel : pa.panningModel
          };

          // Update the panner values or create a new panner if none exists.
          var panner = sound._panner;
          if (panner) {
            panner.coneInnerAngle = pa.coneInnerAngle;
            panner.coneOuterAngle = pa.coneOuterAngle;
            panner.coneOuterGain = pa.coneOuterGain;
            panner.distanceModel = pa.distanceModel;
            panner.maxDistance = pa.maxDistance;
            panner.refDistance = pa.refDistance;
            panner.rolloffFactor = pa.rolloffFactor;
            panner.panningModel = pa.panningModel;
          } else {
            // Make sure we have a position to setup the node with.
            if (!sound._pos) {
              sound._pos = self._pos || [0, 0, -0.5];
            }

            // Create a new panner node.
            setupPanner(sound, 'spatial');
          }
        }
      }

      return self;
    };

    /** Single Sound Methods **/
    /***************************************************************************/

    /**
     * Add new properties to the core Sound init.
     * @param  {Function} _super Core Sound init method.
     * @return {Sound}
     */
    Sound.prototype.init = (function(_super) {
      return function() {
        var self = this;
        var parent = self._parent;

        // Setup user-defined default properties.
        self._orientation = parent._orientation;
        self._stereo = parent._stereo;
        self._pos = parent._pos;
        self._pannerAttr = parent._pannerAttr;

        // Complete initilization with howler.js core Sound's init function.
        _super.call(this);

        // If a stereo or position was specified, set it up.
        if (self._stereo) {
          parent.stereo(self._stereo);
        } else if (self._pos) {
          parent.pos(self._pos[0], self._pos[1], self._pos[2], self._id);
        }
      };
    })(Sound.prototype.init);

    /**
     * Override the Sound.reset method to clean up properties from the spatial plugin.
     * @param  {Function} _super Sound reset method.
     * @return {Sound}
     */
    Sound.prototype.reset = (function(_super) {
      return function() {
        var self = this;
        var parent = self._parent;

        // Reset all spatial plugin properties on this sound.
        self._orientation = parent._orientation;
        self._stereo = parent._stereo;
        self._pos = parent._pos;
        self._pannerAttr = parent._pannerAttr;

        // If a stereo or position was specified, set it up.
        if (self._stereo) {
          parent.stereo(self._stereo);
        } else if (self._pos) {
          parent.pos(self._pos[0], self._pos[1], self._pos[2], self._id);
        } else if (self._panner) {
          // Disconnect the panner.
          self._panner.disconnect(0);
          self._panner = undefined;
          parent._refreshBuffer(self);
        }

        // Complete resetting of the sound.
        return _super.call(this);
      };
    })(Sound.prototype.reset);

    /** Helper Methods **/
    /***************************************************************************/

    /**
     * Create a new panner node and save it on the sound.
     * @param  {Sound} sound Specific sound to setup panning on.
     * @param {String} type Type of panner to create: 'stereo' or 'spatial'.
     */
    var setupPanner = function(sound, type) {
      type = type || 'spatial';

      // Create the new panner node.
      if (type === 'spatial') {
        sound._panner = Howler.ctx.createPanner();
        sound._panner.coneInnerAngle = sound._pannerAttr.coneInnerAngle;
        sound._panner.coneOuterAngle = sound._pannerAttr.coneOuterAngle;
        sound._panner.coneOuterGain = sound._pannerAttr.coneOuterGain;
        sound._panner.distanceModel = sound._pannerAttr.distanceModel;
        sound._panner.maxDistance = sound._pannerAttr.maxDistance;
        sound._panner.refDistance = sound._pannerAttr.refDistance;
        sound._panner.rolloffFactor = sound._pannerAttr.rolloffFactor;
        sound._panner.panningModel = sound._pannerAttr.panningModel;

        if (typeof sound._panner.positionX !== 'undefined') {
          sound._panner.positionX.setValueAtTime(sound._pos[0], Howler.ctx.currentTime);
          sound._panner.positionY.setValueAtTime(sound._pos[1], Howler.ctx.currentTime);
          sound._panner.positionZ.setValueAtTime(sound._pos[2], Howler.ctx.currentTime);
        } else {
          sound._panner.setPosition(sound._pos[0], sound._pos[1], sound._pos[2]);
        }

        if (typeof sound._panner.orientationX !== 'undefined') {
          sound._panner.orientationX.setValueAtTime(sound._orientation[0], Howler.ctx.currentTime);
          sound._panner.orientationY.setValueAtTime(sound._orientation[1], Howler.ctx.currentTime);
          sound._panner.orientationZ.setValueAtTime(sound._orientation[2], Howler.ctx.currentTime);
        } else {
          sound._panner.setOrientation(sound._orientation[0], sound._orientation[1], sound._orientation[2]);
        }
      } else {
        sound._panner = Howler.ctx.createStereoPanner();
        sound._panner.pan.setValueAtTime(sound._stereo, Howler.ctx.currentTime);
      }

      sound._panner.connect(sound._node);

      // Update the connections.
      if (!sound._paused) {
        sound._parent.pause(sound._id, true).play(sound._id, true);
      }
    };
  })();
  });
  var howler_1 = howler.Howler;
  var howler_2 = howler.Howl;

  var AudioControl =
  /*#__PURE__*/
  function (_Loader) {
    inherits(AudioControl, _Loader);

    function AudioControl() {
      var _getPrototypeOf2;

      var _this;

      classCallCheck(this, AudioControl);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = possibleConstructorReturn(this, (_getPrototypeOf2 = getPrototypeOf(AudioControl)).call.apply(_getPrototypeOf2, [this].concat(args)));

      defineProperty(assertThisInitialized(_this), "_mute", false);

      return _this;
    }

    createClass(AudioControl, [{
      key: "get",
      //获取音频
      value: function get(key) {
        return this.resources[key] || AudioControl.Error;
      } //静音

    }, {
      key: "Set",
      //加载文件
      value: function Set(url) {
        return new Promise(function (resolve, reject) {
          var audio = new howler_2({
            src: url,
            loop: false,
            autoplay: false
          });
          audio.once('load', function () {
            audio.key = url;
            resolve(audio);
          });
        });
      }
    }, {
      key: "mute",
      get: function get() {
        return this._mute;
      },
      set: function set(mute) {
        this._mute = mute;
        howler_1.mute(mute);
      } //设置音量

    }, {
      key: "volume",
      set: function set() {
        var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        howler_1.volume(v);
      },
      get: function get() {
        return howler_1.volume();
      }
    }]);

    return AudioControl;
  }(Loader);

  defineProperty(AudioControl, "Error", new howler_2());



  var index$4 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Loader: Loader,
    Image: ImageControl,
    Audio: AudioControl
  });

  /**
   * 获得一个canvas对象
   *
   * @param {String} key 特殊模版标识
   *
   * 打包模式为web时
   * key取main则该canvas将上屏
   */
  function Canvas(key) {
    if (key && GetCanvas[key]) return GetCanvas[key];
    var canvas = document.createElement('canvas');
    if (key == 'main') document.body.appendChild(canvas);
    return key ? GetCanvas[key] = canvas : canvas;
  }

  function loadFont(url) {
    var key = 'Font' + Date.now();
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = "\n            @font-face {\n                font-family: '".concat(key, "';\n                src: url('").concat(url, "'); \n            }\n            body {\n                font-family: '").concat(key, "';\n            }\n        ");
    document.body.appendChild(style);
    return key;
  }

  /**
   * 获取系统参数
   * pixel 屏幕与设备像素比
   * width 屏幕宽度
   * height 屏幕高度
   * ratio 宽高比
   */
  function System() {
    System.pixel = window.devicePixelRatio || 2;
    System.width = document.body.clientWidth;
    System.height = document.body.clientHeight;
    System.ratio = System.width / System.height;
    return System;
  }

  function GetTouchEvent(dom, MouseEvent) {
    return {
      identifier: 0,
      changedTouches: [{
        clientX: MouseEvent.clientX - dom.offsetLeft,
        clientY: MouseEvent.clientY - dom.offsetTop
      }]
    };
  }

  function MouseListen(dom, Touch) {
    var DownState = false;
    dom.addEventListener('mousedown', function (e) {
      return DownState = true, Touch.onTouchStart(GetTouchEvent(dom, e));
    }, {
      passive: true
    });
    dom.addEventListener('mousemove', function (e) {
      return DownState && Touch.onTouchMove(GetTouchEvent(dom, e));
    }, {
      passive: true
    });
    dom.addEventListener('mouseup', function (e) {
      return DownState && (DownState = false, Touch.onTouchEnd(GetTouchEvent(dom, e)));
    }, {
      passive: true
    });
    dom.addEventListener('mouseout', function (e) {
      return DownState && (DownState = false, Touch.onTouchEnd(GetTouchEvent(dom, e)));
    }, {
      passive: true
    });
  }
  /**
   * 将dom元素触摸事件和Touch类进行关联
   * @param {HTMLElement} dom
   * @param {ICanvas.UtilTouch} Touch
   */


  function TouchListen(dom, Touch) {
    if (!('ontouchstart' in window)) return MouseListen(dom, Touch);
    dom.addEventListener('touchstart', function (e) {
      return Touch.onTouchStart(e);
    }, {
      passive: true
    });
    dom.addEventListener('touchmove', function (e) {
      return Touch.onTouchMove(e);
    }, {
      passive: true
    });
    dom.addEventListener('touchend', function (e) {
      return Touch.onTouchEnd(e);
    }, {
      passive: true
    });
    dom.addEventListener('touchcancel', function (e) {
      return Touch.onTouchEnd(e);
    }, {
      passive: true
    });
  }



  var index$5 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Canvas: Canvas,
    Font: loadFont,
    System: System,
    Touch: TouchListen
  });

  var canvas2d = {
    SetTransform: function SetTransform(matrix) {
      this.setTransform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);
      return this;
    },
    Transform: function Transform(matrix, r) {
      if (r) {
        this.transform(1 / matrix[0], -matrix[1], -matrix[2], 1 / matrix[3], -matrix[4], -matrix[5]);
      } else {
        this.transform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);
      }

      return this;
    },
    //设置大小
    SetSize: function SetSize(width, height) {
      this.canvas.width = width;
      this.canvas.height = height;
      this.fillStyle = '#000000';
      return this;
    },
    //清空
    Clear: function Clear() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var w = arguments.length > 2 ? arguments[2] : undefined;
      var h = arguments.length > 3 ? arguments[3] : undefined;
      this.clearRect(x, y, w || this.canvas.width, h || this.canvas.height);
      return this;
    },
    //填充
    Fill: function Fill(fillStyle) {
      if (fillStyle && this.fillStyle != fillStyle) this.fillStyle = fillStyle;
      this.fill();
      return this;
    },
    //描边
    Stroke: function Stroke(strokeStyle, lineWidth) {
      if (strokeStyle && this.strokeStyle != strokeStyle) this.strokeStyle = strokeStyle;
      if (lineWidth && this.lineWidth != lineWidth) this.lineWidth = lineWidth;
      this.stroke();
      return this;
    },
    //多边形
    Polygon: function Polygon() {
      var _this = this;

      var last1 = arguments[arguments.length - 1];
      this.beginPath();
      this.moveTo((last1.x + arguments[0].x) / 2, (last1.y + arguments[0].y) / 2);
      var n = Array.prototype.reduce.call(arguments, function (n, p) {
        return n.r ? _this.arcTo(n.x, n.y, p.x, p.y, n.r) : _this.lineTo(n.x, n.y), p;
      });
      var p = arguments[0];
      n.r ? this.arcTo(n.x, n.y, p.x, p.y, n.r) : this.lineTo(n.x, n.y);
      this.closePath();
      return this;
    },
    //圆角矩形
    ArcRect: function ArcRect(x, y, w, h) {
      var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 8;
      this.beginPath();
      this.moveTo(x + r, y);
      this.arcTo(x + w, y, x + w, y + h, r);
      this.arcTo(x + w, y + h, x, y + h, r);
      this.arcTo(x, y + h, x, y, r);
      this.arcTo(x, y, x + w, y, r);
      this.closePath();
      return this;
    },
    //正多边形
    PolygonTidy: function PolygonTidy() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
      var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 3;
      var s = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
      var radius = arguments.length > 5 ? arguments[5] : undefined;

      if (n instanceof Array) {
        var vs = n.map(function (d, i) {
          var newX = x + r * d * Math.cos((360 * i / n.length + s) * 2 * Math.PI / 360);
          var newY = y + r * d * Math.sin((360 * i / n.length + s) * 2 * Math.PI / 360);
          return {
            x: newX,
            y: newY,
            r: radius
          };
        });
        return this.Polygon.apply(this, vs);
      } else {
        var _vs = [];

        for (var i = 0; i < n; i++) {
          var newX = x + r * Math.cos((360 * i / n + s) * 2 * Math.PI / 360);
          var newY = y + r * Math.sin((360 * i / n + s) * 2 * Math.PI / 360);

          _vs.push({
            x: newX,
            y: newY,
            r: radius
          });
        }

        return this.Polygon.apply(this, _vs);
      }
    },
    //虚线
    DashLine: function DashLine(x1, y1, x2, y2, dashLength, emptyLength) {
      var dashLen = dashLength || 12,
          emptyLen = emptyLength || 3,
          xpos = x2 - x1,
          //得到横向的宽度;
      ypos = y2 - y1,
          //得到纵向的高度;
      lineLen = Math.sqrt(xpos * xpos + ypos * ypos),
          dashLv = dashLen / lineLen,
          emptyLv = emptyLen / lineLen,
          L = 0,
          hasLine = true;
      this.beginPath();
      this.moveTo(x1, y1);

      while (true) {
        var Len = hasLine ? dashLen : emptyLen;
        var Lv = hasLine ? dashLv : emptyLv;

        if (L + Len > lineLen) {
          Len = lineLen - L;
          Lv = Len / lineLen;
        }

        x1 = x1 + xpos * Lv;
        y1 = y1 + ypos * Lv;
        this[hasLine ? 'lineTo' : 'moveTo'](x1, y1);
        hasLine = !hasLine;
        L += Len;

        if (L >= lineLen) {
          this.closePath();
          return this;
        }
      }
    }
  };

  var Render =
  /*#__PURE__*/
  function () {
    function Render() {
      classCallCheck(this, Render);

      defineProperty(this, "HandleComponents", []);
    }

    createClass(Render, [{
      key: "Update",

      /**
       *
       * @param {Component} Stage 舞台
       * @param {CanvasRenderingContext2D} Context 渲染上下文
       * @param {Boolean} Clear 是否清空上下文
       */
      value: function Update(Stage, Context, Clear) {
        this.PreUpdate(Stage);
        this.HandleComponents.sort(function (a, b) {
          return a._HandleParentZIndex - b._HandleParentZIndex || a._HandleZIndex - b._HandleZIndex;
        });
        this.Updating(Context, Clear);
        this.HandleComponents.length = 0;
      }
      /**
       * 渲染前
       * @param {Component} Component
       */

    }, {
      key: "PreUpdate",
      value: function PreUpdate(Component) {
        if (!Component) return;

        if (Component instanceof Array) {
          for (var i = 0, l = Component.length; i < l; i++) {
            this.PreUpdate(Component[i]);
          }
        } else {
          if (!Component._visible) return;
          if (Component.preUpdate) Component.preUpdate();
          Component.parent ? Component.matrix.setToArray(Component.parent.matrix) : Component.matrix.identity();
          Component.matrix.translate(Component.x, Component.y).rotate(Component.radian).scale(Component.scaleX, Component.scaleY);

          if (Component.update) {
            Component._HandleParentZIndex = (Component.parent && Component.parent._HandleParentZIndex || 0) + Component.zIndex;
            Component._HandleZIndex = this.HandleComponents.push(Component);
          }

          if (Component.preUpdated) Component.preUpdated();
          if (Component.children.length) this.PreUpdate(Component.children);
          if (Component.preChildrenUpdated) Component.preChildrenUpdated();
        }
      }
      /**
       * 渲染中
       * @param {CanvasRenderingContext2D} Context 渲染上下文
       * @param {Boolean} Clear 是否清空
       */

    }, {
      key: "Updating",
      value: function Updating(Context) {
        var Clear = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        if (Clear) Context.clearRect(0, 0, Context.canvas.width, Context.canvas.height);
        this.HandleComponents.forEach(function (Component) {
          var Alpha = Component.alpha;
          if (Alpha == 0) return;
          if (Component.beforeUpdate) Component.beforeUpdate(Context);
          if (Alpha > 1) Alpha = 1;
          if (Alpha != Context.globalAlpha) Context.globalAlpha = Alpha;
          Context.setTransform.apply(Context, Component.matrix);
          if (Component.update) Component.update(Context);
          if (Component.updated) Component.updated(Context);
        });
        Context.setTransform(1, 0, 0, 1, 0, 0);
      }
    }]);

    return Render;
  }();

  var Touch =
  /*#__PURE__*/
  function (_Event) {
    inherits(Touch, _Event);

    function Touch(Position, Size) {
      var _this;

      classCallCheck(this, Touch);

      _this = possibleConstructorReturn(this, getPrototypeOf(Touch).call(this));

      defineProperty(assertThisInitialized(_this), "onTouchCancel", _this.onTouchEnd);

      if (!Position || !Size) return possibleConstructorReturn(_this, console.error('缺少触摸范围定义'));
      _this.Position = Position;
      _this.Size = Size;
      _this.Touches = {};
      return _this;
    }

    createClass(Touch, [{
      key: "onTouchStart",
      value: function onTouchStart(e) {
        var now = Date.now();

        for (var i = 0, l = e.changedTouches.length; i < l; i++) {
          var touch = e.changedTouches[i];
          var touchTip = this.Touches[touch.identifier] = {};
          touchTip.startX = touchTip.endX = touch.clientX * this.Size.x - this.Position.x;
          touchTip.startY = touchTip.endY = touch.clientY * this.Size.y - this.Position.y;
          touchTip.startTime = now;
          touchTip.state = 1;
          this.emit('touchStart', touchTip);
        }

        return this;
      }
    }, {
      key: "onTouchMove",
      value: function onTouchMove(e) {
        for (var i = 0, l = e.changedTouches.length; i < l; i++) {
          var touch = e.changedTouches[i];
          var touchTip = this.Touches[touch.identifier];
          if (!touchTip) continue;
          touchTip.moveX = touchTip.endX;
          touchTip.moveY = touchTip.endY;
          touchTip.endX = touch.clientX * this.Size.x - this.Position.x;
          touchTip.endY = touch.clientY * this.Size.y - this.Position.y;
          touchTip.state = 2;
          this.emit('touchMove', touchTip);
        }

        return this;
      }
    }, {
      key: "onTouchEnd",
      value: function onTouchEnd(e) {
        //touchEndAll
        var now = Date.now();

        for (var i = 0, l = e.changedTouches.length; i < l; i++) {
          var touch = e.changedTouches[i];
          var touchTip = this.Touches[touch.identifier];
          if (!touchTip) continue;
          delete this.Touches[touch.identifier];
          touchTip.endX = touch.clientX * this.Size.x - this.Position.x;
          touchTip.endY = touch.clientY * this.Size.y - this.Position.y;
          touchTip.endTime = now;
          touchTip.state = 3;
          this.emit('touchEnd', touchTip);
        }

        return this;
      }
    }]);

    return Touch;
  }(eventemitter3);

  var Collision =
  /*#__PURE__*/
  function () {
    //触发流程
    function Collision(MatrixHandle, TouchHandle) {
      classCallCheck(this, Collision);

      if (!MatrixHandle) throw Error('缺少碰撞矩阵');
      if (!TouchHandle) throw Error('缺少碰撞坐标');
      this.MatrixHandle = MatrixHandle;
      this.TouchHandle = TouchHandle;
    }

    createClass(Collision, [{
      key: "InComponent",
      value: function InComponent(Component, touch) {
        if (!Component._visible) return false;

        if (Component.matrix) {
          this.MatrixHandle.setToArray(Component.matrix).invert();
        } else {
          this.MatrixHandle.identity();
        }

        this.TouchHandle.x = this.MatrixHandle.a * touch.x + this.MatrixHandle.c * touch.y + this.MatrixHandle.tx;
        this.TouchHandle.y = this.MatrixHandle.b * touch.x + this.MatrixHandle.d * touch.y + this.MatrixHandle.ty;
        if (Component.offsetTouch) Component.offsetTouch(this.TouchHandle);
        if (!Component.hitMe) return this.TouchHandle;
        if (Component.hitMe(this.TouchHandle.x, this.TouchHandle.y)) return this.TouchHandle;
      } //TODO 使用event

    }, {
      key: "Recursive",
      value: function Recursive(Component, touch) {
        var Action = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'touchTap';
        if (!Component) return false;

        if (Component instanceof Array) {
          for (var i = Component.length - 1; i >= 0; i--) {
            if (this.Recursive(Component[i], touch, Action)) return true;
          }
        } else {
          if (!Component._visible) return false;
          if (Component.touchChildren && Component.children.length && this.Recursive(Component.children, touch, Action)) return true;
          if (!this.InComponent(Component, touch)) return false;
          if (!Component[Action]) return Component.touchStop;
          var Result = Component[Action](this.TouchHandle.x, this.TouchHandle.y);
          return Result === undefined ? true : Result;
        }
      }
    }]);

    return Collision;
  }();

  function Loader$1() {
    var map = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var perfix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    var exts = arguments.length > 3 ? arguments[3] : undefined;
    var Result = {};
    Object.keys(map).forEach(function (k) {
      if (k == '_') {
        if (exts.indexOf(map[k]) == -1) return;
        var key = perfix.slice(0, -1);
        var url = root + perfix.slice(0, -1) + '.' + map[k];
        Result[key] = url;
      } else if (typeof map[k] == 'string') {
        if (exts.indexOf(map[k]) == -1) return;

        var _key = perfix + k;

        var _url = root + perfix + k + '.' + map[k];

        Result[_key] = _url;
      } else {
        Object.assign(Result, Loader$1(map[k], root, perfix + k + '/', exts));
      }
    });
    return Result;
  }

  /**
   * Canvas2D上下文扩展函数
   */
  /**
   * 从键值对中递归获取某个值
   * @param {Object} root
   * @param {string} keys
   * @param {string} split
   */

  function RecursiveMap(root, keys) {
    var split = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.';
    if (typeof key == 'string') keys = keys.split(split);
    return keys.reduce(function (obj, key) {
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

  function UtilPointInRect(x, y, bx, by, bw, bh) {
    return x >= bx && x <= bx + bw && y >= by && y <= by + bh;
  }

  var index$6 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    RecursiveMap: RecursiveMap,
    UtilPointInRect: UtilPointInRect,
    Canvas2D: canvas2d,
    Render: Render,
    Touch: Touch,
    Collsion: Collision,
    LoaderMap: Loader$1
  });

  exports.Api = index$5;
  exports.Component = index$3;
  exports.Math = index;
  exports.Resource = index$4;
  exports.Util = index$6;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
