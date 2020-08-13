import * as createjs from 'createjs-module';
import { createStage } from './createStage';
import { IReggie, Reggie } from "./Reggie";


const REGGIE_COUNT = 8;

export function initializeReggies() {
	const stage = createStage();
	const canvasSize = { width: stage.canvas.width, height: stage.canvas.height };

	const reggies: IReggie[] = [];
	for (let i = 0; i < REGGIE_COUNT; i++) {
		reggies.push(new Reggie(stage, canvasSize));
	}

	createjs.Ticker.framerate = 60;
	createjs.Ticker.addEventListener('tick', function () {
		for (const reggie of reggies)
			reggie.update(canvasSize);

		stage.update();
	});

	console.log('my body is ready');
}
