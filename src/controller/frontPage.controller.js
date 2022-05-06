const service = require('../service/frontPage.service')

class FrontPageController {
  async swiper(ctx, next) {
    const res = await service.getSwiperList();
    ctx.body = {
      "message": res,
      "meta": {
        "msg": "获取成功",
        "status": 200
      }
    }
  };
  async catitem(ctx, next) {
    const res = await service.getCatitems();
    ctx.body = {
      "message": res,
      "meta": {
        "msg": "获取成功",
        "status": 200
      }
    }
  };
  async floor(ctx, next) {
    const res = await service.getfloorData();
    ctx.body = {
      "message": res,
      "meta": {
        "msg": "获取成功",
        "status": 200
      }
    }
  }
}

module.exports = new FrontPageController()