import { h } from 'preact';


export function EpisodeHeader(props: { children: any }) {
	return (
		<h1 class='title is-1 has-text-weight-light'>
			{props.children}
		</h1>
	);
}
