import mongodb from 'mongodb'
import Item from '../db/models/item'

const {
  ObjectID
} = mongodb;

export default class ItemController {
  static addItem(req, res) {
    const {
      title,
      price,
      description,
      photosURLs
    } = req.body;

    const item = new Item({
      title,
      price,
      description,
      photosURLs,
      _admin: req.user._id
    })

    item.save().then(item => {
      return res.status(201).send({
        message: `item created`,
        item
      });
    }).catch(error => {
      return res.status(400).send({
        message: `invalid inputs please try adding your item again`,
        error
      })
    })
  }

  static deleteItem(req, res) {
    const id = req.params.itemid;

    if (!ObjectID.isValid(id)) {
      return res.status(404).send({
        message: `the user id in req.params is invalid`
      });
    }


    Item.findOneAndRemove({
      _id: id,
      _admin: req.user._id
    }).then(item => {
      if (!item) {
        res.status(404).send({
          message: `there's no item fitting that criteria`
        })
      }

      res.send({
        message: `item deleted`
      })
    })
  }
}