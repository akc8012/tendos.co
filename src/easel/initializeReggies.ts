import * as createjs from 'createjs-module';
import { createStage } from './createStage';

import reggieImage from '../assets/reggie.png';

// TODO: Move this to function-scope
let stage: any = undefined;

const REGGIE_COUNT = 8;
const SCALE_FACTOR = 0.2;
type Vector = { x: number, y: number };

export function initializeReggies() {
	stage = createStage();

	const reggies = createReggies();
	const velocities: Vector[] = [];

	for (let flake of reggies) {
		stage.addChild(flake);

		let randomVelocity = getRandomVelocity();
		while (Math.abs(randomVelocity.x) < 0.8 || Math.abs(randomVelocity.y) < 0.8)
			randomVelocity = getRandomVelocity();

		velocities.push(randomVelocity);
	}

	createjs.Ticker.framerate = 60;
	createjs.Ticker.addEventListener('tick', function () {
		updateReggies(reggies, velocities);
		stage.update();
	});

	console.log('my body is ready');
}

function updateReggies(reggies: createjs.Bitmap[], velocities: Vector[]) {
	for (let i = 0; i < reggies.length; i++) {
		reggies[i].x += velocities[i].x;
		reggies[i].y += velocities[i].y;

		const flakeWidth = reggies[i].image.width * SCALE_FACTOR;
		const flakeHeight = reggies[i].image.height * SCALE_FACTOR;

		if (reggies[i].x - flakeWidth > stage.canvas.width)
			reggies[i].x = -flakeWidth;

		if (reggies[i].x < -flakeWidth)
			reggies[i].x = stage.canvas.width;

		if (reggies[i].y - flakeHeight > stage.canvas.height)
			reggies[i].y = -flakeHeight;

		if (reggies[i].y < -flakeHeight)
			reggies[i].y = stage.canvas.height;
	}
}

function getRandomVelocity(): Vector {
	return { x: randomArbitrary(-2, 2), y: randomArbitrary(-2, 2) };
}

function createReggies(): createjs.Bitmap[] {
	let reggies: createjs.Bitmap[] = [];

	for (let i = 0; i < REGGIE_COUNT; i++) {
		const flake = new createjs.Bitmap(reggieImage)

		flake.x = randomArbitrary(0, stage.canvas.width);
		flake.y = randomArbitrary(0, stage.canvas.height);

		flake.scaleX = randomArbitrary(SCALE_FACTOR - 0.01, SCALE_FACTOR + 0.01);
		flake.scaleY = randomArbitrary(SCALE_FACTOR - 0.01, SCALE_FACTOR + 0.01);
		flake.rotation = randomArbitrary(0, 359);

		reggies.push(flake);
	}

	return reggies;
}

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
