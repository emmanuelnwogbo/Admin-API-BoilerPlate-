import mongoosedb from '../mongoose'

const {
  mongoose
} = mongoosedb;
const {
  Schema
} = mongoose

const ItemSchema = new Schema({
  title: {
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
    required: false
  }
})

const Item = mongoose.model('Item', ItemSchema)

export default Item