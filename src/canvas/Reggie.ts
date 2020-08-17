import * as createjs from 'createjs-module';
import { random } from 'mathjs';
import { getRandomVelocity, Vector, Size } from './math';

import reggieImage from '../assets/reggie.png';


export const SCALE_FACTOR = 0.2;
export const SCALE_RANDOMIZER = 0.01;

export interface IReggie {
	update: (canvasSize: Size) => void;
}

export class Reggie implements IReggie {
	bitmap: createjs.Bitmap;
	velocity: Vector;

	constructor(stage: createjs.Stage, canvasSize: Size) {
		this.bitmap = new createjs.Bitmap(reggieImage);
		this.velocity = getRandomVelocity();

		this.bitmap.x = random(0, canvasSize.width);
		this.bitmap.y = random(0, canvasSize.height);

		const scaleBounds = [
			SCALE_FACTOR - SCALE_RANDOMIZER,
			SCALE_FACTOR + SCALE_RANDOMIZER
		];
		this.bitmap.scaleX = random(scaleBounds[0], scaleBounds[1]);
		this.bitmap.scaleY = random(scaleBounds[0], scaleBounds[1]);

		// TODO: Fix this with math https://math.stackexchange.com/questions/60718/given-a-width-height-and-angle-of-a-rectangle-and-an-allowed-final-size-deter
		// this.bitmap.rotation = random(0, 359);

		stage.addChild(this.bitmap);
	}

	update(canvasSize: Size) {
		this.bitmap.x += this.velocity.x;
		this.bitmap.y += this.velocity.y;

		const size = this.getSize();

		if (this.bitmap.x > canvasSize.width)
			this.bitmap.x = -size.width;

		if (this.bitmap.x < -size.width)
			this.bitmap.x = canvasSize.width;

		if (this.bitmap.y > canvasSize.height)
			this.bitmap.y = -size.height;

		if (this.bitmap.y < -size.height)
			this.bitmap.y = canvasSize.height;
	}

	getSize(): Size {
		return {
			width: this.bitmap.image.width * SCALE_FACTOR,
			height: this.bitmap.image.height * SCALE_FACTOR
		};
	}
}
