
const Sequelize = require('sequelize')
const { db } = require('../database/db')

const user = db.define('user', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: true,
    autoIncrement: true
  },
  username: {
    type: Sequelize.STRING,
    allowNull: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: true
  }
}, {
  sequelize: db,
  tableName: 'user'
})

module.exports = user
