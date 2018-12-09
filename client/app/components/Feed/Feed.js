import React, {Component} from 'react';
import 'whatwg-fetch';
import Item from './Item';

const tumblr = require('tumblr.js');

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };

    this._filterPosts = this._filterPosts.bind(this);
  }

  componentDidMount() {
    const client = tumblr.createClient({
      credentials: {
        consumer_key: 'v2Nor81YGyWkIOXJnDCKnqK0sr6FToVlX8mYH5mWEtuPuMtbvC',
        consumer_secret: 'ZKilRQAXEntc46fQOSoidK91kELqzxW7rmwlPT5igoA4tEyh2l',
        token: 'xBGg6QTZ8xlKNnNjIzF4zdSA62aDaudWL0NZ6URYmIHEhTVhL6',
        token_secret: 'R7sWXj2cwIYxgpQPXjYhxawG4n5beHiFesPubfW9OWtRe8KPYa'
      }
    });

    const me = this;

    client.blogPosts('pitchersandpoets.tumblr.com', function (err, resp) {
      const items = me._filterPosts(resp.posts);

      me.setState({
        items: items
      });
    });

    /*fetch('https://api.tumblr.com/v2/blog/pitchersandpoets.tumblr.com/posts')
     .then(res => {
     console.log(res);
     res.json();
     })
     .then(json => {
     this.setState({
     items: json
     });
     });*/
  }

  _filterPosts(posts) {
    return posts
      .filter((item) => {
        return item.type === "photo";
      })
      .map((item) => {
        return {
          id: item.id,
          img: item.photos[0].alt_sizes[3].url,
          text: item.caption,
          url: item.short_url,
          date: item.date
        }
      })

  }
  
  render() {
    const content = this.state.items.map((item) => {
      return <Item rec={item} key={item.id}/>
    });
    
    return (
      <div className="my-3 p-3 bg-white rounded shadow-sm">
        <div className="border-bottom border-gray pb-2 mb-0">
          <a href="#" className="source-link">
            <span className="source-name">{this.props.sourceName}</span>
          </a>
        </div>
        {content}
        <small className="d-block text-right mt-3"><a href="#">All updates</a></small>
      </div>
    );
  }
}

export default Feed;
