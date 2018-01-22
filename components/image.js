import './style';
import { Component } from 'preact';

export default class Image extends Component {
  // shouldComponentUpdate({ id, lastUpdate }) {
  //   return id !== this.props.id || lastUpdate !== this.props.lastUpdate;
  // }

  // render({ title, imgUrl, ownerName, license, flickrUrl, lastUpdate }) {
  //   let since = neatime(lastUpdate*1000).replace(/^(\d+[mhd])$/, '$1 ago'),
  //     backgroundImage = `url("${imgUrl}")`;

  //   return (
  //     <div class="flickr-image">
  //       <h1>{ title }</h1>
  //       <div class="flickr-image-container" style={{ backgroundImage }} />
  //       <h2>{ ownerName } - { license }</h2>
  //       <h3>Last updated: { since }</h3>
  //       <a href={ 'http://'+flickrUrl } target="_blank">{ flickrUrl }</a>
  //     </div>
  //   );
  // }
}
