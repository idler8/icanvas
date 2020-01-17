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

  /**
   * @class 扩展数组类
   */
  var Vector =
  /*#__PURE__*/
  function () {
    createClass(Vector, [{
      key: "length",
      get: function get() {
        return this.elements ? this.elements.length : 0;
      }
    }]);

    function Vector() {
      classCallCheck(this, Vector);

      this.elements = [];
      if (arguments.length) for (var i = 0; i < arguments.length; i++) {
        this.elements[i] = arguments[i];
      }
    } //向量置零


    createClass(Vector, [{
      key: "same",
      value: function same(n) {
        for (var i = 0; i < this.length; i++) {
          this.elements[i] = n;
        }

        return this;
      } //类型变换

    }, {
      key: "typeTo",
      value: function typeTo(superClass) {
        this.elements = new superClass(this.elements);
        return this;
      } //向量归一化

    }, {
      key: "normalize",
      value: function normalize() {
        var total = 0;

        for (var i = 0, len = this.length; i < len; i++) {
          total += this.elements[i] * this.elements[i];
        }

        total = Math.sqrt(total);
        if (!total) return this.same(0);
        if (total == 1) return this;

        for (var _i = 0; _i < this.length; _i++) {
          this.elements[_i] /= total;
        }

        return this;
      }
      /**
       * 将数组所有内容设置为同一个值
       * @param {Any} n
       */

    }, {
      key: "set",
      value: function set() {
        if (!arguments.length) return this;

        for (var i = 0; i < arguments.length; i++) {
          this.elements[i] = arguments[i];
        }

        return this;
      }
      /**
       * 将数组参数分别设置为float数组的值
       * @param {Array} float
       */

    }, {
      key: "setApply",
      value: function setApply(vector) {
        if (vector === this) return this;
        return this.set.apply(this, vector.elements || vector);
      }
      /**
       * 拷贝本类
       */

    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor().setApply(this);
      }
      /**
       * 判断数组长度和内部值全部相同
       * @param {Array} float 用来比较的数组
       * @param {Boolean} absolute 是否判断长度相同
       */

    }, {
      key: "equals",
      value: function equals(_float) {
        var absolute = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        if (absolute && this.length != _float.length) return false;
        var length = absolute ? this.length : Math.min(this.length, _float.length);

        for (var i = 0; i < length; i++) {
          if (this[i] != _float[i]) return false;
        }

        return true;
      }
      /**
       * 判断数组各值和各实参相同
       */

    }, {
      key: "equalsApply",
      value: function equalsApply() {
        return this.equals(arguments);
      }
      /**
       * 向量加法
       */

    }, {
      key: "add",
      value: function add() {
        if (!arguments.length) return this;

        for (var i = 0; i < arguments.length; i++) {
          this.elements[i] += arguments[i];
        }

        return this;
      }
    }, {
      key: "addApply",
      value: function addApply(vector) {
        return this.add.apply(this, vector.elements || vector);
      }
      /**
       * 向量减法
       */

    }, {
      key: "sub",
      value: function sub() {
        if (!arguments.length) return this;

        for (var i = 0; i < arguments.length; i++) {
          this.elements[i] -= arguments[i];
        }

        return this;
      }
    }, {
      key: "subApply",
      value: function subApply(vector) {
        return this.sub.apply(this, vector.elements || vector);
      }
      /**
       * 向量乘法
       */

    }, {
      key: "mult",
      value: function mult() {
        if (!arguments.length) return this;

        for (var i = 0; i < arguments.length; i++) {
          this.elements[i] *= arguments[i];
        }

        return this;
      }
    }, {
      key: "multApply",
      value: function multApply(vector) {
        return this.mult.apply(this, vector.elements || vector);
      }
      /**
       * 向量除法
       */

    }, {
      key: "div",
      value: function div() {
        if (!arguments.length) return this;

        for (var i = 0; i < arguments.length; i++) {
          this.elements[i] /= arguments[i];
        }

        return this;
      }
    }, {
      key: "divApply",
      value: function divApply(vector) {
        return this.div.apply(this, vector.elements || vector);
      }
    }]);

    return Vector;
  }();

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
      value: function dist() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var dx = this.x - x;
        var dy = this.y - y;
        return Math.sqrt(dx * dx + dy * dy);
      }
    }, {
      key: "distVector",
      value: function distVector(vector2) {
        return this.dist(vector2.x, vector2.y);
      } //计算夹角

    }, {
      key: "angle",
      value: function angle(vector2) {
        var mag = this.dist() * vector2.dist();
        var dot = this.x * vector2.x + this.y * vector2.y;
        return Math.acos(dot / mag);
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
              intersect = yi > this.y != yj > this.y && this.x < (xj - xi) * (this.y - yi) / (yj - yi) + xi;
          if (intersect) inside = !inside;
        }

        return inside;
      }
    }, {
      key: "multiplyMatrix4",
      value: function multiplyMatrix4(matrix4) {
        var e = matrix4.elements;
        var p = this.elements;
        var w = 1 / (e[3] * p[0] + e[7] * p[1] + e[15]);
        return this.set((e[0] * p[0] + e[4] * p[1] + e[12]) * w, (e[1] * p[0] + e[5] * p[1] + e[13]) * w);
      }
    }, {
      key: "x",
      get: function get() {
        return this.elements[0];
      },
      set: function set(x) {
        this.elements[0] = x;
      }
    }, {
      key: "y",
      get: function get() {
        return this.elements[1];
      },
      set: function set(y) {
        this.elements[1] = y;
      }
    }]);

    return Vector2;
  }(Vector);

  var Vector3 =
  /*#__PURE__*/
  function (_Vector) {
    inherits(Vector3, _Vector);

    function Vector3() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      classCallCheck(this, Vector3);

      return possibleConstructorReturn(this, getPrototypeOf(Vector3).call(this, x, y, z));
    }

    createClass(Vector3, [{
      key: "dist",
      //距离计算
      value: function dist() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var dx = this.x - x;
        var dy = this.y - y;
        var dz = this.z - z;
        return Math.sqrt(dx * dx + dy * dy + dz * dz);
      }
    }, {
      key: "distVector",
      value: function distVector(vector3) {
        return this.dist(vector3.x, vector3.y, vector3.z);
      } //计算夹角

    }, {
      key: "angle",
      value: function angle(vector3) {
        var mag = this.dist() * vector3.dist();
        var dot = this.x * vector3.x + this.y * vector3.y + this.z * vector3.z;
        return Math.acos(dot / mag);
      }
    }, {
      key: "multiplyMatrix4",
      value: function multiplyMatrix4(matrix4) {
        var p = this.elements;
        var e = matrix4.elements;
        var w = 1 / (e[3] * p[0] + e[7] * p[1] + e[11] * p[2] + e[15]);
        return this.set((e[0] * p[0] + e[4] * p[1] + e[8] * p[2] + e[12]) * w, (e[1] * p[0] + e[5] * p[1] + e[9] * p[2] + e[13]) * w, (e[2] * p[0] + e[6] * p[1] + e[10] * p[2] + e[14]) * w);
      }
    }, {
      key: "x",
      get: function get() {
        return this.elements[0];
      },
      set: function set(x) {
        this.elements[0] = x;
      }
    }, {
      key: "y",
      get: function get() {
        return this.elements[1];
      },
      set: function set(y) {
        this.elements[1] = y;
      }
    }, {
      key: "z",
      get: function get() {
        return this.elements[2];
      },
      set: function set(z) {
        this.elements[2] = z;
      }
    }]);

    return Vector3;
  }(Vector);

  var Matrix4 =
  /*#__PURE__*/
  function (_Vector) {
    inherits(Matrix4, _Vector);

    function Matrix4(vector) {
      var _this;

      classCallCheck(this, Matrix4);

      _this = possibleConstructorReturn(this, getPrototypeOf(Matrix4).call(this, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1));
      if (vector) _this.setApply(vector);
      return _this;
    } //重置为单位矩阵


    createClass(Matrix4, [{
      key: "identity",
      value: function identity() {
        return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      } //乘以Matrix4

    }, {
      key: "multiply",
      value: function multiply(matrix4) {
        var i, e, a, b, ai0, ai1, ai2, ai3; // Calculate e = a * b

        e = this.elements;
        a = this.elements;
        b = matrix4.elements; // If e equals b, copy b to temporary matrix.

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
      }
      /**
       * 乘以一个点返回一个新点
       */

    }, {
      key: "multiplyVector3",
      value: function multiplyVector3(vector3) {
        var e = this.elements;
        var p = vector3.elements;
        var x = p[0] * e[0] + p[1] * e[4] + p[2] * e[8] + e[12];
        var y = p[0] * e[1] + p[1] * e[5] + p[2] * e[9] + e[13];
        var z = p[0] * e[2] + p[1] * e[6] + p[2] * e[10] + e[14];
        vector3.x = x;
        vector3.y = y;
        vector3.z = z;
        return vector3;
      } // multiplyVector4(vector4) {
      // 	var e = this.elements;
      // 	var p = vector4.elements;
      // 	return new Vector4(
      // 		p[0] * e[0] + p[1] * e[4] + p[2] * e[8] + p[3] * e[12],
      // 		p[0] * e[1] + p[1] * e[5] + p[2] * e[9] + p[3] * e[13],
      // 		p[0] * e[2] + p[1] * e[6] + p[2] * e[10] + p[3] * e[14],
      // 		p[0] * e[3] + p[1] * e[7] + p[2] * e[11] + p[3] * e[15],
      // 	);
      // }

      /**
       * 转置矩阵
       */

    }, {
      key: "transpose",
      value: function transpose() {
        var e = this.elements;
        return this.set(e[0], e[4], e[8], e[12], e[1], e[5], e[9], e[13], e[2], e[6], e[10], e[14], e[3], e[7], e[11], e[15]);
      }
      /**
       * 设置为逆矩阵
       */

    }, {
      key: "invert",
      value: function invert(matrix4) {
        var i, s, d, inv, det;
        s = matrix4 ? matrix4.elements || matrix4 : this.elements;
        d = this.elements;
        inv = Matrix4.invertHandle || (Matrix4.invertHandle = []);
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
        if (det === 0) return this;
        det = 1 / det;

        for (i = 0; i < 16; i++) {
          d[i] = inv[i] * det;
        }

        return this;
      } // /**
      //  * 设置正交投影
      //  */

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
        e = this.elements;
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
      } // ortho(left, right, bottom, top, near, far) {
      //     return this.multiply(new Matrix4().setOrtho(left, right, bottom, top, near, far));
      // }
      // /**
      //  * 设置透视投影
      //  */
      // setFrustum(left, right, bottom, top, near, far) {
      //     var e, rw, rh, rd;
      //     if (left === right || top === bottom || near === far) {
      //         throw 'null frustum';
      //     }
      //     if (near <= 0) {
      //         throw 'near <= 0';
      //     }
      //     if (far <= 0) {
      //         throw 'far <= 0';
      //     }
      //     rw = 1 / (right - left);
      //     rh = 1 / (top - bottom);
      //     rd = 1 / (far - near);
      //     e = this.elements;
      //     e[0] = 2 * near * rw;
      //     e[1] = 0;
      //     e[2] = 0;
      //     e[3] = 0;
      //     e[4] = 0;
      //     e[5] = 2 * near * rh;
      //     e[6] = 0;
      //     e[7] = 0;
      //     e[8] = (right + left) * rw;
      //     e[9] = (top + bottom) * rh;
      //     e[10] = -(far + near) * rd;
      //     e[11] = -1;
      //     e[12] = 0;
      //     e[13] = 0;
      //     e[14] = -2 * near * far * rd;
      //     e[15] = 0;
      //     return this;
      // }
      // frustum (left, right, bottom, top, near, far) {
      //     return this.multiply(new Matrix4().setFrustum(left, right, bottom, top, near, far));
      // }
      // /**
      //  * 通过视锥角度和长宽比设置透视投影
      //  */
      // setPerspective = function(fovy, aspect, near, far) {
      //     var e, rd, s, ct;
      //     if (near === far || aspect === 0) {
      //         throw 'null frustum';
      //     }
      //     if (near <= 0) {
      //         throw 'near <= 0';
      //     }
      //     if (far <= 0) {
      //         throw 'far <= 0';
      //     }
      //     fovy = (Math.PI * fovy) / 180 / 2;
      //     s = Math.sin(fovy);
      //     if (s === 0) {
      //         throw 'null frustum';
      //     }
      //     rd = 1 / (far - near);
      //     ct = Math.cos(fovy) / s;
      //     e = this.elements;
      //     e[0] = ct / aspect;
      //     e[1] = 0;
      //     e[2] = 0;
      //     e[3] = 0;
      //     e[4] = 0;
      //     e[5] = ct;
      //     e[6] = 0;
      //     e[7] = 0;
      //     e[8] = 0;
      //     e[9] = 0;
      //     e[10] = -(far + near) * rd;
      //     e[11] = -1;
      //     e[12] = 0;
      //     e[13] = 0;
      //     e[14] = -2 * near * far * rd;
      //     e[15] = 0;
      //     return this;
      // }
      // perspective (fovy, aspect, near, far) {
      //     return this.multiply(new Matrix4().setPerspective(fovy, aspect, near, far));
      // }

      /**
       * 矩阵缩放
       */

    }, {
      key: "setScale",
      value: function setScale() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
        var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
        return this.set(x, 0, 0, 0, 0, y, 0, 0, 0, 0, z, 0, 0, 0, 0, 1);
      }
    }, {
      key: "scale",
      value: function scale() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
        var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
        return this.mult(x, x, x, x, y, y, y, y, z, z, z, z);
      }
      /**
       * 矩阵移动
       */

    }, {
      key: "setTranslate",
      value: function setTranslate() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, x, y, z, 1);
      }
    }, {
      key: "translate",
      value: function translate() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var e = this.elements;
        e[12] += e[0] * x + e[4] * y + e[8] * z;
        e[13] += e[1] * x + e[5] * y + e[9] * z;
        e[14] += e[2] * x + e[6] * y + e[10] * z;
        e[15] += e[3] * x + e[7] * y + e[11] * z;
        return this;
      }
      /**
       * 矩阵旋转(弧度)
       */

    }, {
      key: "setRotate",
      value: function setRotate(angle, x, y, z) {
        var s, c, len, rlen, nc, xy, yz, zx, xs, ys, zs, e;
        e = this.elements;
        s = Math.sin(angle);
        c = Math.cos(angle);

        if (0 !== x && 0 === y && 0 === z) {
          if (x < 0) s = -s;
          return this.set(1, 0, 0, 0, 0, c, -s, 0, 0, s, c, 0, 0, 0, 0, 1);
        } else if (0 === x && 0 !== y && 0 === z) {
          if (y < 0) s = -s;
          return this.set(c, 0, -s, 0, 0, 1, 0, 0, s, 0, c, 0, 0, 0, 0, 1);
        } else if (0 === x && 0 === y && 0 !== z) {
          if (z < 0) s = -s;
          return this.set(c, s, 0, 0, -s, c, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        } else {
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
          return this.set(x * x * nc + c, xy * nc + zs, zx * nc - ys, 0, xy * nc - zs, y * y * nc + c, yz * nc + xs, 0, zx * nc + ys, yz * nc - xs, z * z * nc + c, 0, 0, 0, 0, 1);
        }
      }
    }, {
      key: "rotate",
      value: function rotate(angle, x, y, z) {
        return this.multiply(new Matrix4().setRotate(angle, x, y, z));
      } // /**
      //  * 设置矩阵视角
      //  */
      // setLookAt = function(eyeX, eyeY, eyeZ, centerX, centerY, centerZ, upX, upY, upZ) {
      // 	var e, fx, fy, fz, rlf, sx, sy, sz, rls, ux, uy, uz;
      // 	fx = centerX - eyeX;
      // 	fy = centerY - eyeY;
      // 	fz = centerZ - eyeZ;
      // 	// Normalize f.
      // 	rlf = 1 / Math.sqrt(fx * fx + fy * fy + fz * fz);
      // 	fx *= rlf;
      // 	fy *= rlf;
      // 	fz *= rlf;
      // 	// Calculate cross product of f and up.
      // 	sx = fy * upZ - fz * upY;
      // 	sy = fz * upX - fx * upZ;
      // 	sz = fx * upY - fy * upX;
      // 	// Normalize s.
      // 	rls = 1 / Math.sqrt(sx * sx + sy * sy + sz * sz);
      // 	sx *= rls;
      // 	sy *= rls;
      // 	sz *= rls;
      // 	// Calculate cross product of s and f.
      // 	ux = sy * fz - sz * fy;
      // 	uy = sz * fx - sx * fz;
      // 	uz = sx * fy - sy * fx;
      // 	return this.set(sx, ux, -fx, 0, sy, uy, -fy, 0, sz, uz, -fz, 0, 0, 0, 0, 1).translate(-eyeX, -eyeY, -eyeZ);
      // };
      // lookAt(eyeX, eyeY, eyeZ, centerX, centerY, centerZ, upX, upY, upZ) {
      // 	return this.multiply(new Matrix4().setLookAt(eyeX, eyeY, eyeZ, centerX, centerY, centerZ, upX, upY, upZ));
      // }
      // /**
      //  * Multiply the matrix for project vertex to plane from the right.
      //  * @param plane The array[A, B, C, D] of the equation of plane "Ax + By + Cz + D = 0".
      //  * @param light The array which stored coordinates of the light. if light[3]=0, treated as parallel light.
      //  * @return this
      //  */
      // dropShadow(plane, light) {
      // 	var mat = new Matrix4();
      // 	var e = mat.elements;
      // 	var dot = plane[0] * light[0] + plane[1] * light[1] + plane[2] * light[2] + plane[3] * light[3];
      // 	e[0] = dot - light[0] * plane[0];
      // 	e[1] = -light[1] * plane[0];
      // 	e[2] = -light[2] * plane[0];
      // 	e[3] = -light[3] * plane[0];
      // 	e[4] = -light[0] * plane[1];
      // 	e[5] = dot - light[1] * plane[1];
      // 	e[6] = -light[2] * plane[1];
      // 	e[7] = -light[3] * plane[1];
      // 	e[8] = -light[0] * plane[2];
      // 	e[9] = -light[1] * plane[2];
      // 	e[10] = dot - light[2] * plane[2];
      // 	e[11] = -light[3] * plane[2];
      // 	e[12] = -light[0] * plane[3];
      // 	e[13] = -light[1] * plane[3];
      // 	e[14] = -light[2] * plane[3];
      // 	e[15] = dot - light[3] * plane[3];
      // 	return this.concat(mat);
      // }
      // /**
      //  * Multiply the matrix for project vertex to plane from the right.(Projected by parallel light.)
      //  * @param normX, normY, normZ The normal vector of the plane.(Not necessary to be normalized.)
      //  * @param planeX, planeY, planeZ The coordinate of arbitrary points on a plane.
      //  * @param lightX, lightY, lightZ The vector of the direction of light.(Not necessary to be normalized.)
      //  * @return this
      //  */
      // ropShadowDirectionally(normX, normY, normZ, planeX, planeY, planeZ, lightX, lightY, lightZ) {
      // 	var a = planeX * normX + planeY * normY + planeZ * normZ;
      // 	return this.dropShadow([normX, normY, normZ, -a], [lightX, lightY, lightZ, 0]);
      // }

    }]);

    return Matrix4;
  }(Vector);

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

  function hex2rgb(hex, out) {
    out = out || [];
    out[0] = (hex >> 16 & 0xff) / 255;
    out[1] = (hex >> 8 & 0xff) / 255;
    out[2] = (hex & 0xff) / 255;
    return out;
  }

  function hex2string(hex) {
    hex = hex.toString(16);
    hex = '000000'.substr(0, 6 - hex.length) + hex;
    return "#".concat(hex);
  }

  function string2hex(string) {
    if (typeof string === 'string' && string[0] === '#') {
      string = string.substr(1);
    }

    return parseInt(string, 16);
  }

  function rgb2hex(rgb) {
    return (rgb[0] * 255 << 16) + (rgb[1] * 255 << 8) + (rgb[2] * 255 | 0);
  }

  var Color =
  /*#__PURE__*/
  function (_Vector) {
    inherits(Color, _Vector);

    function Color(color) {
      var _this;

      classCallCheck(this, Color);

      _this = possibleConstructorReturn(this, getPrototypeOf(Color).call(this, 1, 1, 1, 1));

      _this.setApply(arguments.length > 1 ? arguments : color);

      return _this;
    }

    createClass(Color, [{
      key: "setApply",
      value: function setApply(vector) {
        if (typeof vector == 'string') {
          this.string = vector;
        } else if (typeof vector == 'number') {
          this.number = vector;
        } else {
          get(getPrototypeOf(Color.prototype), "setApply", this).call(this, vector);
        }

        return this;
      }
    }, {
      key: "number",
      set: function set(n) {
        hex2rgb(n, this.elements);
      },
      get: function get() {
        return rgb2hex(this.elements);
      }
    }, {
      key: "string",
      set: function set(s) {
        hex2rgb(string2hex(s), this.elements);
      },
      get: function get() {
        return hex2string(rgb2hex(this.elements));
      }
    }, {
      key: "red",
      get: function get() {
        return this.elements[0];
      },
      set: function set(x) {
        this.elements[0] = x;
      }
    }, {
      key: "green",
      get: function get() {
        return this.elements[1];
      },
      set: function set(y) {
        this.elements[1] = y;
      }
    }, {
      key: "blue",
      get: function get() {
        return this.elements[2];
      },
      set: function set(z) {
        this.elements[2] = z;
      }
    }, {
      key: "alpha",
      get: function get() {
        return this.elements[3];
      },
      set: function set(z) {
        this.elements[3] = z;
      }
    }]);

    return Color;
  }(Vector);

  var Week = ['日', '一', '二', '三', '四', '五', '六'];

  var Time =
  /*#__PURE__*/
  function () {
    function Time() {
      classCallCheck(this, Time);

      this.Date = null;
    }
    /**
     * 设置时间
     * @param {Any} value 设置时间值
     * @param {String} fmt 源格式
     * jstimestamp 13位时间戳 到毫秒
     * timestamp 10位时间戳 到秒
     */


    createClass(Time, [{
      key: "Set",
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
  }();

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

  var Collision =
  /*#__PURE__*/
  function () {
    function Collision() {
      classCallCheck(this, Collision);

      this.TouchHandle = new Vector3();
    }

    createClass(Collision, [{
      key: "InComponent",
      value: function InComponent(Component, touch) {
        if (!Component.visible) return false;
        if (!Component.checkPoint) return true;
        this.TouchHandle.setApply(touch);
        if (Component.checkPoint(Component.getLocalVector(this.TouchHandle))) return true;
      }
    }, {
      key: "Recursive",
      value: function Recursive(Component, touch) {
        var Action = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'touchTap';
        if (!Component) return false;

        if (Component instanceof Array) {
          for (var i = Component.length - 1; i >= 0; i--) {
            var Res = this.Recursive(Component[i], touch, Action);
            if (Res) return Res;
          }
        } else {
          if (!Component.visible) return false;

          if (Component.touchChildren && Component.children.length) {
            var _Res = this.Recursive(Component.children, touch, Action);

            if (_Res) return _Res;
          }

          if (!this.InComponent(Component, touch)) return false;
          if (!Component[Action]) return Component.touchStop;
          var Result = Component[Action](this.TouchHandle);
          return Result === undefined ? true : Result;
        }
      }
    }]);

    return Collision;
  }();

  var Event =
  /*#__PURE__*/
  function () {
    function Event() {
      classCallCheck(this, Event);

      this._events = {};
    }

    createClass(Event, [{
      key: "listen",
      value: function listen() {
        for (var i = 0; i < arguments.length; i++) {
          this.on(arguments[i]);
        }

        return this;
      }
    }, {
      key: "on",
      value: function on(evt, fn, context) {
        var once = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        if (!context) context = this;
        if (!fn) fn = context[evt];
        if (!fn) return this;
        if (!this._events[evt]) this._events[evt] = [];

        this._events[evt].push({
          fn: fn,
          context: context,
          once: once
        });

        return this;
      }
    }, {
      key: "once",
      value: function once(evt, fn, context) {
        return this.on(evt, fn, context, true);
      }
    }, {
      key: "off",
      value: function off(evt, fn, context) {
        if (!this._events[evt]) return this;
        if (!context) context = this;

        var events = this._events[evt].filter(function (e) {
          return e.context !== context && e.fn !== fn;
        });

        if (events.length) {
          this._events[evt] = events;
        } else {
          delete this._events[evt];
        }

        return this;
      }
    }, {
      key: "emit",
      value: function emit(evt) {
        if (!this._events[evt]) return this;
        var listeners = this._events[evt];
        var args = Array.prototype.splice.call(arguments, 1);

        for (var i = 0; i < listeners.length; i++) {
          var _listeners$i = listeners[i],
              fn = _listeners$i.fn,
              context = _listeners$i.context,
              once = _listeners$i.once;
          fn.apply(context, args);
          if (once) listeners.splice(i--, 1);
        }

        if (!listeners.length) delete this._events[evt];
        return this;
      }
    }]);

    return Event;
  }();

  var TouchEvent =
  /*#__PURE__*/
  function (_Vector) {
    inherits(TouchEvent, _Vector);

    function TouchEvent(time, x, y) {
      var _this;

      classCallCheck(this, TouchEvent);

      _this = possibleConstructorReturn(this, getPrototypeOf(TouchEvent).call(this, x, y)); //当前位置

      _this.start = new Vector2(x, y); //起始位置

      _this.tick = new Vector2(0, 0); //本帧移动

      _this.begin = _this.over = time; //触摸时长

      return _this;
    }

    createClass(TouchEvent, [{
      key: "set",
      value: function set(x, y) {
        this.tick.set(x - this.x, y - this.y);
        return get(getPrototypeOf(TouchEvent.prototype), "set", this).call(this, x, y);
      }
    }, {
      key: "long",
      get: function get() {
        return this.over - this.begin;
      }
    }, {
      key: "startX",
      get: function get() {
        return this.start.x;
      }
    }, {
      key: "startY",
      get: function get() {
        return this.start.y;
      }
    }, {
      key: "endX",
      get: function get() {
        return this.x;
      }
    }, {
      key: "endY",
      get: function get() {
        return this.y;
      }
    }, {
      key: "moveX",
      get: function get() {
        return this.x - this.start.x;
      }
    }, {
      key: "moveY",
      get: function get() {
        return this.y - this.start.y;
      }
    }, {
      key: "distance",
      get: function get() {
        return this.distVector(this.start);
      }
    }]);

    return TouchEvent;
  }(Vector2);

  var Touch =
  /*#__PURE__*/
  function (_Event) {
    inherits(Touch, _Event);

    function Touch() {
      var _this2;

      classCallCheck(this, Touch);

      _this2 = possibleConstructorReturn(this, getPrototypeOf(Touch).call(this));
      _this2.size = new Vector2();
      _this2.offset = new Vector2();
      _this2.touches = {};
      return _this2;
    }

    createClass(Touch, [{
      key: "getX",
      value: function getX(x) {
        return (x - this.offset.x) * this.size.x;
      }
    }, {
      key: "getY",
      value: function getY(y) {
        return (y - this.offset.y) * this.size.y;
      }
    }, {
      key: "start",
      value: function start(e) {
        var now = Date.now();

        for (var i = 0, l = e.changedTouches.length; i < l; i++) {
          var touch = e.changedTouches[i];
          var id = touch.identifier;
          this.touches[id] = new TouchEvent(now, this.getX(touch.clientX), this.getY(touch.clientY));
          this.emit('touchStart', this.touches[id]);
        }

        return this;
      }
    }, {
      key: "move",
      value: function move(e) {
        for (var i = 0, l = e.changedTouches.length; i < l; i++) {
          var touch = e.changedTouches[i];
          var id = touch.identifier;
          if (!this.touches[id]) continue;
          this.touches[id].set(this.getX(touch.clientX), this.getY(touch.clientY));
          this.emit('touchMove', this.touches[id]);
        }

        return this;
      }
    }, {
      key: "end",
      value: function end(e) {
        var now = Date.now();

        for (var i = 0, l = e.changedTouches.length; i < l; i++) {
          var touch = e.changedTouches[i];
          var id = touch.identifier;
          if (!this.touches[id]) continue;
          this.touches[id].over = now;
          this.touches[id].set(this.getX(touch.clientX), this.getY(touch.clientY), now);
          this.emit('touchEnd', this.touches[id]);
          delete this.touches[id];
        }

        return this;
      }
    }]);

    return Touch;
  }(Event);

  var Loader =
  /*#__PURE__*/
  function () {
    function Loader() {
      classCallCheck(this, Loader);

      this.resources = {};
    }

    createClass(Loader, [{
      key: "Set",
      value: function Set(url) {
        throw Error('请先挂载加载函数(Set)');
      }
    }, {
      key: "load",
      value: function load(key, url) {
        var _this = this;

        return this.Set(url).then(function (res) {
          _this.resources[key] = res;
        });
      }
    }, {
      key: "preLoad",
      value: function preLoad() {
        var _this2 = this;

        var map = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
        var loaded = arguments.length > 2 ? arguments[2] : undefined;
        var Keys = Object.keys(map);
        return Promise.all(Keys.map(function (key) {
          var load = _this2.load(prefix + key, map[key]);

          return loaded ? load.then(loaded) : load;
        }));
      }
    }, {
      key: "loadMap",
      value: function loadMap() {
        var _this3 = this;

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
            Object.assign(Result, _this3.loadMap(map[k], root, perfix + k + '/', exts));
          }
        });
        return Result;
      }
    }]);

    return Loader;
  }();

  var Clock =
  /*#__PURE__*/
  function (_Event) {
    inherits(Clock, _Event);

    function Clock() {
      var _this;

      classCallCheck(this, Clock);

      _this = possibleConstructorReturn(this, getPrototypeOf(Clock).call(this));
      _this.time = _this.then = _this.history = Date.now();
      _this.interval = 1000 / 60;
      _this.tick = _this.move = 0;
      return _this;
    }

    createClass(Clock, [{
      key: "step",
      value: function step() {
        this.time = Date.now(); //当前时间

        var change = this.time - this.then; //当前时间和上一帧的差

        if (change < this.interval) return false; //小于一帧

        this.tick = change / this.interval | 0; //本次步进帧数

        var delta = change % this.interval; //最多步进整数帧时长

        this.then = this.time - delta; //记录本帧执行到的时间点

        this.move = this.time - this.history; //真实变化时长

        this.history = this.time; //记录上一次变化时间

        return true; //真实变化时长
      }
    }, {
      key: "run",
      value: function run() {
        var Interval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000 / 60;
        this.interval = Interval;
        var render = this;

        var HandleUpdate = function HandleUpdate() {
          requestAnimationFrame(HandleUpdate);
          if (!render.step()) return;
          render.emit('start');
          render.emit('tick');
          render.emit('end');
        };

        requestAnimationFrame(HandleUpdate);
        return this;
      }
    }]);

    return Clock;
  }(Event);

  var CanvasRender =
  /*#__PURE__*/
  function () {
    function CanvasRender(options) {
      classCallCheck(this, CanvasRender);

      if (!options.context) options.context = options.canvas.getContext('2d');
      this.context = options.context;
      this.canvas = options.context.canvas;
      this.renderArray = [];
    }

    createClass(CanvasRender, [{
      key: "update",
      value: function update() {
        for (var i = 0, len = this.renderArray.length; i < len; i++) {
          this.renderArray[i].emit('update');
          if (this.renderArray[i].update) this.renderArray[i].update(this);
          this.renderArray[i].emit('updated');
        }

        this.renderArray.length = 0;
      }
    }, {
      key: "drawElements",
      value: function drawElements(texture, Matrix, blendColor) {
        this.transform(Matrix);
        return texture.coord ? this.drawClipImage(texture.baseTexture.texture, texture.coord) : this.drawImage(texture.baseTexture.texture);
      }
    }, {
      key: "transform",
      value: function transform(matrix) {
        var e = matrix.elements;
        this.context.setTransform(e[0], e[1], e[4], e[5], e[12], e[13]);
        return this;
      }
    }, {
      key: "drawImage",
      value: function drawImage(image) {
        this.context.drawImage(image, -1, -1, 2, 2);
        return this;
      }
    }, {
      key: "drawClipImage",
      value: function drawClipImage(image, coord) {
        this.context.drawImage(image, coord[0], coord[1], coord[2], coord[3], -1, -1, 2, 2);
        return this;
      }
    }, {
      key: "fillText",
      value: function fillText(value, font, fillStyle) {
        var ctx = this.context;
        if (ctx.textAlign != 'left') ctx.textAlign = 'left';
        if (ctx.textBaseline != 'top') ctx.textBaseline = 'top';
        if (ctx.font != font) ctx.font = font;
        if (ctx.fillStyle != fillStyle) ctx.fillStyle = fillStyle;
        ctx.fillText(value, 0, 0);
        return this;
      }
    }]);

    return CanvasRender;
  }();

  function TextureFactory(webgl) {
    return (
      /*#__PURE__*/
      function () {
        function Texture(baseTexture, x, y, width, height) {
          classCallCheck(this, Texture);

          this.baseTexture = baseTexture;
          this.width = width;
          this.height = height;
          this.coord = this.getCoord(x, y, width, height, baseTexture.width, baseTexture.height);
        }

        createClass(Texture, [{
          key: "getCoord",
          value: function getCoord(x, y, width, height, realWidth, realHeight) {
            if (x == 0 && y == 0 && width == realWidth && height == realHeight) return false;

            if (webgl) {
              var left = x / realWidth;
              var top = y / realHeight;
              var right = left + width / realWidth;
              var bottom = top + height / realHeight;
              return [right, top, left, top, left, bottom, right, bottom];
            } else {
              return [x, y, width, height];
            }
          }
        }]);

        return Texture;
      }()
    );
  }
  function ImageTextureFactory(Texture, buildTexture) {
    return (
      /*#__PURE__*/
      function () {
        function ImageTexture(image) {
          classCallCheck(this, ImageTexture);

          this.width = image.width;
          this.height = image.height;
          this.texture = buildTexture ? buildTexture(image) : image;
        }

        createClass(ImageTexture, [{
          key: "getTexture",
          value: function getTexture(x, y, width, height) {
            return new Texture(this, x, y, width, height);
          }
        }]);

        return ImageTexture;
      }()
    );
  }
  function TextureControlFactory(ImageControl, ImageTexture) {
    return (
      /*#__PURE__*/
      function (_ImageControl) {
        inherits(TextureControl, _ImageControl);

        function TextureControl() {
          classCallCheck(this, TextureControl);

          return possibleConstructorReturn(this, getPrototypeOf(TextureControl).apply(this, arguments));
        }

        createClass(TextureControl, [{
          key: "Set",
          //读取并生成贴图对象
          value: function Set(url) {
            return get(getPrototypeOf(TextureControl.prototype), "Set", this).call(this, url).then(function (img) {
              var baseTexture = new ImageTexture(img);
              return baseTexture.getTexture(0, 0, baseTexture.width, baseTexture.height);
            });
          } //生成雪碧图对象

        }, {
          key: "SetClip",
          value: function SetClip(key, name, x, y, width, height) {
            if (!this.resources[key]) return this;
            var baseTexture = this.resources[key].baseTexture;
            this.resources[key + '//' + name] = baseTexture.getTexture(x, y, width, height);
            return this;
          }
        }]);

        return TextureControl;
      }(ImageControl)
    );
  }
  function FontControlFactory(gl, getCanvas, FontTexture) {
    return (
      /*#__PURE__*/
      function () {
        function FontControl() {
          classCallCheck(this, FontControl);

          this.familys = {};

          for (var i = 0; i < arguments.length; i++) {
            var family = arguments[i].split(/\s+/);
            this.familys[arguments[i]] = {
              baseTextures: [],
              values: {},
              family: family[1],
              size: parseFloat(family[0]),
              weight: family[2] || ''
            };
          }

          this["default"] = arguments[0];
        }

        createClass(FontControl, [{
          key: "addBaseTexture",
          value: function addBaseTexture(font) {
            return new FontTexture(gl, getCanvas(), font.family, font.weight, font.size);
          }
        }, {
          key: "check",
          value: function check(font) {
            var baseTexture = font.baseTextures[0];
            if (!baseTexture || baseTexture.used >= baseTexture.max) font.baseTextures.unshift(baseTexture = this.addBaseTexture(font));
            return baseTexture;
          }
        }, {
          key: "get",
          value: function get(family, value) {
            var font = this.familys[family] || this.familys[this["default"]];
            if (font.values[value]) return font.values[value];
            font.values[value] = this.check(font).getTexture(value);
            return font.values[value];
          }
        }]);

        return FontControl;
      }()
    );
  }

  function getActiveAttrib(gl, Program) {
    var Attributes = {};

    for (var i = 0, len = gl.getProgramParameter(Program, gl.ACTIVE_ATTRIBUTES); i < len; i++) {
      var attr = gl.getActiveAttrib(Program, i); //size,type,name

      var id = Attributes[attr.name] = gl.getAttribLocation(Program, attr.name);
      gl.enableVertexAttribArray(id);
    }

    return Attributes;
  }
  function getActiveUniform(gl, Program) {
    var Uniforms = {};

    for (var i = 0, len = gl.getProgramParameter(Program, gl.ACTIVE_UNIFORMS); i < len; i++) {
      var attr = gl.getActiveUniform(Program, i); //size,type,name

      Uniforms[attr.name] = gl.getUniformLocation(Program, attr.name);
    }

    return Uniforms;
  }
  function createShader(gl, type, text) {
    var shader = gl.createShader(gl[type]);
    gl.shaderSource(shader, text);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.log(gl.getShaderInfoLog(shader));
      gl.deleteShader(shader);
      return null;
    }

    return shader;
  }
  function createProgram(gl, vert, frag) {
    var program = gl.createProgram();
    gl.attachShader(program, createShader(gl, 'VERTEX_SHADER', vert));
    gl.attachShader(program, createShader(gl, 'FRAGMENT_SHADER', frag));
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      gl.deleteProgram(program);
      gl.deleteShader(program);
      gl.deleteShader(program);
      throw '链接程序失败';
    }

    return program;
  }
  function createTexture(gl, img, options) {
    var texture = gl.createTexture(); // this.pixelStorei(this.UNPACK_FLIP_Y_WEBGL, 1);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img || null);
    return texture;
  }
  function createBuffer(gl, type, data, draw, buffer) {
    if (!buffer) buffer = gl.createBuffer();
    gl.bindBuffer(type, buffer);
    gl.bufferData(type, data, draw);
    return buffer;
  }
  function getExtension(gl) {
    //用WEBGL1就够了
    // let drawBuffers = gl.getExtension('WEBGL_draw_buffers');
    // let depthTexture = gl.getExtension('WEBKIT_WEBGL_depth_texture');
    // let loseContext = gl.getExtension('WEBGL_lose_context');
    var vertexArrayObject = gl.getExtension('OES_vertex_array_object') || gl.getExtension('MOZ_OES_vertex_array_object') || gl.getExtension('WEBKIT_OES_vertex_array_object'); // let anisotropicFiltering = gl.getExtension('EXT_texture_filter_anisotropic');
    // let uint32ElementIndex = gl.getExtension('OES_element_index_uint');
    // // Floats and half-floats
    // let floatTexture = gl.getExtension('OES_texture_float');
    // let floatTextureLinear = gl.getExtension('OES_texture_float_linear');
    // let textureHalfFloat = gl.getExtension('OES_texture_half_float');
    // let textureHalfFloatLinear = gl.getExtension('OES_texture_half_float_linear');

    var vertexAttribDivisor = gl.getExtension('ANGLE_instanced_arrays');

    gl.createVertexArray = function () {
      return vertexArrayObject.createVertexArrayOES();
    };

    gl.bindVertexArray = function (vao) {
      return vertexArrayObject.bindVertexArrayOES(vao);
    };

    gl.deleteVertexArray = function (vao) {
      return vertexArrayObject.deleteVertexArrayOES(vao);
    };

    gl.vertexAttribDivisor = function (a, b) {
      return vertexAttribDivisor.vertexAttribDivisorANGLE(a, b);
    };

    gl.drawElementsInstanced = function (a, b, c, d, e) {
      return vertexAttribDivisor.drawElementsInstancedANGLE(a, b, c, d, e);
    };

    gl.drawArraysInstanced = function (a, b, c, d) {
      return vertexAttribDivisor.drawArraysInstancedANGLE(a, b, c, d);
    };

    return gl;
  }

  var Shader =
  /*#__PURE__*/
  function () {
    function Shader(gl) {
      classCallCheck(this, Shader);

      this.gl = gl.gl || gl;
    }

    createClass(Shader, [{
      key: "createProgram",
      value: function createProgram$1() {
        if (this.program) return this;
        this.program = createProgram(this.gl, this.vert, this.frag);
        this.attributes = getActiveAttrib(this.gl, this.program);
        this.uniforms = getActiveUniform(this.gl, this.program);
        return this;
      }
    }, {
      key: "useProgram",
      value: function useProgram() {
        this.createProgram();
        this.gl.useProgram(this.program);
        return this;
      }
    }, {
      key: "createVertexArray",
      value: function createVertexArray(aPositionArray, aTextureCoordArray, drawElementsArray) {
        var gl = this.gl;
        var vao = gl.createVertexArray();
        gl.bindVertexArray(vao);
        var aPosition = createBuffer(gl, gl.ARRAY_BUFFER, aPositionArray || new Float32Array([1.0, -1.0, -1.0, -1.0, -1.0, 1.0, 1.0, 1.0]), gl.STATIC_DRAW);
        gl.bindBuffer(gl.ARRAY_BUFFER, aPosition);
        gl.vertexAttribPointer(this.attributes.aPosition, 2, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(this.attributes.aPosition);
        var aTextureCoord = createBuffer(gl, gl.ARRAY_BUFFER, aTextureCoordArray || new Float32Array([1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 1.0]), gl.STATIC_DRAW);
        gl.bindBuffer(gl.ARRAY_BUFFER, aTextureCoord);
        gl.vertexAttribPointer(this.attributes.aTextureCoord, 2, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(this.attributes.aTextureCoord);
        var drawElements = createBuffer(gl, gl.ELEMENT_ARRAY_BUFFER, drawElementsArray || new Uint16Array([3, 2, 1, 3, 1, 0]), gl.STATIC_DRAW);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, drawElements);
        gl.bindVertexArray(null);
        return vao;
      }
    }, {
      key: "drawElements",
      value: function drawElements(texture, Matrix, blendColor) {
        var gl = this.gl;

        if (blendColor) {
          gl.uniform4f(this.uniforms.uColor, blendColor.elements[0], blendColor.elements[1], blendColor.elements[2], blendColor.elements[3]);
        } else {
          gl.uniform4f(this.uniforms.uColor, 1, 1, 1, 1);
        }

        gl.uniformMatrix4fv(this.uniforms.uModelMatrix, false, Matrix.elements);
        if (this.beforeTexture === texture) return gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
        this.beforeTexture = texture;
        if (!texture.vao) texture.vao = this.createVertexArray(null, texture.coord ? new Float32Array(texture.coord) : null, null);
        gl.bindVertexArray(texture.vao);
        gl.bindTexture(gl.TEXTURE_2D, texture.baseTexture.texture);
        gl.uniform1i(this.uniforms.uSampler, 0);
        gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
      }
    }, {
      key: "vert",
      get: function get() {
        return ['attribute vec4 aPosition;', 'attribute vec2 aTextureCoord;', 'uniform mat4 uModelMatrix;', 'varying vec2 vTextureCoord;', 'void main()', '{', 'gl_Position =  uModelMatrix * aPosition;', // 'gl_PointSize = 100.0;',
        'vTextureCoord = aTextureCoord;', '}'].join('\n');
      }
    }, {
      key: "frag",
      get: function get() {
        return ['precision highp float;', 'uniform sampler2D uSampler;', 'varying vec2 vTextureCoord;', 'uniform vec4 uColor;', 'void main()', '{', 'vec4 color;', 'color = texture2D(uSampler,vTextureCoord);', // gl_FragCoord
        // gl_PointCoord
        'gl_FragColor = uColor * color;', // gl_FragData
        '}'].join('\n');
      }
    }]);

    return Shader;
  }();

  var WebGLRender =
  /*#__PURE__*/
  function () {
    function WebGLRender(options) {
      classCallCheck(this, WebGLRender);

      if (!options.context) options.context = options.canvas.getContext('webgl');
      var gl = this.buildWebGL(options.context).gl;
      this.canvas = gl.canvas;
      this.useProgram(new Shader(this.gl));
      this.renderArray = [];
    }

    createClass(WebGLRender, [{
      key: "update",
      value: function update() {
        for (var i = 0, len = this.renderArray.length; i < len; i++) {
          this.renderArray[i].emit('update');
          if (this.renderArray[i].update) this.renderArray[i].update(this);
          this.renderArray[i].emit('updated');
        }

        this.renderArray.length = 0;
      }
    }, {
      key: "buildWebGL",
      value: function buildWebGL(gl) {
        this.gl = gl;
        gl.clearColor(1.0, 1.0, 1.0, 1.0); // gl.enable(gl.DEPTH_TEST);

        gl.enable(gl.BLEND);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA); //gl.clearDepth(1);
        //gl.depthFunc(gl.LEQUAL);

        getExtension(gl);
        return this;
      }
    }, {
      key: "useProgram",
      value: function useProgram(shader) {
        if (shader === this.shader) return this;
        this.shader = shader.useProgram();
        return this;
      }
    }, {
      key: "createTexture",
      value: function createTexture$1(image) {
        return createTexture(this.gl, image);
      }
    }, {
      key: "drawElements",
      value: function drawElements(texture, Matrix, blendColor) {
        this.shader.drawElements(texture, Matrix, blendColor);
        return this;
      }
    }]);

    return WebGLRender;
  }();

  function CanvasTextureFactory(ImageTexture) {
    return (
      /*#__PURE__*/
      function (_ImageTexture) {
        inherits(CanvasTexture, _ImageTexture);

        function CanvasTexture(gl, canvas) {
          var _this;

          classCallCheck(this, CanvasTexture);

          _this = possibleConstructorReturn(this, getPrototypeOf(CanvasTexture).call(this, canvas));
          _this.gl = gl;
          _this.canvas = canvas;
          _this.context = canvas.getContext('2d');
          _this.updateTexture = false;
          return _this;
        }

        createClass(CanvasTexture, [{
          key: "update",
          value: function update() {
            this.updateTexture = false;
            var gl = this.gl;
            gl.bindTexture(gl.TEXTURE_2D, this.texture);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this.canvas);
          }
        }]);

        return CanvasTexture;
      }(ImageTexture)
    );
  }
  function FontTextureFactory(CanvasTexture, Texture) {
    return (
      /*#__PURE__*/
      function (_CanvasTexture) {
        inherits(FontTexture, _CanvasTexture);

        function FontTexture(gl, canvas, family, weight, size) {
          var _this2;

          classCallCheck(this, FontTexture);

          _this2 = possibleConstructorReturn(this, getPrototypeOf(FontTexture).call(this, gl, canvas));
          _this2.x = canvas.width / size | 0;
          _this2.y = canvas.height / size | 0;
          _this2.size = size;
          _this2.max = _this2.x * _this2.y;
          _this2.used = 0;
          _this2.context.font = weight + ' ' + size + 'px ' + family;
          _this2.context.textBaseline = 'middle';
          _this2.context.textAlign = 'center';
          _this2.context.fillStyle = '#FFFFFF';
          return _this2;
        }

        createClass(FontTexture, [{
          key: "getTexture",
          value: function getTexture(value) {
            if (this.used >= this.max) return;
            this.updateTexture = true;
            var x = this.used % this.x * this.size + this.size / 2;
            var y = (this.used / this.x | 0) * this.size + this.size / 2;
            this.used++;
            this.context.fillText(value, x, y);
            var width = this.context.measureText(value).width;
            var height = this.size;
            return new Texture(this, x - width / 2, y - height / 2, width, height);
          }
        }, {
          key: "update",
          value: function update() {
            if (!this.updateTexture) return;

            get(getPrototypeOf(FontTexture.prototype), "update", this).call(this);
          }
        }]);

        return FontTexture;
      }(CanvasTexture)
    );
  }

  var Container =
  /*#__PURE__*/
  function (_Event) {
    inherits(Container, _Event);

    createClass(Container, [{
      key: "define",
      value: function define(key, object, okey, event, set, get) {
        var setgetkey = key.substr(0, 1).toUpperCase() + key.substr(1).toLowerCase();

        this['set' + setgetkey] = set || function (v) {
          if (object[okey] == v) return this;
          object[okey] = v;
          if (event) this.emit(event, key, v);
          return this;
        };

        this['get' + setgetkey] = get || function (v) {
          return object[okey];
        };

        Object.defineProperty(this, key, {
          set: this['set' + setgetkey],
          get: this['get' + setgetkey]
        });
      }
    }]);

    function Container() {
      var _this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      classCallCheck(this, Container);

      _this = possibleConstructorReturn(this, getPrototypeOf(Container).call(this));
      _this.id = Container.id ? ++Container.id : Container.id = 1;
      _this.visible = true;
      _this.parent = null;
      _this.children = [];
      _this.touchChildren = true;
      if (options.visible === false) _this.visible = false;
      if (options.children && options.children.length) _this.add(options.children);
      _this.worldMatrix = new Matrix4(); //矩阵

      _this._updateMatrix = true; //将在下一帧更新矩阵

      _this._updateMatrixInvert = true; //将在下一次需要时更新矩阵

      _this.on('updateMatrix', function () {
        this._updateMatrix = true;

        for (var i = 0, len = this.children.length; i < len; i++) {
          this.children[i].emit('updateMatrix');
        }
      });

      _this.radian = 0;
      if (options.angle) _this.angle = options.angle;
      _this._zIndex = 0;

      _this.define('zIndex', assertThisInitialized(_this), '_zIndex');

      if (options.zIndex) _this.zIndex = options.zIndex;
      _this.position = new Vector2();
      if (options.position) _this.position.setApply(options.position);

      _this.define('x', _this.position, 'x', 'updateMatrix');

      if (options.x) _this.x = options.x;

      _this.define('y', _this.position, 'y', 'updateMatrix');

      if (options.y) _this.y = options.y;
      _this.scale = new Vector2(1, 1);
      if (options.scale) _this.scale.same(options.scale);

      _this.define('scaleX', _this.scale, 'x', 'updateMatrix');

      if (options.scaleX) _this.scaleX = options.scaleX;

      _this.define('scaleY', _this.scale, 'y', 'updateMatrix');

      if (options.scaleY) _this.scaleY = options.scaleY;
      _this.anchor = new Vector2(0, 0);

      _this.define('anchorX', _this.anchor, 'x', 'updateMatrix');

      if (options.anchorX) _this.anchorX = options.anchorX;

      _this.define('anchorY', _this.anchor, 'y', 'updateMatrix');

      if (options.anchorY) _this.anchorY = options.anchorY;
      _this.size = new Vector2();
      if (options.size) _this.size.setApply(options.size);

      _this.define('width', _this.size, 'x', 'updateMatrix');

      if (options.width !== undefined) _this.width = options.width;

      _this.define('height', _this.size, 'y', 'updateMatrix');

      if (options.height !== undefined) _this.height = options.height;

      _this.define('angle', assertThisInitialized(_this), 'radian', 'updateMatrix', function (v) {
        var a = v * Math.PI / 180;
        if (a == this.radian) return this;
        this.radian = a;
        this.emit('updateMatrix');
        return this;
      }, function () {
        return this.radian * 180 / Math.PI;
      });

      if (options.angle !== undefined) _this.angle = options.angle;
      return _this;
    }

    createClass(Container, [{
      key: "setSize",
      value: function setSize(x, y) {
        this.width = x;
        this.height = y;
        return this;
      }
    }, {
      key: "setPosition",
      value: function setPosition(x, y) {
        this.x = x;
        this.y = y;
        return this;
      }
    }, {
      key: "setScale",
      value: function setScale(x, y) {
        this.scaleX = x;
        this.scaleY = y;
        return this;
      }
    }, {
      key: "center",
      value: function center() {
        var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var move = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return this.width * n + move;
      }
    }, {
      key: "middle",
      value: function middle() {
        var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var move = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return this.height * n + move;
      }
    }, {
      key: "left",
      value: function left() {
        var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var move = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return this.center(n - 0.5, move);
      }
    }, {
      key: "right",
      value: function right() {
        var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var move = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return this.center(n + 0.5, move);
      }
    }, {
      key: "top",
      value: function top() {
        var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var move = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return this.middle(n - 0.5, move);
      }
    }, {
      key: "bottom",
      value: function bottom() {
        var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var move = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return this.middle(n + 0.5, move);
      }
    }, {
      key: "put",
      value: function put(object3d) {
        return object3d.add(this);
      }
    }, {
      key: "add",
      value: function add(object3d) {
        if (arguments.length > 1) {
          for (var i = 0; i < arguments.length; i++) {
            this.add(arguments[i]);
          }
        } else if (object3d instanceof Array) {
          for (var _i = 0; _i < object3d.length; _i++) {
            this.add(object3d[_i]);
          }
        } else if (object3d) {
          object3d.emit('create');
          if (object3d.parent) object3d.remove(this);
          this.children.push(object3d);
          object3d.parent = this;
          object3d.emit('created');
        }

        return this;
      }
    }, {
      key: "remove",
      value: function remove(object3d) {
        if (arguments.length > 1) {
          for (var i = 0; i < arguments.length; i++) {
            this.remove(arguments[i]);
          }
        } else if (object3d instanceof Array) {
          for (var _i2 = 0; _i2 < object3d.length; _i2++) {
            this.remove(object3d[_i2]);
          }
        } else if (object3d) {
          object3d.emit('destroy', this);
          object3d.clear();
          var index = this.children.indexOf(object3d);
          this.children.splice(index, 1);
          object3d.parent = null;
          object3d.emit('destroyd', this);
        }

        return this;
      }
    }, {
      key: "clear",
      value: function clear() {
        //TODO lockChildren
        return this.remove(this.children);
      }
    }, {
      key: "preUpdate",
      value: function preUpdate(render) {
        if (!this.visible) return true;
        if (this._updateMatrix) this.updateTransform();
        render.renderArray.push(this);

        for (var i = 0, len = this.children.length; i < len; i++) {
          this.children[i].preUpdate(render);
        }
      }
    }, {
      key: "updateTransform",
      value: function updateTransform(matrix) {
        this._updateMatrix = false;

        if (matrix) {
          this.worldMatrix.setApply(matrix);
        } else {
          if (this.parent) {
            if (this.parent._updateMatrix) this.parent.updateTransform();
            this.worldMatrix.setApply(this.parent.worldMatrix);
          } else {
            this.worldMatrix.identity();
          }
        }

        this.worldMatrix.translate(this.x, this.y, 0);
        this.worldMatrix.rotate(this.radian, 0, 0, 1);
        this.worldMatrix.scale(this.scaleX, this.scaleY, 1);
        this.worldMatrix.translate(-this.anchorX, -this.anchorY, 0);
        this._updateMatrixInvert = true;
        return this;
      }
    }, {
      key: "getWorldVector",
      value: function getWorldVector(vector) {
        var clone = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        if (this._updateMatrix) this.updateTransform();

        if (!vector) {
          vector = new Vector2();
        } else if (clone) {
          vector = vector.clone();
        }

        return vector.multiplyMatrix4(this.worldMatrix);
      }
    }, {
      key: "getLocalVector",
      value: function getLocalVector(vector) {
        if (this._updateMatrixInvert) {
          if (this._updateMatrix) this.updateTransform();
          if (!this.worldMatrixInvert) this.worldMatrixInvert = new Matrix4();
          this.worldMatrixInvert.setApply(this.worldMatrix).invert();
          this._updateMatrixInvert = false;
        }

        return vector.multiplyMatrix4(this.worldMatrixInvert);
      }
    }, {
      key: "updateMatrix",
      get: function get() {
        return this._updateMatrix;
      },
      set: function set(u) {
        if (u) {
          this.emit('updateMatrix');
        } else {
          this._updateMatrix = u;
        }
      }
    }]);

    return Container;
  }(Event);

  var Sprite =
  /*#__PURE__*/
  function (_Container) {
    inherits(Sprite, _Container);

    function Sprite(texture) {
      var _this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      classCallCheck(this, Sprite);

      _this = possibleConstructorReturn(this, getPrototypeOf(Sprite).call(this, options));
      _this.localMatrix = new Matrix4(); //矩阵

      _this.setTexture(texture);

      _this._color = new Color(1, 1, 1, 1);

      _this.define('color', assertThisInitialized(_this), '_color', null, function (color) {
        this._color.setApply(color);

        return this;
      });

      if (options.color !== undefined) _this.color = options.color;

      _this.define('alpha', _this._color, 'alpha');

      if (options.alpha !== undefined) _this.alpha = options.alpha;

      _this.define('red', _this._color, 'red');

      if (options.red !== undefined) _this.red = options.red;

      _this.define('green', _this._color, 'green');

      if (options.green !== undefined) _this.green = options.green;

      _this.define('blue', _this._color, 'blue');

      if (options.blue !== undefined) _this.blue = options.blue;
      return _this;
    }

    createClass(Sprite, [{
      key: "checkPoint",
      value: function checkPoint(vector) {
        return vector.x >= -this.width / 2 && vector.y >= -this.height / 2 && vector.x <= this.width / 2 && vector.y <= this.height / 2;
      }
    }, {
      key: "setTexture",
      value: function setTexture(texture) {
        if (!texture) {
          this.texture = null;
          this.width = 0;
          this.height = 0;
        } else {
          this.texture = texture;
          this.width = texture.width;
          this.height = texture.height;
        }

        return this;
      }
    }, {
      key: "update",
      value: function update(render) {
        if (!this.texture) return;
        render.drawElements(this.texture, this.localMatrix, this.color);
      }
    }, {
      key: "updateTransform",
      value: function updateTransform(matrix) {
        get(getPrototypeOf(Sprite.prototype), "updateTransform", this).call(this, matrix);

        if (!this.texture) return;
        this.localMatrix.setApply(this.worldMatrix).scale(this.width / 2, this.height / 2);
      }
    }]);

    return Sprite;
  }(Container);

  var TextLine =
  /*#__PURE__*/
  function (_Container) {
    inherits(TextLine, _Container);

    //最大行宽,默认行高,是否自动行高
    function TextLine() {
      var _this;

      classCallCheck(this, TextLine);

      _this = possibleConstructorReturn(this, getPrototypeOf(TextLine).call(this));
      _this.updateFamily = true; //字体更新

      _this.textures = [];
      return _this;
    }

    return TextLine;
  }(Container);
  var TextGroup =
  /*#__PURE__*/
  function (_Container2) {
    inherits(TextGroup, _Container2);

    function TextGroup(family, fillStyle) {
      var _this2;

      classCallCheck(this, TextGroup);

      _this2 = possibleConstructorReturn(this, getPrototypeOf(TextGroup).call(this));
      _this2.family = family || '36px 微软雅黑';
      _this2.fillStyle = fillStyle || '#FFFFFF';
      _this2.values = '';
      return _this2;
    }

    createClass(TextGroup, [{
      key: "update",
      value: function update(render) {
        render.transform(this.worldMatrix);
        render.fillText(this.values, this.family, this.fillStyle);
      }
    }]);

    return TextGroup;
  }(Container);
  var Text =
  /*#__PURE__*/
  function (_Container3) {
    inherits(Text, _Container3);

    createClass(Text, [{
      key: "defaultFont",
      value: function defaultFont(font) {
        return Object.assign({}, font);
      }
    }]);

    function Text() {
      var _this3;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      classCallCheck(this, Text);

      _this3 = possibleConstructorReturn(this, getPrototypeOf(Text).call(this, options));
      _this3.font = _this3.defaultFont(options.font);
      _this3.value = '';
      _this3.textures = [];
      _this3.wrapWidth = options.wrapWidth || -1;

      if (options.lineHeight > 0) {
        _this3.lineHeight = options.lineHeight;
        _this3.autoLineHeight = false;
      } else {
        _this3.lineHeight = _this3.font.size;
        _this3.autoLineHeight = true;
      }

      _this3._color = new Color(1, 1, 1, 1);

      _this3.define('color', assertThisInitialized(_this3), '_color', null, function (color) {
        this._color.setApply(color);

        return this;
      });

      if (options.color !== undefined) _this3.color = options.color;

      _this3.define('alpha', _this3._color, 'alpha');

      if (options.alpha !== undefined) _this3.alpha = options.alpha;

      _this3.define('red', _this3._color, 'red');

      if (options.red !== undefined) _this3.red = options.red;

      _this3.define('green', _this3._color, 'green');

      if (options.green !== undefined) _this3.green = options.green;

      _this3.define('blue', _this3._color, 'blue');

      if (options.blue !== undefined) _this3.blue = options.blue;
      if (options.value) _this3.setValue(options.value);
      return _this3;
    }

    createClass(Text, [{
      key: "setValue",
      value: function setValue(value) {
        if (value == this.value) return this;
        this.textures.length = 0;
        this.value = value === 0 ? '0' : value ? value.toString() : '';
        if (!this.value) return this;
        this.updateText(this.value);
        return this;
      }
    }, {
      key: "updateText",
      value: function updateText(value) {
        var tags = {}; //文本内特殊标签

        var family = {
          size: this.font.size,
          family: this.font.family,
          weight: this.font.weight,
          lineWidth: this.font.lineWidth || 0,
          strokeStyle: this.font.strokeStyle || '#000000',
          fillStyle: this.color.string
        }; //默认属性

        var handle = Object.assign({}, family); //当前临时属性

        var line = null; //当前行精灵

        var string = value.replace(/\<(fillStyle|family|weight|size|i)\=(\S+?)\>/g, function (tag, action, arg, index) {
          tags[index] = {
            action: action,
            arg: arg,
            length: tag.length - 1
          };
          return tag;
        });

        for (var i = 0, len = string.length; i < len; i++) {
          var v = string[i];

          if (tags[i]) {
            if (tags[i].action != 'i') {
              handle[tags[i].action] = tags[i].arg == '@' ? family[tags[i].action] : tags[i].arg;
              if (line) line.updateFamily = true;
            } else {
              if (!this.getTexture(line, handle, tags[i].arg, true)) {
                line = new TextLine().setSize(0, this.lineHeight).setPosition(0, line ? line.y + line.height : 0);
                this.textures.push(line);
                this.getTexture(line, handle, tags[i].arg, true);
              }
            }

            i += tags[i].length;
          } else if (v === '\n') {
            line = new TextLine().setSize(0, this.lineHeight).setPosition(0, line ? line.y + line.height : 0);
            this.textures.push(line);
          } else {
            //如果当前行精灵不存在或者无法加入当前字，则生成一个新的行精灵推入纹理组
            if (!this.getTexture(line, handle, v)) {
              line = new TextLine().setSize(0, this.lineHeight).setPosition(0, line ? line.y + line.height : 0);
              this.textures.push(line);
              this.getTexture(line, handle, v);
            }
          }
        }

        this.updateTextures();
      }
    }, {
      key: "getTexture",
      value: function getTexture(line, handle, sprite) {
        throw '请设置getTexture函数';
      }
    }, {
      key: "update",
      value: function update(render) {
        if (!this.textures || !this.textures.length) return;

        for (var i = 0; i < this.textures.length; i++) {
          var line = this.textures[i];

          for (var j = 0; j < line.textures.length; j++) {
            var sprite = line.textures[j];
            sprite.update(render);
          }
        }
      }
    }, {
      key: "updateTextures",
      value: function updateTextures() {
        var widths = this.textures.map(function (l) {
          return l.width;
        });
        this.width = Math.max.apply(null, widths);
        this.height = this.textures.reduce(function (r, line) {
          return r + line.height;
        }, 0);

        for (var i = 0; i < this.textures.length; i++) {
          var line = this.textures[i];
          line.x -= this.width * 0.5; //整体垂直对齐方式

          line.y -= this.height * 0.5; //整体水平对齐方式

          line.x -= (line.width - this.width) * 0.5; //本行垂直对齐方式

          for (var j = 0; j < line.textures.length; j++) {
            var sprite = line.textures[j];

            if (sprite.texture && sprite.texture.baseTexture.updateTexture) {
              sprite.texture.baseTexture.update();
            }

            sprite.y -= (sprite.height - line.height) * 0.5; //本行水平对齐方式
          }
        }

        this.updateMatrix = true;
      }
    }, {
      key: "updateTransform",
      value: function updateTransform() {
        get(getPrototypeOf(Text.prototype), "updateTransform", this).call(this);

        if (!this.textures || !this.textures.length) return;

        for (var i = 0; i < this.textures.length; i++) {
          var line = this.textures[i];
          line.updateTransform(this.worldMatrix);

          for (var j = 0; j < line.textures.length; j++) {
            var sprite = line.textures[j];
            sprite.updateTransform(line.worldMatrix);
          }
        }
      }
    }]);

    return Text;
  }(Container);

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

  var Director =
  /*#__PURE__*/
  function (_Container) {
    inherits(Director, _Container);

    function Director() {
      var _getPrototypeOf2;

      var _this;

      classCallCheck(this, Director);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = possibleConstructorReturn(this, (_getPrototypeOf2 = getPrototypeOf(Director)).call.apply(_getPrototypeOf2, [this].concat(args)));

      defineProperty(assertThisInitialized(_this), "Scenes", {});

      defineProperty(assertThisInitialized(_this), "CurrentScene", null);

      return _this;
    }

    createClass(Director, [{
      key: "Go",
      //当前场景
      value: function Go(Type) {
        this.remove(this.CurrentScene);

        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }

        this.CurrentScene = this.Scenes[Type] ? construct(this.Scenes[Type], args) : null;
        this.add(this.CurrentScene, 0);
        return this;
      }
    }, {
      key: "setScenes",
      value: function setScenes(scenes) {
        Object.assign(this.Scenes, scenes);
        return this;
      }
    }, {
      key: "look",
      value: function look(Matrix) {
        this.worldMatrix.setApply(Matrix);
        this.updateMatrix = false;
        return this;
      }
    }]);

    return Director;
  }(Container);

  exports.CanvasRender = CanvasRender;
  exports.CanvasTextureFactory = CanvasTextureFactory;
  exports.Clock = Clock;
  exports.Collision = Collision;
  exports.Color = Color;
  exports.Container = Container;
  exports.Director = Director;
  exports.Event = Event;
  exports.FontControlFactory = FontControlFactory;
  exports.FontTextureFactory = FontTextureFactory;
  exports.ImageTextureFactory = ImageTextureFactory;
  exports.Loader = Loader;
  exports.Matrix4 = Matrix4;
  exports.Random = Random;
  exports.Shader = Shader;
  exports.Sprite = Sprite;
  exports.Text = Text;
  exports.TextGroup = TextGroup;
  exports.TextLine = TextLine;
  exports.TextureControlFactory = TextureControlFactory;
  exports.TextureFactory = TextureFactory;
  exports.Time = Time;
  exports.Touch = Touch;
  exports.Vector = Vector;
  exports.Vector2 = Vector2;
  exports.Vector3 = Vector3;
  exports.WebGLRender = WebGLRender;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
