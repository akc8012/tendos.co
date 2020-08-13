import * as createjs from 'createjs-module';
import { createStage } from './createStage';
import { random } from 'mathjs';

import reggieImage from '../assets/reggie.png';


const REGGIE_COUNT = 8;
const SCALE_FACTOR = 0.2;

type Vector = { x: number, y: number };
type Size = { width: number, height: number };

export function initializeReggies() {
	const stage = createStage();
	const canvasSize = { width: stage.canvas.width, height: stage.canvas.height };

	const reggies = createReggies(canvasSize);
	const velocities: Vector[] = [];

	for (let reggie of reggies) {
		stage.addChild(reggie);

		let randomVelocity = getRandomVelocity();
		while (Math.abs(randomVelocity.x) < 0.8 || Math.abs(randomVelocity.y) < 0.8)
			randomVelocity = getRandomVelocity();

		velocities.push(randomVelocity);
	}

	createjs.Ticker.framerate = 60;
	createjs.Ticker.addEventListener('tick', function () {
		updateReggies(reggies, velocities, canvasSize);
		stage.update();
	});

	console.log('my body is ready');
}

function updateReggies(reggies: createjs.Bitmap[], velocities: Vector[], canvasSize: Size) {
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

function getRandomVelocity(): Vector {
	return { x: random(-2, 2), y: random(-2, 2) };
}

function createReggies(canvasSize: Size): createjs.Bitmap[] {
	let reggies: createjs.Bitmap[] = [];

	for (let i = 0; i < REGGIE_COUNT; i++) {
		const flake = new createjs.Bitmap(reggieImage)

		flake.x = random(0, canvasSize.width);
		flake.y = random(0, canvasSize.height);

		flake.scaleX = random(SCALE_FACTOR - 0.01, SCALE_FACTOR + 0.01);
		flake.scaleY = random(SCALE_FACTOR - 0.01, SCALE_FACTOR + 0.01);
		flake.rotation = random(0, 359);

		reggies.push(flake);
	}

	return reggies;
}
