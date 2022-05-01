const Router = require('koa-router');
const { cart, changeNum } = require('../controller/cart.controller');

const cartRouter = new Router({'prefix': '/cart'});

cartRouter.get('/', cart)
cartRouter.post('/', changeNum)

module.exports = cartRouter;