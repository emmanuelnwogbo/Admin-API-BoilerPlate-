import mongoose from 'mongoose'
const env = process.env.NODE_ENV || 'development'

mongoose.Promise = global.Promise
if (env === 'development') {
  mongoose.connect(process.env.test_db)
} else {
  mongoose.connect(process.env.prod_db)
}
