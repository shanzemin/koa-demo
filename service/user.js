const BaseService = require('./base')
const UserModel = require('../model/user')

class UserService extends BaseService {
  constructor () {
    super(UserModel)
  }
}

module.exports = UserService
