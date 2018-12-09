import React, {Component} from 'react';
import 'whatwg-fetch';
import Item from './Item';

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    fetch('https://api.tumblr.com/v2/blog/pitchersandpoets.tumblr.com/posts')
      .then(res => {
        console.log(res);
        res.json();
      })
      .then(json => {
        this.setState({
          items: json
        });
      });
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
