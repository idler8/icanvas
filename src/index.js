export { default as Vector } from './vector/vector.js';
export { default as Vector2 } from './vector/vector2.js';
export { default as Vector3 } from './vector/vector3.js';
export { default as Matrix4 } from './vector/matrix4.js';
export { default as Color } from './vector/color.js';

export { default as Time } from './utils/time.js';
export { default as Random } from './utils/random.js';
export { default as Collision } from './utils/collision.js';
export { default as Touch } from './utils/touch.js';
export { default as Loader } from './utils/loader.js';
export { default as Clock } from './utils/clock.js';
export { default as Event } from './utils/event.js';

export { default as CanvasRender } from './canvas/render.js';
export { TextureFactory, ImageTextureFactory, TextureControlFactory, FontControlFactory } from './texture.js';

export { default as WebGLRender } from './webgl/render.js';
export { default as Shader } from './webgl/shader.js';
export { CanvasTextureFactory, FontTextureFactory } from './webgl/texture.js';

export { default as Container } from './components/container.js';
export { default as Sprite } from './components/sprite.js';
export { Text, TextGroup, TextLine } from './components/text.js';
export { default as Director } from './components/director.js';

export class Shape {
	constructor(vecties = [], x = 0, y = 0) {
		if (!Shape.PI2) Shape.PI2 = Math.PI * 2;
		this.vecties = vecties;
		this.x = x;
		this.y = y;
	}
	moveTo(x, y) {
		this.x = x;
		this.y = y;
		return this;
	}
	lineTo(x, y) {
		this.vecties.push(x, y);
		return this;
	}
	arcTo(x1, y1, r, x2, y2) {
		let dx1 = x2 - x1;
		let dy1 = y2 - y1;
		let dx2 = this.x - x1;
		let dy2 = this.y - y1;
		let n = dx2 * dy1 > 0 ? Math.atan(dy1 / dx1) : -Math.atan(dy1 / dx1);
		let x = x2 + r * Math.sin(n);
		let y = y2 + r * Math.cos(n);

		let a = Math.acos((dx1 * dx2 + dy1 * dy2) / (Math.sqrt(dx1 * dx1 + dy1 * dy1) * Math.sqrt(dx2 * dx2 + dy2 * dy2)));
		let a1 = Math.atan2(y2, x2);
		let a2 = a1 - a + Math.PI;

		console.log(x, y, (a1 * 180) / Math.PI, (a2 * 180) / Math.PI);
	}
}
