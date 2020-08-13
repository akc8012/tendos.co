import './assets/style.scss';
import 'bulma/css/bulma.css';

import { h, render } from 'preact';
import { EpisodePlayer } from './components/EpisodePlayer';
import { Header } from './components/Header';
import { Subtitle } from './components/Subtitle';


function App() {
	return (
		<div class='main'>
			<section class='hero section is-dark'>
				<Header />

				<div class='container has-text-centered'>
					<h1 class='title is-1 has-text-weight-light'>
						The show <b class='has-text-weight-normal'>will</b> go on.
					</h1>

					<EpisodePlayer filename='tendos-episode101.mp3' />
				</div>

				<Subtitle />
			</section>
		</div>
	);
}

render(<App />, document.body);
