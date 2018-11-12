import { h, Component } from 'preact';
import style from './style.scss';


export default class Image extends Component {
	state = {
		clicked: false
	};

	handleClick() {
		this.setState({ clicked: true });
	}

	backgroundImage(url) {
		return `
			background-image: url("${url}");
			background-size: cover;
			background-repeat: no-repeat;
			background-position: center center;
		`;
	}

	chooseResolutionForThumbnail(resolutions) {
		if (resolutions.length > 2) {
			return resolutions.slice(resolutions.length / 2)[0];
		}

		return resolutions[0];
	}

	render({ ...props }, { clicked } = {}) {
		const thumbnail = this.chooseResolutionForThumbnail(props.resolutions);

		return (
			<div class={style.image} style={this.backgroundImage(thumbnail.url)} onClick={this.handleClick} />
		);
	}
}
