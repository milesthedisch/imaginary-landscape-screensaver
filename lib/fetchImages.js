import fetch from 'isomorphic-fetch';
const REDDIT_PROXY_URL = 'https://wt-72edef61ad5dff84f53973f3380fac1f-0.run.webtask.io/reddit-proxy';

const fetchImages = async () => {
	const response = await fetch(REDDIT_PROXY_URL);
	const data = await response.json();

	if (response.ok) {
		return data;
	}

	throw data;
};

export default fetchImages;
