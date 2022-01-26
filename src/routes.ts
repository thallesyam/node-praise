import { Router } from 'express'
import { ensureAdmin } from './middlewares/ensureAdmin'
import { ensureAuthenticated } from './middlewares/ensureAuthenticated'

import { CreateTagController } from './controllers/CreateTagController'
import { CreateUserController } from './controllers/CreateUserController'
import { AuthenticateUserController } from './controllers/AuthenticateUserController'
import { CreateComplimentController } from './controllers/CreateComplimentController'
import { ListUserSendComplimentsController } from './controllers/ListUserSendComplimentsController'
import { ListUserReceiverComplimentsController } from './controllers/ListUserReceiverComplimentsController'
import { ListTagsController } from './controllers/ListTagsController'
import { ListUsersController } from './controllers/ListUsersController'

const router = Router()

// Controllers
const listUsersController = new ListUsersController()
const createUserController = new CreateUserController()
const listTagsController = new ListTagsController()
const createTagController = new CreateTagController()
const authenticateUserController = new AuthenticateUserController()
const createComplimentController = new CreateComplimentController()
const listUserSendComplimentsController =
  new ListUserSendComplimentsController()
const listUserReceiveromplimentsController =
  new ListUserReceiverComplimentsController()

// Routes

router.post(
  '/tags',
  ensureAuthenticated,
  ensureAdmin,
  createTagController.handle
)
router.post('/users', createUserController.handle)
router.post('/login', authenticateUserController.handle)
router.post(
  '/compliments',
  ensureAuthenticated,
  createComplimentController.handle
)
router.get(
  '/users/compliments/send',
  ensureAuthenticated,
  listUserSendComplimentsController.handle
)
router.get(
  '/users/compliments/receive',
  ensureAuthenticated,
  listUserReceiveromplimentsController.handle
)

router.get('/tags', ensureAuthenticated, listTagsController.handle)
router.get('/users', ensureAuthenticated, listUsersController.handle)

export { router }
