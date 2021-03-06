import * as createjs from '@createjs/easeljs';


export function createStage() {
	const canvas = createCanvas();
	document.body.appendChild(canvas);

	return new createjs.Stage(canvas);
}

function createCanvas(): HTMLCanvasElement {
	const canvas = document.createElement('canvas');

	updateCanvasSize(canvas);
	canvas.id = 'canvas';
	canvas.className = 'canvas';

	return canvas;
}

export function updateCanvasSize(canvas: HTMLCanvasElement) {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}
