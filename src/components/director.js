import Container from './container.js';
export default class Director extends Container {
	Scenes = {}; //场景
	CurrentScene = null; //当前场景
	Go(Type, ...args) {
		this.remove(this.CurrentScene);
		this.CurrentScene = this.Scenes[Type] ? new this.Scenes[Type](...args) : null;
		this.add(this.CurrentScene, 0);
		return this;
	}
	setScenes(scenes) {
		Object.assign(this.Scenes, scenes);
		return this;
	}
	look(Matrix) {
		this.worldMatrix.setApply(Matrix);
		this.updateMatrix = false;
		return this;
	}
}
