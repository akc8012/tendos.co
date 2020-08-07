import * as createjs from 'createjs-module';
import { createStage } from './createStage';

import flakeImage from '../assets/flake.png';


let stage: any = undefined;
let flakeHeight: number = undefined;

export function initEasel() {
	stage = createStage();
	stage.addChild(createFlake());

	console.log('my body is ready');
}

function createFlake() {
	const flake = new createjs.Bitmap(flakeImage);
	flake.name = 'flake';

	const scaleFactor = 0.2;
	flakeHeight = flake.image.height * scaleFactor;

	flake.x = 20;
	flake.y = 20; //stage.canvas.height;
	// flake.scaleX = scaleFactor;
	// flake.scaleY = scaleFactor;

	return flake;
}

createjs.Ticker.framerate = 60;
createjs.Ticker.addEventListener('tick', function () {
	// const flake = stage.getChildByName('flake');

	// flake.x += 6;
	// flake.y -= 10;

	// if (flake.y + flakeHeight < 0) {
	// 	stage.removeChild(flake);
	// 	stage.addChild(createFlake());
	// }

	stage.update();
});
