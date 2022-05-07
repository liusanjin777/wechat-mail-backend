const Router = require('koa-router');
const { cart, changeNum, remove, addCart } = require('../controller/cart.controller');

const cartRouter = new Router({'prefix': '/cart'});

cartRouter.get('/:userId', cart)
cartRouter.post('/', changeNum)
cartRouter.post('/add', addCart)
cartRouter.delete('/', remove)

module.exports = cartRouter;