import style from './style.scss';
import _chunk from 'lodash/chunk';
import _flatten from 'lodash/flatten';
import { Component } from 'preact';

import fetchImages from '../../lib/fetchImages';

import Image from '../image';

export default class Images extends Component {
	constructor() {
		super();

		this.fetchImages = () => {
			this.setState({ loading: true });

			const flattenedData = _flatten(this.state.data);

			return fetchImages()
				.then(data => flattenedData.concat(data))
				// .then(data => _chunk(data, 3))
				.then(data => this.setState({ data, loading: false }))
				.catch(err => this.setState({ err, loading: false }));
		};
	}

	state = {
		data: [],
		loading: false
		// page,
		// terms,
	};

	// more = () => {
	// 	let page = this.state.page + 1,
	// 		cid = this.cid = (this.cid || 0) + 1;
	// 	this.setState({ page, loading: true });

	// 	flickr.search(this.state.terms, 100, { page }).then( results => {
	// 		if (cid!==this.cid) return;
	// 		let data = page>1 ? this.state.data.concat(results) : results;
	// 		this.setState({ data, loading: false });
	// 	});
	// };

	// componentDidMount() {
	// 	this.setState({ terms:this.props.terms, page:0 });
	// }
	
	// componentWillReceiveProps({ terms }) {
	// 	if (terms!==this.state.terms) {
	// 		this.setState({ terms, page:0 });
	// 	}
	// }

	render({ }, { data, loading, err } = { }) {

		if (err || data.error) {
			return (<h2>{err.msg || data.error} </h2>);
		}

		if (!data.length && !loading) {
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
