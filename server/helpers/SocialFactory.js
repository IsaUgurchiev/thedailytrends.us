const Tumblr = require('./Tumblr');

module.exports = class SocialFactory {
  static createApi(type) {
    const classes = {Tumblr};
    return new classes[type];
  }
};
