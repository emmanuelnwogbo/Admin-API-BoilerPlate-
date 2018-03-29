import mongodb from 'mongodb'
import Item from '../db/models/item'

const {
  ObjectID
} = mongodb;

export default class ItemController {
  static getItems(req, res) {
    const id = req.params.adminid;

    if (!ObjectID.isValid(id)) {
      return res.status(404).send({
        message: `the user id in req.params is invalid`
      });
    }

    Item.find({
      _admin: id
    }).then(items => {
      res.status(200).send({
        message: `found ${items.length} items`,
        items
      })
    }, error => {
      res.status(400).send(error);
    })
  }

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

  static updateItem(req, res) {
    const id = req.params.itemid;

    if (!ObjectID.isValid(id)) {
      return res.status(404).send({
        message: `the user id in req.params is invalid`
      });
    }

    Item.findOneAndUpdate({
      _id: id,
      _admin: req.user._id
    }, {
      $set: req.body
    }, {
      new: true
    }).then(item => {
      if (!item) {
        return res.status(404).send({
          message: `no such item exists`
        })
      }

      res.status(200).send({
        message: `item updated successfully`,
        item
      })
    }).catch(error => {
      res.status(400).send(error);
    });
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

      res.status(200).send({
        message: `item deleted`
      })
    })
  }
}