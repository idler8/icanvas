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
        if (Component.checkPoint(this.TouchHandle)) return true;
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
          render.emit('tick', render.time);
          render.emit('end');
        };

        requestAnimationFrame(HandleUpdate);
        return this;
      }
    }]);

    return Clock;
  }(Event);

  var Transform =
  /*#__PURE__*/
  function () {
    function Transform() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      classCallCheck(this, Transform);

      this.matrix = new Matrix4();
      this.position = new Vector2(options.x || 0, options.y || 0);
      this.scale = new Vector2(options.scaleX || 1, options.scaleY || 1);
      this._radian = options.radian || 0;
      if (options.angle) this.angle = options.angle;
      this.id = Transform.id ? ++Transform.id : Transform.id = 1;
      this.loopId = 0;
      this.parentId = 0;
      this.worldId = 1;
      this.needUpdate = true;
    }

    createClass(Transform, [{
      key: "isStop",
      value: function isStop(now) {
        if (this.loopId === now) return true;
        this.loopId = now;
      }
    }, {
      key: "isFollow",
      value: function isFollow(transform) {
        if (transform.worldId == this.parentId) return;
        this.parentId = transform.worldId;
        this.needUpdate = true;
      }
    }, {
      key: "update",
      value: function update(matrix) {
        if (!this.needUpdate) return;
        matrix ? this.matrix.setApply(matrix) : this.matrix.identity();
        this.matrix.translate(this.position.x, this.position.y, 0);
        this.matrix.rotate(this.radian, 0, 0, 1);
        this.matrix.scale(this.scale.x, this.scale.y, 1);
        this.needUpdate = false;
        this.worldId++;
      }
    }, {
      key: "x",
      get: function get() {
        return this.position.x;
      },
      set: function set(x) {
        if (this.position.x == x) return;
        this.position.x = x;
        this.needUpdate = true;
      }
    }, {
      key: "y",
      get: function get() {
        return this.position.y;
      },
      set: function set(y) {
        if (this.position.y == y) return;
        this.position.y = y;
        this.needUpdate = true;
      }
    }, {
      key: "scaleX",
      get: function get() {
        return this.scale.x;
      },
      set: function set(x) {
        if (this.scale.x == x) return;
        this.scale.x = x;
        this.needUpdate = true;
      }
    }, {
      key: "scaleY",
      get: function get() {
        return this.scale.y;
      },
      set: function set(y) {
        if (this.scale.y == y) return;
        this.scale.y = y;
        this.needUpdate = true;
      }
    }, {
      key: "radian",
      get: function get() {
        return this._radian;
      },
      set: function set(r) {
        if (r == this._radian) return;
        this._radian = r;
        this.needUpdate = true;
      }
    }, {
      key: "angle",
      get: function get() {
        return this.radian * 180 / Math.PI;
      },
      set: function set(v) {
        var a = v * Math.PI / 180;
        if (a == this._radian) return;
        this._radian = a;
        this.needUpdate = true;
      }
    }]);

    return Transform;
  }();
  var Shape =
  /*#__PURE__*/
  function () {
    function Shape() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      classCallCheck(this, Shape);

      this.anchor = new Vector2(options.anchorX || 0, options.anchorY || 0);
      this.size = new Vector2(options.width || 0, options.height || 0);
      this.staticWidth = options.width ? true : false;
      this.staticHeight = options.height ? true : false;
      this.clipPosition = new Vector2();
      this.clipSize = new Vector2();
      this.morph = options.morph || 'Rectangle';
      this.needUpdate = true;
      this.buffer = null;
    }

    createClass(Shape, [{
      key: "updateTexture",
      value: function updateTexture(texture) {
        if (!texture) return this.needUpdate = false;
        if (!this.staticWidth) this.size.x = texture.width;
        if (!this.staticHeight) this.size.y = texture.height;
        var real = texture.baseTexture || texture;
        this.clipPosition.set(texture.x ? texture.x / real.width : 0, texture.y ? texture.y / real.height : 0);
        this.clipSize.set(texture.width ? texture.width / real.width : 0, texture.height ? texture.height / real.height : 0);
        this.needUpdate = true;
      }
    }, {
      key: "update",
      value: function update(render) {
        if (!this.needUpdate) return;
        render.shapeToBuffer(this);
        this.needUpdate = false;
      }
    }, {
      key: "width",
      set: function set(a) {
        this.size.x = a;
        this.staticWidth = true;
        this.needUpdate = true;
      },
      get: function get() {
        return this.size.x;
      }
    }, {
      key: "height",
      set: function set(a) {
        this.size.y = a;
        this.staticHeight = true;
        this.needUpdate = true;
      },
      get: function get() {
        return this.size.y;
      }
    }, {
      key: "anchorX",
      set: function set(x) {
        this.anchor.x = x;
        this.needUpdate = true;
      },
      get: function get() {
        return this.anchor.x;
      }
    }, {
      key: "anchorY",
      set: function set(y) {
        this.anchor.y = y;
        this.needUpdate = true;
      },
      get: function get() {
        return this.anchor.y;
      }
    }, {
      key: "left",
      get: function get() {
        return -this.size.x / 2 - this.anchor.x;
      }
    }, {
      key: "right",
      get: function get() {
        return this.size.x / 2 - this.anchor.x;
      }
    }, {
      key: "top",
      get: function get() {
        return -this.size.y / 2 - this.anchor.y;
      }
    }, {
      key: "bottom",
      get: function get() {
        return this.size.y / 2 - this.anchor.y;
      }
    }]);

    return Shape;
  }();
  var RichText =
  /*#__PURE__*/
  function () {
    function RichText(context) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      classCallCheck(this, RichText);

      this.fillStyle = options.fillStyle || '#FFFFFF';
      this.strokeStyle = options.strokeStyle || '#000000';
      this.lineWidth = options.lineWidth || 0;
      this.family = options.family || 'icanvas';
      this.size = options.size || 36;
      this.weight = options.weight || false;
      this.align = options.align || 'center';
      this.baseline = options.baseline || 'middle';
      this.wrapWidth = options.wrapWidth || -1;

      if (options.lineHeight > 0) {
        this.lineHeight = options.lineHeight;
        this.autoLineHeight = false;
      } else {
        this.lineHeight = this.size;
        this.autoLineHeight = true;
      }

      this.context = context;
      this.icons = options.icons;
    }

    createClass(RichText, [{
      key: "mergeStyle",
      value: function mergeStyle(handle) {
        handle.fillStyle = this.fillStyle;
        handle.strokeStyle = this.strokeStyle;
        handle.lineWidth = this.lineWidth;
        handle.family = this.family;
        handle.size = this.size;
        handle.weight = this.weight;
      }
    }, {
      key: "mergeContext",
      value: function mergeContext(handle) {
        var init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var context = this.context;
        context.fillStyle = handle.fillStyle;
        context.strokeStyle = handle.strokeStyle;
        context.lineWidth = handle.lineWidth;
        if (!init) return;
        context.textAlign = 'left';
        context.textBaseline = 'top';
      }
    }, {
      key: "mergeFamily",
      value: function mergeFamily(handle) {
        this.context.font = handle.size + 'px ' + handle.family + (handle.weight ? ' bold' : '');
      }
    }, {
      key: "checkSize",
      value: function checkSize(structure, width, height) {
        var lines = structure.contents;
        if (this.wrapWidth >= 0 && lines[0].width + width > this.wrapWidth) this.addLine();
        if (this.autoLineHeight && height > lines[0].height) lines[0].height = height;
        lines[0].width += width;
      }
    }, {
      key: "addLine",
      value: function addLine(structure) {
        var lines = structure.contents;
        structure.height += lines[0].height;
        if (lines[0].width > structure.width) structure.width = lines[0].width;
        structure.contents.unshift({
          width: 0,
          height: this.lineHeight,
          contents: []
        });
      }
    }, {
      key: "updateValue",
      value: function updateValue(values, icons) {
        if (!values) return; //this.Empty;

        var context = this.context;
        var handle = {};
        this.mergeStyle(handle);
        this.mergeFamily(handle);
        var tags = {}; //文本内特殊标签

        values.replace(/\<(fillStyle|strokeStyle|lineWidth|family|weight|size|i)\=(\S+?)\>/g, function (tag, action, arg, index) {
          if (action == 'i') {
            if (!icons[arg]) return tag;
            tags[index] = {
              action: action,
              arg: icons[arg],
              length: tag.length - 1
            };
          } else {
            tags[index] = {
              action: action,
              arg: arg == '@' ? family[action] : arg,
              length: tag.length - 1
            };
          }

          return tag;
        });
        var structure = {
          width: this.wrapWidth,
          height: 0,
          contents: [{
            width: 0,
            height: this.lineHeight,
            contents: []
          }]
        };

        for (var i = 0, len = values.length; i < len; i++) {
          var v = values[i];

          if (tags[i]) {
            var tag = tags[i];
            i += tag.length;

            if (tag.action != 'i') {
              handle[tag.action] = tag.arg;
              this.mergeFamily(handle);
            } else {
              this.checkSize(structure, tag.arg.width, tag.arg.height);
            }

            structure.contents[0].contents.push(tag);
          } else if (v === '\n') {
            this.addLine(structure);
          } else {
            var width = context.measureText(v).width;
            this.checkSize(structure, width, handle.size);
            structure.contents[0].contents.push({
              value: v,
              width: width,
              height: handle.size
            });
          }
        }

        structure.height += structure.contents[0].height;
        if (structure.contents[0].width > structure.width) structure.width = structure.contents[0].width;
        this.mergeStyle(handle);
        var totalWidth = context.canvas.width = structure.width;
        context.canvas.height = structure.height;
        this.mergeFamily(handle);
        this.mergeContext(handle, true);
        var offsetTop = 0;

        for (var _i = structure.contents.length - 1; _i >= 0; _i--) {
          var _structure$contents$_ = structure.contents[_i],
              _width = _structure$contents$_.width,
              height = _structure$contents$_.height,
              contents = _structure$contents$_.contents;
          var offsetLeft = (totalWidth - _width) * 0.5; //handle.align

          for (var j = 0; j < contents.length; j++) {
            var element = contents[j];

            if (element.value) {
              context.fillText(element.value, offsetLeft, offsetTop + (height - element.height) * 0.5); //handle.baseline

              offsetLeft += element.width;
            } else if (element.action == 'i') {
              var texture = element.arg;
              var dy = offsetTop + (height - element.arg.height) * 0.5;

              if (texture.baseTexture) {
                var image = texture.baseTexture.source;
                context.drawImage(image, texture.x, texture.y, texture.width, texture.height, offsetLeft, dy, texture.width, texture.height);
              } else {
                var _image = texture.source;
                context.drawImage(_image, offsetLeft, dy, texture.width, texture.height);
              }

              offsetLeft += element.arg.width;
            } else {
              handle[element.action] = element.arg;
              this.mergeFamily(handle);
              this.mergeContext(handle);
            }
          }

          offsetTop += height;
        }
      }
    }, {
      key: "value",
      get: function get() {
        return this._value;
      },
      set: function set(v) {
        v = '' + v;
        if (v == this._value) return;
        this._value = v;
        this.updateValue(v, this.icons);
        if (this.update) this.update();
      }
    }]);

    return RichText;
  }();

  var Container =
  /*#__PURE__*/
  function (_Event) {
    inherits(Container, _Event);

    function Container() {
      var _this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      classCallCheck(this, Container);

      _this = possibleConstructorReturn(this, getPrototypeOf(Container).call(this));
      _this.id = Container.id ? ++Container.id : Container.id = 1;
      _this.parent = null;
      _this.children = [];
      _this.touchChildren = true;
      _this.visible = !(options.visible === false);
      _this.zIndex = options.zIndex || 0;

      _this.on('destroy', function () {
        for (var i = 0; i < this.children.length; i++) {
          this.children[i].emit('destroy');
        }
      });

      _this.transform = options.transform || new Transform(options);

      _this.on('updateTransform', function (now) {
        if (now && this.transform.isStop(now)) return;

        if (this.parent) {
          this.parent.emit('updateTransform', now);
          this.transform.isFollow(this.parent.transform);
          this.transform.update(this.parent.transform.matrix);
        } else {
          this.transform.update();
        }
      });

      return _this;
    }

    createClass(Container, [{
      key: "setPosition",
      value: function setPosition(x, y) {
        this.transform.x = x;
        this.transform.y = y;
        return this;
      }
    }, {
      key: "setScale",
      value: function setScale(x, y) {
        this.transform.scaleX = x;
        this.transform.scaleY = y;
        return this;
      }
    }, {
      key: "setRadian",
      value: function setRadian(a) {
        this.transform.radian = a;
        return this;
      }
    }, {
      key: "setAngle",
      value: function setAngle(a) {
        this.transform.angle = a;
        return this;
      }
    }, {
      key: "getWorldVector",
      value: function getWorldVector(vector) {
        var clone = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        vector = clone ? vector.clone() : vector;
        this.emit('updateTransform');
        return vector.multiplyMatrix4(this.transform.matrix);
      }
    }, {
      key: "put",
      value: function put(object3d) {
        if (this.parent) this.parent.remove(this);
        if (!object3d) return this;
        this.emit('create');
        object3d.children.push(this);
        this.parent = object3d;
        this.transform.parentId = 0;
        this.emit('created');
        return this;
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
          object3d.put(this);
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
          var index = this.children.indexOf(object3d);
          this.children.splice(index, 1);
          object3d.parent = null;
          object3d.emit('destroyed', this);
        }

        return this;
      }
    }, {
      key: "clear",
      value: function clear() {
        for (var i = 0; i < this.children.length; i++) {
          this.children[i].emit('destroy', this);
          this.children[i].parent = null;
          this.children[i].emit('destroyed', this);
        }

        this.children.length = 0;
        return this;
      }
    }, {
      key: "x",
      set: function set(a) {
        this.transform.x = a;
      },
      get: function get() {
        return this.transform.x;
      }
    }, {
      key: "y",
      set: function set(a) {
        this.transform.y = a;
      },
      get: function get() {
        return this.transform.y;
      }
    }, {
      key: "scaleX",
      set: function set(a) {
        this.transform.scaleX = a;
      },
      get: function get() {
        return this.transform.scaleX;
      }
    }, {
      key: "scaleY",
      set: function set(a) {
        this.transform.scaleY = a;
      },
      get: function get() {
        return this.transform.scaleY;
      }
    }, {
      key: "radian",
      set: function set(a) {
        this.transform.radian = a;
      },
      get: function get() {
        return this.transform.radian;
      }
    }, {
      key: "angle",
      set: function set(a) {
        this.transform.angle = a;
      },
      get: function get() {
        return this.transform.angle;
      }
    }]);

    return Container;
  }(Event);

  var Sprite =
  /*#__PURE__*/
  function (_Container) {
    inherits(Sprite, _Container);

    function Sprite() {
      var _this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      classCallCheck(this, Sprite);

      _this = possibleConstructorReturn(this, getPrototypeOf(Sprite).call(this, options));
      _this.invertId = 0;
      _this.invertMatrix = new Matrix4();
      _this.shape = options.shape || new Shape(options);
      _this.texture = options.texture;
      return _this;
    }

    createClass(Sprite, [{
      key: "setSize",
      value: function setSize(x, y) {
        this.shape.width = x;
        this.shape.height = y;
        return this;
      }
    }, {
      key: "setAnchor",
      value: function setAnchor(x, y) {
        this.shape.anchorX = x;
        this.shape.anchorY = y;
        return this;
      }
    }, {
      key: "setAnchorSize",
      value: function setAnchorSize() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        this.shape.anchorX = this.shape.width * x;
        this.shape.anchorY = this.shape.height * y;
        return this;
      }
    }, {
      key: "draw",
      value: function draw(app, now) {
        if (!this.texture) return;
        app.render.blend(this.blend);
        this.emit('updateTransform', now);
        app.render.transform(this.transform.matrix);
        this.texture.update(app.render);
        app.render.texture(this.texture.texture);
        this.shape.update(app.render);
        app.render.draw(this.shape.buffer);
      }
    }, {
      key: "checkPoint",
      value: function checkPoint(vector) {
        this.emit('updateTransform', 0);

        if (this.invertId != this.transform.worldId) {
          this.invertMatrix.invert(this.transform.matrix);
          this.invertId = this.transform.worldId;
        }

        vector.multiplyMatrix4(this.invertMatrix);
        return vector.x >= -this.width / 2 && vector.y >= -this.height / 2 && vector.x <= this.width / 2 && vector.y <= this.height / 2;
      }
    }, {
      key: "texture",
      get: function get() {
        return this._texture;
      },
      set: function set(a) {
        if (!a) return this._texture = null;
        this._texture = a.baseTexture || a;
        this.shape.updateTexture(a);
      }
    }, {
      key: "width",
      set: function set(a) {
        this.shape.width = a;
      },
      get: function get() {
        return this.shape.width;
      }
    }, {
      key: "height",
      set: function set(a) {
        this.shape.height = a;
      },
      get: function get() {
        return this.shape.height;
      }
    }, {
      key: "anchorX",
      set: function set(a) {
        this.shape.anchorX = a;
      },
      get: function get() {
        return this.shape.anchorX;
      }
    }, {
      key: "anchorY",
      set: function set(a) {
        this.shape.anchorY = a;
      },
      get: function get() {
        return this.shape.anchorY;
      }
    }]);

    return Sprite;
  }(Container);

  var Application =
  /*#__PURE__*/
  function () {
    function Application() {
      var _this = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      classCallCheck(this, Application);

      this.collision = options.collision || new Collision();
      this.stage = options.stage || new Container();
      this.touch = options.touch || new Touch();
      this.clock = options.clock || new Clock();
      this.clock.on('tick', function (now) {
        return _this.tick(now);
      });
      this.time = options.time || new Time();
      this.renderArray = [];
      Object.keys(options).forEach(function (key) {
        if (!_this[key]) _this[key] = options[key];
      });
    }

    createClass(Application, [{
      key: "go",
      value: function go(scene) {
        this.stage.clear().add(scene);
        return this;
      }
    }, {
      key: "check",
      value: function check(stage) {
        if (!stage.visible) return;
        stage.emit('check', this);
        if (stage.visible && stage.draw) this.renderArray.push(stage);

        for (var i = 0, len = stage.children.length; i < len; i++) {
          this.check(stage.children[i]);
        }
      }
    }, {
      key: "tick",
      value: function tick(now) {
        this.check(this.stage); //TODO 排序

        for (var i = 0, len = this.renderArray.length; i < len; i++) {
          this.renderArray[i].emit('draw');
          this.renderArray[i].draw(this, now);
          this.renderArray[i].emit('drawn');
        }

        this.renderArray.length = 0;
        return this;
      }
    }, {
      key: "look",
      value: function look(x, y) {
        this.stage.transform.update();
        this.render.look(this.stage.transform.matrix, x, y);
        return this;
      }
    }]);

    return Application;
  }();

  /**
   * baseTexture基本纹理类型
   */
  //全图纹理

  var BaseTexture =
  /*#__PURE__*/
  function () {
    function BaseTexture(source) {
      classCallCheck(this, BaseTexture);

      this.source = source;
      this.size = new Vector2(source.width, source.height);
      this.texture = null;
      this.needUpdate = true;
    }

    createClass(BaseTexture, [{
      key: "update",
      value: function update(render) {
        if (!this.needUpdate) return;
        this.texture = render.updateTexture(this.source, this.texture);
        this.needUpdate = false;
      }
    }, {
      key: "getTexture",
      value: function getTexture(x, y, width, height) {
        return {
          baseTexture: this,
          x: x || 0,
          y: y || 0,
          width: width || this.width,
          height: height || this.height
        };
      }
    }, {
      key: "width",
      get: function get() {
        return this.size.x;
      }
    }, {
      key: "height",
      get: function get() {
        return this.size.y;
      }
    }]);

    return BaseTexture;
  }(); //Canvas全图纹理

  var CanvasTexture =
  /*#__PURE__*/
  function (_BaseTexture) {
    inherits(CanvasTexture, _BaseTexture);

    function CanvasTexture(canvas) {
      var _this;

      classCallCheck(this, CanvasTexture);

      var context = null;

      if (canvas.getContext) {
        context = canvas.getContext('2d');
      } else {
        context = canvas;
        canvas = context.canvas;
      }

      _this = possibleConstructorReturn(this, getPrototypeOf(CanvasTexture).call(this, canvas));
      _this.context = context;
      _this.canvas = canvas;
      return _this;
    }

    createClass(CanvasTexture, [{
      key: "refresh",
      value: function refresh() {
        this.size.set(this.canvas.width, this.canvas.height);
        return this;
      }
    }]);

    return CanvasTexture;
  }(BaseTexture); //字体Canvas全图纹理

  var FontTexture =
  /*#__PURE__*/
  function (_CanvasTexture) {
    inherits(FontTexture, _CanvasTexture);

    function FontTexture(canvas, family, weight, size) {
      var _this2;

      classCallCheck(this, FontTexture);

      _this2 = possibleConstructorReturn(this, getPrototypeOf(FontTexture).call(this, canvas));
      _this2.x = _this2.source.width / size | 0;
      _this2.y = _this2.source.height / size | 0;
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
        this.needUpdate = true;
        var x = this.used % this.x * this.size + this.size / 2;
        var y = (this.used / this.x | 0) * this.size + this.size / 2;
        this.used++;
        this.context.fillText(value, x, y);
        var width = this.context.measureText(value).width;
        var height = this.size;
        return new Texture(this, x - width / 2, y - height / 2, width, height);
      }
    }]);

    return FontTexture;
  }(CanvasTexture);

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

  var Loader$1 =
  /*#__PURE__*/
  function () {
    function Loader(loader) {
      classCallCheck(this, Loader);

      this.resources = {};
      this.loader = loader;
    }

    createClass(Loader, [{
      key: "loads",
      value: function loads() {
        var _this = this;

        var map = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
        var loaded = arguments.length > 2 ? arguments[2] : undefined;
        var Keys = Object.keys(map);
        return Promise.all(Keys.map(function (key) {
          var load = _this.load(prefix + key, map[key]);

          return loaded ? load.then(loaded) : load;
        }));
      }
    }, {
      key: "get",
      value: function get(key) {
        return this.resources[key];
      }
    }]);

    return Loader;
  }();
  var Image =
  /*#__PURE__*/
  function (_Loader) {
    inherits(Image, _Loader);

    function Image() {
      classCallCheck(this, Image);

      return possibleConstructorReturn(this, getPrototypeOf(Image).apply(this, arguments));
    }

    createClass(Image, [{
      key: "load",
      //读取并生成贴图对象
      value: function load(key, url) {
        var _this2 = this;

        return this.loader.load(url).then(function (image) {
          _this2.resources[key] = new BaseTexture(image);
        });
      } //生成雪碧图对象

    }, {
      key: "sprite",
      value: function sprite(key, name, x, y, width, height) {
        if (!this.resources[key]) return this;
        var texture = this.resources[key];
        var baseTexture = texture.baseTexture || texture;
        this.resources[key + '//' + name] = baseTexture.getTexture(x, y, width, height);
        return this;
      }
    }]);

    return Image;
  }(Loader$1);
  var Audio =
  /*#__PURE__*/
  function (_Loader2) {
    inherits(Audio, _Loader2);

    function Audio() {
      var _getPrototypeOf2;

      var _this3;

      classCallCheck(this, Audio);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this3 = possibleConstructorReturn(this, (_getPrototypeOf2 = getPrototypeOf(Audio)).call.apply(_getPrototypeOf2, [this].concat(args)));

      defineProperty(assertThisInitialized(_this3), "_mute", false);

      return _this3;
    }

    createClass(Audio, [{
      key: "load",
      value: function load(key, url) {
        var _this4 = this;

        return this.loader.load(url).then(function (audio) {
          return _this4.resources[key] = audio;
        });
      } //静音

    }, {
      key: "mute",
      get: function get() {
        return this._mute;
      },
      set: function set(mute) {
        this._mute = mute;
        this.loader.mute(mute);
      } //设置音量

    }, {
      key: "volume",
      set: function set() {
        var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        this.loader.volume(v);
      },
      get: function get() {
        return this.loader.volume();
      }
    }]);

    return Audio;
  }(Loader$1);

  var CanvasRender =
  /*#__PURE__*/
  function () {
    function CanvasRender() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      classCallCheck(this, CanvasRender);

      this.renderArray = [];
      this.context = options.context || options.canvas.getContext('2d');
      this.canvas = this.context.canvas;
    }

    createClass(CanvasRender, [{
      key: "look",
      value: function look(matrix, x, y) {
        matrix.translate(-x / 2, -y / 2);
        return this;
      }
    }, {
      key: "updateTexture",
      value: function updateTexture(image, texture) {
        return image;
      }
    }, {
      key: "updateBuffer",
      value: function updateBuffer(array, buffer) {
        return array;
      }
    }, {
      key: "updateIndices",
      value: function updateIndices(array, buffer) {
        return array;
      }
    }, {
      key: "transform",
      value: function transform(_transform) {
        if (this.beforeTransform === _transform && this.beforeTransformId == _transform.cid) return this;
        this.beforeTransform = _transform;
        this.beforeTransformId = _transform.cid;
        var e = _transform.matrix.elements;
        this.context.setTransform(e[0], e[1], e[4], e[5], e[12], e[13]);
        return this;
      }
    }, {
      key: "vetices",
      value: function vetices(_vetices) {}
    }, {
      key: "uvs",
      value: function uvs(_uvs) {}
    }, {
      key: "indices",
      value: function indices(_indices) {}
    }, {
      key: "blend",
      value: function blend(color) {}
    }, {
      key: "texture",
      value: function texture(_texture) {}
    }, {
      key: "draw",
      value: function draw(length) {}
    }, {
      key: "text",
      value: function text(length) {}
    }]);

    return CanvasRender;
  }();

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

  var Shader =
  /*#__PURE__*/
  function () {
    function Shader(gl) {
      classCallCheck(this, Shader);

      this.gl = gl.gl || gl;
      this.options = {};
    }

    createClass(Shader, [{
      key: "use",
      value: function use() {
        var gl = this.gl;

        if (!this.program) {
          this.program = createProgram(gl, this.vert, this.frag);
          this.attributes = getActiveAttrib(gl, this.program);
          this.uniforms = getActiveUniform(gl, this.program);
        }

        gl.useProgram(this.program);
        return this;
      }
    }, {
      key: "bindTexture",
      value: function bindTexture(texture) {
        if (this.beforeTexture === texture) return false;
        var gl = this.gl;
        this.beforeTexture = texture;
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.uniform1i(this.uniforms.uSampler, 0);
        return true;
      }
    }, {
      key: "bindBuffer",
      value: function bindBuffer(buffer) {
        var vetices = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
        var uvs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
        var offset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
        var bpe = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 4;
        if (this.beforeBuffer === buffer) return false;
        this.beforeBuffer = buffer;
        var gl = this.gl;
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.vertexAttribPointer(this.attributes.aPosition, vetices, gl.FLOAT, false, (vetices + uvs) * bpe, offset * bpe);
        gl.enableVertexAttribArray(this.attributes.aPosition);
        gl.vertexAttribPointer(this.attributes.aTextureCoord, uvs, gl.FLOAT, false, (vetices + uvs) * bpe, (offset + vetices) * bpe);
        gl.enableVertexAttribArray(this.attributes.aTextureCoord);
      }
    }, {
      key: "transform",
      value: function transform(matrix) {
        this.gl.uniformMatrix4fv(this.uniforms.uModelMatrix, false, matrix.elements);
      }
    }, {
      key: "blend",
      value: function blend(color) {
        if (color) {
          this.gl.uniform4f(this.uniforms.uColor, color.elements[0], color.elements[1], color.elements[2], color.elements[3]);
        } else {
          this.gl.uniform4f(this.uniforms.uColor, 1, 1, 1, 1);
        }
      }
    }, {
      key: "vert",
      get: function get() {
        return ['attribute vec4 aPosition;', 'attribute vec2 aTextureCoord;', 'uniform mat4 uModelMatrix;', 'varying vec2 vTextureCoord;', 'void main()', '{', 'gl_Position = uModelMatrix * aPosition;', // 'gl_PointSize = 100.0;',
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
    function WebGLRender() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      classCallCheck(this, WebGLRender);

      this.renderArray = [];
      this.context = options.context || options.canvas.getContext('webgl');
      this.canvas = this.context.canvas;
      var gl = this.context;
      gl.clearColor(1.0, 1.0, 1.0, 1.0);
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA); // Webgl.getExtension(gl);

      this.useProgram(new Shader(gl));
    }

    createClass(WebGLRender, [{
      key: "look",
      value: function look(matrix, x, y) {
        matrix.setOrtho(-x / 2, x / 2, y / 2, -y / 2, 0, 1);
        this.context.viewport(0, 0, x, y);
        return this;
      }
    }, {
      key: "useProgram",
      value: function useProgram(shader) {
        if (shader === this.shader) return this;
        this.shader = shader.use();
        return this;
      }
    }, {
      key: "updateTexture",
      value: function updateTexture(image, texture) {
        var gl = this.context;
        if (!texture) return createTexture(gl, image);
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
        return texture;
      }
    }, {
      key: "updateBuffer",
      value: function updateBuffer(array, buffer) {
        var gl = this.context;
        if (buffer) gl.deleteBuffer(buffer);
        if (!array) return;
        return createBuffer(gl, gl.ARRAY_BUFFER, new Float32Array(array), gl.STATIC_DRAW);
      }
    }, {
      key: "updateIndices",
      value: function updateIndices(array, buffer) {
        var gl = this.context;
        if (buffer) gl.deleteBuffer(buffer);
        if (!array) return;
        return createBuffer(gl, gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(array), gl.STATIC_DRAW);
      }
    }, {
      key: "shapeToBuffer",
      value: function shapeToBuffer(shape) {
        if (!shape.buffer) shape.buffer = {};

        if (shape.morph == 'Rectangle') {
          var left = shape.left;
          var top = shape.top;
          var right = shape.right;
          var bottom = shape.bottom;
          var cLeft = shape.clipPosition.x;
          var cTop = shape.clipPosition.y;
          var cRight = shape.clipPosition.x + shape.clipSize.x;
          var cBottom = shape.clipPosition.y + shape.clipSize.y;
          shape.buffer.array = [left, top, cLeft, cTop, right, top, cRight, cTop, left, bottom, cLeft, cBottom, right, bottom, cRight, cBottom];
          shape.buffer.buffers = this.updateBuffer(shape.buffer.array, shape.buffer.buffers);
          shape.buffer.length = 4;
          shape.buffer.type = this.gl.TRIANGLE_STRIP;
        } else if (shape.morph == 'Circle') {
          var length = (shape.size.x + shape.size.y) / 20 | 0;
          var radian = 2 * Math.PI / length;
          var cx = -shape.anchor.x;
          var cy = -shape.anchor.y;
          var rx = shape.size.x * 0.5;
          var ry = shape.size.y * 0.5;
          var rx1 = shape.clipSize.x * 0.5;
          var ry1 = shape.clipSize.y * 0.5;
          var cx1 = shape.clipPosition.x + rx1;
          var cy1 = shape.clipPosition.y + ry1;
          shape.buffer.array = [cx, cy, cx1, cy1];

          for (var i = 0; i <= length; i++) {
            var r = i * radian;
            var cos = Math.cos(r);
            var sin = Math.sin(r);
            shape.buffer.array.push(rx * cos + cx, ry * sin + cy, rx1 * cos + cx1, ry1 * sin + cy1);
          }

          shape.buffer.buffers = this.updateBuffer(shape.buffer.array, shape.buffer.buffers);
          shape.buffer.length = shape.buffer.array.length / 4;
          shape.buffer.type = this.gl.TRIANGLE_FAN;
        } else if (_typeof_1(shape.morph) == 'object') ;
      }
    }, {
      key: "blend",
      value: function blend() {
        this.shader.blend();
      }
    }, {
      key: "transform",
      value: function transform(matrix) {
        this.shader.transform(matrix);
      }
    }, {
      key: "texture",
      value: function texture(_texture) {
        this.shader.bindTexture(_texture);
      }
    }, {
      key: "draw",
      value: function draw(buffer) {
        if (!buffer) return;
        this.shader.bindBuffer(buffer.buffers, 2, 2, 0, 4);
        this.gl.drawArrays(buffer.type, 0, buffer.length);
      }
    }, {
      key: "gl",
      get: function get() {
        return this.context;
      }
    }]);

    return WebGLRender;
  }();

  exports.Application = Application;
  exports.Audio = Audio;
  exports.BaseTexture = BaseTexture;
  exports.CanvasRender = CanvasRender;
  exports.CanvasTexture = CanvasTexture;
  exports.Clock = Clock;
  exports.Collision = Collision;
  exports.Color = Color;
  exports.Container = Container;
  exports.Event = Event;
  exports.FontTexture = FontTexture;
  exports.Image = Image;
  exports.Loader = Loader;
  exports.Matrix4 = Matrix4;
  exports.Random = Random;
  exports.RichText = RichText;
  exports.Shader = Shader;
  exports.Shape = Shape;
  exports.Sprite = Sprite;
  exports.Time = Time;
  exports.Touch = Touch;
  exports.Transform = Transform;
  exports.Vector = Vector;
  exports.Vector2 = Vector2;
  exports.Vector3 = Vector3;
  exports.WebGLRender = WebGLRender;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
