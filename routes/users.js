const router = require('koa-router')()

const UserController = require('../controllers/user')
const userController = new UserController()

router.get('/', userController.list)
router.get('/:id', userController.show)
router.post('/', userController.create)
router.put('/:id', userController.update)
router.delete('/:id', userController.destory)

module.exports = router
