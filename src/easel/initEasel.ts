import * as createjs from 'createjs-module';
import { createStage } from './createStage';

import flakeImage from '../assets/flake.png';


let stage: any = undefined;
let flakes: createjs.Bitmap[] = [];
const SCALE_FACTOR = 0.3;

export function initEasel() {
	stage = createStage();

	const flakes = createFlakes();
	for (let flake of flakes) {
		stage.addChild(flake);
	}

	console.log('my body is ready');
}

function createFlakes(): createjs.Bitmap[] {
	for (let i = 0; i < 10; i++) {
		const flake = new createjs.Bitmap(flakeImage)

		flake.x = randomArbitrary(0, stage.canvas.width);
		flake.y = randomArbitrary(0, stage.canvas.height);

		flake.scaleX = SCALE_FACTOR;
		flake.scaleY = SCALE_FACTOR;
		flake.rotation = randomArbitrary(0, 359);

		flakes.push(flake);
	}

	return flakes;
}

createjs.Ticker.framerate = 60;
createjs.Ticker.addEventListener('tick', function () {
	for (let flake of flakes) {
		flake.x += 1.5;
		flake.y += 1.5;

		const flakeWidth = flake.image.width * SCALE_FACTOR;
		const flakeHeight = flake.image.height * SCALE_FACTOR;

		if (flake.x - flakeWidth > stage.canvas.width)
			flake.x = -flakeWidth;

		if (flake.x < -flakeWidth)
			flake.x = stage.canvas.width;

		if (flake.y - flakeHeight > stage.canvas.height)
			flake.y = -flakeHeight;

		if (flake.y < -flakeHeight)
			flake.y = stage.canvas.height;
	}

	stage.update();
});

// https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function randomArbitrary(min: number, max: number) {
	return Math.random() * (max - min) + min;
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
function randomInt(min: number, max: number) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
