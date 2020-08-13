import * as createjs from 'createjs-module';
import { createStage } from './createStage';
import { random } from 'mathjs';

import { createReggies } from './createReggies';
import { updateReggies } from './updateReggies';


export const REGGIE_COUNT = 8;
export const SCALE_FACTOR = 0.2;

export type Vector = { x: number, y: number };
export type Size = { width: number, height: number };

export function initializeReggies() {
	const stage = createStage();
	const canvasSize = { width: stage.canvas.width, height: stage.canvas.height };

	// TODO: Reggie class
	const reggies = createReggies(canvasSize);
	const velocities: Vector[] = [];

	for (const reggie of reggies) {
		stage.addChild(reggie);
		velocities.push(getRandomVelocity());
	}

	createjs.Ticker.framerate = 60;
	createjs.Ticker.addEventListener('tick', function () {
		updateReggies(reggies, velocities, canvasSize);
		stage.update();
	});

	console.log('my body is ready');
}

function getRandomVelocity(): Vector {
	let result: Vector;

	do result = { x: random(-2, 2), y: random(-2, 2) };
	while (Math.abs(result.x) < 0.8 || Math.abs(result.y) < 0.8);

	return result;
}
