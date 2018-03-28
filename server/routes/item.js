import express from 'express'

import Controllers from '../controllers'
import Utilities from '../utilities'

const {
  inputChecker
} = Utilities
const {
  ItemController
} = Controllers
const {
  addItem,
  getAllItems
} = ItemController;

const router = express.Router()

router.post('/new', inputChecker, addItem);
router.get('/', getAllItems)

export default router