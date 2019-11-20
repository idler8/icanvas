export default (superClass = null) => {
	return class Texture extends superClass {
		texture = null;
		setTexture(texture) {
			this.texture = Texture.GetImage ? Texture.GetImage(texture) : texture;
			if (!this.texture) return this;
			if (this.size) this.size.setTo(this.texture.width, this.texture.height);
			if (this.useFrame) this.useFrame = false;
			return this;
		}
		update(Context) {
			if (!this.texture) return;
			if (this.useClip) {
				Context.drawImage(
					this.texture,
					this.clipPosition.x,
					this.clipPosition.y,
					this.clipSize.x,
					this.clipSize.y,
					-this.anchor.x,
					-this.anchor.y,
					this.size.x,
					this.size.y,
				);
			} else {
				Context.drawImage(this.texture, -this.anchor.x, -this.anchor.y, this.size.x, this.size.y);
			}
		}
	};
};
