const service = require('../service/collect.service')

class CollectController {
  async addCollect(ctx, next) {
    const { userId, goods_id } = ctx.request.body;
    const res = await service.addCollect(userId, goods_id)
    ctx.body =res
  }
  async cancelCollect(ctx, next) {
    const { userId, goods_id } = ctx.request.body;
    const res = await service.cancelCollect(userId, goods_id)
    ctx.body =res
  }
  async collect(ctx, next) {
    const { userId } = ctx.params
    const res = await service.getCollectList(userId)
    ctx.body = {
      message: res
    }
  }
  async getCollectOne(ctx) {
    const { userId, goods_id } = ctx.query;
    const res = await service.getCollectOne(userId, goods_id)
    ctx.body = {
      message: res.length === 0 ? false : true
    }
  }
}

module.exports = new CollectController()