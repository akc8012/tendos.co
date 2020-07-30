import './assets/style.scss';
import 'bulma/css/bulma.css';

import { h, render } from 'preact';

function App() {
	return (
		<div class='main'>
			<section class='hero section is-dark'>
				<div class='container'>
					<h2 class='title is-2 has-text-centered'>
						The Tendos Podcast
					</h2>

					<h6 class="subtitle is-6 has-text-centered">
						<i>A <b>Nintendo</b> podcast about <b>Nintendo</b>, buy <b>Nintendo</b>, for <b>Nintendo</b>.</i>
					</h6>
				</div>
			</section>
		</div>
	);
}

render(<App />, document.body);
