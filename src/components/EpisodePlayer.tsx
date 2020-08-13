import { h } from 'preact';


export function EpisodePlayer(props: { filename: string; }) {
	const baseUrl = 'https://tendostore.nyc3.cdn.digitaloceanspaces.com/';

	return (
		<audio controls>
			<source src={baseUrl + props.filename} type='audio/mpeg' />
			Your browser does not support the audio element.
		</audio>
	);
}
