import Position from './properties/position.js';
import Angle from './properties/angle.js';
import Scale from './properties/scale.js';
import Anchor from './properties/anchor.js';
import Alpha from './properties/alpha.js';
import Visible from './properties/visible.js';
import Size from './properties/size.js';
import Clip from './properties/clip.js';
import Padding from './properties/padding.js';
import Style from './properties/style.js';

import Base from './elements/base.js';
import Texture from './elements/texture.js';
import Scroll from './elements/scroll.js';
import Text from './elements/text.js';

export const ComponentBuild = { Position, Angle, Scale, Anchor, Alpha, Visible, Size, Clip, Padding, Style };
class Options {
	setOptions() {}
}
ComponentBuild.Build = function() {
	let subClass = Options;
	for (let i = 0; i < arguments.length; i++) {
		subClass = ComponentBuild[arguments[i]](subClass);
	}
	return subClass;
};
export const ComponentBase = Base(ComponentBuild.Build('Position', 'Angle', 'Scale', 'Anchor', 'Alpha', 'Visible'));
export const ComponentTexture = Texture(Base(ComponentBuild.Build('Clip', 'Size', 'Position', 'Angle', 'Scale', 'Anchor', 'Alpha', 'Visible')));
export const ComponentScroll = Scroll(Base(ComponentBuild.Build('Clip', 'Size', 'Position', 'Angle', 'Scale', 'Anchor', 'Alpha', 'Visible')));
export const ComponentText = Text(Base(ComponentBuild.Build('Style', 'Size', 'Position', 'Angle', 'Scale', 'Anchor', 'Alpha', 'Visible')));
