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
						<b class='has-text-danger'>Tendos #107</b> | <b>Purdy's 7 Minutes in Hell</b>
					</EpisodeHeader>

					<EpisodePlayer filename='tendos-episode107.mp3' />
				</div>

				<div class='container'>
					<form action='https://youtu.be/xsVeaTx4TcQ' method='get' target='_blank'>
						<button class='button has-background-white-ter' type='submit'>
							Listen on <b class='has-text-danger'>YouTube</b>
						</button>
					</form>
				</div>

				{/* <Subtitle>
					if you like these things, tune into the <b class='has-text-danger'>Tendos™</b> <b>Podcast®</b>
				</Subtitle> */}
			</section>
		</div>
	);
}
