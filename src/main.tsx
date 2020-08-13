import './assets/style.scss';
import 'bulma/css/bulma.css';

import { h, render } from 'preact';
import { App } from './components/App';
import { initEasel } from './easel/initEasel';


render(<App />, document.body);

document.body.onload = function () {
	initEasel();
}
