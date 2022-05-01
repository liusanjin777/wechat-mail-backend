const service = require('../service/order.service')

class OrderController {
  async create(ctx, next) {
    const order = ctx.request.body;
    let price = 0;
    order.goods.forEach(v => {
      price += v.goods_number * v.goods_price
    });
    order.price = price;
     const res = await service.create(order);
    ctx.body = res

  }
}

module.exports = new OrderController();