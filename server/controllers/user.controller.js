import UserModel from '../db/models/user';

const {
  User
} = UserModel;

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
      }).catch(e => res.status(400).send({
        e,
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
    }).catch(e => {
      res.status(401).send({
        message: `your credentials are wrong please try again`
      })
    })
  }
}