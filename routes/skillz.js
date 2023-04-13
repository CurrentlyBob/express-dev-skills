import { Router } from 'express'
import * as skillzCtrl from '../controllers/skillz.js'
const router = Router()


router.get('/', skillzCtrl.index)
router.get('/new', skillzCtrl.new)
router.get('/:skillId', skillzCtrl.show)
router.post('/', skillzCtrl.create)

export { router }
