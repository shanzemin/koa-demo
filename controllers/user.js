
const UserService = require('../service/user')
const userService = new UserService()

const user = {
  list: async (ctx) => {
    const query = Object.assign({}, ctx.query)
    console.log(query)
    const users = await userService.list({ where: query })
    ctx.body = users
  },
  create: async (ctx) => {
    const user = await userService.create(ctx.request.body)
    if (!user) {
      throw new Error('创建失败')
    }
    ctx.body = {
      code: 200,
      message: 'success',
      data: user
    }
  }
}

module.exports = user
