import { Router } from 'express'
import * as booksCtrl from '../controllers/books.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', booksCtrl.index)

router.get('/:id', booksCtrl.show)

router.post('/',isLoggedIn, booksCtrl.create)

router.post('/:id/comments', isLoggedIn, booksCtrl.addComment)

// router.patch('/:id/bookLikes', isLoggedIn, booksCtrl.bookLikes)

router.get('/:id/edit', isLoggedIn, booksCtrl.edit)

// router.get('/:id/comments/commentId/edit', isLoggedIn, booksCtrl.editComment)

router.put('/:id', isLoggedIn, booksCtrl.update)

// router.put('/:id/comments/commentId',isLoggedIn, booksCtrl.updateComment)

router.delete('/:id',isLoggedIn, booksCtrl.delete)

router.delete('/:bookId/comments/:commentId',isLoggedIn, booksCtrl.deleteComment)

export {
  router
}