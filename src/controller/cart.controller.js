const service = require('../service/cart.service')
class CartController {
  async cart(ctx, next) {
    const cartList = await service.getCartList()
    ctx.body = {
      "message": cartList,
      "meta": {
      "msg": "获取成功",
      "status": 200
      }
    }
  }
  async changeNum(ctx, next) {
    const { opreation } = ctx.request.body
    const res = await service.getGoodsNum();
    res.num = res.num + opreation;
    const res1 = await service.update(res.num);
    ctx.body = res1
  }
}

module.exports = new CartController();