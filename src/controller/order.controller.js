const service = require('../service/order.service')

class OrderController {
  async create(ctx, next) {
    //  const res = service.create(ctx.requset.body);
     let data = []
    console.log(1);
    for(let i = 1;i<=57445;i++) {
      let obj = {}
      obj.goods_id = i;
      JSON.stringify(obj)
      data.push(obj);
    }
    ctx.body = data

  }
}

module.exports = new OrderController();