import { h, Component } from 'preact';
import style from './style.scss';

export default class Home extends Component {
	render() {
		return (
			<div class={style.home}>
				<h1>Welcome to Imaginary Landscapes</h1>
				<p>Helping you find your imaginary landscape for your desktop a little easier</p>
			</div>
		);
	}
}
