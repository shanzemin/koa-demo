const injectCtx = require('./inject_ctx')

module.exports = {
  initApp (app) {
    app.use(injectCtx)
  }
}
