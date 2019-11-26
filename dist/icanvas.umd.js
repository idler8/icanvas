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

  var Position$1 = (function () {
    var _temp;

    var superClass = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object;
    return _temp =
    /*#__PURE__*/
    function (_superClass) {
      inherits(Position, _superClass);

      function Position() {
        var _getPrototypeOf2;

        var _this;

        classCallCheck(this, Position);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = possibleConstructorReturn(this, (_getPrototypeOf2 = getPrototypeOf(Position)).call.apply(_getPrototypeOf2, [this].concat(args)));

        defineProperty(assertThisInitialized(_this), "position", new Vector2());

        return _this;
      }

      createClass(Position, [{
        key: "setPosition",
        value: function setPosition(x, y) {
          this.position.setTo(x, y);
          return this;
        }
      }, {
        key: "setOptions",
        value: function setOptions(options) {
          if (get(getPrototypeOf(Position.prototype), "setOptions", this)) get(getPrototypeOf(Position.prototype), "setOptions", this).call(this, options);
          if (options.position) Object.assign(this.position, options.position);
          if (options.x !== undefined) this.position.x = options.x;
          if (options.y !== undefined) this.position.y = options.y;
          return this;
        }
      }, {
        key: "x",
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

      return Position;
    }(superClass), _temp;
  });

  var Angle = (function (superClass) {
    var _temp;

    return _temp =
    /*#__PURE__*/
    function (_superClass) {
      inherits(Angle, _superClass);

      function Angle() {
        var _getPrototypeOf2;

        var _this;

        classCallCheck(this, Angle);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = possibleConstructorReturn(this, (_getPrototypeOf2 = getPrototypeOf(Angle)).call.apply(_getPrototypeOf2, [this].concat(args)));

        defineProperty(assertThisInitialized(_this), "radian", 0);

        return _this;
      }

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
        key: "setOptions",
        value: function setOptions(options) {
          if (get(getPrototypeOf(Angle.prototype), "setOptions", this)) get(getPrototypeOf(Angle.prototype), "setOptions", this).call(this, options);
          if (options.radian !== undefined) this.radian = options.radian;
          if (options.angle !== undefined) this.angle = options.angle;
          return this;
        }
      }, {
        key: "angle",
        //弧度
        set: function set(a) {
          this.radian = a * Math.PI / 180;
        },
        get: function get() {
          return this.radian * 180 / Math.PI;
        }
      }]);

      return Angle;
    }(superClass), _temp;
  });

  var Scale = (function (superClass) {
    var _temp;

    return _temp =
    /*#__PURE__*/
    function (_superClass) {
      inherits(Scale, _superClass);

      function Scale() {
        var _getPrototypeOf2;

        var _this;

        classCallCheck(this, Scale);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = possibleConstructorReturn(this, (_getPrototypeOf2 = getPrototypeOf(Scale)).call.apply(_getPrototypeOf2, [this].concat(args)));

        defineProperty(assertThisInitialized(_this), "scale", new Vector2(1, 1));

        return _this;
      }

      createClass(Scale, [{
        key: "setScale",
        value: function setScale(x, y) {
          this.scale.x = x;
          this.scale.y = y;
          return this;
        }
      }, {
        key: "setOptions",
        value: function setOptions(options) {
          if (get(getPrototypeOf(Scale.prototype), "setOptions", this)) get(getPrototypeOf(Scale.prototype), "setOptions", this).call(this, options);
          if (options.scale !== undefined) this.scale.set(scale);
          if (options.scaleX !== undefined) this.scale.x = options.scaleX;
          if (options.scaleY !== undefined) this.scale.y = options.scaleY;
          return this;
        }
      }, {
        key: "scaleX",
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

      return Scale;
    }(superClass), _temp;
  });

  var Anchor = (function (superClass) {
    var _temp;

    return _temp =
    /*#__PURE__*/
    function (_superClass) {
      inherits(Anchor, _superClass);

      function Anchor() {
        var _getPrototypeOf2;

        var _this;

        classCallCheck(this, Anchor);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = possibleConstructorReturn(this, (_getPrototypeOf2 = getPrototypeOf(Anchor)).call.apply(_getPrototypeOf2, [this].concat(args)));

        defineProperty(assertThisInitialized(_this), "anchor", new Vector2());

        return _this;
      }

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
        key: "setOptions",
        value: function setOptions(options) {
          if (get(getPrototypeOf(Anchor.prototype), "setOptions", this)) get(getPrototypeOf(Anchor.prototype), "setOptions", this).call(this, options);
          if (options.anchor) Object.assign(this.anchor, options.anchor);
          if (options.anchorX) this.anchor.x = options.anchorX;
          if (options.anchorY) this.anchor.y = options.anchorY;
          return this;
        }
        /**
         * 触摸事件位置偏移量
         * @param {*} touch
         */

      }, {
        key: "offsetTouch",
        value: function offsetTouch(touch) {
          if (get(getPrototypeOf(Anchor.prototype), "offsetTouch", this)) get(getPrototypeOf(Anchor.prototype), "offsetTouch", this).call(this, touch);
          return touch.addToVector(this.anchor);
        }
      }, {
        key: "anchorX",
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

      return Anchor;
    }(superClass), _temp;
  });

  var Alpha = (function (superClass) {
    var _temp;

    return _temp =
    /*#__PURE__*/
    function (_superClass) {
      inherits(Alpha, _superClass);

      function Alpha() {
        var _getPrototypeOf2;

        var _this;

        classCallCheck(this, Alpha);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = possibleConstructorReturn(this, (_getPrototypeOf2 = getPrototypeOf(Alpha)).call.apply(_getPrototypeOf2, [this].concat(args)));

        defineProperty(assertThisInitialized(_this), "_alpha", 1);

        return _this;
      }

      createClass(Alpha, [{
        key: "setAlpha",
        value: function setAlpha(n) {
          this.alpha = n;
          return this;
        }
      }, {
        key: "setOptions",
        value: function setOptions(options) {
          if (get(getPrototypeOf(Alpha.prototype), "setOptions", this)) get(getPrototypeOf(Alpha.prototype), "setOptions", this).call(this, options);
          if (options.alpha !== undefined) this.alpha = options.alpha;
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

  var Visible = (function (superClass) {
    var _temp;

    return _temp =
    /*#__PURE__*/
    function (_superClass) {
      inherits(Visible, _superClass);

      function Visible() {
        var _getPrototypeOf2;

        var _this;

        classCallCheck(this, Visible);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = possibleConstructorReturn(this, (_getPrototypeOf2 = getPrototypeOf(Visible)).call.apply(_getPrototypeOf2, [this].concat(args)));

        defineProperty(assertThisInitialized(_this), "_visible", true);

        return _this;
      }

      createClass(Visible, [{
        key: "setVisible",
        value: function setVisible(n) {
          this.visible = n;
          return this;
        }
      }, {
        key: "setOptions",
        value: function setOptions(options) {
          if (get(getPrototypeOf(Visible.prototype), "setOptions", this)) get(getPrototypeOf(Visible.prototype), "setOptions", this).call(this, options);
          if (options.visible !== undefined) this.visible = options.visible;
          return this;
        }
      }, {
        key: "visible",
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

      return Visible;
    }(superClass), _temp;
  });

  var Size = (function (superClass) {
    var _temp;

    return _temp =
    /*#__PURE__*/
    function (_superClass) {
      inherits(Size, _superClass);

      function Size() {
        var _getPrototypeOf2;

        var _this;

        classCallCheck(this, Size);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = possibleConstructorReturn(this, (_getPrototypeOf2 = getPrototypeOf(Size)).call.apply(_getPrototypeOf2, [this].concat(args)));

        defineProperty(assertThisInitialized(_this), "size", new Vector2());

        return _this;
      }

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
        key: "setOptions",
        value: function setOptions(options) {
          if (get(getPrototypeOf(Size.prototype), "setOptions", this)) get(getPrototypeOf(Size.prototype), "setOptions", this).call(this, options);
          if (options.size) Object.assign(this.size, options.size);
          if (options.width !== undefined) this.size.x = options.width;
          if (options.height !== undefined) this.size.y = options.height;
          return this;
        }
      }, {
        key: "hitMe",
        value: function hitMe(x, y) {
          if (this.padding) {
            return x >= -this.paddingLeft && x <= this.width + this.paddingRight && y >= -this.paddingTop && y <= this.height + this.paddingBottom;
          } else {
            return x >= 0 && x <= this.width && y >= 0 && y <= this.height;
          }
        }
      }, {
        key: "width",
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

      return Size;
    }(superClass), _temp;
  });

  var Clip = (function (superClass) {
    var _temp;

    return _temp =
    /*#__PURE__*/
    function (_superClass) {
      inherits(Clip, _superClass);

      function Clip() {
        var _getPrototypeOf2;

        var _this;

        classCallCheck(this, Clip);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = possibleConstructorReturn(this, (_getPrototypeOf2 = getPrototypeOf(Clip)).call.apply(_getPrototypeOf2, [this].concat(args)));

        defineProperty(assertThisInitialized(_this), "useClip", false);

        defineProperty(assertThisInitialized(_this), "clipPosition", new Vector2());

        defineProperty(assertThisInitialized(_this), "clipSize", new Vector2());

        return _this;
      }

      createClass(Clip, [{
        key: "setClip",
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
      }, {
        key: "setOptions",
        value: function setOptions(options) {
          if (get(getPrototypeOf(Clip.prototype), "setOptions", this)) get(getPrototypeOf(Clip.prototype), "setOptions", this).call(this, options);
          if (options.clip) this.setClip.apply(this, options.clip);
          return this;
        }
      }]);

      return Clip;
    }(superClass), _temp;
  });

  var Padding = (function (superClass) {
    var _temp;

    return _temp =
    /*#__PURE__*/
    function (_superClass) {
      inherits(Padding, _superClass);

      function Padding() {
        var _getPrototypeOf2;

        var _this;

        classCallCheck(this, Padding);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = possibleConstructorReturn(this, (_getPrototypeOf2 = getPrototypeOf(Padding)).call.apply(_getPrototypeOf2, [this].concat(args)));

        defineProperty(assertThisInitialized(_this), "padding", new Vector(0, 0, 0, 0));

        return _this;
      }

      createClass(Padding, [{
        key: "setPadding",
        value: function setPadding(top, right, botton, left) {
          this.padding.setTo(top, right, botton, left);
          return this;
        }
      }, {
        key: "setOptions",
        value: function setOptions(options) {
          if (get(getPrototypeOf(Padding.prototype), "setOptions", this)) get(getPrototypeOf(Padding.prototype), "setOptions", this).call(this, options);
          if (options.padding) Object.assign(this.padding, options.padding);
          return this;
        }
      }, {
        key: "paddingTop",
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

      return Padding;
    }(superClass), _temp;
  });

  var Style = (function (superClass) {
    var _class, _temp;

    return _temp = _class =
    /*#__PURE__*/
    function (_superClass) {
      inherits(Style, _superClass);

      function Style() {
        var _getPrototypeOf2;

        var _this;

        classCallCheck(this, Style);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = possibleConstructorReturn(this, (_getPrototypeOf2 = getPrototypeOf(Style)).call.apply(_getPrototypeOf2, [this].concat(args)));

        defineProperty(assertThisInitialized(_this), "style", Object.assign({}, Style.defaultStyle));

        return _this;
      }

      createClass(Style, [{
        key: "setStyle",
        value: function setStyle(options) {
          if (!options.cacheFont) this.style.cacheFont = '';
          Object.assign(this.style, options);
          return this;
        }
      }, {
        key: "setOptions",
        value: function setOptions(options) {
          if (get(getPrototypeOf(Style.prototype), "setOptions", this)) get(getPrototypeOf(Style.prototype), "setOptions", this).call(this, options);
          if (options.style) this.setStyle(options.style);
          return this;
        }
      }, {
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

  var CID = 0; //全局递增组件id

  var Base = (function (superClass) {
    var _temp;

    return _temp =
    /*#__PURE__*/
    function (_superClass) {
      inherits(ComponentBase, _superClass);

      function ComponentBase(options) {
        var _this;

        classCallCheck(this, ComponentBase);

        _this = possibleConstructorReturn(this, getPrototypeOf(ComponentBase).call(this));

        defineProperty(assertThisInitialized(_this), "id", ++CID);

        defineProperty(assertThisInitialized(_this), "zIndex", 0);

        defineProperty(assertThisInitialized(_this), "children", []);

        defineProperty(assertThisInitialized(_this), "parent", null);

        defineProperty(assertThisInitialized(_this), "lockChild", false);

        defineProperty(assertThisInitialized(_this), "touchChildren", true);

        defineProperty(assertThisInitialized(_this), "touchStop", false);

        defineProperty(assertThisInitialized(_this), "matrix", new Matrix3());

        if (options) _this.setOptions(options);
        return _this;
      }

      createClass(ComponentBase, [{
        key: "setParent",
        //计算矩阵

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
          if (!Component) return this;

          if (arguments.length > 1) {
            for (var i = 0; i < arguments.length; i++) {
              this.addChild(arguments[i]);
            }

            return this;
          }

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
          if (!Component.lockChild) Component.removeChildren();
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
      }, {
        key: "setOptions",
        value: function setOptions(options) {
          if (get(getPrototypeOf(ComponentBase.prototype), "setOptions", this)) get(getPrototypeOf(ComponentBase.prototype), "setOptions", this).call(this, options);
          return this;
        }
      }]);

      return ComponentBase;
    }(superClass), _temp;
  });

  var Texture = (function (superClass) {
    var _temp;

    return _temp =
    /*#__PURE__*/
    function (_superClass) {
      inherits(Texture, _superClass);

      function Texture(texture, options) {
        var _this;

        classCallCheck(this, Texture);

        _this = possibleConstructorReturn(this, getPrototypeOf(Texture).call(this));

        defineProperty(assertThisInitialized(_this), "texture", null);

        _this.setTexture(texture);

        if (options) _this.setOptions(options);
        return _this;
      }

      createClass(Texture, [{
        key: "setTexture",
        value: function setTexture(texture) {
          this.texture = Texture.GetImage ? Texture.GetImage(texture) : texture;
          if (!this.texture) return this;
          if (this.size) this.size.setTo(this.texture.width, this.texture.height);
          if (this.useFrame) this.useFrame = false;
          return this;
        }
        /**
         * @param {*} options
         */

      }, {
        key: "setOptions",
        value: function setOptions(options) {
          if (get(getPrototypeOf(Texture.prototype), "setOptions", this)) get(getPrototypeOf(Texture.prototype), "setOptions", this).call(this, options);
          if (options.texture) this.setTexture(options.texture);
          return this;
        }
      }, {
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

  var Scroll = (function (superClass) {
    var _temp;

    return _temp =
    /*#__PURE__*/
    function (_superClass) {
      inherits(Scroll, _superClass);

      function Scroll(options) {
        var _this;

        classCallCheck(this, Scroll);

        _this = possibleConstructorReturn(this, getPrototypeOf(Scroll).call(this));

        defineProperty(assertThisInitialized(_this), "context", null);

        if (options) _this.setOptions(options);
        return _this;
      }
      /**
       * 真实场地大小
       */


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
          this.setRealSize(options.realWidth || 1, options.realHeight || 1);
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

  var Text = (function (superClass) {
    var _class, _temp;

    return _temp = _class =
    /*#__PURE__*/
    function (_superClass) {
      inherits(Text, _superClass);

      function Text(options) {
        var _this;

        classCallCheck(this, Text);

        _this = possibleConstructorReturn(this, getPrototypeOf(Text).call(this));

        defineProperty(assertThisInitialized(_this), "_value", '');

        defineProperty(assertThisInitialized(_this), "special", null);

        defineProperty(assertThisInitialized(_this), "wrap", {
          width: 0,
          height: 0
        });

        defineProperty(assertThisInitialized(_this), "_LineWidth", []);

        defineProperty(assertThisInitialized(_this), "_Lines", []);

        defineProperty(assertThisInitialized(_this), "_Handle", Object.assign({}, Text.defaultHandle));

        if (options) _this.setOptions(options);
        return _this;
      }
      /**
       * 当前内容字符串
       */


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
          if (!Text.Context) return; //TODO 是否补充测试例

          Text.Context.font = this.font;
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
          if (!Text.Context) return; //TODO 是否补充测试例

          if (this.checkSpecial(value)) return;
          this._Handle.currentText = value;

          if (!this._Handle.currentText) {
            this._Handle.currentWidth = 0;
          } else {
            var measureText = Text.Context.measureText(this._Handle.currentText);
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

  var ComponentBuild = {
    Position: Position$1,
    Angle: Angle,
    Scale: Scale,
    Anchor: Anchor,
    Alpha: Alpha,
    Visible: Visible,
    Size: Size,
    Clip: Clip,
    Padding: Padding,
    Style: Style
  };

  var Options =
  /*#__PURE__*/
  function () {
    function Options() {
      classCallCheck(this, Options);
    }

    createClass(Options, [{
      key: "setOptions",
      value: function setOptions() {}
    }]);

    return Options;
  }();

  ComponentBuild.Build = function () {
    var subClass = Options;

    for (var i = 0; i < arguments.length; i++) {
      subClass = ComponentBuild[arguments[i]](subClass);
    }

    return subClass;
  };

  var ComponentBase = Base(ComponentBuild.Build('Position', 'Angle', 'Scale', 'Anchor', 'Alpha', 'Visible'));
  var ComponentTexture = Texture(Base(ComponentBuild.Build('Clip', 'Size', 'Position', 'Angle', 'Scale', 'Anchor', 'Alpha', 'Visible')));
  var ComponentScroll = Scroll(Base(ComponentBuild.Build('Clip', 'Size', 'Position', 'Angle', 'Scale', 'Anchor', 'Alpha', 'Visible')));
  var ComponentText = Text(Base(ComponentBuild.Build('Style', 'Size', 'Position', 'Angle', 'Scale', 'Anchor', 'Alpha', 'Visible')));

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

  var Load =
  /*#__PURE__*/
  function (_Event) {
    inherits(Load, _Event);

    function Load() {
      var _getPrototypeOf2;

      var _this;

      classCallCheck(this, Load);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = possibleConstructorReturn(this, (_getPrototypeOf2 = getPrototypeOf(Load)).call.apply(_getPrototypeOf2, [this].concat(args)));

      defineProperty(assertThisInitialized(_this), "resources", {});

      return _this;
    }

    createClass(Load, [{
      key: "Set",
      value: function Set(url) {
        throw Error('请先挂载加载函数(Set)');
      }
    }, {
      key: "Get",
      value: function Get() {
        throw Error('请先挂载读取函数(Get)');
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

    return Load;
  }(eventemitter3);

  var ImageControl =
  /*#__PURE__*/
  function (_Load) {
    inherits(ImageControl, _Load);

    function ImageControl() {
      classCallCheck(this, ImageControl);

      return possibleConstructorReturn(this, getPrototypeOf(ImageControl).apply(this, arguments));
    }

    createClass(ImageControl, [{
      key: "Set",
      value: function Set(url) {
        var _this = this;

        return new Promise(function (resolve, reject) {
          var image = _this.Get();

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
  }(Load);

  defineProperty(ImageControl, "Error", null);
  var WebImage =
  /*#__PURE__*/
  function (_ImageControl) {
    inherits(WebImage, _ImageControl);

    function WebImage() {
      classCallCheck(this, WebImage);

      return possibleConstructorReturn(this, getPrototypeOf(WebImage).apply(this, arguments));
    }

    createClass(WebImage, [{
      key: "Get",
      value: function Get() {
        return new Image();
      }
    }]);

    return WebImage;
  }(ImageControl);
  var WxgameImage =
  /*#__PURE__*/
  function (_ImageControl2) {
    inherits(WxgameImage, _ImageControl2);

    function WxgameImage() {
      classCallCheck(this, WxgameImage);

      return possibleConstructorReturn(this, getPrototypeOf(WxgameImage).apply(this, arguments));
    }

    createClass(WxgameImage, [{
      key: "Get",
      value: function Get() {
        return wx.createImage();
      }
    }]);

    return WxgameImage;
  }(ImageControl);

  var AudioControl =
  /*#__PURE__*/
  function (_Load) {
    inherits(AudioControl, _Load);

    function AudioControl() {
      var _getPrototypeOf2;

      var _this;

      classCallCheck(this, AudioControl);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = possibleConstructorReturn(this, (_getPrototypeOf2 = getPrototypeOf(AudioControl)).call.apply(_getPrototypeOf2, [this].concat(args)));

      defineProperty(assertThisInitialized(_this), "channels", {});

      defineProperty(assertThisInitialized(_this), "pools", {});

      defineProperty(assertThisInitialized(_this), "_mute", false);

      return _this;
    }

    createClass(AudioControl, [{
      key: "_get",
      //获取音效
      value: function _get(key) {
        if (!this.resources[key]) throw Error('音频不存在');
        return this.Get(this.resources[key].src);
      }
    }, {
      key: "channel",
      //单声道音效
      value: function channel() {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
        var loop = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

        if (this.channels[name]) {
          this.channels[name].pause();
          if (this.channels[name].destroy) this.channels[name].destroy();
          delete this.channels[name];
        }

        if (key) {
          var audio = this._get(key);

          audio.Loop = loop;
          this.channels[name] = audio;
          if (!this._mute) audio.play();
        }

        return this;
      }
    }, {
      key: "channelMute",
      value: function channelMute(name) {
        var _this2 = this;

        if (name === true) {
          Object.keys(this.channels).forEach(function (k) {
            return _this2.channelMute(k);
          });
          return this;
        }

        if (!this.channels[name]) return this;
        this.channels[name].pause();
        if (this.channels[name].loop) return this;
        if (this.channels[name].destroy) this.channels[name].destroy();
        delete this.channels[name];
        return this;
      }
    }, {
      key: "pool",
      //声道池
      value: function pool(key) {
        if (!this.pools[key]) this.pools[key] = [];
        if (this._mute) return this;
        var audio = this.pools[key].find(function (a) {
          return a.paused;
        });
        if (!audio) this.pools[key].push(audio = this._get(key));
        audio.play();
        return this;
      }
    }, {
      key: "poolMute",
      value: function poolMute(key) {
        var _this3 = this;

        if (key === true) {
          Object.keys(this.pools).forEach(function (k) {
            return _this3.poolMute(k);
          });
          return this;
        }

        if (!this.pools[key]) return this;
        this.pools[key].forEach(function (a) {
          return a.pause();
        });
        return this;
      } //静音

    }, {
      key: "mute",
      get: function get() {
        return this._mute;
      },
      set: function set(mute) {
        var _this4 = this;

        this._mute = mute;

        if (mute) {
          Object.keys(this.pools).forEach(function (name) {
            return _this4.poolMute(true);
          });
          Object.keys(this.channels).forEach(function (name) {
            return _this4.channelMute(true);
          });
        } else {
          Object.keys(this.channels).forEach(function (name) {
            return _this4.channels[name].loop && _this4.channels[name].play();
          });
        }
      }
    }]);

    return AudioControl;
  }(Load);
  var WxgameAudio =
  /*#__PURE__*/
  function (_AudioControl) {
    inherits(WxgameAudio, _AudioControl);

    function WxgameAudio() {
      classCallCheck(this, WxgameAudio);

      return possibleConstructorReturn(this, getPrototypeOf(WxgameAudio).apply(this, arguments));
    }

    createClass(WxgameAudio, [{
      key: "Set",
      value: function Set(url) {
        return new Promise(function (resolve, reject) {
          var audio = wx.createInnerAudioContext();
          audio.loop = false;
          audio.autoplay = false;
          audio.onCanplay(function () {
            resolve(audio);
          });
          audio.onError(function (e) {
            reject(e);
          });
          audio.key = audio.src = url;
        });
      }
    }, {
      key: "Get",
      value: function Get(url) {
        var audio = wx.createInnerAudioContext();
        audio.loop = false;
        audio.autoplay = false;
        audio.onCanplay(function () {
          if (audio.Loop) audio.loop = audio.Loop;
          if (!audio.paused) audio.play();
        });
        audio.src = url;
        return audio;
      }
    }]);

    return WxgameAudio;
  }(AudioControl);
  var WebAudio =
  /*#__PURE__*/
  function (_AudioControl2) {
    inherits(WebAudio, _AudioControl2);

    function WebAudio() {
      classCallCheck(this, WebAudio);

      return possibleConstructorReturn(this, getPrototypeOf(WebAudio).apply(this, arguments));
    }

    createClass(WebAudio, [{
      key: "Set",
      value: function Set(url) {
        return new Promise(function (resolve, reject) {
          var audio = new Audio();
          audio.loop = false;
          audio.autoplay = false;

          audio.onloadeddata = function () {
            resolve(audio);
          };

          audio.onerror = function (e) {
            reject(e);
          };

          audio.key = audio.src = url;
        });
      }
    }, {
      key: "Get",
      value: function Get(url) {
        var audio = new Audio();
        audio.loop = false;
        audio.autoplay = false;

        audio.onloadeddata = function () {
          if (audio.Loop) audio.loop = audio.Loop;
          if (!audio.paused) audio.play();
        };

        audio.src = url;
        return audio;
      }
    }]);

    return WebAudio;
  }(AudioControl);

  /**
   * 获得一个canvas对象
   *
   * @param {String} key 特殊模版标识
   *
   * 打包模式为web时
   * key取main则该canvas将上屏
   */
  function GetCanvas(key) {
    if (key && GetCanvas[key]) return GetCanvas[key];
    var canvas = document.createElement('canvas');
    if (key == 'main') document.body.appendChild(canvas);
    return key ? GetCanvas[key] = canvas : canvas;
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

  var Storage = {
    /**
     * 异步获取本地storage
     * @param {String} key
     */
    Get: function Get(key) {
      return Promise.resolve(window.localStorage.getItem(key)).then(function (res) {
        return JSON.parse(res);
      })["catch"](function () {
        return null;
      });
    },

    /**
     * 异步设置本地storage
     * @param {String} key
     * @param {Any} data
     */
    Set: function Set(key, data) {
      window.localStorage.setItem(key, JSON.stringify(data));
      return Promise.resolve(data);
    },

    /**
     * 同步获取storage
     */
    GetSync: function GetSync(key) {
      try {
        return JSON.parse(window.localStorage.getItem(key));
      } catch (e) {
        return null;
      }
    },

    /**
     * 同步设置storage
     */
    SetSync: function SetSync(key, data) {
      window.localStorage.setItem(key, JSON.stringify(data));
      return data;
    }
  };

  function loadFont(url) {
    var key = 'Font' + Date.now();
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = "\n            @font-face {\n                font-family: '".concat(key, "';\n                src: url('").concat(url, "'); \n            }\n            body {\n                font-family: '").concat(key, "';\n            }\n        ");
    document.body.appendChild(style);
    return key;
  }

  /**
   * 获得一个canvas对象
   *
   * @param {String} key 特殊模版标识
   *
   * 打包模式为wxgame时
   * key取share则获得主域内开放canvas
   * key取shared则获得开发域内开放canvas
   */
  function GetCanvas$1(key) {
    if (!GetCanvas$1.main && key != 'main') GetCanvas$1('main');
    if (key && GetCanvas$1[key]) return GetCanvas$1[key];
    var canvas = null;

    if (key == 'share' && typeof wx.getOpenDataContext == 'function') {
      var context = wx.getOpenDataContext();

      context.canvas.getContext = function () {
        return context;
      };

      canvas = context.canvas;
    } else if (key == 'shared' && typeof wx.getSharedCanvas == 'function') {
      canvas = wx.getSharedCanvas();
    } else {
      canvas = wx.createCanvas();
    }

    return key ? GetCanvas$1[key] = canvas : canvas;
  }

  /**
   * 获取系统参数
   * pixel 屏幕与设备像素比
   * width 屏幕宽度
   * height 屏幕高度
   * ratio 宽高比
   */
  function System$1() {
    System$1.wx = wx.getSystemInfoSync();
    System$1.pixel = System$1.wx.pixelRatio;
    System$1.width = System$1.wx.screenWidth;
    System$1.height = System$1.wx.screenHeight;
    System$1.ratio = System$1.width / System$1.height;
    return System$1;
  }

  var has = Object.prototype.hasOwnProperty;
  var isArray = Array.isArray;

  var hexTable = (function () {
      var array = [];
      for (var i = 0; i < 256; ++i) {
          array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
      }

      return array;
  }());

  var compactQueue = function compactQueue(queue) {
      while (queue.length > 1) {
          var item = queue.pop();
          var obj = item.obj[item.prop];

          if (isArray(obj)) {
              var compacted = [];

              for (var j = 0; j < obj.length; ++j) {
                  if (typeof obj[j] !== 'undefined') {
                      compacted.push(obj[j]);
                  }
              }

              item.obj[item.prop] = compacted;
          }
      }
  };

  var arrayToObject = function arrayToObject(source, options) {
      var obj = options && options.plainObjects ? Object.create(null) : {};
      for (var i = 0; i < source.length; ++i) {
          if (typeof source[i] !== 'undefined') {
              obj[i] = source[i];
          }
      }

      return obj;
  };

  var merge = function merge(target, source, options) {
      /* eslint no-param-reassign: 0 */
      if (!source) {
          return target;
      }

      if (typeof source !== 'object') {
          if (isArray(target)) {
              target.push(source);
          } else if (target && typeof target === 'object') {
              if ((options && (options.plainObjects || options.allowPrototypes)) || !has.call(Object.prototype, source)) {
                  target[source] = true;
              }
          } else {
              return [target, source];
          }

          return target;
      }

      if (!target || typeof target !== 'object') {
          return [target].concat(source);
      }

      var mergeTarget = target;
      if (isArray(target) && !isArray(source)) {
          mergeTarget = arrayToObject(target, options);
      }

      if (isArray(target) && isArray(source)) {
          source.forEach(function (item, i) {
              if (has.call(target, i)) {
                  var targetItem = target[i];
                  if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {
                      target[i] = merge(targetItem, item, options);
                  } else {
                      target.push(item);
                  }
              } else {
                  target[i] = item;
              }
          });
          return target;
      }

      return Object.keys(source).reduce(function (acc, key) {
          var value = source[key];

          if (has.call(acc, key)) {
              acc[key] = merge(acc[key], value, options);
          } else {
              acc[key] = value;
          }
          return acc;
      }, mergeTarget);
  };

  var assign = function assignSingleSource(target, source) {
      return Object.keys(source).reduce(function (acc, key) {
          acc[key] = source[key];
          return acc;
      }, target);
  };

  var decode = function (str, decoder, charset) {
      var strWithoutPlus = str.replace(/\+/g, ' ');
      if (charset === 'iso-8859-1') {
          // unescape never throws, no try...catch needed:
          return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
      }
      // utf-8
      try {
          return decodeURIComponent(strWithoutPlus);
      } catch (e) {
          return strWithoutPlus;
      }
  };

  var encode = function encode(str, defaultEncoder, charset) {
      // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
      // It has been adapted here for stricter adherence to RFC 3986
      if (str.length === 0) {
          return str;
      }

      var string = str;
      if (typeof str === 'symbol') {
          string = Symbol.prototype.toString.call(str);
      } else if (typeof str !== 'string') {
          string = String(str);
      }

      if (charset === 'iso-8859-1') {
          return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
              return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
          });
      }

      var out = '';
      for (var i = 0; i < string.length; ++i) {
          var c = string.charCodeAt(i);

          if (
              c === 0x2D // -
              || c === 0x2E // .
              || c === 0x5F // _
              || c === 0x7E // ~
              || (c >= 0x30 && c <= 0x39) // 0-9
              || (c >= 0x41 && c <= 0x5A) // a-z
              || (c >= 0x61 && c <= 0x7A) // A-Z
          ) {
              out += string.charAt(i);
              continue;
          }

          if (c < 0x80) {
              out = out + hexTable[c];
              continue;
          }

          if (c < 0x800) {
              out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
              continue;
          }

          if (c < 0xD800 || c >= 0xE000) {
              out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
              continue;
          }

          i += 1;
          c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
          out += hexTable[0xF0 | (c >> 18)]
              + hexTable[0x80 | ((c >> 12) & 0x3F)]
              + hexTable[0x80 | ((c >> 6) & 0x3F)]
              + hexTable[0x80 | (c & 0x3F)];
      }

      return out;
  };

  var compact = function compact(value) {
      var queue = [{ obj: { o: value }, prop: 'o' }];
      var refs = [];

      for (var i = 0; i < queue.length; ++i) {
          var item = queue[i];
          var obj = item.obj[item.prop];

          var keys = Object.keys(obj);
          for (var j = 0; j < keys.length; ++j) {
              var key = keys[j];
              var val = obj[key];
              if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                  queue.push({ obj: obj, prop: key });
                  refs.push(val);
              }
          }
      }

      compactQueue(queue);

      return value;
  };

  var isRegExp = function isRegExp(obj) {
      return Object.prototype.toString.call(obj) === '[object RegExp]';
  };

  var isBuffer = function isBuffer(obj) {
      if (!obj || typeof obj !== 'object') {
          return false;
      }

      return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
  };

  var combine = function combine(a, b) {
      return [].concat(a, b);
  };

  var utils = {
      arrayToObject: arrayToObject,
      assign: assign,
      combine: combine,
      compact: compact,
      decode: decode,
      encode: encode,
      isBuffer: isBuffer,
      isRegExp: isRegExp,
      merge: merge
  };

  var replace = String.prototype.replace;
  var percentTwenties = /%20/g;



  var Format = {
      RFC1738: 'RFC1738',
      RFC3986: 'RFC3986'
  };

  var formats = utils.assign(
      {
          'default': Format.RFC3986,
          formatters: {
              RFC1738: function (value) {
                  return replace.call(value, percentTwenties, '+');
              },
              RFC3986: function (value) {
                  return String(value);
              }
          }
      },
      Format
  );

  var has$1 = Object.prototype.hasOwnProperty;

  var arrayPrefixGenerators = {
      brackets: function brackets(prefix) {
          return prefix + '[]';
      },
      comma: 'comma',
      indices: function indices(prefix, key) {
          return prefix + '[' + key + ']';
      },
      repeat: function repeat(prefix) {
          return prefix;
      }
  };

  var isArray$1 = Array.isArray;
  var push = Array.prototype.push;
  var pushToArray = function (arr, valueOrArray) {
      push.apply(arr, isArray$1(valueOrArray) ? valueOrArray : [valueOrArray]);
  };

  var toISO = Date.prototype.toISOString;

  var defaultFormat = formats['default'];
  var defaults = {
      addQueryPrefix: false,
      allowDots: false,
      charset: 'utf-8',
      charsetSentinel: false,
      delimiter: '&',
      encode: true,
      encoder: utils.encode,
      encodeValuesOnly: false,
      format: defaultFormat,
      formatter: formats.formatters[defaultFormat],
      // deprecated
      indices: false,
      serializeDate: function serializeDate(date) {
          return toISO.call(date);
      },
      skipNulls: false,
      strictNullHandling: false
  };

  var isNonNullishPrimitive = function isNonNullishPrimitive(v) {
      return typeof v === 'string'
          || typeof v === 'number'
          || typeof v === 'boolean'
          || typeof v === 'symbol'
          || typeof v === 'bigint';
  };

  var stringify = function stringify(
      object,
      prefix,
      generateArrayPrefix,
      strictNullHandling,
      skipNulls,
      encoder,
      filter,
      sort,
      allowDots,
      serializeDate,
      formatter,
      encodeValuesOnly,
      charset
  ) {
      var obj = object;
      if (typeof filter === 'function') {
          obj = filter(prefix, obj);
      } else if (obj instanceof Date) {
          obj = serializeDate(obj);
      } else if (generateArrayPrefix === 'comma' && isArray$1(obj)) {
          obj = obj.join(',');
      }

      if (obj === null) {
          if (strictNullHandling) {
              return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, 'key') : prefix;
          }

          obj = '';
      }

      if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
          if (encoder) {
              var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, 'key');
              return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset, 'value'))];
          }
          return [formatter(prefix) + '=' + formatter(String(obj))];
      }

      var values = [];

      if (typeof obj === 'undefined') {
          return values;
      }

      var objKeys;
      if (isArray$1(filter)) {
          objKeys = filter;
      } else {
          var keys = Object.keys(obj);
          objKeys = sort ? keys.sort(sort) : keys;
      }

      for (var i = 0; i < objKeys.length; ++i) {
          var key = objKeys[i];

          if (skipNulls && obj[key] === null) {
              continue;
          }

          if (isArray$1(obj)) {
              pushToArray(values, stringify(
                  obj[key],
                  typeof generateArrayPrefix === 'function' ? generateArrayPrefix(prefix, key) : prefix,
                  generateArrayPrefix,
                  strictNullHandling,
                  skipNulls,
                  encoder,
                  filter,
                  sort,
                  allowDots,
                  serializeDate,
                  formatter,
                  encodeValuesOnly,
                  charset
              ));
          } else {
              pushToArray(values, stringify(
                  obj[key],
                  prefix + (allowDots ? '.' + key : '[' + key + ']'),
                  generateArrayPrefix,
                  strictNullHandling,
                  skipNulls,
                  encoder,
                  filter,
                  sort,
                  allowDots,
                  serializeDate,
                  formatter,
                  encodeValuesOnly,
                  charset
              ));
          }
      }

      return values;
  };

  var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
      if (!opts) {
          return defaults;
      }

      if (opts.encoder !== null && opts.encoder !== undefined && typeof opts.encoder !== 'function') {
          throw new TypeError('Encoder has to be a function.');
      }

      var charset = opts.charset || defaults.charset;
      if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
          throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
      }

      var format = formats['default'];
      if (typeof opts.format !== 'undefined') {
          if (!has$1.call(formats.formatters, opts.format)) {
              throw new TypeError('Unknown format option provided.');
          }
          format = opts.format;
      }
      var formatter = formats.formatters[format];

      var filter = defaults.filter;
      if (typeof opts.filter === 'function' || isArray$1(opts.filter)) {
          filter = opts.filter;
      }

      return {
          addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults.addQueryPrefix,
          allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
          charset: charset,
          charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
          delimiter: typeof opts.delimiter === 'undefined' ? defaults.delimiter : opts.delimiter,
          encode: typeof opts.encode === 'boolean' ? opts.encode : defaults.encode,
          encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults.encoder,
          encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
          filter: filter,
          formatter: formatter,
          serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults.serializeDate,
          skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults.skipNulls,
          sort: typeof opts.sort === 'function' ? opts.sort : null,
          strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
      };
  };

  var stringify_1 = function (object, opts) {
      var obj = object;
      var options = normalizeStringifyOptions(opts);

      var objKeys;
      var filter;

      if (typeof options.filter === 'function') {
          filter = options.filter;
          obj = filter('', obj);
      } else if (isArray$1(options.filter)) {
          filter = options.filter;
          objKeys = filter;
      }

      var keys = [];

      if (typeof obj !== 'object' || obj === null) {
          return '';
      }

      var arrayFormat;
      if (opts && opts.arrayFormat in arrayPrefixGenerators) {
          arrayFormat = opts.arrayFormat;
      } else if (opts && 'indices' in opts) {
          arrayFormat = opts.indices ? 'indices' : 'repeat';
      } else {
          arrayFormat = 'indices';
      }

      var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

      if (!objKeys) {
          objKeys = Object.keys(obj);
      }

      if (options.sort) {
          objKeys.sort(options.sort);
      }

      for (var i = 0; i < objKeys.length; ++i) {
          var key = objKeys[i];

          if (options.skipNulls && obj[key] === null) {
              continue;
          }
          pushToArray(keys, stringify(
              obj[key],
              key,
              generateArrayPrefix,
              options.strictNullHandling,
              options.skipNulls,
              options.encode ? options.encoder : null,
              options.filter,
              options.sort,
              options.allowDots,
              options.serializeDate,
              options.formatter,
              options.encodeValuesOnly,
              options.charset
          ));
      }

      var joined = keys.join(options.delimiter);
      var prefix = options.addQueryPrefix === true ? '?' : '';

      if (options.charsetSentinel) {
          if (options.charset === 'iso-8859-1') {
              // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
              prefix += 'utf8=%26%2310003%3B&';
          } else {
              // encodeURIComponent('✓')
              prefix += 'utf8=%E2%9C%93&';
          }
      }

      return joined.length > 0 ? prefix + joined : '';
  };

  var has$2 = Object.prototype.hasOwnProperty;
  var isArray$2 = Array.isArray;

  var defaults$1 = {
      allowDots: false,
      allowPrototypes: false,
      arrayLimit: 20,
      charset: 'utf-8',
      charsetSentinel: false,
      comma: false,
      decoder: utils.decode,
      delimiter: '&',
      depth: 5,
      ignoreQueryPrefix: false,
      interpretNumericEntities: false,
      parameterLimit: 1000,
      parseArrays: true,
      plainObjects: false,
      strictNullHandling: false
  };

  var interpretNumericEntities = function (str) {
      return str.replace(/&#(\d+);/g, function ($0, numberStr) {
          return String.fromCharCode(parseInt(numberStr, 10));
      });
  };

  // This is what browsers will submit when the ✓ character occurs in an
  // application/x-www-form-urlencoded body and the encoding of the page containing
  // the form is iso-8859-1, or when the submitted form has an accept-charset
  // attribute of iso-8859-1. Presumably also with other charsets that do not contain
  // the ✓ character, such as us-ascii.
  var isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')

  // These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.
  var charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')

  var parseValues = function parseQueryStringValues(str, options) {
      var obj = {};
      var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
      var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
      var parts = cleanStr.split(options.delimiter, limit);
      var skipIndex = -1; // Keep track of where the utf8 sentinel was found
      var i;

      var charset = options.charset;
      if (options.charsetSentinel) {
          for (i = 0; i < parts.length; ++i) {
              if (parts[i].indexOf('utf8=') === 0) {
                  if (parts[i] === charsetSentinel) {
                      charset = 'utf-8';
                  } else if (parts[i] === isoSentinel) {
                      charset = 'iso-8859-1';
                  }
                  skipIndex = i;
                  i = parts.length; // The eslint settings do not allow break;
              }
          }
      }

      for (i = 0; i < parts.length; ++i) {
          if (i === skipIndex) {
              continue;
          }
          var part = parts[i];

          var bracketEqualsPos = part.indexOf(']=');
          var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

          var key, val;
          if (pos === -1) {
              key = options.decoder(part, defaults$1.decoder, charset, 'key');
              val = options.strictNullHandling ? null : '';
          } else {
              key = options.decoder(part.slice(0, pos), defaults$1.decoder, charset, 'key');
              val = options.decoder(part.slice(pos + 1), defaults$1.decoder, charset, 'value');
          }

          if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {
              val = interpretNumericEntities(val);
          }

          if (val && typeof val === 'string' && options.comma && val.indexOf(',') > -1) {
              val = val.split(',');
          }

          if (part.indexOf('[]=') > -1) {
              val = isArray$2(val) ? [val] : val;
          }

          if (has$2.call(obj, key)) {
              obj[key] = utils.combine(obj[key], val);
          } else {
              obj[key] = val;
          }
      }

      return obj;
  };

  var parseObject = function (chain, val, options) {
      var leaf = val;

      for (var i = chain.length - 1; i >= 0; --i) {
          var obj;
          var root = chain[i];

          if (root === '[]' && options.parseArrays) {
              obj = [].concat(leaf);
          } else {
              obj = options.plainObjects ? Object.create(null) : {};
              var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
              var index = parseInt(cleanRoot, 10);
              if (!options.parseArrays && cleanRoot === '') {
                  obj = { 0: leaf };
              } else if (
                  !isNaN(index)
                  && root !== cleanRoot
                  && String(index) === cleanRoot
                  && index >= 0
                  && (options.parseArrays && index <= options.arrayLimit)
              ) {
                  obj = [];
                  obj[index] = leaf;
              } else {
                  obj[cleanRoot] = leaf;
              }
          }

          leaf = obj;
      }

      return leaf;
  };

  var parseKeys = function parseQueryStringKeys(givenKey, val, options) {
      if (!givenKey) {
          return;
      }

      // Transform dot notation to bracket notation
      var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

      // The regex chunks

      var brackets = /(\[[^[\]]*])/;
      var child = /(\[[^[\]]*])/g;

      // Get the parent

      var segment = options.depth > 0 && brackets.exec(key);
      var parent = segment ? key.slice(0, segment.index) : key;

      // Stash the parent if it exists

      var keys = [];
      if (parent) {
          // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
          if (!options.plainObjects && has$2.call(Object.prototype, parent)) {
              if (!options.allowPrototypes) {
                  return;
              }
          }

          keys.push(parent);
      }

      // Loop through children appending to the array until we hit depth

      var i = 0;
      while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
          i += 1;
          if (!options.plainObjects && has$2.call(Object.prototype, segment[1].slice(1, -1))) {
              if (!options.allowPrototypes) {
                  return;
              }
          }
          keys.push(segment[1]);
      }

      // If there's a remainder, just add whatever is left

      if (segment) {
          keys.push('[' + key.slice(segment.index) + ']');
      }

      return parseObject(keys, val, options);
  };

  var normalizeParseOptions = function normalizeParseOptions(opts) {
      if (!opts) {
          return defaults$1;
      }

      if (opts.decoder !== null && opts.decoder !== undefined && typeof opts.decoder !== 'function') {
          throw new TypeError('Decoder has to be a function.');
      }

      if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
          throw new Error('The charset option must be either utf-8, iso-8859-1, or undefined');
      }
      var charset = typeof opts.charset === 'undefined' ? defaults$1.charset : opts.charset;

      return {
          allowDots: typeof opts.allowDots === 'undefined' ? defaults$1.allowDots : !!opts.allowDots,
          allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults$1.allowPrototypes,
          arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults$1.arrayLimit,
          charset: charset,
          charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults$1.charsetSentinel,
          comma: typeof opts.comma === 'boolean' ? opts.comma : defaults$1.comma,
          decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults$1.decoder,
          delimiter: typeof opts.delimiter === 'string' || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults$1.delimiter,
          // eslint-disable-next-line no-implicit-coercion, no-extra-parens
          depth: (typeof opts.depth === 'number' || opts.depth === false) ? +opts.depth : defaults$1.depth,
          ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
          interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults$1.interpretNumericEntities,
          parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults$1.parameterLimit,
          parseArrays: opts.parseArrays !== false,
          plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults$1.plainObjects,
          strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults$1.strictNullHandling
      };
  };

  var parse = function (str, opts) {
      var options = normalizeParseOptions(opts);

      if (str === '' || str === null || typeof str === 'undefined') {
          return options.plainObjects ? Object.create(null) : {};
      }

      var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
      var obj = options.plainObjects ? Object.create(null) : {};

      // Iterate over the keys and setup the new object

      var keys = Object.keys(tempObj);
      for (var i = 0; i < keys.length; ++i) {
          var key = keys[i];
          var newObj = parseKeys(key, tempObj[key], options);
          obj = utils.merge(obj, newObj, options);
      }

      return utils.compact(obj);
  };

  var lib = {
      formats: formats,
      parse: parse,
      stringify: stringify_1
  };

  var qsConfig = {
    arrayFormat: 'indices',
    encodeValuesOnly: true
  };

  function mergeDefaultConfig() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var getMethods = arguments.length > 1 ? arguments[1] : undefined;
    var postMethods = arguments.length > 2 ? arguments[2] : undefined;
    var method = config.method || 'get';
    var baseURL = config.baseURL || '';
    var configHeaders = config.headers || {};
    var headers = {
      common: Object.assign({}, configHeaders.common)
    };
    getMethods.forEach(function (method) {
      headers[method] = Object.assign({}, configHeaders[method]);
    });
    postMethods.forEach(function (method) {
      headers[method] = Object.assign({}, configHeaders[method]);
    });
    var params = config.params ? JSON.parse(JSON.stringify(config.params)) : {};
    var data = config.data ? JSON.parse(JSON.stringify(config.data)) : {};
    return {
      method: method,
      baseURL: baseURL,
      headers: headers,
      params: params,
      data: data
    };
  }

  function request(defaultConfig) {
    var urlOrConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var getConfig = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var interceptors = arguments.length > 3 ? arguments[3] : undefined;
    var method = getConfig.method || urlOrConfig.method || defaultConfig.method;
    var header = Object.assign({}, defaultConfig.headers.common, defaultConfig.headers[method], urlOrConfig.header, getConfig.header);
    var url = (getConfig.baseURL || urlOrConfig.baseURL || defaultConfig.baseURL || '') + (getConfig.url || urlOrConfig.url || defaultConfig.url);
    var params = Object.assign({}, defaultConfig.params, urlOrConfig.params, getConfig.params);
    var data = Object.assign({}, defaultConfig.data, urlOrConfig.data, getConfig.data);
    var dataType = getConfig.dataType || urlOrConfig.dataType || defaultConfig.dataType || 'json';
    var responseType = getConfig.responseType || urlOrConfig.responseType || defaultConfig.responseType || 'text';

    if (method == 'get') {
      params = Object.assign(data, params);
      data = null;
    }

    var promiseConfig = Promise.resolve({
      method: method,
      url: url + '?' + lib.stringify(params, qsConfig),
      data: data,
      header: header,
      dataType: dataType,
      responseType: responseType
    });
    var transformRequest = getConfig.transformRequest || urlOrConfig.transformRequest || interceptors.request.transform;

    if (transformRequest) {
      promiseConfig = transformRequest.reduce(function (promise, fn) {
        if (!fn) return promise;
        if (typeof fn == 'function') return promise.then(function (res) {
          return fn(res) || res;
        });
        if (fn.resolve) promise = promise.then(function (res) {
          return fn.resolve(res) || res;
        });
        if (fn.reject) promise = promise["catch"](function (res) {
          return fn.reject(res) || res;
        });
        return promise;
      }, promiseConfig);
    }

    var promiseRequest = promiseConfig.then(function (Config) {
      return new Promise(function (resolve, reject) {
        Config.success = function (res) {
          Config.response = res;
          resolve(Config);
        };

        Config.fail = function (res) {
          Config.error = res;
          reject(Config);
        };

        wx.request(Config);
      });
    });
    var transformResponse = getConfig.transformResponse || urlOrConfig.transformResponse || interceptors.response.transform;

    if (transformResponse) {
      promiseRequest = transformResponse.reduce(function (promise, fn) {
        if (!fn) return promise;
        if (typeof fn == 'function') return promise.then(function (res) {
          return fn(res) || res;
        });
        if (fn.resolve) promise = promise.then(function (res) {
          return fn.resolve(res) || res;
        });
        if (fn.reject) promise = promise["catch"](function (res) {
          return fn.reject(res) || res;
        });
        return promise;
      }, promiseRequest);
    }

    return promiseRequest;
  }

  function createInterceptors(resolve, reject) {
    this.transform.push(reject ? {
      resolve: resolve,
      reject: reject
    } : resolve);
    return this;
  }

  function createInstance(defaultConfig) {
    var getMethods = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ['get'];
    var postMethods = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ['post'];

    var axios = function axios(urlOrConfig, getConfig) {
      if (typeof urlOrConfig == 'string') {
        urlOrConfig = {
          url: urlOrConfig,
          method: 'get'
        };
      }

      return request(axios.defaults, urlOrConfig, getConfig, axios.interceptors);
    };

    axios.defaults = mergeDefaultConfig(defaultConfig, getMethods, postMethods);
    axios.interceptors = {
      request: {
        transform: [],
        use: createInterceptors
      },
      response: {
        transform: [],
        use: createInterceptors
      }
    };
    axios.create = createInstance;
    axios.request = axios;
    getMethods.forEach(function (method) {
      axios[method] = function (url, params, config) {
        return axios({
          url: url,
          method: method,
          params: params
        }, config);
      };
    });
    postMethods.forEach(function (method) {
      axios[method] = function (url, data, config) {
        return axios({
          url: url,
          method: method,
          data: data
        }, config);
      };
    });
    return axios;
  }

  var Storage$1 = {
    /**
     * 异步获取本地storage
     * @param {String} key
     */
    Get: function Get(key) {
      return new Promise(function (success, fail) {
        wx.getStorage({
          success: success,
          fail: fail,
          key: key
        });
      }).then(function (r) {
        return JSON.parse(r.data);
      })["catch"](function () {
        return null;
      });
    },

    /**
     * 异步设置本地storage
     * @param {String} key
     * @param {Any} data
     */
    Set: function Set(key, data) {
      return new Promise(function (success, fail) {
        return wx.setStorage({
          success: success,
          fail: fail,
          key: key,
          data: JSON.stringify(data)
        }), data;
      });
    },

    /**
     * 同步获取storage
     */
    GetSync: function GetSync(key) {
      return JSON.parse(wx.getStorageSync(key));
    },

    /**
     * 同步设置storage
     */
    SetSync: function SetSync(key, value) {
      return wx.setStorageSync(key, JSON.stringify(value));
    }
  };

  var Patterns = {};
  var Canvas = {
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
    //将图片缓存为平铺
    ImagePattern: function ImagePattern(a, x, y, w, h) {
      if (!a || !a.src) return this;
      Patterns[a.src] = this.createPattern(a, 'no-repeat');
      this.save();
      this.fillStyle = Patterns[a];
      this.translate(x, y);
      this.fillRect(0, 0, w, h);
      this.restore();
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
    //设置文字属性
    FontSet: function FontSet(font, fillStyle, textAlign, textBaseline) {
      if (font && this.font != font) this.font = font;
      if (fillStyle && this.fillStyle != fillStyle) this.fillStyle = fillStyle;
      if (textAlign && this.textAlign != textAlign) this.textAlign = textAlign;
      if (textBaseline && this.textBaseline != textBaseline) this.textBaseline = textBaseline;
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
    //绘制图片
    Image: function Image(a, x, y, w, h) {
      var img = Canvas.Image.GetImage(a);
      Array.prototype.splice.call(arguments, 0, 3, img, x - (w || img.width) / 2, y - (h || img.height) / 2);
      this.drawImage.apply(this, arguments);
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

  function Loader() {
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
        Object.assign(Result, Loader(map[k], root, perfix + k + '/', exts));
      }
    });
    return Result;
  }

  /**
   * 将dom元素触摸事件和Touch类进行关联
   * @param {HTMLElement} dom
   * @param {ICanvas.UtilTouch} Touch
   */

  function UtilWebTouchListen(dom, Touch) {
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
  /**
   * 将dom元素鼠标事件和Touch类进行关联
   * @param {HTMLElement} dom
   * @param {ICanvas.UtilTouch} Touch
   */

  function UtilWebMouseListen(dom, Touch) {
    dom.addEventListener('mousedown', function (e) {
      return Touch.onTouchStart(e);
    }, {
      passive: true
    });
    dom.addEventListener('mousemove', function (e) {
      return Touch.onTouchMove(e);
    }, {
      passive: true
    });
    dom.addEventListener('mouseup', function (e) {
      return Touch.onTouchEnd(e);
    }, {
      passive: true
    });
    dom.addEventListener('mouseout', function (e) {
      return Touch.onTouchEnd(e);
    }, {
      passive: true
    });
  }
  /**
   * 微信触摸事件和Touch类进行关联
   * @param {ICanvas.UtilTouch} Touch
   */

  function UtilWxgameTouchListen(Touch) {
    wx.onTouchStart(function (e) {
      return Touch.onTouchStart(e);
    });
    wx.onTouchMove(function (e) {
      return Touch.onTouchMove(e);
    });
    wx.onTouchEnd(function (e) {
      return Touch.onTouchEnd(e);
    });
    wx.onTouchCancel(function (e) {
      return Touch.onTouchEnd(e);
    });
  }
  /**
   * 从键值对中递归获取某个值
   * @param {Object} root
   * @param {string} keys
   * @param {string} split
   */

  function UtilRecursiveMap(root, keys) {
    var split = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.';
    if (typeof key == 'string') keys = keys.split(split);
    return keys.reduce(function (obj, key) {
      if (!obj) return obj;
      return obj[key];
    }, root);
  }
  /**
   * 将微信方法进行变种
   * @param {string} action 方法名
   * @param {Any} root 根元素/上下文
   * @param {Number} mode 变种方式 0:Promise返回success和fail,1:Promise返回执行结果,2:原样子调用
   */

  function UtilWxgameVary(action) {
    var root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : wx;
    var mode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    if (mode == 2) {
      return root[action];
    } else if (mode == 1) {
      return function (args, key) {
        return new Promise(function (resolve) {
          return resolve(root[action](key ? defineProperty({}, key, args) : args));
        });
      };
    } else if (mode == 0) {
      return function (args, key) {
        return new Promise(function (success, fail) {
          return root[action](Object.assign({
            success: success,
            fail: fail
          }, key ? defineProperty({}, key, args) : args));
        });
      };
    }
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

  function LoginFactory() {
    var defaultStyle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      left: 0,
      top: 0,
      width: 1000,
      height: 2000,
      backgroundColor: 'rgba(0,0,0,0)',
      borderColor: '#FFFFFF',
      borderWidth: 0,
      borderRadius: 0,
      textAlign: 'center',
      fontSize: 32,
      lineHeight: 32
    };

    //微信用户授权按钮监听
    var GetLoginButtonListen = function GetLoginButtonListen(UserInfoButton) {
      return new Promise(function (resolve, reject) {
        UserInfoButton.offTap();
        UserInfoButton.onTap(resolve);
      }).then(function (res) {
        if (!res.userInfo) return GetLoginButtonListen(UserInfoButton);
        if (Login.GetUserInfo.Abort) Login.GetUserInfo.Abort();
        return res.userInfo;
      });
    }; //微信用户授权按钮


    var GetLoginButton = function GetLoginButton(infoStyle) {
      var UserInfoButton = wx.createUserInfoButton({
        type: 'text',
        text: '',
        style: Object.assign(defaultStyle, infoStyle),
        withCredentials: false,
        lang: 'zh_CN'
      });
      UserInfoButton.show();
      return UserInfoButton;
    };

    var openSetting = UtilWxgameVary('openSetting');
    var authorize = UtilWxgameVary('authorize');
    var getUserInfo = UtilWxgameVary('getUserInfo');
    var login = UtilWxgameVary('login'); //打开权限设置界面

    var SetAuthorize = function SetAuthorize(scope) {
      return openSetting().then(function (res) {
        return res.authSetting[scope] ? Promise.resolve() : Promise.reject();
      })["catch"](function () {
        return SetAuthorize(scope);
      });
    }; //微信登陆


    var Login = function Login(info) {
      return login()["catch"](function (err) {
        wx.showToast({
          title: '登陆失败，请检查登陆状态',
          icon: 'none'
        });
        return Promise.reject(err);
      }).then(function (res) {
        if (!info) return res;
        return Login.GetUserInfo(info).then(function (user) {
          res.user = user;
          return res;
        });
      });
    }; //获取用户信息


    Login.GetUserInfo = function (info) {
      return authorize('scope.userInfo', 'scope')["catch"](function () {
        if (info === true) return SetAuthorize(scope);
        var Button = GetLoginButton(info);

        Login.GetUserInfo.Abort = function () {
          Button.hide();
          Button.destroy();
          delete Login.GetUserInfo.Abort;
        };

        return GetLoginButtonListen(Button);
      }).then(function () {
        return getUserInfo('zh_CN', 'lang');
      }).then(function (res) {
        return res.userInfo;
      });
    };

    return Login;
  }

  exports.ApiWebCanvas = GetCanvas;
  exports.ApiWebFont = loadFont;
  exports.ApiWebStorage = Storage;
  exports.ApiWebSystem = System;
  exports.ApiWxgameCanvas = GetCanvas$1;
  exports.ApiWxgameLogin = LoginFactory;
  exports.ApiWxgameRequest = createInstance;
  exports.ApiWxgameStorage = Storage$1;
  exports.ApiWxgameSystem = System$1;
  exports.ComponentBase = ComponentBase;
  exports.ComponentBuild = ComponentBuild;
  exports.ComponentScroll = ComponentScroll;
  exports.ComponentText = ComponentText;
  exports.ComponentTexture = ComponentTexture;
  exports.MathArray = BaseArray;
  exports.MathClock = Clock;
  exports.MathColor = color;
  exports.MathMatrix3 = Matrix3;
  exports.MathMatrix4 = Matrix4;
  exports.MathPosition = Position;
  exports.MathRandom = Random;
  exports.MathTime = time;
  exports.MathVector = Vector;
  exports.MathVector2 = Vector2;
  exports.MathVector3 = Vector3;
  exports.MathVector4 = Vector4;
  exports.ResourceAudio = AudioControl;
  exports.ResourceImage = ImageControl;
  exports.ResourceLoad = Load;
  exports.ResourceWebAudio = WebAudio;
  exports.ResourceWebImage = WebImage;
  exports.ResourceWxgameAudio = WxgameAudio;
  exports.ResourceWxgameImage = WxgameImage;
  exports.UtilCanvas = Canvas;
  exports.UtilCollsion = Collision;
  exports.UtilLoaderMap = Loader;
  exports.UtilPointInRect = UtilPointInRect;
  exports.UtilRecursiveMap = UtilRecursiveMap;
  exports.UtilRender = Render;
  exports.UtilTouch = Touch;
  exports.UtilWebMouseListen = UtilWebMouseListen;
  exports.UtilWebTouchListen = UtilWebTouchListen;
  exports.UtilWxgameTouchListen = UtilWxgameTouchListen;
  exports.UtilWxgameVary = UtilWxgameVary;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
