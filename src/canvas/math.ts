import { random } from 'mathjs';


export type Vector = { x: number, y: number };
export type Size = { width: number, height: number };

export function getRandomVelocity(): Vector {
	let result: Vector;

	do
		result = { x: random(-2, 2), y: random(-2, 2) };
	while (Math.abs(result.x) < 0.8 || Math.abs(result.y) < 0.8);

	return result;
}
