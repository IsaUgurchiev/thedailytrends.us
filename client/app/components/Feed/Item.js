import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class Item extends Component {
  numberWithSpaces = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };
  
  render() {
    const rec = this.props.rec;
    
    return (
      <div className="media text-muted pt-3">

        <div className="media-body pb-3 mb-0 small border-bottom border-gray">
          <div className="mb-1 d-flex flex-column">
            <strong className="text-gray-dark">Name</strong>
            <a href="#">Login</a>
          </div>
          <div><img className="" src={rec.img} /></div>
          <div dangerouslySetInnerHTML={{__html: rec.text}}/>
          <div className="mt-2 social">
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
            <span className="time">{rec.date}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
