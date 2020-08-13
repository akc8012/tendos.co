import * as createjs from 'createjs-module';
import { random } from 'mathjs';
import { Size, REGGIE_COUNT, SCALE_FACTOR } from './initializeReggies';

import reggieImage from '../assets/reggie.png';


export function createReggies(canvasSize: Size): createjs.Bitmap[] {
	let reggies: createjs.Bitmap[] = [];

	for (let i = 0; i < REGGIE_COUNT; i++) {
		const flake = new createjs.Bitmap(reggieImage);

		flake.x = random(0, canvasSize.width);
		flake.y = random(0, canvasSize.height);

		flake.scaleX = random(SCALE_FACTOR - 0.01, SCALE_FACTOR + 0.01);
		flake.scaleY = random(SCALE_FACTOR - 0.01, SCALE_FACTOR + 0.01);
		flake.rotation = random(0, 359);

		reggies.push(flake);
	}

	return reggies;
}
