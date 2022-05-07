const service = require('../service/cart.service')
class CartController {
  async cart(ctx, next) {
    const { userId } = ctx.params;
    const cartList = await service.getCartList(userId)
    ctx.body = {
      "message": cartList,
      "meta": {
      "msg": "获取成功",
      "status": 200
      }
    }
  }
  async changeNum(ctx, next) {
    const { num, userId, goods_id } = ctx.request.body
    console.log(num, userId, goods_id);
    // const res = await service.getGoodsNum();
    // res.num = res.num + operation;
    const res = await service.update(num, userId, goods_id);
    ctx.body = {
      message: "修改成功！"
    }
  }
  async remove(ctx, next) {
    const { userId, goods_id } = ctx.request.body
    console.log(userId, goods_id);
    const res = await service.delete(userId, goods_id);
    ctx.body = {
      message: "删除成功！"
    }
  }
  async addCart(ctx, next) {
    const { userId, goods_id } = ctx.request.body;
    const resOfNum = await service.getNum(userId, goods_id)
    if(resOfNum.length === 0) {
      const res = await service.add(userId, goods_id);
    } else {
      resOfNum[0].num ++ 
      const res = await service.update(resOfNum[0].num, userId, goods_id)
    }
    ctx.body = {
      message: "添加成功！"
    }
  }
}

module.exports = new CartController();