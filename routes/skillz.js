import { Router } from 'express'
import * as skillzCtrl from '../controllers/skillz.js'
const router = Router()


router.get('/', skillzCtrl.index)

export { router }
