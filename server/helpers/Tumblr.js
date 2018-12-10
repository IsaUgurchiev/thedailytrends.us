const config = require('../../config/config');
const TumblrApi = require('tumblr.js');

// Private properties
const _client = Symbol('client');
const _filterPosts = Symbol('filterPosts');
const _formatDate = Symbol('formatDate');
const _getMinutesWithLeadingZero = Symbol('getMinutesWithLeadingZero');

module.exports = class Tumblr {
  constructor() {
    this[_client] = TumblrApi.createClient({
      credentials: config.socialKeys.tumblr.credentials,
      returnPromises: true
    });
  }
  
  getPosts() {
    return this[_client].blogPosts('pitchersandpoets.tumblr.com')
      .then(resp => Tumblr._filterPosts(resp.posts))
      .catch(function (err) {
        // oops
      });
  }
  
  static _filterPosts(posts) {
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
          date: Tumblr._formatDate(item.date)
        }
      });
  }

  static _formatDate(strDate) {
    const months = [
      'Jan.',
      'Feb.',
      'Mar.',
      'Apr.',
      'May',
      'June',
      'July',
      'Aug.',
      'Sept.',
      'Oct.',
      'Nov.',
      'Dec.'
    ];
    
    let date = new Date(strDate);
    let year = date.getFullYear();
    let currentYear = new Date().getFullYear();
    let strYear = '';
    
    if (year !== currentYear) {
      strYear = year;
    }
    
    let str = `${date.getHours()}:${Tumblr._getMinutesWithLeadingZero(date)}, ${date.getDate()} ${months[date.getMonth()]} ${strYear}`;
    
    return str.trim();
  }

  static _getMinutesWithLeadingZero(dt) {
    return (dt.getMinutes() < 10 ? '0' : '') + dt.getMinutes();
  }
};
