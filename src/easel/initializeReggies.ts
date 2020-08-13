import * as createjs from 'createjs-module';
import { createStage } from './createStage';
import { random } from 'mathjs';

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
	return { x: random(-2, 2), y: random(-2, 2) };
}

function createReggies(): createjs.Bitmap[] {
	let reggies: createjs.Bitmap[] = [];

	for (let i = 0; i < REGGIE_COUNT; i++) {
		const flake = new createjs.Bitmap(reggieImage)

		flake.x = random(0, stage.canvas.width);
		flake.y = random(0, stage.canvas.height);

		flake.scaleX = random(SCALE_FACTOR - 0.01, SCALE_FACTOR + 0.01);
		flake.scaleY = random(SCALE_FACTOR - 0.01, SCALE_FACTOR + 0.01);
		flake.rotation = random(0, 359);

		reggies.push(flake);
	}

	return reggies;
}
