import { h, Component } from 'preact';
import debounce from 'lodash/debounce';
import Images from '../../components/images';
import style from './style.scss';

export default class Home extends Component {
	handleScroll(e) {
		if (e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight) {

            // Hack Hack Hack. Callback in the setState function was a hack to get the scroll state
            // to switch back to false after the new photos have loaded. Really not sure how to this
            // a better way.

			return this.setState({ scrolledToBottom: true }, () => {
                return this.setState({ scrolledToBottom: false });
            });

		}
	}

	constructor() {
		super();

		this.handleScrollThorttled = debounce(this.handleScroll.bind(this), 100);
	}

	state = {
		scrolledToBottom: false
	};

	render() {
		return (
			<div class={style.home} onScroll={this.handleScrollThorttled}>
				<h1>Welcome to Imaginary Landscapes</h1>
				<h2>Helping you find your favorite imaginary landscapes</h2>
				<Images scrolledToBottom={this.state.scrolledToBottom} />
			</div>
		);
	}
}
