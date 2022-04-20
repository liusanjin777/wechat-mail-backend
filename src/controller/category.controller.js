const service = require('../service/category.service')
class CategoriesController {
  async category(ctx, next) {
    const categoriesList = await service.getListBylevel();
    for(let a of categoriesList) {
      const res1 = await service.getListById(1, a.cat_id);
      a.children = res1;
      for(let b of res1) {
        const res2 = await service.getListById(2, b.cat_id);
        b.children = res2
      }

    }
    ctx.body = {
      "message": categoriesList,
      "meta": {
      "msg": "获取成功",
      "status": 200
      }
      }
  }
}

module.exports = new CategoriesController();