import User from '../db/models/user';

const authenticate = (req, res, next) => {
  const token = req.header('x-auth');

  User.findByToken(token).then(user => {
    if (!user) {
      return Promise.reject();
    }

    req.user = user;
    req.token = token;
    next();
  }).catch(error => {
    res.status(401).send({
      message: `user token not found`,
      error
    });
  });
};

export default authenticate