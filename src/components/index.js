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
import Texture from './elements/base.js';
import Scroll from './elements/base.js';
import Text from './elements/base.js';

export const ComponentBuild = { Position, Angle, Scale, Anchor, Alpha, Visible, Size, Clip, Padding, Style };
ComponentBuild.Build = function() {
	let subClass = null;
	for (let i = 0; i < arguments.length; i++) {
		subClass = ComponentBuild[arguments[i]](subClass);
	}
	return subClass;
};
export const ComponentBase = Base(ComponentBuild.Build('Position', 'Angle', 'Scale', 'Anchor', 'Alpha', 'Visible'));
export const ComponentTexture = Texture(ComponentBuild.Build('Clip', 'Size', 'Position', 'Angle', 'Scale', 'Anchor', 'Alpha', 'Visible'));
export const ComponentScroll = Scroll(ComponentBuild.Build('Clip', 'Size', 'Position', 'Angle', 'Scale', 'Anchor', 'Alpha', 'Visible'));
export const ComponentText = Text(ComponentBuild.Build('Style', 'Size', 'Position', 'Angle', 'Scale', 'Anchor', 'Alpha', 'Visible'));
