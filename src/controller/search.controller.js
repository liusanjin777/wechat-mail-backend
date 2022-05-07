const service = require('../service/search.service')

class SearchController {
  async qssearch(ctx, next) {
    const { query } = ctx.query;
    const res = await service.search(query);
    ctx.status = 200
    ctx.body = {
      message: res,
      meta: {
        status: 200
      }
    };
  }
  async search(ctx, next) {
    const { cid, query, pagenum, pagesize } = ctx.query;
    console.log(cid, query, pagenum, pagesize);
    let offset = (pagenum - 1) * pagesize
    if(!cid) {
      const res = await service.searchByQuery(query, offset, pagesize)
      const total = await service.countByQuery(query)
      ctx.body = {
        message: {
          goods: res,
          total, pagenum
        },
        meta: {
          status: 200
        }
      }
    } else if(!query) {
      const res = await service.searchByCid(cid, offset, pagesize);
      const total = await service.countByQuery(cid)
      ctx.body = {
        message: {
          goods: res,
          total, pagenum
        },
        meta: {
          status: 200
        }
      }
    }
  }
}

module.exports = new SearchController()