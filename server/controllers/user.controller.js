import User from '../db/models/user';


export default class UserController {
  static signUp(req, res) {
    const {
      email,
      password
    } = req.body;
    const user = new User({
      email,
      password
    })

    user.save().then(() => {
      return user.generateAuthToken();
    }).then(token => {
      res.header('x-auth', token).status(201).send({
        message: `you're in Admin`,
        user
      }).catch(error => res.status(400).send({
        error,
        message: `something went wrong, pls contact Grandmaster`
      }))
    }).catch(error => {
      res.status(400).send({
        error,
        message: `a user with ${email} already exists`
      });
    })
  }

  static login(req, res) {
    const {
      email,
      password
    } = req.body;
    User.findByCredentials(email, password).then(user => {
      return user.generateAuthToken().then(token => {
        res.header('x-auth', token).status(200).send({
          message: `welcome back admin`,
          user
        });
      })
    }).catch(error => {
      res.status(401).send({
        error,
        message: `your credentials are wrong please try again`
      })
    })
  }

  static logout(req, res) {
    req.user.removeToken(req.token).then(() => {
      return res.status(200).send({
        message: `you logged out`
      });
    });
  }
}