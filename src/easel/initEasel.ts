import * as createjs from 'createjs-module';
import { createStage } from './createStage';

import flakeImage from '../assets/flake.png';


let stage: any = undefined;
let flake: createjs.Bitmap = undefined;
const SCALE_FACTOR = 0.3;

export function initEasel() {
	stage = createStage();
	stage.addChild(createFlake());

	console.log('my body is ready');
}

function createFlake() {
	flake = new createjs.Bitmap(flakeImage)

	flake.x = 20;
	flake.y = 20;

	flake.scaleX = SCALE_FACTOR;
	flake.scaleY = SCALE_FACTOR;
	flake.rotation = -20;

	return flake;
}

createjs.Ticker.framerate = 60;
createjs.Ticker.addEventListener('tick', function () {
	flake.x += 1.5;
	flake.y += 1.5;

	const flakeWidth = flake.image.width * SCALE_FACTOR;
	const flakeHeight = flake.image.height * SCALE_FACTOR;

	if (flake.x - flakeWidth > stage.canvas.width || flake.y - flakeHeight > stage.canvas.height) {
		stage.removeChild(flake);
		stage.addChild(createFlake());
	}

	stage.update();
});
