let envFile = './config/.env'
if (process.env.NODE_ENV === 'production') {
  envFile = './config/.env.prod'
} else if (process.env.NODE_ENV === 'test') {
  envFile = './config/.env.test'
}
module.exports = envFile
