
const UserService = require('../service/user')
const userService = new UserService()

class UserController {
  async list (ctx) {
    const query = Object.assign({}, ctx.query)
    const users = await userService.list(query)
    ctx.success(users)
  }

  async show (ctx) {
    const users = await userService.findById(ctx.params.id)
    ctx.success(users)
  }

  async create (ctx) {
    const user = await userService.create(ctx.request.body)
    if (!user) {
      ctx.error('创建失败')
      return
    }
    ctx.success(user)
  }

  async update (ctx) {
    const user = await userService.update({ id: ctx.params.id }, ctx.request.body)
    ctx.success(user)
  }

  async destory (ctx) {
    const user = await userService.destory({ id: ctx.params.id })
    ctx.success(user)
  }
}

module.exports = UserController
