let envFile = './config/.env.local'
if (process.env.NODE_ENV === 'prod') {
  envFile = './config/.env.prod'
} else if (process.env.NODE_ENV === 'test') {
  envFile = './config/.env.test'
}
module.exports = envFile
