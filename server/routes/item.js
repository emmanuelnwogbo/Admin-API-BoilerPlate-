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
  addItem,
  getAllItems
} = ItemController;

const router = express.Router()

router.post('/new', authenticate, addItem);
router.delete('/:itemid', authenticate, getAllItems)

export default router