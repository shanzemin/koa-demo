class BaseService {
  constructor (model) {
    this.model = model
  }

  async list (query = {}) {
    return this.model.findAndCountAll(query)
  }

  async findById (id) {
    return this.model.findById(id)
  }

  async findOne (query) {
    return this.model.findOne(query)
  }

  async create (data) {
    return this.model.create(data)
  }

  async upsert (data) {
    return this.model.upsert(data)
  }

  async destory (query) {
    const { ctx } = this
    const entity = await this.model.findOne({ where: query })
    if (!entity) {
      ctx.throw('not found', 404)
      return
    }
    return entity.destroy()
  }
}

module.exports = BaseService
