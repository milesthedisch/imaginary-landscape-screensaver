import { h, Component } from 'preact';
import style from './style.scss';

const Spinner = () => (
    <div class={style["lds-ring"]}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
);

export default Spinner;
