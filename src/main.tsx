import './assets/style.scss';
import 'bulma/css/bulma.css';

import { h, render } from 'preact';
import { initEasel } from './easel/initEasel';


function App() {
	return (
		<div class='main'>
			<section class='hero section is-dark'>
				<div class='container'>
					<h2 class='title is-2 has-text-centered'>
						The Tendos Podcast
					</h2>

					<h6 class='subtitle is-6 has-text-centered'>
						A <b class='has-text-danger'>Nintendo</b> podcast about <b>Nintendo</b>, buy <b>Nintendo</b>, for <b>Nintendo</b>.
					</h6>
				</div>

				<div class='container has-text-centered'>
					<h1 class='title is-1 has-text-weight-light'>
						The show <b class='has-text-weight-normal'>will</b> go on.
					</h1>
					<h4 class='subtitle is-4'>
						<b class='has-text-danger'>neoTendos</b> has been uncancelled.
						Tune in at midnight for a special episode with <b>andrew</b> and <b>joeT</b>.
					</h4>
				</div>
			</section>
		</div>
	);
}

render(<App />, document.body);

document.body.onload = function () {
	initEasel();
}
