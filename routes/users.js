const router = require('koa-router')()

const controllers = require('../controllers')

router.get('/', controllers.user.list)
// router.get('/:id', controllers.user.show)
router.post('/', controllers.user.create)
// router.put('/:id', controllers.user.update)
// router.delete('/:id', controllers.user.remove)

module.exports = router
