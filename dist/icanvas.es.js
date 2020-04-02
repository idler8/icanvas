import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import _inherits from '@babel/runtime/helpers/inherits';
import _get from '@babel/runtime/helpers/get';
import _construct from '@babel/runtime/helpers/construct';
import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';

/**
 * @class 扩展数组类
 */
var Vector =
/*#__PURE__*/
function () {
  _createClass(Vector, [{
    key: "length",
    get: function get() {
      return this.elements ? this.elements.length : 0;
    }
  }]);

  function Vector() {
    _classCallCheck(this, Vector);

    this.elements = [];
    if (arguments.length) for (var i = 0; i < arguments.length; i++) {
      this.elements[i] = arguments[i];
    }
  } //向量置零


  _createClass(Vector, [{
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

var Vector2 =
/*#__PURE__*/
function (_Vector) {
  _inherits(Vector2, _Vector);

  function Vector2() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    _classCallCheck(this, Vector2);

    return _possibleConstructorReturn(this, _getPrototypeOf(Vector2).call(this, x, y));
  }

  _createClass(Vector2, [{
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
  _inherits(Vector3, _Vector);

  function Vector3() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    _classCallCheck(this, Vector3);

    return _possibleConstructorReturn(this, _getPrototypeOf(Vector3).call(this, x, y, z));
  }

  _createClass(Vector3, [{
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
  _inherits(Matrix4, _Vector);

  function Matrix4(vector) {
    var _this;

    _classCallCheck(this, Matrix4);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Matrix4).call(this, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1));
    if (vector) _this.setApply(vector);
    return _this;
  } //重置为单位矩阵


  _createClass(Matrix4, [{
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
  _inherits(Color, _Vector);

  function Color(color) {
    var _this;

    _classCallCheck(this, Color);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Color).call(this, 1, 1, 1, 1));
    if (color !== undefined) _this.setApply(arguments.length > 1 ? arguments : color);
    return _this;
  }

  _createClass(Color, [{
    key: "setApply",
    value: function setApply(vector) {
      if (typeof vector == 'string') {
        this.string = vector;
      } else if (typeof vector == 'number') {
        this.number = vector;
      } else {
        _get(_getPrototypeOf(Color.prototype), "setApply", this).call(this, vector);
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

function polyfill() {
  JSON.parseForce = function (obj, def) {
    try {
      return JSON.parse(obj) || def || {};
    } catch (e) {
      return def || {};
    }
  };

  var numberText = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
  var numberUnit = ['', '十', '百', '千', '万', '亿', '兆', '京', '垓', '秭', '穣', '沟', '涧', '正', '载', '极'];
  var formatActions = {
    Y: function Y(date) {
      return date.getFullYear();
    },
    m: function m(date) {
      return ('00' + (date.getMonth() + 1)).slice(-2);
    },
    d: function d(date) {
      return ('00' + date.getDate()).slice(-2);
    },
    H: function H(date) {
      return ('00' + date.getHours()).slice(-2);
    },
    i: function i(date) {
      return ('00' + date.getMinutes()).slice(-2);
    },
    s: function s(date) {
      return ('00' + date.getSeconds()).slice(-2);
    },
    S: function S(date) {
      return ('000' + date.getMilliseconds()).slice(-3);
    },
    w: function w(date) {
      return date.getDay();
    },
    W: function W(date) {
      return numberText[formatActions.w(date)];
    },
    q: function q(date) {
      return (date.getMonth() + 3) / 3 | 0;
    },
    Q: function Q(date) {
      return numberText[formatActions.q(date)];
    }
  };

  Date.prototype.format = function (fmt) {
    var _this = this;

    return fmt.replace(/[YmdHisSwWqQ]/g, function (k) {
      return formatActions[k](_this);
    });
  }; //前往本周第几天


  Date.prototype.toWeek = function () {
    var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    this.setDate(this.getDate() - (formatActions.w(this) || 7) + n);
    return this;
  }; //判断两个时间是否是同一天


  Date.prototype.oneDay = function (date) {
    return this.format('Ymd') == date.format('Ymd');
  }; //判断两个时间是否是同一周


  Date.prototype.oneWeek = function (date) {
    return new Date(this).toWeek().format('Ymd') == new Date(date).toWeek().format('Ymd');
  };

  Number.prototype.chinese = function () {
    if (this < 10) return numberText[parseInt(this)];
    var nums = parseInt(this).toString().split('');
    var str = '';
    var uid = 3;
    var index = -1;
    var zero1 = true;
    var zero2 = false;

    for (var i = nums.length - 1; i >= 0; i--) {
      if (++index >= 4) {
        if (zero1) str = str.substr(1);
        uid++;
        index = 0;
        zero1 = true;
        zero2 = false;
        str = numberUnit[uid] + str;
      }

      if (nums[i] === '0' && zero1) continue;
      zero1 = false;

      if (index == 0) {
        str = numberText[nums[i]] + str;
        continue;
      } else if (index == 1) {
        if (nums[i] === '1' && i == 0) {
          str = numberUnit[index] + str;
          continue;
        }
      }

      if (nums[i] === '0') {
        if (zero2) continue;
        str = numberText[nums[i]] + str;
        zero2 = true;
      } else {
        str = numberText[nums[i]] + numberUnit[index] + str;
      }
    }

    return str;
  };
}

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
    _classCallCheck(this, Collision);

    this.TouchHandle = new Vector3();
  }

  _createClass(Collision, [{
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
    _classCallCheck(this, Event);

    this._events = {};
  }

  _createClass(Event, [{
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
  _inherits(TouchEvent, _Vector);

  function TouchEvent(id, time, x, y) {
    var _this;

    _classCallCheck(this, TouchEvent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TouchEvent).call(this, x, y)); //当前位置

    _this.start = new Vector2(x, y); //起始位置

    _this.step = new Vector2(0, 0); //本帧移动

    _this.begin = _this.over = time; //触摸时长

    _this.id = id;
    return _this;
  }

  _createClass(TouchEvent, [{
    key: "set",
    value: function set(x, y) {
      this.step.set(x - this.x, y - this.y);
      return _get(_getPrototypeOf(TouchEvent.prototype), "set", this).call(this, x, y);
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
  _inherits(Touch, _Event);

  function Touch() {
    var _this2;

    _classCallCheck(this, Touch);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Touch).call(this));
    _this2.size = new Vector2();
    _this2.offset = new Vector2();
    _this2.touches = {};
    return _this2;
  }

  _createClass(Touch, [{
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
        this.touches[id] = new TouchEvent(id, now, this.getX(touch.clientX), this.getY(touch.clientY));
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

var Clock =
/*#__PURE__*/
function (_Event) {
  _inherits(Clock, _Event);

  function Clock() {
    var _this;

    _classCallCheck(this, Clock);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Clock).call(this));
    _this.time = _this.then = _this.history = Date.now();
    _this.interval = 1000 / 60;
    _this.tick = _this.move = 0;
    return _this;
  }

  _createClass(Clock, [{
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
        render.emit('tick');
      };

      requestAnimationFrame(HandleUpdate);
      return this;
    }
  }]);

  return Clock;
}(Event);

var Dirty =
/*#__PURE__*/
function () {
  function Dirty() {
    var interval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 600;

    _classCallCheck(this, Dirty);

    this.collect = [];
    this.used = [];
    this.running = false;
    this.interval = interval;
    this.stepid = 0;
  }

  _createClass(Dirty, [{
    key: "add",
    value: function add(cache) {
      if (cache.destroy) this.collect.push(cache);
    }
  }, {
    key: "use",
    value: function use(cache) {
      if (this.running) this.used.push(cache);
    }
  }, {
    key: "dispose",
    value: function dispose() {
      var _this = this,
          _arguments = arguments;

      if (!this.running) return;
      this.collect.forEach(function (cache) {
        if (_this.used.indexOf(cache) === -1) {
          cache.destroy.apply(cache, _arguments);
        }
      });
      this.collect = [].concat(this.used);
      this.used.length = 0;
      this.running = false;
    }
  }, {
    key: "step",
    value: function step() {
      var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this.stepid += n;
      if (this.stepid <= this.interval) return;
      this.stepid = 0;
      this.running = true;
    }
  }]);

  return Dirty;
}();

var Animation =
/*#__PURE__*/
function () {
  function Animation(context) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Animation);

    this.context = context;
    this.duration = 0; //总时长

    this.timing = []; //时序列表

    this.repeat = options.repeat || 0; //重复次数

    this.scale = options.scale || 1; //动画速度

    this.runtime = {};
    this.currentTime = 0; //开始时间戳

    this.stepTime = 0; //上一步时序

    this.paused = options.paused || false; //暂停状态
  }

  _createClass(Animation, [{
    key: "clone",
    value: function clone(context) {
      return new this.constructor(context, this).set(this.timing);
    }
  }, {
    key: "set",
    value: function set(timing) {
      if (timing instanceof Array) {
        for (var i = 0; i < timing.length; i++) {
          this.set(timing[i]);
        }
      } else {
        var duration = timing.duration || 0;

        if (timing.to) {
          this.to(timing.to, duration, timing.position);
        } else if (duration) {
          this.wait(duration, timing.position);
        }

        this.call(timing.call, duration + timing.position);
      }

      return this;
    }
  }, {
    key: "add",
    value: function add(duration, position) {
      var start = this.duration; //TODO position改变start时间

      var end = start + duration;
      var timing = {
        start: start,
        duration: duration,
        end: end
      };
      this.timing.push(timing);
      this.duration = Math.max(this.duration, end);
      return timing;
    }
  }, {
    key: "to",
    value: function to(_to, duration, position) {
      var timing = this.add(duration, position);
      timing.to = _to;
      return this;
    }
  }, {
    key: "wait",
    value: function wait(duration, position) {
      this.add(duration, position);
      return this;
    }
  }, {
    key: "call",
    value: function call(_call, position) {
      var timing = this.add(0, position);
      timing.call = _call;
      return this;
    }
  }, {
    key: "play",
    value: function play(position) {
      if (!this.context) return this;
      this.currentTime = Date.now(); //开始时间戳

      if (position !== undefined) this.stepTime = position; //上一步时序

      this.paused = false; //不暂停

      return this;
    }
  }, {
    key: "stop",
    value: function stop(position) {
      if (!this.context) return this;
      this.currentTime = 0;
      if (position !== undefined) this.stepTime = position; //上一步时序

      this.paused = true;
      return this;
    }
  }, {
    key: "step",
    value: function step(current) {
      if (!this.currentTime) return;
      if (!current) current = Date.now();
      var longTime = current - this.currentTime;
      this.currentTime = current;
      var stepStart = this.stepTime;
      var stepEnd = stepStart + longTime * this.scale;

      for (var i = 0; i < this.timing.length; i++) {
        var _this$timing$i = this.timing[i],
            start = _this$timing$i.start,
            duration = _this$timing$i.duration,
            end = _this$timing$i.end,
            call = _this$timing$i.call,
            to = _this$timing$i.to; // if (call && call() == 1) console.log(start, stepStart, stepEnd);

        if (call && start >= stepStart && start < stepEnd) {
          if (typeof call == 'string') {
            if (this.context[call]) this.context[call]();
          } else if (typeof call == 'function') {
            call.call(this.context);
          }
        }

        if (!to) continue;

        if (end <= stepEnd) {
          for (var key in to) {
            this.context[key] = to[key];
          }
        } else {
          if (start >= stepStart && start < stepEnd) {
            for (var _key in to) {
              this.runtime[_key] = this.context[_key];
            }
          }

          if (stepEnd > start && stepEnd < end) {
            var mult = (stepEnd - start) / duration;

            for (var _key2 in to) {
              if (typeof to[_key2] == 'number') {
                this.context[_key2] = this.runtime[_key2] + (to[_key2] - this.runtime[_key2]) * mult;
              }
            }
          }
        }
      }

      if (stepEnd > this.duration) {
        if (this.repeat) {
          this.play(0);
          this.step(current);
        } else {
          this.stop(0);
        }
      } else {
        this.stepTime = stepEnd;
      }
    }
  }]);

  return Animation;
}();

var Container =
/*#__PURE__*/
function (_Event) {
  _inherits(Container, _Event);

  function Container() {
    var _this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Container);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Container).call(this));
    _this.id = Container.id ? ++Container.id : Container.id = 1;
    _this.parent = null;
    _this.children = [];
    _this.touchChildren = true;
    _this.visible = !(options.visible === false);
    _this.color = options.color || new Color(options.red || 1, options.green || 1, options.blue || 1, options.alpha || 1);
    _this.opacity = options.opacity || 1;
    _this.zIndex = options.zIndex || 0;
    _this.transformParentId = 0;
    _this.transformId = 1;
    _this.needUpdateTransform = true;
    _this.matrix = new Matrix4();
    _this.position = new Vector2(options.x || 0, options.y || 0);
    _this.scale = new Vector2(options.scaleX || 1, options.scaleY || 1);
    _this.angle = options.angle || 0;
    if (options.radian) _this.radian = options.radian;

    _this.on('destroy', function () {
      for (var i = 0; i < this.children.length; i++) {
        this.children[i].emit('destroy');
      }
    });

    return _this;
  }

  _createClass(Container, [{
    key: "updateTransform",
    value: function updateTransform() {
      var trace = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (this.parent) {
        if (trace) this.parent.updateTransform(trace);
        if (!this.needUpdateTransform && this.transformParentId == this.parent.transformId) return;
        this.matrix.setApply(this.parent.matrix);
      } else {
        if (!this.needUpdateTransform) return;
        this.matrix.identity();
      }

      this.matrix.translate(this.x, this.y, 0);
      this.matrix.rotate(this.radian, 0, 0, 1);
      this.matrix.scale(this.scaleX, this.scaleY, 1);
      this.needUpdateTransform = false;
      this.transformId++;
      this.transformParentId = this.parent ? this.parent.transformId : 0;
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
    key: "setRadian",
    value: function setRadian(a) {
      this.radian = a;
      return this;
    }
  }, {
    key: "setAngle",
    value: function setAngle(a) {
      this.angle = a;
      return this;
    }
  }, {
    key: "getWorldVector",
    value: function getWorldVector(vector) {
      var clone = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      vector = clone ? vector.clone() : vector;
      return vector.multiplyMatrix4(this.matrix);
    }
  }, {
    key: "put",
    value: function put(object3d) {
      if (this.parent) this.parent.remove(this);
      if (!object3d) return this;
      this.emit('create');
      object3d.children.push(this);
      this.parent = object3d;
      this.transformParentId = 0;
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
    key: "pushTo",
    value: function pushTo() {
      var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      if (!this.visible) return array;
      if (this.preUpdate && this.preUpdate(array)) return array;
      this.emit('preUpdate');
      this.updateTransform(false);
      this._opacity = this.opacity == 1 ? opacity : this.opacity;
      array.push(this);

      for (var i = 0, len = this.children.length; i < len; i++) {
        this.children[i].pushTo(array, this._opacity);
      }

      return array;
    }
  }, {
    key: "alpha",
    get: function get() {
      return this.color.alpha;
    },
    set: function set(a) {
      this.color.alpha = a;
    }
  }, {
    key: "x",
    get: function get() {
      return this.position.x;
    },
    set: function set(x) {
      if (this.position.x == x) return;
      this.position.x = x;
      this.needUpdateTransform = true;
    }
  }, {
    key: "y",
    get: function get() {
      return this.position.y;
    },
    set: function set(y) {
      if (this.position.y == y) return;
      this.position.y = y;
      this.needUpdateTransform = true;
    }
  }, {
    key: "scaleX",
    get: function get() {
      return this.scale.x;
    },
    set: function set(x) {
      if (this.scale.x == x) return;
      this.scale.x = x;
      this.needUpdateTransform = true;
    }
  }, {
    key: "scaleY",
    get: function get() {
      return this.scale.y;
    },
    set: function set(y) {
      if (this.scale.y == y) return;
      this.scale.y = y;
      this.needUpdateTransform = true;
    }
  }, {
    key: "radian",
    get: function get() {
      return this._radian;
    },
    set: function set(r) {
      if (r == this._radian) return;
      this._radian = r;
      this.needUpdateTransform = true;
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
      this.needUpdateTransform = true;
    }
  }]);

  return Container;
}(Event);

var Director =
/*#__PURE__*/
function (_Container) {
  _inherits(Director, _Container);

  function Director(options) {
    var _this;

    _classCallCheck(this, Director);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Director).call(this, options));
    _this.scenes = {};
    _this.needUpdateTransform = false;
    _this.widthCache = {};
    _this.heightCache = {};
    return _this;
  }

  _createClass(Director, [{
    key: "getX",
    value: function getX() {
      var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      return this.widthCache[n] || (this.widthCache[n] = this._width * n);
    }
  }, {
    key: "getY",
    value: function getY() {
      var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      return this.heightCache[n] || (this.heightCache[n] = this._height * n);
    }
  }, {
    key: "set",
    value: function set(name, scene) {
      if (Object.prototype.toString.call(scene) == '[object Function]') {
        if (scene.constructor) this.scenes[name] = scene;
      }

      return this;
    }
  }, {
    key: "go",
    value: function go(scene) {
      var type = Object.prototype.toString.call(scene);

      if (type == '[object String]') {
        if (this.scenes[scene]) this.clear().add(_construct(this.scenes[scene], _toConsumableArray(Array.prototype.splice.call(arguments, 1))));
      } else if (type == '[object Function]') {
        if (scene.constructor) {
          this.clear().add(_construct(scene, _toConsumableArray(Array.prototype.splice.call(arguments, 1))));
        } else {
          var res = scene.apply(void 0, _toConsumableArray(Array.prototype.splice.call(arguments, 1)));
          if (res instanceof Container) this.clear().add(res);
        }
      } else if (type == '[object Object]') {
        if (scene instanceof Container) this.clear().add(scene);
      }

      return this;
    }
  }, {
    key: "width",
    get: function get() {
      return this._width;
    },
    set: function set(w) {
      this._width = w;
      this.widthCache = {};
    }
  }, {
    key: "height",
    get: function get() {
      return this._height;
    },
    set: function set(h) {
      this._height = h;
      this.heightCache = {};
    }
  }, {
    key: "center",
    get: function get() {
      return this.getX(0.5);
    }
  }, {
    key: "middle",
    get: function get() {
      return this.getY(0.5);
    }
  }]);

  return Director;
}(Container);

var Sprite =
/*#__PURE__*/
function (_Container) {
  _inherits(Sprite, _Container);

  function Sprite() {
    var _this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Sprite);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Sprite).call(this, options));
    _this.morph = options.morph || 'Rectangle';
    _this.anchor = new Vector2(options.anchorX || 0, options.anchorY || 0);
    _this.size = new Vector2(options.width || 0, options.height || 0);
    _this.staticWidth = options.width ? true : false;
    _this.staticHeight = options.height ? true : false;
    _this.clip = null;
    _this.texture = options.texture;
    _this.invertMatrixId = 0;
    _this.invertMatrix = new Matrix4();
    return _this;
  }

  _createClass(Sprite, [{
    key: "updateTransformInvert",
    value: function updateTransformInvert() {
      if (this.invertMatrixId == this.transformId) return; // this.updateTransform(false);

      this.invertMatrix.invert(this.matrix);
      this.invertMatrixId = this.transformId;
    }
  }, {
    key: "setClip",
    value: function setClip(sprite) {
      this.clip = [sprite.x, sprite.y, sprite.width, sprite.height];
      this.needUpdateClip = true;
      if (!this.staticWidth) this.size.x = sprite.width;
      if (!this.staticHeight) this.size.y = sprite.height;
      return this;
    }
  }, {
    key: "setSize",
    value: function setSize(x, y) {
      this.width = x;
      this.height = y;
      return this;
    }
  }, {
    key: "setAnchor",
    value: function setAnchor(x, y) {
      this.anchorX = x;
      this.anchorY = y;
      return this;
    }
  }, {
    key: "setAnchorSize",
    value: function setAnchorSize() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      this.anchorX = this.width * x;
      this.anchorY = this.height * y;
      return this;
    }
  }, {
    key: "checkPoint",
    value: function checkPoint(vector) {
      this.updateTransformInvert();
      vector.multiplyMatrix4(this.invertMatrix).add(this.anchorX, this.anchorY);
      var center = this.width / 2;
      var middle = this.height / 2;

      if (this.morph == 'Circle') {
        return Math.pow(vector.x / center, 2) + Math.pow(vector.y / middle, 2) <= 1;
      } else {
        return vector.x >= -center && vector.y >= -middle && vector.x <= center && vector.y <= middle;
      }
    }
  }, {
    key: "texture",
    get: function get() {
      return this._texture;
    },
    set: function set(texture) {
      if (!(this._texture = texture)) return;
      if (!this.staticWidth) this.size.x = texture.width;
      if (!this.staticHeight) this.size.y = texture.height;
    }
  }, {
    key: "width",
    set: function set(a) {
      this.size.x = a;
      this.staticWidth = true;
    },
    get: function get() {
      return this.size.x;
    }
  }, {
    key: "height",
    set: function set(a) {
      this.size.y = a;
      this.staticHeight = true;
    },
    get: function get() {
      return this.size.y;
    }
  }, {
    key: "anchorX",
    set: function set(x) {
      this.anchor.x = x;
    },
    get: function get() {
      return this.anchor.x;
    }
  }, {
    key: "anchorY",
    set: function set(y) {
      this.anchor.y = y;
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

  return Sprite;
}(Container);

var Loader =
/*#__PURE__*/
function () {
  function Loader() {
    _classCallCheck(this, Loader);

    this.resources = {};
  }

  _createClass(Loader, [{
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
var ImageSource =
/*#__PURE__*/
function () {
  function ImageSource(image) {
    _classCallCheck(this, ImageSource);

    this.source = image;
    this.src = image.src;
    this.sourceId = 0; //资源Id

    this.width = 0; //资源宽

    this.height = 0; //资源高

    this.texture = null; //webgl纹理储存位置

    this.textureId = 0; //纹理ID

    this.forever = this.src ? true : false; //生成纹理后禁止删除

    this.optimization = false; //在生成纹理后干掉源内存

    this.update();
  }

  _createClass(ImageSource, [{
    key: "update",
    value: function update() {
      this.sourceId++;
      this.width = this.source.width;
      this.height = this.source.height;
    }
  }, {
    key: "getContext",
    value: function getContext(type) {
      if (this.context) return this.context;
      if (!this.source || !this.source.getContext) return;
      this.context = this.source.getContext(type);
      return this.context;
    }
  }]);

  return ImageSource;
}();
var ImageLoader =
/*#__PURE__*/
function (_Loader) {
  _inherits(ImageLoader, _Loader);

  function ImageLoader() {
    _classCallCheck(this, ImageLoader);

    return _possibleConstructorReturn(this, _getPrototypeOf(ImageLoader).apply(this, arguments));
  }

  _createClass(ImageLoader, [{
    key: "load",
    //读取并生成贴图对象
    value: function load(key, url) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        var image = new Image();

        image.onload = function () {
          return resolve(_this2.resources[key] = new ImageSource(image));
        };

        image.onerror = reject;
        image.key = image.src = url;
      });
    }
  }]);

  return ImageLoader;
}(Loader);
var AudioSource =
/*#__PURE__*/
function () {
  function AudioSource() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, AudioSource);

    if (!options.src) throw '错误的音频地址';
    this._src = options.src;
    this._volume = options.volume || 1;
    this._loop = options.loop || false;
    this._muted = options.muted || false;
    this._loaded = false;
    this._onload = options.onload;
    this._sounds = [];
    this.load();
  }

  _createClass(AudioSource, [{
    key: "load",
    value: function load() {
      var _this3 = this;

      var sound = this._sounds.find(function (s) {
        return s.paused;
      });

      if (!sound) {
        sound = new Audio();
        sound.muted = this.muted;
        sound.volume = this.volume;
        sound.loop = this.loop;

        if (!this._loaded) {
          sound.oncanplay = function () {
            if (!_this3._loaded && _this3._onload) {
              _this3._onload();
            }
          };
        }

        sound.src = this._src;

        this._sounds.push(sound);
      }

      return sound;
    }
  }, {
    key: "play",
    value: function play(loop) {
      if (loop !== undefined) this.loop = loop;
      var sound = this.load();
      sound.play()["catch"](function () {
        return sound.__played = true;
      });
      return sound;
    }
  }, {
    key: "pause",
    value: function pause() {
      for (var i = 0; i < this._sounds.length; i++) {
        if (this._sounds[i].__played) this._sounds[i].__played = false;

        this._sounds[i].pause();
      }

      return this;
    }
  }, {
    key: "stop",
    value: function stop() {
      for (var i = 0; i < this._sounds.length; i++) {
        if (this._sounds[i].__played) this._sounds[i].__played = false;

        this._sounds[i].pause();

        this._sounds[i].currentTime = 0;
      }

      return this;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var ready = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var clearArr = ready ? this._sounds.splice(ready) : this._sounds;

      for (var i = 0; i < clearArr.length; i++) {
        if (clearArr[i].destroy) clearArr[i].destroy();
      }

      return this;
    }
  }, {
    key: "check",
    value: function check() {
      for (var i = 0; i < this._sounds.length; i++) {
        if (this._sounds[i].__played || !this._sounds[i].paused) {
          this._sounds[i].play();
        } else {
          this._sounds[i].pause();
        }
      }
    }
  }, {
    key: "loop",
    get: function get() {
      return this._loop;
    },
    set: function set(loop) {
      this._loop = loop;

      for (var i = 0; i < this._sounds.length; i++) {
        this._sounds[i].loop = loop;
      }
    }
  }, {
    key: "volume",
    get: function get() {
      return this._volume;
    },
    set: function set(volume) {
      this._volume = volume;

      for (var i = 0; i < this._sounds.length; i++) {
        this._sounds[i].volume = volume;
      }
    }
  }, {
    key: "muted",
    get: function get() {
      return this._muted;
    },
    set: function set(muted) {
      this._muted = muted;

      for (var i = 0; i < this._sounds.length; i++) {
        this._sounds[i].muted = muted;
      }
    }
  }]);

  return AudioSource;
}();
var AudioLoader =
/*#__PURE__*/
function (_Loader2) {
  _inherits(AudioLoader, _Loader2);

  function AudioLoader() {
    var _this4;

    _classCallCheck(this, AudioLoader);

    _this4 = _possibleConstructorReturn(this, _getPrototypeOf(AudioLoader).call(this));
    _this4._muted = false;
    _this4._volume = 1;
    return _this4;
  }

  _createClass(AudioLoader, [{
    key: "load",
    value: function load(key, url) {
      var _this5 = this;

      return new Promise(function (resolve, reject) {
        _this5.resources[key] = new AudioSource({
          src: url,
          onload: resolve
        });
      });
    }
  }, {
    key: "play",
    value: function play(key, loop) {
      if (!this.resources[key]) return;
      return this.resources[key].play(loop);
    }
  }, {
    key: "check",
    value: function check() {
      var _this6 = this;

      Object.keys(this.resources).forEach(function (key) {
        _this6.resources[key].check();
      });
    }
  }, {
    key: "muted",
    get: function get() {
      return this._muted;
    },
    set: function set(muted) {
      var _this7 = this;

      this._muted = muted;
      return Object.keys(this.resources).forEach(function (key) {
        _this7.resources[key].muted = muted;
      });
    }
  }, {
    key: "volume",
    get: function get() {
      return this._volume;
    },
    set: function set(volume) {
      var _this8 = this;

      this._volume = volume;
      return Object.keys(this.resources).forEach(function (key) {
        _this8.resources[key].volume = volume;
      });
    }
  }]);

  return AudioLoader;
}(Loader);

function TransformUpdate(context, matrix) {
  var e = matrix.elements;
  context.setTransform(e[0], e[1], e[4], e[5], e[12], e[13]);
  return true;
}

function Render(sprite, context, dirty) {
  var targetAlpha = sprite.color.alpha < 1 ? sprite.color.alpha : sprite._opacity;
  if (targetAlpha == 0) return;
  if (context.globalAlpha != targetAlpha) context.globalAlpha = targetAlpha;
  var transformUpdate = false;

  if (sprite.render) {
    if (!transformUpdate) transformUpdate = TransformUpdate(context, sprite.matrix);
    sprite.render(context, dirty);
  }

  if (sprite.texture) {
    if (!transformUpdate) transformUpdate = TransformUpdate(context, sprite.matrix);
    if (!sprite.builder) sprite.builder = [];
    sprite.builder.length = 0;
    sprite.builder.push(sprite.texture.source);
    if (sprite.clip) Array.prototype.push.apply(sprite.builder, sprite.clip);
    sprite.builder.push(sprite.left, sprite.top, sprite.width, sprite.height);

    if (sprite.morph == 'Circle') {
      context.save(); // 保存当前ctx的状态

      context.beginPath();
      context.arc(-sprite.anchorX, -sprite.anchorY, Math.min(sprite.width, sprite.height) * 0.5, 0, 2 * Math.PI); //画出圆

      context.clip(); //裁剪上面的圆形
    }

    context.drawImage.apply(context, sprite.builder); //绘制元素

    if (sprite.morph == 'Circle') context.restore(); // 还原状态
  }
}

function CanvasRender(sprite, context, dirty) {
  if (!(sprite instanceof Array)) return Render(sprite, context, dirty);

  for (var i = 0; i < sprite.length; i++) {
    Render(sprite[i], context, dirty);
  }
}

var Shape = {
  Circle: function Circle(sprite, vetices) {
    var length = (sprite.width + sprite.height) / 20 | 0;
    var radian = 2 * Math.PI / length;
    var cx = 0.5;
    var cy = 0.5;
    var rx = 0.5;
    var ry = 0.5;

    if (sprite.clip) {
      rx = sprite.clip[2] / 2 / sprite.texture.width;
      ry = sprite.clip[3] / 2 / sprite.texture.height;
      cx = sprite.clip[0] / sprite.texture.width + rx;
      cy = sprite.clip[1] / sprite.texture.height + ry;
    }

    vetices.push(0, 0, cx, cy);

    for (var i = 0; i <= length; i++) {
      var r = i * radian;
      var cos = Math.cos(r);
      var sin = Math.sin(r);
      vetices.push(0.5 * cos, 0.5 * sin, rx * cos + cx, ry * sin + cy);
    }
  },
  Rectangle: function Rectangle(sprite, vetices) {
    var cLeft = 0;
    var cTop = 0;
    var cRight = 1;
    var cBottom = 1;

    if (sprite.clip) {
      cLeft = sprite.clip[0] / sprite.texture.width;
      cTop = sprite.clip[1] / sprite.texture.height;
      cRight = (sprite.clip[0] + sprite.clip[2]) / sprite.texture.width;
      cBottom = (sprite.clip[1] + sprite.clip[3]) / sprite.texture.height;
    }

    vetices.push(-0.5, -0.5, cLeft, cTop, 0.5, -0.5, cRight, cTop, -0.5, 0.5, cLeft, cBottom, 0.5, 0.5, cRight, cBottom);
  } //TODO 多边形

};
var CompareUpdate = {
  updateRenderMatrix: ['transformId', 'width', 'height', 'anchorX', 'anchorY'],
  updateVetices: ['morph', 'clip'],
  updateBlendColor: [],
  equal: function equal(name, compare, sprite) {
    return this[name].every(function (key) {
      return compare[key] === sprite[key];
    });
  },
  set: function set(name, compare, sprite) {
    this[name].forEach(function (key) {
      return compare[key] = sprite[key];
    });
  }
};
var Builder =
/*#__PURE__*/
function () {
  function Builder(gl, sprite) {
    _classCallCheck(this, Builder);

    this.compare = {};
    this.vetices = [];
    this.image = null;
    this.matrix = new Matrix4();
    this.color = new Color();
  } //更新纹理


  _createClass(Builder, [{
    key: "updateTexture",
    value: function updateTexture(gl, image) {
      if (this.image != image) {
        if (this.image && !this.image.forever) {
          gl.deleteTexture(this.image.texture);
          this.image.texture = null;
        }

        this.image = image;
      }

      if (!image) return;

      if (!image.texture) {
        image.texture = gl.createTexture();
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, image.texture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      } else if (image.textureId != image.sourceId) {
        gl.bindTexture(gl.TEXTURE_2D, image.texture);
      } else {
        return;
      }

      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image.source);
      if (image.optimization && image.src) image.source = null;
      image.textureId = image.sourceId;
    } //更新绘制矩阵

  }, {
    key: "updateRenderMatrix",
    value: function updateRenderMatrix(gl, sprite) {
      if (CompareUpdate.equal('updateRenderMatrix', this.compare, sprite)) return;
      this.matrix.setApply(sprite.matrix);
      this.matrix.translate(-sprite.anchorX, -sprite.anchorY);
      this.matrix.scale(sprite.width, sprite.height);
      CompareUpdate.set('updateRenderMatrix', this.compare, sprite);
    } //更新顶点

  }, {
    key: "updateVetices",
    value: function updateVetices(gl, sprite) {
      if (this.buffer && CompareUpdate.equal('updateVetices', this.compare, sprite)) return;
      this.vetices.length = 0;
      Shape[sprite.morph] ? Shape[sprite.morph](sprite, this.vetices) : Shape.Rectangle(sprite, this.vetices);
      this.bufferLength = this.vetices.length / 4;
      this.drawType = sprite.morph == 'Circle' ? gl.TRIANGLE_FAN : gl.TRIANGLE_STRIP;
      if (!this.buffer) this.buffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vetices), gl.STATIC_DRAW);
      CompareUpdate.set('updateVetices', this.compare, sprite);
    } //更新颜色

  }, {
    key: "updateBlendColor",
    value: function updateBlendColor(gl, sprite) {
      this.color.setApply(sprite.color);
      if (this.color.alpha == 1) this.color.alpha = sprite.opacity;
    } //单帧处理

  }, {
    key: "update",
    value: function update(gl, sprite) {
      this.updateTexture(gl, sprite.texture);
      this.updateRenderMatrix(gl, sprite);
      this.updateVetices(gl, sprite);
      this.updateBlendColor(gl, sprite);
      if (!this.buffer) return;
      gl.shader.texture(sprite.texture.texture);
      gl.shader.transform(this.matrix);
      gl.shader.blend(this.color);
      gl.shader.buffer(this.buffer, 2, 2, 0, 4);
      gl.drawArrays(this.drawType, 0, this.bufferLength);
    }
  }, {
    key: "destroy",
    value: function destroy(gl) {
      if (this.buffer) {
        gl.deleteBuffer(this.buffer);
        this.buffer = null;
      }

      this.updateTexture(gl);
    }
  }]);

  return Builder;
}();

function Render$1(sprite, gl, dirty) {
  if (sprite.render) sprite.render(gl, dirty);

  if (sprite.texture) {
    if (!sprite.builder) dirty.add(sprite.builder = new Builder(gl, sprite));
    sprite.builder.update(gl, sprite);
    dirty.use(sprite.builder);
  }
}

function WebglRender(sprite, context, dirty) {
  if (!(sprite instanceof Array)) return Render$1(sprite, context, dirty);

  for (var i = 0; i < sprite.length; i++) {
    Render$1(sprite[i], context, dirty);
  }
}

// export function getExtension(gl) {
// 	//用WEBGL1就够了
// 	// let drawBuffers = gl.getExtension('WEBGL_draw_buffers');
// 	// let depthTexture = gl.getExtension('WEBKIT_WEBGL_depth_texture');
// 	// let loseContext = gl.getExtension('WEBGL_lose_context');
// 	let vertexArrayObject =
// 		gl.getExtension('OES_vertex_array_object') || gl.getExtension('MOZ_OES_vertex_array_object') || gl.getExtension('WEBKIT_OES_vertex_array_object');
// 	// let anisotropicFiltering = gl.getExtension('EXT_texture_filter_anisotropic');
// 	// let uint32ElementIndex = gl.getExtension('OES_element_index_uint');
// 	// // Floats and half-floats
// 	// let floatTexture = gl.getExtension('OES_texture_float');
// 	// let floatTextureLinear = gl.getExtension('OES_texture_float_linear');
// 	// let textureHalfFloat = gl.getExtension('OES_texture_half_float');
// 	// let textureHalfFloatLinear = gl.getExtension('OES_texture_half_float_linear');
// 	let vertexAttribDivisor = gl.getExtension('ANGLE_instanced_arrays');
// 	gl.createVertexArray = () => vertexArrayObject.createVertexArrayOES();
// 	gl.bindVertexArray = vao => vertexArrayObject.bindVertexArrayOES(vao);
// 	gl.deleteVertexArray = vao => vertexArrayObject.deleteVertexArrayOES(vao);
// 	gl.vertexAttribDivisor = (a, b) => vertexAttribDivisor.vertexAttribDivisorANGLE(a, b);
// 	gl.drawElementsInstanced = (a, b, c, d, e) => vertexAttribDivisor.drawElementsInstancedANGLE(a, b, c, d, e);
// 	gl.drawArraysInstanced = (a, b, c, d) => vertexAttribDivisor.drawArraysInstancedANGLE(a, b, c, d);
// 	return gl;
// }
var Shader =
/*#__PURE__*/
function () {
  function Shader(gl) {
    _classCallCheck(this, Shader);

    this.gl = gl;
    this.attributes = {};
    this.uniforms = {};
    this.createProgram();
    this.getActiveAttrib();
    this.getActiveUniform();
  }

  _createClass(Shader, [{
    key: "createShader",
    value: function createShader(type, text) {
      var gl = this.gl;
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
  }, {
    key: "getActiveAttrib",
    value: function getActiveAttrib() {
      var gl = this.gl,
          program = this.program,
          attributes = this.attributes;

      for (var i = 0, len = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES); i < len; i++) {
        var attr = gl.getActiveAttrib(program, i); //size,type,name

        var id = attributes[attr.name] = gl.getAttribLocation(program, attr.name);
        gl.enableVertexAttribArray(id);
      }
    }
  }, {
    key: "getActiveUniform",
    value: function getActiveUniform() {
      var gl = this.gl,
          program = this.program,
          uniforms = this.uniforms;

      for (var i = 0, len = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS); i < len; i++) {
        var attr = gl.getActiveUniform(program, i); //size,type,name

        uniforms[attr.name] = gl.getUniformLocation(program, attr.name);
      }
    }
  }, {
    key: "createProgram",
    value: function createProgram() {
      var gl = this.gl;
      var program = gl.createProgram();
      gl.attachShader(program, this.createShader('VERTEX_SHADER', this.vert));
      gl.attachShader(program, this.createShader('FRAGMENT_SHADER', this.frag));
      gl.linkProgram(program);

      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        gl.deleteProgram(program);
        gl.deleteShader(program);
        gl.deleteShader(program);
        throw '链接程序失败';
      }

      this.program = program;
    }
  }, {
    key: "vert",
    get: function get() {
      return '';
    }
  }, {
    key: "frag",
    get: function get() {
      return '';
    }
  }]);

  return Shader;
}();

var WebGLShader =
/*#__PURE__*/
function (_Shader) {
  _inherits(WebGLShader, _Shader);

  function WebGLShader() {
    _classCallCheck(this, WebGLShader);

    return _possibleConstructorReturn(this, _getPrototypeOf(WebGLShader).apply(this, arguments));
  }

  _createClass(WebGLShader, [{
    key: "buffer",
    value: function buffer(_buffer) {
      var vetices = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
      var uvs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
      var offset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var bpe = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 4;
      var gl = this.gl,
          attributes = this.attributes;
      if (gl.BufferRecord === _buffer) return;
      gl.BufferRecord = _buffer;
      gl.bindBuffer(gl.ARRAY_BUFFER, _buffer);
      gl.vertexAttribPointer(attributes.aPosition, vetices, gl.FLOAT, false, (vetices + uvs) * bpe, offset * bpe);
      gl.enableVertexAttribArray(attributes.aPosition);
      gl.vertexAttribPointer(attributes.aTextureCoord, uvs, gl.FLOAT, false, (vetices + uvs) * bpe, (offset + vetices) * bpe);
      gl.enableVertexAttribArray(attributes.aTextureCoord);
    }
  }, {
    key: "texture",
    value: function texture(_texture) {
      var gl = this.gl,
          uniforms = this.uniforms;
      if (gl.TextureRecord === _texture) return;
      gl.TextureRecord = _texture;
      gl.bindTexture(gl.TEXTURE_2D, _texture);
      gl.uniform1i(uniforms.uSampler, 0);
    }
  }, {
    key: "transform",
    value: function transform(matrix) {
      var gl = this.gl,
          uniforms = this.uniforms;
      gl.uniformMatrix4fv(uniforms.uModelMatrix, false, matrix.elements || matrix);
    }
  }, {
    key: "blend",
    value: function blend(color) {
      var gl = this.gl,
          uniforms = this.uniforms;

      if (color) {
        gl.uniform4f(uniforms.uColor, color.elements[0], color.elements[1], color.elements[2], color.elements[3]);
      } else {
        gl.uniform4f(uniforms.uColor, 1, 1, 1, 1);
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

  return WebGLShader;
}(Shader);

export { Animation, AudioLoader, AudioSource, CanvasRender, Clock, Collision, Color, Container, Director, Dirty, Event, ImageLoader, ImageSource, Loader, Matrix4, polyfill as Polyfill, Random, Sprite, Touch, Vector, Vector2, Vector3, WebglRender as WebGLRender, WebGLShader };
