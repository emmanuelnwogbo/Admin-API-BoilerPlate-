import express from 'express'
import bodyParser from 'body-parser'

import routes from './routes'

require('dotenv').config()

const { indexRoute, itemRoute, userRoute } = routes

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api/v1', indexRoute)
app.use('/api/v1/auth', userRoute)
app.use('/api/v1/item', itemRoute)

const PORT = process.env.PORT || 8080

app.listen(PORT, error => {
  if (error) {
    return console.log(error)
  }

  return console.log(`server started on port ${PORT}`)
})
