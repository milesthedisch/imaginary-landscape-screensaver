import style from './style.scss';
import { Component } from 'preact';
import debounce from 'lodash/debounce';

import fetchImages from '../../lib/fetchImages';

import Image from '../image';
import Spinner from '../spinner';

export default class Images extends Component {
    moreImages() {
        let page = this.state.page + 1;
        this.setState({ page, loading: true });
        return this.fetchImages(page);
    }

    constructor() {
        super();

        this.fetchImages = debounce((page) => {
            return fetchImages(page)
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
        page: -1
    };

    render({ ...props }, { data, loading, err } = { }) {

        if (err || data.error) {
            return (<h2>
                {err.message || data.message}
            </h2>);
        }

        if ((!data.length && !loading) || (props.scrolledToBottom && !loading)) {
            this.moreImages();
        }

        return (
            <div>
                <div class={style.image_container}>
                    { data.map((image) => <Image {...image} />) }
                </div>
                { loading ? <div class={style.spinnerContainer}> <Spinner /> </div> : null }
            </div>
        );
    }
}
