const Sequelize = require('sequelize')

const db = new Sequelize(process.env.DB_databaseName, process.env.DB_username, process.env.DB_password, {
  host: process.env.DB_host,
  dialect: 'mysql',
  operatorsAliases: false,
  dialectOptions: {
    // 字符集
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
    supportBigNumbers: true,
    bigNumberStrings: true
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  timezone: '+08:00' // 东八时区
})

// 自动生成表结构
db.sync()

module.exports = { db }
