import { h } from 'preact';


export function Subtitle(props: { children: any }) {
	return (
		<div class='container has-text-centered'>
			<h4 class='subtitle is-4'>
				{props.children}
			</h4>
		</div>
	);
}
