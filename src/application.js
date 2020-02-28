import Container from './components/container.js';
import Collision from './utils/collision.js';
import Touch from './utils/touch.js';
import Clock from './utils/clock.js';
import Time from './utils/time.js';
export default class Application {
	constructor(options = {}) {
		this.collision = options.collision || new Collision();
		this.stage = options.stage || new Container();
		this.touch = options.touch || new Touch();
		this.clock = options.clock || new Clock();
		this.clock.on('tick', now => this.tick(now));
		this.time = options.time || new Time();
		this.renderArray = [];

		Object.keys(options).forEach(key => {
			if (!this[key]) this[key] = options[key];
		});
	}
	go(scene) {
		this.stage.clear().add(scene);
		return this;
	}
	check(stage) {
		if (!stage.visible) return;
		stage.emit('check', this);
		if (stage.visible && stage.draw) this.renderArray.push(stage);
		for (let i = 0, len = stage.children.length; i < len; i++) this.check(stage.children[i]);
	}
	tick(now) {
		this.check(this.stage);
		//TODO 排序
		for (let i = 0, len = this.renderArray.length; i < len; i++) {
			this.renderArray[i].emit('draw');
			this.renderArray[i].draw(this, now);
			this.renderArray[i].emit('drawn');
		}
		this.renderArray.length = 0;
		return this;
	}
	look(x, y) {
		this.stage.transform.update();
		this.render.look(this.stage.transform.matrix, x, y);
		return this;
	}
}
