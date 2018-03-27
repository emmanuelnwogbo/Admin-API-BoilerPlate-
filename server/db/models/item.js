import mongoose from 'mongoose'

const { model } = mongoose

const Item = model('Item', {
  name: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: String,
    require: false,
    trim: true
  },
  description: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  photo: {
    type: String,
    required: true,
    trim: true
  },
  _admin: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }
})

module.exports = { Item }
