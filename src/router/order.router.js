const Router = require('koa-router');
const { create } = require('../controller/order.controller');

const orderRouter = new Router({prefix: '/orders'});

orderRouter.post('/create', create)

module.exports = orderRouter;