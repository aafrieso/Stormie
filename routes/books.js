import { Router } from 'express'
import * as booksCtrl from '../controllers/books.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', booksCtrl.index)

router.get('/:id', booksCtrl.show)

router.get('/:id/edit', isLoggedIn, booksCtrl.edit)

router.post('/',isLoggedIn, booksCtrl.create)

router.get('/:id',isLoggedIn, booksCtrl.update)

router.delete('/:id',isLoggedIn, booksCtrl.delete)

export {
  router
}