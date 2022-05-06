const Router = require('koa-router');
const { detail } = require('../controller/detail.controller');

const detailRouter = new Router();
detailRouter.get('/goods/detail', detail)

module.exports = detailRouter;