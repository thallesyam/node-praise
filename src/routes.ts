import { Router } from 'express'
import { CreateTagController } from './controllers/CreateTagController'
import { CreateUserController } from './controllers/CreateUserController'

const router = Router()

// Controllers

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()

router.post('/users', createUserController.handle)
router.post('/tags', createTagController.handle)

export { router }
