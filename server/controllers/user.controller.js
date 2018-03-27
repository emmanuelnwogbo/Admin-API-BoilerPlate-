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
        message: `a user with ${email} already exists`
      });
    })
  }

  static login(req, res) {

  }
}