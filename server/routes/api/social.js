const SocialFactory = require('../../helpers/SocialFactory');

module.exports = (app) => {
  app.get('/api/:sourceApi/posts', (req, res, next) => {
    const api = SocialFactory.createApi(req.params.sourceApi);
    
    api.getPosts()
      .then(posts => res.json(posts))
      .catch((err) => next(err));
  });
};
