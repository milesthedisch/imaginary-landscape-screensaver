import style from './style.scss';
import { Component } from 'preact';
import throttle from 'lodash/throttle';

import fetchImages from '../../lib/fetchImages';

import Image from '../image';

export default class Images extends Component {
	more = () => {
		let page = this.state.page + 1;
		this.setState({ page, loading: true });
		this.fetchImages();
	};

	constructor() {
		super();

		this.fetchImages = throttle(() => {
			if (this.state.loading) {
				return;
			}

			this.setState({ loading: true });

			return fetchImages()
				.then(newData => {
					let data = this.state.data.concat(newData);
					this.setState({ data, loading: false });
				})
				.catch(err => this.setState({ err, loading: false }));
		}, 300);
	}

	state = {
		data: [],
		loading: false,
		page: 0
		// terms,
	};

	render({ ...props }, { data, loading, err } = { }) {

		if (err || data.error) {
			return (<h2>
				{err.message || data.message}
			</h2>);
		}

		if ((!data.length && !loading) || (props.scrolledToBottom && !loading)) {
			this.fetchImages();
		}

		return (
			<div>
				<h2 class={loading ? style.loading : style.loaded}>{loading ? 'Loading...' : ''}</h2>

				<div class={style.image_container}>
					{ data.map((image) => <Image {...image} />) }
				</div>

				<div class={style.bottom}>
					<button class={style.more} onClick={this.fetchImages} disabled={loading}>
						{loading ? 'Loading...' : 'Load 25 More'}
					</button>
				</div>

			</div>
		);
	}
}
