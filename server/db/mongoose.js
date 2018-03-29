import mongoose from 'mongoose'

require('dotenv').config();

const env = process.env.NODE_ENV || 'development'

mongoose.Promise = global.Promise
if (env === 'development') {
  mongoose.connect(process.env.DEV_DB).then(() => {
    console.log('connected');
  }, err => console.log(err))
} else if (env === 'test') {
  mongoose.connect(process.env.TEST_DB)
} else {
  mongoose.connect(process.env.PROD_DB)
}

module.exports = {
  mongoose
};