import * as createjs from 'createjs-module';
import { Vector, Size, SCALE_FACTOR } from './initializeReggies';


export function updateReggies(reggies: createjs.Bitmap[], velocities: Vector[], canvasSize: Size) {
	for (let i = 0; i < reggies.length; i++) {
		reggies[i].x += velocities[i].x;
		reggies[i].y += velocities[i].y;

		const flakeWidth = reggies[i].image.width * SCALE_FACTOR;
		const flakeHeight = reggies[i].image.height * SCALE_FACTOR;

		if (reggies[i].x - flakeWidth > canvasSize.width)
			reggies[i].x = -flakeWidth;

		if (reggies[i].x < -flakeWidth)
			reggies[i].x = canvasSize.width;

		if (reggies[i].y - flakeHeight > canvasSize.height)
			reggies[i].y = -flakeHeight;

		if (reggies[i].y < -flakeHeight)
			reggies[i].y = canvasSize.height;
	}
}
