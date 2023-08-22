
const Sequelize = require('sequelize')
const { db } = require('../database/db')
const bcrypt = require('bcryptjs')

const User = db.define('user', {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
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

User.beforeCreate(user => {
  user.password = bcrypt.hashSync(user.password, 10)
})

User.beforeUpdate(user => {
  if (user.password) {
    user.password = bcrypt.hashSync(user.password, 10)
  }
})

module.exports = User
