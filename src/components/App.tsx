import { h } from 'preact';
import { Header } from './Header';
import { EpisodeHeader } from './EpisodeHeader';
import { EpisodePlayer } from './EpisodePlayer';
import { Subtitle } from './Subtitle';


export function App() {
	return (
		<div class='main'>
			<section class='hero section is-dark'>
				<Header />

				<div class='container has-text-centered'>
					<EpisodeHeader>
						let's talk about <b class='has-text-danger'>super mario</b> for <b>30 minutes straight</b>
					</EpisodeHeader>

					<EpisodePlayer filename='tendos-episode105.mp3' />
				</div>

				<div class='container'>
					<form action='https://youtu.be/9O7siFWaSvs' method='get' target='_blank'>
						<button class='button has-background-white-ter' type='submit'>
							Listen on <b class='has-text-danger'>YouTube</b>
						</button>
					</form>
				</div>

				<Subtitle>
					this is a <i>limited release</i> podcast, while supplies last
				</Subtitle>
			</section>
		</div>
	);
}
