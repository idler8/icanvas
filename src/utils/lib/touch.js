import Event from 'eventemitter3';
export default class Touch extends Event {
	constructor(Position, Size) {
		super();
		if (!Position || !Size) return console.error('缺少触摸范围定义');
		this.Position = Position;
		this.Size = Size;
		this.Touches = {};
	}
	onTouchStart(e) {
		let now = Date.now();
		for (let i = 0, l = e.changedTouches.length; i < l; i++) {
			let touch = e.changedTouches[i];
			let touchTip = (this.Touches[touch.identifier] = {});
			touchTip.startX = touchTip.endX = touch.clientX * this.Size.x - this.Position.x;
			touchTip.startY = touchTip.endY = touch.clientY * this.Size.y - this.Position.y;
			touchTip.startTime = now;
			touchTip.state = 1;
			this.emit('touchStart', touchTip);
		}
		return this;
	}
	onTouchMove(e) {
		for (let i = 0, l = e.changedTouches.length; i < l; i++) {
			let touch = e.changedTouches[i];
			let touchTip = this.Touches[touch.identifier];
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
	onTouchEnd(e) {
		//touchEndAll
		let now = Date.now();
		for (let i = 0, l = e.changedTouches.length; i < l; i++) {
			let touch = e.changedTouches[i];
			let touchTip = this.Touches[touch.identifier];
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
	onTouchCancel = this.onTouchEnd;
}
