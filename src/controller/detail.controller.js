const service = require('../service/datail.service')

class DetailController {
  async detail(ctx, next) {
    const { goods_id } = ctx.query
    const res = await service.getGoodsDetail(goods_id);
    ctx.body = {
      "message": res,
      "meta": {
        "msg": "获取成功",
        "status": 200
      }
    }
  }
}


module.exports = new DetailController();