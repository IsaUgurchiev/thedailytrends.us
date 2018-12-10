import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class FeedItem extends Component {
  numberWithSpaces = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };
  
  render() {
    const rec = this.props.rec;
    
    return (
      <div className="media text-muted pt-3 feed-item">
        <a href="#"><img className="mr-2 avatar" src={rec.avatar}/></a>
        <div className="media-body pb-3 mb-0 small border-bottom border-gray">
          <div className="mb-1 d-flex flex-column feed-item-header">
            <strong className="text-gray-dark">{rec.name}</strong>
            <a href={rec.login} target="_blank">{rec.login}</a>
          </div>
          <p><img src={rec.img}/></p>
          <div className="feed-item-body" dangerouslySetInnerHTML={{__html: rec.text}}/>
          
          <div className="row mt-2 mb-2 mb-lg-0 feed-item-footer">
            <div className="col-lg-8">
              <div className="social">
                  <span className="social-item">
                     <FontAwesomeIcon icon="comment"/>
                    &nbsp;{this.numberWithSpaces(100)}
                  </span>
                  <span className="social-item">
                     <FontAwesomeIcon icon="retweet"/>
                    &nbsp;{this.numberWithSpaces(100)}
                  </span>
                  <span className="social-item">
                     <FontAwesomeIcon icon="heart"/>
                    &nbsp;{this.numberWithSpaces(100)}
                  </span>
              </div>
            </div>
            <div className="col-lg-4">
              <span className="date">{rec.date}</span>
            </div>
          </div>
        
        </div>
      </div>
    );
  }
}

export default FeedItem;
