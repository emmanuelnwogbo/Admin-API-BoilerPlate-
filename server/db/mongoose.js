import mongoose from 'mongoose'

require('dotenv').config();

const env = process.env.NODE_ENV || 'development'

mongoose.Promise = global.Promise
if (env === 'development') {
  mongoose.connect(process.env.DEV_DB).then(() => {
    return 'connected';
  }, err => err)
} else if (env === 'test') {
  mongoose.connect(process.env.TEST_DB).then(() => {
    return 'connected';
  }, err => err)
} else {
  mongoose.connect(process.env.PROD_DB).then(() => {
    return 'connected';
  }, err => err)
}

module.exports = {
  mongoose
};