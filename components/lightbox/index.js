import { h, Component } from 'preact';
import style from './style.scss';

export default class LightBox extends Component {
	// constructor() {
	// 	super();
	// }

	state = {

	};

	render(props, state) {
		return (
			<div class={style.lightbox} />
		);
	}
}
