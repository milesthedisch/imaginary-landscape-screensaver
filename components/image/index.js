import style from './style.scss';

const Image = ({ children, ...props }) => (
	<div class={style.image}>
		<img width={props.width / 4} height={props.height / 4} src={props.url} />
	</div>
);

export default Image;
