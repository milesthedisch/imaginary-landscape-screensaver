import '../style/index.scss';
import { Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Home from '../routes/home';

export default class App extends Component {
	handleRoute = (e) => {
		this.currentUrl = e.url;
	}

	render() {
		return (
			<div id="app">
				<Header />
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					{/*
						Example routes.
						<Profile path="/profile/" user="me" />
					 	<Profile path="/profile/:user" />
					*/}
				</Router>
			</div>
		);
	}
}
