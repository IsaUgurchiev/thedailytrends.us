import React, {Component} from 'react';
import 'whatwg-fetch';
import FeedItem from './FeedItem';

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    const sourceApi = this.props.sourceApi.toLowerCase();
    fetch(`/api/${sourceApi}/posts`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          items: json
        });
      });
  }

  render() {
    const content = this.state.items.map((item) => {
      return <FeedItem rec={item} key={item.id}/>
    });

    return (
      <div className="my-3 p-3 bg-white rounded shadow-sm feed">
        <div className="border-bottom border-gray pb-2 mb-0 feed-header">
          <a href="#" className="source-link">
            <img className="mr-2 source-logo" src={`assets/img/${this.props.sourceLogo}`}/>
            <span className="source-name">{this.props.sourceName}</span>
          </a>
        </div>

        <div className="feed-body">
          {content}
        </div>

        <small className="d-block text-right mt-3 feed-footer">
          <a href="#">All updates</a>
        </small>
      </div>
    );
  }
}

export default Feed;
