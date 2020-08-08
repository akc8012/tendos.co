import './assets/style.scss';
import 'bulma/css/bulma.css';

import { h, render } from 'preact';
import { initEasel } from './easel/initEasel';
import { useState } from 'preact/hooks';
import { useInterval } from './hooks/useInterval';


function App() {
	const [countdown, setCountdown] = useState(undefined);
	const countdownDate = new Date('Aug 8, 2020 00:00:00').getTime();

	useInterval(() => {
		// https://www.w3schools.com/howto/howto_js_countdown.asp
		const diff = countdownDate - new Date().getTime();

		const days = Math.floor(diff / (1000 * 60 * 60 * 24));
		const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((diff % (1000 * 60)) / 1000);

		setCountdown(`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);
	}, 1000);

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
					<h5 class='subtitle is-5 has-text-danger is-family-monospace has-text-weight-bold has-text-centered'>
						{countdown}
					</h5>
				</div>
			</section>
		</div>
	);
}

render(<App />, document.body);

document.body.onload = function () {
	initEasel();
}
