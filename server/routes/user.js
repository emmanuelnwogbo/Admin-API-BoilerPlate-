import express from 'express'

import Controllers from '../controllers'
import Utilities from '../utilities'

const {
  UserController
} = Controllers
const {
  signUp,
  login,
  logout

} = UserController
const {
  inputChecker,
  authenticate
} = Utilities

const router = express.Router()

router.post('/signup', inputChecker, signUp)
router.post('/login', inputChecker, login)
router.delete('/logout', authenticate, logout)

export default router