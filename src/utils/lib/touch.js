import Vector2 from '../../maths/lib/vector2.js';
import Event from 'eventemitter3';
export default class Touch extends Event {
	constructor() {
		super();
		this.Position = new Vector2();
		this.Size = new Vector2();
		this.Touches = {};
	}
	onTouchStart(e) {
		let now = Date.now();
		for (let i = 0, l = e.changedTouches.length; i < l; i++) {
			let touch = e.changedTouches[i];
			let touchTip = (this.Touches[touch.identifier] = { moveX: 0, moveY: 0 });
			let x = touch.clientX * this.Size.x - this.Position.x;
			let y = touch.clientY * this.Size.y - this.Position.y;
			touchTip.moveX = 0;
			touchTip.moveY = 0;
			touchTip.startX = touchTip.endX = touchTip.x = x;
			touchTip.startY = touchTip.endY = touchTip.y = y;
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
			let x = touch.clientX * this.Size.x - this.Position.x;
			let y = touch.clientY * this.Size.y - this.Position.y;
			touchTip.moveX = x - touchTip.x;
			touchTip.moveY = y - touchTip.y;
			touchTip.endX = touchTip.x = x;
			touchTip.endY = touchTip.y = y;
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
			let x = touch.clientX * this.Size.x - this.Position.x;
			let y = touch.clientY * this.Size.y - this.Position.y;
			touchTip.moveX = x - touchTip.x;
			touchTip.moveY = y - touchTip.y;
			touchTip.endX = touchTip.x = x;
			touchTip.endY = touchTip.y = y;
			touchTip.endTime = now;
			touchTip.state = 3;
			this.emit('touchEnd', touchTip);
		}
		return this;
	}
	onTouchCancel = this.onTouchEnd;
}
