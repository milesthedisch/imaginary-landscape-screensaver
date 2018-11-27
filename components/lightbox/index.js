import { h, Component } from 'preact';
import style from './style.scss';

const Lightbox = ({ children, props }) => {
    return (
        <div class={ style.lightbox }>{ children }
            <img class={ style.lightboxImage } src={ props }/>
        </div>
    );
}

export default Lightbox;
