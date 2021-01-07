const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const helmet = require('koa-helmet')
const routers = require('./routes')
const path = require('path')
const morgan = require('koa-morgan')
const fse = require('fs-extra')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(path.join(__dirname, '/public')))

app.use(views(path.join(__dirname, '/views'), {
  extension: 'ejs'
}))
// morgan日志
const logs = path.join(__dirname, 'logs', 'access.log')
const accessLogStream = fse.createWriteStream(
  logs, { flags: 'a' }
)
app.use(morgan('combined', { stream: accessLogStream }))
// helmet
app.use(helmet())

// routes
app.use(routers.routes(), routers.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
})

module.exports = app
