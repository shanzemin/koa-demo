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
// const winston = require('winston')
const middlewares = require('./middlewares')

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
// winston
// const logger = winston.createLogger({
//   level: 'info',
//   format: winston.format.json(),
//   defaultMeta: { service: 'koa-demo' },
//   transports: [
//     new winston.transports.File({ filename: path.join(__dirname, 'logs', 'error.log'), level: 'error' }),
//     new winston.transports.File({ filename: path.join(__dirname, 'logs', 'combined.log') })
//   ]
// })
// if (process.env.NODE_ENV !== 'production') {
//   logger.add(new winston.transports.Console({
//     format: winston.format.simple()
//   }))
// }
// morgan 记录http日志
const logs = path.join(__dirname, 'logs', 'access.log')
const accessLogStream = fse.createWriteStream(
  logs, { flags: 'a' }
)
app.use(morgan('combined', { stream: accessLogStream }))
// helmet
app.use(helmet())
// 启用middlewares目录下的中间件
middlewares.initApp(app)

// routes
app.use(routers.routes(), routers.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
})

module.exports = app
