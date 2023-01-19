import { Router } from 'express'
import * as stormiesCtrl from '../controllers/stormies.js'

const router = Router()

router.get('/', stormiesCtrl.index)

// router.get('/new', stormiesCtrl.new)

router.get('/:id', stormiesCtrl.show)

router.get('/:id/edit', stormiesCtrl.edit)

router.post('/', stormiesCtrl.create)

router.get('/:id', stormiesCtrl.update)

router.delete('/:id', stormiesCtrl.delete)

export {
  router
}