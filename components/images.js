import './style';
import { Component } from 'preact';

export default class Images extends Component {
  // state = {
  //   page: 0,
  //   data: [],
  //   terms: '',
  //   loading: false,
  //   refreshing: false
  // };

  // more = () => {
  //   let page = this.state.page + 1,
  //     cid = this.cid = (this.cid || 0) + 1;
  //   this.setState({ page, loading: true });

  //   flickr.search(this.state.terms, 100, { page }).then( results => {
  //     if (cid!==this.cid) return;
  //     let data = page>1 ? this.state.data.concat(results) : results;
  //     this.setState({ data, loading: false });
  //   });
  // };

  // componentDidMount() {
  //   this.setState({ terms:this.props.terms, page:0 });
  // }
  
  // componentWillReceiveProps({ terms }) {
  //   if (terms!==this.state.terms) {
  //     this.setState({ terms, page:0 });
  //   }
  // }

  // render({ }, { terms, data, page, loading }={}) {
  //   if (terms && !page && !loading) this.more();

  //   return (
  //     <div class="flickr-image-list">
  //       { data.map( image => (
  //         <FlickrImage key={ image.id } { ...image } />
  //       )) }
  //       <div class="bottom">
  //         <button class="more" onClick={this.more} disabled={ loading }>
  //           { loading?'Loading...':'Load 100 More' }
  //         </button>
  //       </div>
  //     </div>
  //   );
  // }
}
