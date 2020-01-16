export default class Event {
	constructor() {
		this._events = {};
	}
	listen() {
		for (let i = 0; i < arguments.length; i++) this.on(arguments[i]);
		return this;
	}
	on(evt, fn, context, once = false) {
		if (!context) context = this;
		if (!fn) fn = context[evt];
		if (!fn) return this;
		if (!this._events[evt]) this._events[evt] = [];
		this._events[evt].push({ fn, context, once });
		return this;
	}
	once(evt, fn, context) {
		return this.on(evt, fn, context, true);
	}
	off(evt, fn, context) {
		if (!this._events[evt]) return this;
		if (!context) context = this;
		let events = this._events[evt].filter(function(e) {
			return e.context !== context && e.fn !== fn;
		});
		if (events.length) {
			this._events[evt] = events;
		} else {
			delete this._events[evt];
		}
		return this;
	}
	emit(evt) {
		if (!this._events[evt]) return this;
		let listeners = this._events[evt];
		let args = Array.prototype.splice.call(arguments, 1);
		for (let i = 0; i < listeners.length; i++) {
			let { fn, context, once } = listeners[i];
			fn.apply(context, args);
			if (once) listeners.splice(i--, 1);
		}
		if (!listeners.length) delete this._events[evt];
		return this;
	}
}
