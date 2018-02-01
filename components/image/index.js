import style from './style.scss';

const Image = ({ children, ...props }) => (
	<div class={style.image} style={`
			background-image: url("${props.url}");
			background-size: cover;
			background-repeat: no-repeat;
			background-position: center center;
		`}
	/>
);

export default Image;
