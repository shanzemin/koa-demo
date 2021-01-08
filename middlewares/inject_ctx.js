module.exports = async (ctx, next) => {
  ctx.success = function (data, code = 200) {
    this.body = {
      code: code,
      message: 'success',
      data: data
    }
  }

  ctx.error = function (msg = '', code = 500) {
    this.body = {
      code: code,
      message: msg
    }
  }
  return next()
}
