import express from 'express'

import Controllers from '../controllers'
import Utilities from '../utilities'

const {
  itemInputChecker,
  authenticate
} = Utilities
const {
  ItemController
} = Controllers
const {
  getItems,
  addItem,
  updateItem,
  deleteItem
} = ItemController;

const router = express.Router()

router.get('/:adminid', getItems)
router.post('/new', authenticate, addItem);
router.patch('/:itemid', authenticate, updateItem)
router.delete('/:itemid', authenticate, deleteItem)

export default router