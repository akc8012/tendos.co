import * as createjs from 'createjs-module';
import { createStage } from './createStage';

import flakeImage from '../assets/flake.png';


let stage: any = undefined;
let flakes: createjs.Bitmap[] = [];
let velocities: { x: number, y: number }[] = [];

const FLAKE_COUNT = 10;
const SCALE_FACTOR = 0.24;

export function initEasel() {
	stage = createStage();

	const flakes = createFlakes();
	for (let flake of flakes) {
		stage.addChild(flake);

		let randomVelocity = getRandomVelocity();
		while (Math.abs(randomVelocity.x) < 0.8 || Math.abs(randomVelocity.y) < 0.8)
			randomVelocity = getRandomVelocity();

		velocities.push(randomVelocity);
	}

	console.log('my body is ready');
}

function getRandomVelocity() {
	return { x: randomArbitrary(-2, 2), y: randomArbitrary(-2, 2) };
}

function createFlakes(): createjs.Bitmap[] {
	for (let i = 0; i < FLAKE_COUNT; i++) {
		const flake = new createjs.Bitmap(flakeImage)

		flake.x = randomArbitrary(0, stage.canvas.width);
		flake.y = randomArbitrary(0, stage.canvas.height);

		flake.scaleX = randomArbitrary(SCALE_FACTOR - 0.01, SCALE_FACTOR + 0.01);
		flake.scaleY = randomArbitrary(SCALE_FACTOR - 0.01, SCALE_FACTOR + 0.01);
		flake.rotation = randomArbitrary(0, 359);

		flakes.push(flake);
	}

	return flakes;
}

createjs.Ticker.framerate = 60;
createjs.Ticker.addEventListener('tick', function () {
	for (let i = 0; i < flakes.length; i++) {
		flakes[i].x += velocities[i].x;
		flakes[i].y += velocities[i].y;

		const flakeWidth = flakes[i].image.width * SCALE_FACTOR;
		const flakeHeight = flakes[i].image.height * SCALE_FACTOR;

		if (flakes[i].x - flakeWidth > stage.canvas.width)
			flakes[i].x = -flakeWidth;

		if (flakes[i].x < -flakeWidth)
			flakes[i].x = stage.canvas.width;

		if (flakes[i].y - flakeHeight > stage.canvas.height)
			flakes[i].y = -flakeHeight;

		if (flakes[i].y < -flakeHeight)
			flakes[i].y = stage.canvas.height;
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
