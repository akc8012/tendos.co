import { h } from 'preact';
import { Header } from './Header';
import { EpisodeHeader } from './EpisodeHeader';
import { EpisodePlayer } from './EpisodePlayer';
import { Subtitle } from './Subtitle';


export function App() {
	return (
		<div class='main'>
			<section class='hero section' style={{ backgroundColor: 'hsl(0, 0%, 96%)' }}>
				<Header />

				<div class='container has-text-centered'>
					<EpisodeHeader />
					<EpisodePlayer filename='tendos-episode102.mp3' />
				</div>

				<Subtitle />
			</section>
		</div>
	);
}
