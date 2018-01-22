import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.scss';

export default class Header extends Component {
	render() {
		return (
			<header class={style.header}>
				<Link activeClassName={style.active} href="/">
					<h1>Imaginary Landscapes</h1>
				</Link>
				{/*
				<nav class={style.nav}>
					<Link activeClassName={style.active} href="/">Home</Link>
					More nav links if needed.

					<Link activeClassName={style.active} href="/profile">Me</Link>
 					<Link activeClassName={style.active} href="/profile/john">John</Link>
				</nav>
 				*/}
			</header>
		);
	}
}
