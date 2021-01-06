const router = require('koa-router')()

const controllers = require('../controllers')

router.get('/', controllers.user.list)

module.exports = router
