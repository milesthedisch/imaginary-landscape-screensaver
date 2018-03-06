import { h, Component } from 'preact';
import throttle from 'lodash/throttle';
import Images from '../../components/images';
import style from './style.scss';

export default class Home extends Component {
	handleScroll(e) {
		console.log('handle scroll', e.target.scrollHeight, e.target.scrollTop, e.target.clientHeight);
		if (e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight) {
			return this.setState({ scrolledToBottom: true });
		}

		return this.setState({ scrolledToBottom: false });
	}

	constructor() {
		super();

		this.handleScrollThorttled = throttle(this.handleScroll.bind(this), 1000);
	}

	state = {
		scrolledToBottom: false
	};

	shouldComponentUpdate(nextProps, nextState) {
		return this.state.scrolledToBottom !== nextState.scrolledToBottom;
	}

	render() {
		return (
			<div class={style.home} onScroll={this.handleScrollThorttled}>
				<h1>Welcome to Imaginary Landscapes</h1>
				<p>Helping you find your favorite imaginary landscapes</p>
				<Images scrolledToBottom={this.state.scrolledToBottom} />
			</div>
		);
	}
}
