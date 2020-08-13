import './assets/style.scss';
import 'bulma/css/bulma.css';

import { h, render } from 'preact';
import { Header } from './components/Header';
import { EpisodeHeader } from './components/EpisodeHeader';
import { EpisodePlayer } from './components/EpisodePlayer';
import { Subtitle } from './components/Subtitle';


function App() {
	return (
		<div class='main'>
			<section class='hero section is-dark'>
				<Header />

				<div class='container has-text-centered'>
					<EpisodeHeader />
					<EpisodePlayer filename='tendos-episode101.mp3' />
				</div>

				<Subtitle />
			</section>
		</div>
	);
}

render(<App />, document.body);
