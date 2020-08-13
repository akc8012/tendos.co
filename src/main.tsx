import './assets/style.scss';
import 'bulma/css/bulma.css';

import { h, render } from 'preact';
import { App } from './components/App';
import { initializeReggies } from './canvas/initializeReggies';
import { updateCanvasSize } from './canvas/createStage';


render(<App />, document.body);

document.body.onload = function () {
	initializeReggies();
}

window.onresize = function reportWindowSize() {
	updateCanvasSize(document.getElementById('canvas') as HTMLCanvasElement);
}
