import Item from '../db/models/item';

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

  static getAllItems(req, res) {

  }
}