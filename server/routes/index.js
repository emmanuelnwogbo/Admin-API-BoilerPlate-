import express from 'express'

import itemRoute from './item'
import userRoute from './user'

const router = express.Router()
const indexRoute = router

router.get('/', (req, res) => {
  res.send('hello index')
})

export default {
  indexRoute,
  itemRoute,
  userRoute
}
