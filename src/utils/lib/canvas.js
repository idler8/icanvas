let Patterns = {};
let Canvas = {
	SetTransform(matrix) {
		this.setTransform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);
		return this;
	},
	Transform(matrix, r) {
		if (r) {
			this.transform(1 / matrix[0], -matrix[1], -matrix[2], 1 / matrix[3], -matrix[4], -matrix[5]);
		} else {
			this.transform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);
		}
		return this;
	},
	//将图片缓存为平铺
	ImagePattern: function(a, x, y, w, h) {
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
	SetSize(width, height) {
		this.canvas.width = width;
		this.canvas.height = height;
		this.fillStyle = '#000000';
		return this;
	},
	//清空
	Clear: function(x = 0, y = 0, w, h) {
		this.clearRect(x, y, w || this.canvas.width, h || this.canvas.height);
		return this;
	},
	//设置文字属性
	FontSet(font, fillStyle, textAlign, textBaseline) {
		if (font && this.font != font) this.font = font;
		if (fillStyle && this.fillStyle != fillStyle) this.fillStyle = fillStyle;
		if (textAlign && this.textAlign != textAlign) this.textAlign = textAlign;
		if (textBaseline && this.textBaseline != textBaseline) this.textBaseline = textBaseline;
		return this;
	},
	//填充
	Fill: function(fillStyle) {
		if (fillStyle && this.fillStyle != fillStyle) this.fillStyle = fillStyle;
		this.fill();
		return this;
	},
	//描边
	Stroke: function(strokeStyle, lineWidth) {
		if (strokeStyle && this.strokeStyle != strokeStyle) this.strokeStyle = strokeStyle;
		if (lineWidth && this.lineWidth != lineWidth) this.lineWidth = lineWidth;
		this.stroke();
		return this;
	},
	//绘制图片
	Image: function(a, x, y, w, h) {
		let img = Canvas.Image.GetImage(a);
		Array.prototype.splice.call(arguments, 0, 3, img, x - (w || img.width) / 2, y - (h || img.height) / 2);
		this.drawImage.apply(this, arguments);
		return this;
	},
	//多边形
	Polygon: function() {
		let last1 = arguments[arguments.length - 1];
		this.beginPath();
		this.moveTo((last1.x + arguments[0].x) / 2, (last1.y + arguments[0].y) / 2);
		let n = Array.prototype.reduce.call(arguments, (n, p) => (n.r ? this.arcTo(n.x, n.y, p.x, p.y, n.r) : this.lineTo(n.x, n.y), p));
		let p = arguments[0];
		n.r ? this.arcTo(n.x, n.y, p.x, p.y, n.r) : this.lineTo(n.x, n.y);
		this.closePath();
		return this;
	},
	//圆角矩形
	ArcRect: function(x, y, w, h, r = 8) {
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
	PolygonTidy: function(x = 0, y = 0, r = 100, n = 3, s = 0, radius) {
		if (n instanceof Array) {
			let vs = n.map((d, i) => {
				let newX = x + r * d * Math.cos((((360 * i) / n.length + s) * 2 * Math.PI) / 360);
				let newY = y + r * d * Math.sin((((360 * i) / n.length + s) * 2 * Math.PI) / 360);
				return { x: newX, y: newY, r: radius };
			});
			return this.Polygon.apply(this, vs);
		} else {
			let vs = [];
			for (var i = 0; i < n; i++) {
				let newX = x + r * Math.cos((((360 * i) / n + s) * 2 * Math.PI) / 360);
				let newY = y + r * Math.sin((((360 * i) / n + s) * 2 * Math.PI) / 360);
				vs.push({ x: newX, y: newY, r: radius });
			}
			return this.Polygon.apply(this, vs);
		}
	},
	//虚线
	DashLine: function(x1, y1, x2, y2, dashLength, emptyLength) {
		var dashLen = dashLength || 12,
			emptyLen = emptyLength || 3,
			xpos = x2 - x1, //得到横向的宽度;
			ypos = y2 - y1, //得到纵向的高度;
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
	},
};
export default Canvas;
