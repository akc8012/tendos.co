import './assets/style.scss';
import 'bulma/css/bulma.css';

import { h, render } from 'preact';
import { App } from './components/App';
import { initEasel } from './easel/initEasel';
import { updateCanvasSize } from './easel/createStage';


render(<App />, document.body);

document.body.onload = function () {
	initEasel();
}

window.onresize = function reportWindowSize() {
	updateCanvasSize(document.getElementById('canvas') as HTMLCanvasElement);
}
