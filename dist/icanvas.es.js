import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import _assertThisInitialized from '@babel/runtime/helpers/assertThisInitialized';
import _inherits from '@babel/runtime/helpers/inherits';
import _wrapNativeSuper from '@babel/runtime/helpers/wrapNativeSuper';
import _typeof from '@babel/runtime/helpers/typeof';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import Event from 'eventemitter3';

/**
 * @class 扩展数组类
 */
var BaseArray =
/*#__PURE__*/
function (_Array) {
  _inherits(BaseArray, _Array);

  function BaseArray() {
    var _this;

    _classCallCheck(this, BaseArray);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BaseArray).call(this, arguments.length));

    _this.setTo.apply(_assertThisInitialized(_this), arguments);

    return _this;
  }
  /**
   * 将数组所有内容设置为同一个值
   * @param {Any} n
   */


  _createClass(BaseArray, [{
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
}(_wrapNativeSuper(Array));

var Vector =
/*#__PURE__*/
function (_BaseArray) {
  _inherits(Vector, _BaseArray);

  function Vector() {
    _classCallCheck(this, Vector);

    return _possibleConstructorReturn(this, _getPrototypeOf(Vector).apply(this, arguments));
  }

  _createClass(Vector, [{
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

var Matrix3 =
/*#__PURE__*/
function (_BaseArray) {
  _inherits(Matrix3, _BaseArray);

  _createClass(Matrix3, [{
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

    _classCallCheck(this, Matrix3);

    return _possibleConstructorReturn(this, _getPrototypeOf(Matrix3).call(this, a, b, c, d, tx, ty, 0, 0, 1));
  } //重置矩阵


  _createClass(Matrix3, [{
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

var Week = ['日', '一', '二', '三', '四', '五', '六'];

var Time =
/*#__PURE__*/
function () {
  function Time() {
    _classCallCheck(this, Time);

    this.Date = null;
  }
  /**
   * 设置时间
   * @param {Any} value 设置时间值
   * @param {String} fmt 源格式
   * jstimestamp 13位时间戳 到毫秒
   * timestamp 10位时间戳 到秒
   */


  _createClass(Time, [{
    key: "Set",
    value: function Set(value) {
      var fmt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'jstimestamp';

      if (!value) {
        this.Date = null;
      } else if (value instanceof Date) {
        this.Data = value;
      } else if (_typeof(value) == 'object') {
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
    _classCallCheck(this, Position);

    _defineProperty(this, "_options", {
      left: 0,
      top: 0,
      right: 750,
      bottom: 1334,
      cacheY: {},
      cacheX: {}
    });
  }

  _createClass(Position, [{
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
    _classCallCheck(this, Clock);

    _defineProperty(this, "time", 0);

    _defineProperty(this, "then", 0);

    _defineProperty(this, "change", 0);

    _defineProperty(this, "delta", 0);

    _defineProperty(this, "interval", 1000 / 60);
  }

  _createClass(Clock, [{
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

function Factory(prototype, source) {
  var keys = Object.keys(source);

  for (var i = 0; i < keys.length; ++i) {
    var key = keys[i];
    var property = Object.getOwnPropertyDescriptor(source, key);
    Object.defineProperty(prototype, key, property);
  }
}

function option(options) {
  this.alpha = options.alpha === undefined ? 1 : options.alpha;
}
var data = {
  set alpha(a) {
    if (this._alpha < 0 && this.parent) return this.parent.alpha;
    this._alpha = a;
  },

  get alpha() {
    return this._alpha;
  },

  setAlpha: function setAlpha(a) {
    this.alpha = a;
    return this;
  },
  getAlpha: function getAlpha() {
    return this.alpha;
  }
};

var Alpha = /*#__PURE__*/Object.freeze({
	__proto__: null,
	option: option,
	data: data
});

function option$1(options) {
  this.anchor = new Vector2();

  if (options.anchor) {
    if (options.anchor.x !== undefined) this.anchorX = options.anchor.x;
    if (options.anchor.y !== undefined) this.anchorY = options.anchor.y;
  }

  if (options.anchorX !== undefined) this.anchorX = options.anchorX;
  if (options.anchorY !== undefined) this.anchorY = options.anchorY;
}
var data$1 = {
  get anchorX() {
    return this.anchor.x;
  },

  set anchorX(x) {
    this.anchor.x = x;
  },

  get anchorY() {
    return this.anchor.y;
  },

  set anchorY(y) {
    this.anchor.y = y;
  },

  setAnchor: function setAnchor(x, y) {
    this.anchorX = x;
    this.anchorY = y;
    return this;
  },
  setAnchorX: function setAnchorX(x) {
    this.anchorX = x;
    return this;
  },
  setAnchorY: function setAnchorY(y) {
    this.anchorY = y;
    return this;
  },
  getAnchorX: function getAnchorX() {
    return this.anchorX;
  },
  getAnchorY: function getAnchorY() {
    return this.anchorY;
  },
  offsetTouch: function offsetTouch(touch) {
    return touch.addToVector(this.anchor);
  }
};

var Anchor = /*#__PURE__*/Object.freeze({
	__proto__: null,
	option: option$1,
	data: data$1
});

function option$2(options) {
  this.radian = options.radian !== undefined ? options.radian : 0;
  if (options.angle !== undefined) this.angle = options.angle;
}
var data$2 = {
  /**
   * 角度控制
   */
  set angle(a) {
    this.radian = a * Math.PI / 180;
  },

  get angle() {
    return this.radian * 180 / Math.PI;
  },

  getRadian: function getRadian() {
    return this.radian;
  },
  getAngle: function getAngle() {
    return this.angle;
  },
  setRadian: function setRadian(r) {
    this.radian = r;
    return this;
  },
  setAngle: function setAngle(a) {
    this.angle = a;
    return this;
  }
};

var Angle = /*#__PURE__*/Object.freeze({
	__proto__: null,
	option: option$2,
	data: data$2
});

function option$3(options) {
  this.parent = null; //父元素

  this.children = []; //子元素列表

  if (options.children) this.addChild(options.children);
}
var data$3 = {
  /**
   * 将本组件加入某个组件下面
   * @param {Component} Component 父级
   * @param {Number} index 位置
   * Component为空时，相当于从父组件卸载本组件
   */
  setParent: function setParent(Component) {
    var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
    if (!Component) return this.parent ? this.parent.removeChild(this) : this;
    if (this.parent == Component) return this;
    if (!this.parent) Component.addChildAt(this, index);
    return this;
  },

  /**
   * 在固定位置增加子组件
   * @param {Component} Component 组件
   * @param {Number} index 位置
   */
  addChildAt: function addChildAt(Component) {
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
  },

  /**
   * 增加子组件
   * @param {Component} Component 组件
   */
  addChild: function addChild(Component) {
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
  },

  /**
   * 移除子组件
   * @param {Component} Component 组件
   */
  removeChild: function removeChild(Component) {
    if (arguments.length > 1) {
      for (var i = 0; i < arguments.length; i++) {
        this.removeChild(arguments[i]);
      }

      return this;
    }

    if (!Component) return this;

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
    if (index >= 0) this.children.splice(index, 1);
    Component.parent = null;
    if (Component.destroyed) Component.destroyed();
    return this;
  },

  /**
   * 逐个移除所有子组件
   */
  removeChildren: function removeChildren() {
    for (var i = this.children.length - 1; i >= 0; i--) {
      this.removeChild(this.children[i]);
    }

    return this;
  }
};

var Children = /*#__PURE__*/Object.freeze({
	__proto__: null,
	option: option$3,
	data: data$3
});

var defaultFont = {
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
  lineHeight: 0,
  wrapWidth: 0
};
function option$4(options) {
  if (!this.font) this.font = Object.assign({}, defaultFont);
  if (options.font) this.setFont(options.font);
}
var data$4 = {
  /**
   * 绘制样式控制
   */
  set wrapWidth(v) {
    this.font.wrapWidth = v;
  },

  get wrapWidth() {
    return this.font.wrapWidth;
  },

  set lineHeight(v) {
    this.font.lineHeight = v;
  },

  get lineHeight() {
    return this.font.lineHeight;
  },

  set fontSize(v) {
    this.font.size = v;
  },

  get fontSize() {
    return this.font.size;
  },

  set textAlign(v) {
    this.font.textAlign = v;
  },

  get textAlign() {
    return this.font.align;
  },

  set textBaseline(v) {
    this.font.textBaseline = v;
  },

  get textBaseline() {
    return this.font.baseline;
  },

  get family() {
    return "".concat(this.font.weight, " ").concat(this.font.size, "px ").concat(this.font.family);
  },

  setFont: function setFont(font) {
    Object.assign(this.font, font);
    return this;
  }
};

var Padding =
/*#__PURE__*/
function (_Vector) {
  _inherits(Padding, _Vector);

  function Padding() {
    var top = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var right = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var bottom = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var left = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    _classCallCheck(this, Padding);

    return _possibleConstructorReturn(this, _getPrototypeOf(Padding).call(this, top, right, bottom, left));
  }

  _createClass(Padding, [{
    key: "top",
    get: function get() {
      return this[0];
    },
    set: function set(x) {
      this[0] = x;
    }
  }, {
    key: "right",
    get: function get() {
      return this[1];
    },
    set: function set(y) {
      this[1] = y;
    }
  }, {
    key: "bottom",
    get: function get() {
      return this[2];
    },
    set: function set(y) {
      this[2] = y;
    }
  }, {
    key: "left",
    get: function get() {
      return this[3];
    },
    set: function set(y) {
      this[3] = y;
    }
  }, {
    key: "width",
    get: function get() {
      return this[1] + this[3];
    }
  }, {
    key: "height",
    get: function get() {
      return this[0] + this[2];
    }
  }]);

  return Padding;
}(Vector);

function option$5(options) {
  this.padding = new Padding();
  if (options.padding) typeof options.padding == 'string' ? this.setPadding(options.padding) : this.padding.setToArray(ptions.padding);
  if (options.paddingLeft) this.paddingLeft = options.paddingLeft;
  if (options.paddingRight) this.paddingRight = options.paddingRight;
  if (options.paddingTop) this.paddingTop = options.paddingTop;
  if (options.paddingBottom) this.paddingBottom = options.paddingBottom;
}
var data$5 = {
  set paddingLeft(p) {
    this.padding.left = p;
  },

  get paddingLeft() {
    return this.padding.left;
  },

  set paddingRight(p) {
    this.padding.right = p;
  },

  get paddingRight() {
    return this.padding.right;
  },

  set paddingTop(p) {
    this.padding.top = p;
  },

  get paddingTop() {
    return this.padding.top;
  },

  set paddingBottom(p) {
    this.padding.bottom = p;
  },

  get paddingBottom() {
    return this.padding.bottom;
  },

  getPaddingRight: function getPaddingRight() {
    return this.paddingRight;
  },
  setPaddingRight: function setPaddingRight(p) {
    this.paddingRight = p;
    return this;
  },
  getPaddingTop: function getPaddingTop() {
    return this.paddingTop;
  },
  setPaddingTop: function setPaddingTop(p) {
    this.paddingTop = p;
    return this;
  },
  getPaddingLeft: function getPaddingLeft() {
    return this.paddingLeft;
  },
  setPaddingLeft: function setPaddingLeft(p) {
    this.paddingLeft = p;
    return this;
  },
  getPaddingBottom: function getPaddingBottom() {
    return this.paddingBottom;
  },
  setPaddingBottom: function setPaddingBottom(p) {
    this.paddingBottom = p;
    return this;
  },
  setPadding: function setPadding(string) {
    try {
      var p = string.toString().split(/[^0-9]+/).filter(function (s) {
        return s !== '';
      });

      if (p.length == 0) {} else if (p.length == 1) {
        this.padding.setTo(p[0], p[0], p[0], p[0]);
      } else if (p.length == 2) {
        this.padding.setTo(p[0], p[1], p[0], p[1]);
      } else if (p.length == 3) {
        this.padding.setTo(p[0], p[1], p[2], p[1]);
      } else {
        this.padding.setTo(p[0], p[1], p[2], p[3]);
      }
    } catch (e) {}

    return this;
  }
};

function option$6(options) {
  this.position = new Vector2();

  if (options.position) {
    if (options.position.x !== undefined) this.x = options.position.x;
    if (options.position.y !== undefined) this.y = options.position.y;
  }

  if (options.x !== undefined) this.x = options.x;
  if (options.y !== undefined) this.y = options.y;
}
var data$6 = {
  get x() {
    return this.position.x;
  },

  set x(x) {
    this.position.x = x;
  },

  get y() {
    return this.position.y;
  },

  set y(y) {
    this.position.y = y;
  },

  setPosition: function setPosition(x, y) {
    this.x = x;
    this.y = y;
    return this;
  },
  setX: function setX(x) {
    this.x = x;
    return this;
  },
  setY: function setY(y) {
    this.y = y;
    return this;
  },
  getX: function getX() {
    var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    return this.x * n;
  },
  getY: function getY() {
    var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    return this.y * n;
  }
};

var Position$1 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	option: option$6,
	data: data$6
});

function option$7(options) {
  this.scale = new Vector2();

  if (options.scale) {
    if (options.scale.x != undefined) this.scaleY = options.scale.x;
    if (options.scale.y != undefined) this.scaleY = options.scale.y;
  }

  if (options.scaleX !== undefined) this.scaleX = options.scaleX;
  if (options.scaleY !== undefined) this.scaleY = options.scaleY;
}
var data$7 = {
  get scaleX() {
    return this.scale.x;
  },

  set scaleX(x) {
    this.scale.x = x;
  },

  get scaleY() {
    return this.scale.y;
  },

  set scaleY(y) {
    this.scale.y = y;
  },

  setScale: function setScale(x, y) {
    this.scaleX = x;
    this.scaleY = y;
    return this;
  },
  setScaleX: function setScaleX(x) {
    this.scaleX = x;
    return this;
  },
  setScaleY: function setScaleY(y) {
    this.scaleY = y;
    return this;
  },
  getScaleX: function getScaleX() {
    return this.scaleX;
  },
  getScaleY: function getScaleY() {
    return this.scaleY;
  }
};

var Scale = /*#__PURE__*/Object.freeze({
	__proto__: null,
	option: option$7,
	data: data$7
});

function option$8(options) {
  this.size = new Vector2();
  if (options.width !== undefined) this.width = options.width;
  if (options.height !== undefined) this.height = options.height;
}
var data$8 = {
  get width() {
    return this.size.x;
  },

  set width(x) {
    this.size.x = x;
  },

  get height() {
    return this.size.y;
  },

  set height(y) {
    this.size.y = y;
  },

  setSize: function setSize(x, y) {
    this.width = x;
    this.height = y;
    return this;
  },
  setWidth: function setWidth(x) {
    this.width = x;
    return this;
  },
  setHeight: function setHeight(y) {
    this.height = y;
    return this;
  },
  getWidth: function getWidth() {
    var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    return this.width * n;
  },
  getHeight: function getHeight() {
    var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    return this.height * n;
  },
  setSizeLimit: function setSizeLimit(maxX, maxY, minX, minY) {
    if (!this.height || !this.width) return this;
    var lv = this.width / this.height;

    if (maxX && this.width > maxX) {
      this.width = maxX;
      this.height = maxX / lv;
    }

    if (maxY && this.height > maxY) {
      this.height = maxY;
      this.width = maxY * lv;
    }

    if (minX && this.width < minX) {
      this.width = minX;
      this.height = maxX / lv;
    }

    if (minY && this.height < minY) {
      this.height = maxY;
      this.width = maxY * lv;
    }

    return this;
  }
};

var Size = /*#__PURE__*/Object.freeze({
	__proto__: null,
	option: option$8,
	data: data$8
});

var defaultStyle = {
  strokeUp: false,
  //首先填充
  fillStyle: '',
  //填充色
  lineWidth: 0,
  //线宽
  strokeStyle: '#FFFFFF' //线框色

};
function option$9(options) {
  if (!this.style) this.style = Object.assign({}, defaultStyle);
  if (options.style) this.setFont(options.style);
}
var data$9 = {
  /**
   * 绘制样式控制
   */
  set strokeUp(v) {
    this.style.strokeUp = v;
  },

  get strokeUp() {
    return this.style.strokeUp;
  },

  set fillStyle(v) {
    this.style.fillStyle = v;
  },

  get fillStyle() {
    return this.style.fillStyle;
  },

  set lineWidth(v) {
    this.style.lineWidth = v;
  },

  get lineWidth() {
    return this.style.lineWidth;
  },

  set strokeStyle(v) {
    this.style.strokeStyle = v;
  },

  get strokeStyle() {
    return this.style.strokeStyle;
  },

  setStyle: function setStyle() {
    var style = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    Object.assign(this.style, style);
    return this;
  }
};

function option$a(options) {
  this.visible = options.visible === undefined ? true : options.visible;
}
var data$a = {
  setVisible: function setVisible(a) {
    this.visible = a;
    return this;
  },
  getVisible: function getVisible() {
    return this.visible;
  }
};

var Visible = /*#__PURE__*/Object.freeze({
	__proto__: null,
	option: option$a,
	data: data$a
});

function option$b(options) {
  this.zIndex = options.zIndex === undefined ? 0 : options.zIndex;
}
var data$b = {
  setZIndex: function setZIndex(a) {
    this.zIndex = a;
    return this;
  },
  getZIndex: function getZIndex() {
    return this.zIndex;
  }
};

var ZIndex = /*#__PURE__*/Object.freeze({
	__proto__: null,
	option: option$b,
	data: data$b
});

function Factory$1() {
  var source = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _setOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var Component =
  /*#__PURE__*/
  function () {
    function Component() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, Component);

      this.id = Factory$1.ID ? ++Factory$1.ID : Factory$1.ID = 1;
      this.touchChildren = true; //是否允许点击子元素

      this.touchStop = false; //点击是否不冒泡到父元素

      this.matrix = new Matrix3(); //计算矩阵

      this.setOptions(options);
    }

    _createClass(Component, [{
      key: "setOptions",
      value: function setOptions(options) {
        if (!options) return this;
        if (!_setOptions.length) return this;

        for (var i = 0; i < _setOptions.length; i++) {
          _setOptions[i].call(this, options);
        }

        return this;
      }
    }]);

    return Component;
  }();

  if (source) Factory(Component.prototype, source);
  return Component;
}
var ContainerProperties = [Children, Visible, Position$1, Scale, Angle, ZIndex, Size, Anchor, Alpha];
var ContainerData = {};
var ContainerOptions = [];
ContainerProperties.forEach(function (p) {
  Factory(ContainerData, p.data);
  ContainerOptions.push(p.option);
});
Object.assign(ContainerData, {
  setAnchorSize: function setAnchorSize() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.5;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.5;
    this.anchor.x = this.width * x;
    this.anchor.y = this.height * y;
    return this;
  },
  hitMe: function hitMe(touch) {
    return touch.x >= -this.anchorX - this.paddingLeft && touch.y >= -this.anchorY - this.paddingTop && touch.x <= this.width - this.anchorX + this.paddingRight && touch.x <= this.height - this.anchorY + this.paddingBottom;
  },
  renderPreUpdated: function renderPreUpdated(renderArray) {
    this.parent ? this.matrix.setToArray(this.parent.matrix) : this.matrix.identity();
    this.matrix.translate(this.x, this.y).rotate(this.radian).scale(this.scaleX, this.scaleY);
    if (!this.update) return true;
    this._HandleParentZIndex = (this.parent && this.parent._HandleParentZIndex || 0) + this.zIndex;
    this._HandleZIndex = renderArray.push(this);
  },
  renderUpdate: function renderUpdate(Context) {
    if (this.alpha == 0) return true;
    var alpha = Math.min(1, this.alpha);
    if (alpha != Context.globalAlpha) Context.globalAlpha = alpha;
    Context.setTransform.apply(Context, this.matrix);
  }
});
function ContainerFactory() {
  return (
    /*#__PURE__*/
    function (_Factory) {
      _inherits(Container, _Factory);

      function Container() {
        _classCallCheck(this, Container);

        return _possibleConstructorReturn(this, _getPrototypeOf(Container).apply(this, arguments));
      }

      return Container;
    }(Factory$1(ContainerData, ContainerOptions))
  );
}
function SpriteFactory() {
  return (
    /*#__PURE__*/
    function (_Factory2) {
      _inherits(Sprite, _Factory2);

      function Sprite(texture, options) {
        var _this;

        _classCallCheck(this, Sprite);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(Sprite).call(this, options = Object.assign(typeof texture == 'string' ? {
          texture: texture
        } : texture, options)));
        _this.texture = null;
        _this.useClip = false; //是否切割源图

        _this.clipPosition = new Vector2(); //切割位置

        _this.clipSize = new Vector2(); //切割大小

        if (options.clip) _this.setClip(options.clip.x, options.clip.y, options.clip.width, options.clip.height);

        _this.setTexture(texture);

        return _this;
      }

      _createClass(Sprite, [{
        key: "setClip",
        value: function setClip() {
          var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var width = arguments.length > 2 ? arguments[2] : undefined;
          var height = arguments.length > 3 ? arguments[3] : undefined;
          this.useClip = true;
          this.clipPosition.setTo(x, y);
          this.clipSize.setTo(width, height);
          this.size.setTo(width, height);
          return this;
        }
      }, {
        key: "setTexture",
        value: function setTexture(texture) {
          if (!texture.width || !texture.height) texture = null;
          this.texture = texture;
          if (!this.texture) return this;
          this.useClip = false;
          this.size.setTo(this.texture.width, this.texture.height);
          return this;
        }
      }, {
        key: "update",
        value: function update(Context) {
          if (!this.texture) return;

          if (this.useClip) {
            Context.drawImage(this.texture, this.clipPosition.x, this.clipPosition.y, this.clipSize.x, this.clipSize.y, -this.anchorX, -this.anchorX, this.width * this.clipSize.x / this.texture.width, this.height * this.clipSize.y / this.texture.height);
          } else {
            Context.drawImage(this.texture, -this.anchorX, -this.anchorX, this.width, this.height);
          }
        }
      }]);

      return Sprite;
    }(Factory$1(ContainerData, ContainerOptions))
  );
}
var RectData = {};
Factory(RectData, ContainerData);
Factory(RectData, data$9);
var RectOptions = ContainerOptions.concat([option$9]);
function RectFactory() {
  return (
    /*#__PURE__*/
    function (_Factory3) {
      _inherits(Rect, _Factory3);

      function Rect() {
        _classCallCheck(this, Rect);

        return _possibleConstructorReturn(this, _getPrototypeOf(Rect).apply(this, arguments));
      }

      _createClass(Rect, [{
        key: "update",
        value: function update(Context) {
          if (this.style.lineWidth && !this.style.strokeUp) {
            Context.lineWidth = this.style.lineWidth;
            Context.strokeStyle = this.style.fillStyle;
            Context.strokeRect(-this.anchorX, -this.anchorX, this.width, this.height);
          }

          if (this.style.fillStyle) {
            Context.fillStyle = this.style.fillStyle;
            Context.fillRect(-this.anchorX, -this.anchorX, this.width, this.height);
          }

          if (this.style.lineWidth && this.style.strokeUp) {
            Context.lineWidth = this.style.lineWidth;
            Context.strokeStyle = this.style.fillStyle;
            Context.strokeRect(-this.anchorX, -this.anchorX, this.width, this.height);
          }
        }
      }]);

      return Rect;
    }(Factory$1(RectData, RectOptions))
  );
}
var TextData = {};
Factory(TextData, ContainerData);
Factory(TextData, data$4);
Factory(TextData, data$9);
Factory(TextData, data$5);
var TextOptions = ContainerOptions.concat([option$4, option$9, option$5]);
var AlignWidth = {
  left: 0,
  center: 0.5,
  right: 1
};
var AlignHeight = {
  top: 0,
  middle: 0.5,
  bottom: 1,
  hanging: 0,
  alphabetic: 1,
  ideographic: 1
};
function TextFactory(GetCanvas2D) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_Factory4) {
    _inherits(Text, _Factory4);

    function Text(options) {
      var _this2;

      _classCallCheck(this, Text);

      _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Text).call(this, options));
      _this2.context = GetCanvas2D();
      _this2._value = '';
      if (options.value) _this2._value = options.value;
      return _this2;
    }

    _createClass(Text, [{
      key: "setValue",
      value: function setValue(v) {
        this.value = v;
        return this;
      }
    }, {
      key: "getValue",
      value: function getValue() {
        return this.value;
      }
    }, {
      key: "separate",
      value: function separate(Context, value) {
        var _this3 = this;

        var tags = {};
        var taglength = 0;
        var string = value.replace(/\<(fillStyle|strokeStyle|lineWidth|family|weight|size|i)\=(\S+?)\>/g, function (tag, action, arg, index) {
          tags[index - taglength] = {
            action: action,
            arg: arg
          };
          taglength += tag.length;
          return '';
        });
        var font = {
          weight: this.font.weight,
          size: this.fontSize,
          family: this.font.family
        };
        Context.font = "".concat(font.weight, " ").concat(font.size, "px ").concat(font.family);
        var lines = {
          index: 0,
          content: []
        };
        var line = {
          index: 0,
          width: 0,
          height: font.size,
          content: []
        };

        for (var i = 0, len = string.length; i++; i < len) {
          if (tags[i]) {
            if (tags[i].action == 'fillStyle' || tags[i].action == 'strokeStyle' || tags[i].action == 'lineWidth') {
              line.index = line.content.push(_defineProperty({}, tags[i].action, tags[i].arg));
            } else if (tags[i].action == 'size' || tags[i].action == 'family' || tags[i].action == 'weight') {
              font[tags[i].action] = tags[i].arg == '@' ? this.font[tags[i].action] : tags[i].arg;
              Context.font = "".concat(font.weight, " ").concat(font.size, "px ").concat(font.family);
              line.index = line.content.push({
                font: Context.font
              });
              if (font.size > line.height) line.height = font.size;
            } else if (tags[i].action == 'i') {
              if (this.special && this.special[tags[i].arg] && this.special[tags[i].arg].width) {
                var texture = this.special[tags[i].arg];

                if (this.wrapWidth > 0 && line.width + texture.width > this.wrapWidth) {
                  lines.index = lines.content.push(line);
                  line = {
                    index: 0,
                    width: 0,
                    height: font.size,
                    content: []
                  };
                }

                line.width += texture.width;
                line.index = line.content.push({
                  texture: texture
                });
                if (texture.height > line.height) line.height = texture.height;
              }
            }
          }

          var v = string[i];

          if (v === '' || v === '\n') {
            lines.index = lines.content.push(line);
            line = {
              index: 0,
              width: 0,
              content: []
            };
          } else {
            var width = Context.measureText(v).width;

            if (this.wrapWidth > 0 && line.width + width > this.wrapWidth) {
              lines.index = lines.content.push(line);
              line = {
                index: 0,
                width: 0,
                height: font.size,
                content: []
              };
            }

            line.width += width;
            if (!line.content[line.index]) line.content[line.index] = {
              value: '',
              width: 0,
              height: font.size
            };
            line.content[line.index].width += width;
            line.content[line.index].value += v;
          }
        }

        var widths = lines.content.map(function (l) {
          return l.width;
        });
        this.width = Math.max.apply(null, widths);
        this.height = lines.content.reduce(function (r, line) {
          return r + Math.max(line.height, _this3.lineHeight);
        }, 0);
        Context.canvas.width = this.width + this.paddingLeft + this.paddingRight;
        Context.canvas.height = this.height - Math.max(0, this.lineHeight - lines.content[lines.index - 1].height) + this.paddingTop + this.paddingBottom;
        Context.textAlign = 'left';
        Context.textBaseline = 'top';
        Context.fillStyle = this.style.fillStyle;
        Context.font = this.family;
        var lineWidth = this.style.lineWidth;
        var strokeStyle = this.style.strokeStyle;

        if (lineWidth && strokeStyle) {
          Context.lineWidth = lineWidth;
          Context.strokeStyle = strokeStyle;
        }

        var y = this.paddingTop;
        lines.content.forEach(function (line) {
          var x = _this3.paddingLeft + AlignWidth[_this3.textAlign] * (_this3.width - line.width);
          var lineY = y + Math.max(line.height, _this3.lineHeight);
          y += AlignWidth[_this3.textAlign] * (line.height - _this3.fontSize);
          line.content.forEach(function (cont) {
            if (cont.fillStyle) {
              Context.fillStyle = cont.color;
            } else if (cont.lineWidth) {
              lineWidth = cont.lineWidth;

              if (lineWidth && strokeStyle) {
                Context.lineWidth = lineWidth;
                Context.strokeStyle = strokeStyle;
              }
            } else if (cont.strokeStyle) {
              strokeStyle = cont.strokeStyle;

              if (lineWidth && strokeStyle) {
                Context.lineWidth = lineWidth;
                Context.strokeStyle = strokeStyle;
              }
            } else if (cont.font) {
              Context.font = cont.font;
            } else if (cont.texture) {
              Context.drawImage(cont.texture, x, y - AlignHeight[_this3.textBaseline] * (cont.texture.height - _this3.fontSize));
              x += cont.texture.width;
            } else if (cont.value) {
              var fontY = y - AlignHeight[_this3.textBaseline] * (cont.height - _this3.fontSize);
              if (lineWidth && strokeStyle && !_this3.style.strokeUp) Context.strokeStyle(cont.value, x, fontY);
              Context.fillStyle(cont.value, x, fontY);
              if (lineWidth && strokeStyle && _this3.style.strokeUp) Context.strokeStyle(cont.value, x, fontY);
              x += cont.width;
            }
          });
          y = lineY;
        });
      }
    }, {
      key: "update",
      value: function update(Context) {
        if (!this.context || !this.context.canvs) return;
        Context.drawImage(this.context.canvs, -this.anchorX, -this.anchorX, this.width, this.height);
      }
    }, {
      key: "value",
      set: function set(v) {
        if (this._value === v) return;
        if (!v && v !== 0) v = '';
        if (typeof v != 'string') v = v.toString();
        this._value = v;
        this.separate(this.context, v);
      },
      get: function get() {
        return this._value;
      }
    }]);

    return Text;
  }(Factory$1(TextData, TextOptions)), _defineProperty(_class, "defaultFont", defaultFont), _temp;
}

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
    _classCallCheck(this, Render);

    _defineProperty(this, "renderArray", []);
  }

  _createClass(Render, [{
    key: "Update",

    /**
     *
     * @param {Component} Stage 舞台
     * @param {CanvasRenderingContext2D} Context 渲染上下文
     * @param {Boolean} Clear 是否清空上下文
     */
    value: function Update(Stage, Context, Clear) {
      this.PreUpdate(Stage);
      this.renderArray.sort(function (a, b) {
        return a._HandleParentZIndex - b._HandleParentZIndex || a._HandleZIndex - b._HandleZIndex;
      });
      this.Updating(Context, Clear);
      this.renderArray.length = 0;
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
        if (Component.renderPreUpdated(this.renderArray)) return;
        if (Component.preUpdated) Component.preUpdated();
        if (Component.children.length) this.PreUpdate(Component.children);
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
      this.renderArray.forEach(function (Component) {
        if (Component.renderUpdate) Component.beforeUpdate(Context);
        if (Component.renderUpdated(Context)) return;
        if (Component.update) Component.update(Context);
      });
      Context.setTransform(1, 0, 0, 1, 0, 0);
    }
  }]);

  return Render;
}();

var Touch =
/*#__PURE__*/
function (_Event) {
  _inherits(Touch, _Event);

  function Touch(Position, Size) {
    var _this;

    _classCallCheck(this, Touch);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Touch).call(this));

    _defineProperty(_assertThisInitialized(_this), "onTouchCancel", _this.onTouchEnd);

    if (!Position || !Size) return _possibleConstructorReturn(_this, console.error('缺少触摸范围定义'));
    _this.Position = Position;
    _this.Size = Size;
    _this.Touches = {};
    return _this;
  }

  _createClass(Touch, [{
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
}(Event);

var Collision =
/*#__PURE__*/
function () {
  //触发流程
  function Collision(MatrixHandle, TouchHandle) {
    _classCallCheck(this, Collision);

    if (!MatrixHandle) throw Error('缺少碰撞矩阵');
    if (!TouchHandle) throw Error('缺少碰撞坐标');
    this.MatrixHandle = MatrixHandle;
    this.TouchHandle = TouchHandle;
  }

  _createClass(Collision, [{
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

var Loader =
/*#__PURE__*/
function (_Event) {
  _inherits(Loader, _Event);

  function Loader() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Loader);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Loader)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "resources", {});

    return _this;
  }

  _createClass(Loader, [{
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
  }, {
    key: "loadMap",
    value: function loadMap() {
      var _this4 = this;

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

          var _key2 = perfix + k;

          var _url = root + perfix + k + '.' + map[k];

          Result[_key2] = _url;
        } else {
          Object.assign(Result, _this4.loadMap(map[k], root, perfix + k + '/', exts));
        }
      });
      return Result;
    }
  }]);

  return Loader;
}(Event);

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

function PointInRect(x, y, bx, by, bw, bh) {
  return x >= bx && x <= bx + bw && y >= by && y <= by + bh;
}

export { ContainerFactory as Container, Factory$1 as Factory, BaseArray as MathArray, Clock as MathClock, color as MathColor, Matrix3 as MathMatrix3, Position as MathPosition, Random as MathRandom, Time as MathTime, Vector as MathVector, Vector2 as MathVector2, RectFactory as Rect, SpriteFactory as Sprite, TextFactory as Text, canvas2d as UtilCanvas2D, Collision as UtilCollsion, Loader as UtilLoader, PointInRect as UtilPointInRect, RecursiveMap as UtilRecursiveMap, Render as UtilRender, Touch as UtilTouch };
