const Tumblr = require('./Tumblr');

module.exports = class SocialFactory {
  static createApi(type) {
    const classes = {Tumblr};
    let className = type.charAt(0).toUpperCase() + type.slice(1);
    return new classes[className];
  }
};
