import mongoose from 'mongoose'
import config from '../config/config.json'

const env = process.env.NODE_ENV || 'development'

mongoose.Promise = global.Promise
if (env === 'development') {
  mongoose.connect(config.development.MONGODB_URI).then(() => {
    console.log('connected')
  }, err => console.log(err))
} else {
  mongoose.connect(process.env.prod_db)
}

module.exports = {
  mongoose
};