const router = require('koa-router')()

const users = require('./users')

router.prefix('/api/1')
router.use('/user', users.routes())

module.exports = router
