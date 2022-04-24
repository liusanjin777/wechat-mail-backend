const insertService = require('../service/insert.service')
const aixos = require('axios')
class InsertController {
  async insert(ctx, next) {
    const { goodsId} = ctx.request.body
      let url = `http://api-hmugo-web.itheima.net/api/public/v1/goods/detail?goods_id=${goodsId}`
      aixos.get(url)
      .then(res => {
        let goods = res.data.message
        // insertService.insert(goods);
        for(let p of goods.pics) {
          insertService.insertPics(p)
        }
        // for(let p of goods.attrs) {
        //   insertService.insertAttr(p)
        // }
      })
  //   console.log(1);
  // const data = []
  // for(let i =42000;i<=42200;i++) {
  //   let obj = {}
  //   obj.goods_id = i;
  //   data.push(obj)
  // }
  // ctx.body = data
  }
  
}

module.exports = new InsertController()