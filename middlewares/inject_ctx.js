module.exports = async (ctx, next) => {
  ctx.success = function (data, code = 200) {
    ctx.body = {
      code: code,
      message: 'success',
      data: data
    }
    this.response.status = code
  }

  ctx.error = function (msg = '', code = 500) {
    ctx.body = {
      code: code,
      message: msg
    }
    this.response.status = code
  }
  return next()
}
