
const UserModel = require('../model/user')

const user = {
  list: async (ctx) => {
    ctx.body = 'hello world'
  },
  create: async (ctx) => {
    const user = await UserModel.create(ctx.request.body)
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
