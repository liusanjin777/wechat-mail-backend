const service = require('../service/search.service')

class SearchController {
  async search(ctx, next) {
    const params = ctx.params;
    const query = ctx.query;
    const res = await service.search(params.detail, query.offset, query.size);
    ctx.status = 200
    ctx.body = res;
  }
}

module.exports = new SearchController()