import { h, Component } from 'preact';
import style from './style.scss';
import Lightbox from '../lightbox';

export default class Image extends Component {
    constructor(props) {
        super(props);

        const images = props.preview.images[0];
		const thumbnail = this.chooseResolutionForThumbnail(images.resolutions);

        this.state = {
          thumbnail,
          permalink: props.permalink,
          allImages: images.resolutions,
          sourceImage: images.source.url,
          clicked: false,
        };
    }

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

	render({ ...props }, { clicked, thumbnail } = {}) {
        if (clicked) {
            return (
                <Lightbox>
                    <div class={style.image} style={this.backgroundImage(thumbnail.url)} onClick={() => this.handleClick()} />
                </Lightbox>
            );
        }

		return (
			<div class={style.image} style={this.backgroundImage(thumbnail.url)} onClick={() => this.handleClick()} />
		);
	}
}

