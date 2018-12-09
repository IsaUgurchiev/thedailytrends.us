import React, {Component} from 'react';
import Feed from '../Feed/Feed';

class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4">
            <Feed sourceName="Tumblr"/>
          </div>
          <div className="col-lg-4">
          </div>
          <div className="col-lg-4">
          </div>

        </div>
      </div>
    );
  }
}

export default Home;
