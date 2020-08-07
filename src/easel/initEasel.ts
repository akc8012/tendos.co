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

	flake.x = 300;
	flake.y = 300;

	flake.scaleX = SCALE_FACTOR;
	flake.scaleY = SCALE_FACTOR;
	flake.rotation = -20;

	return flake;
}

createjs.Ticker.framerate = 60;
createjs.Ticker.addEventListener('tick', function () {
	flake.x += 6;
	flake.y -= 6;

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

	stage.update();
});
