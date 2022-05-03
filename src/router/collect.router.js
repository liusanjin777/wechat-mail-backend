const Router = require('koa-router');
const { collect, addCollect, cancelCollect, getCollectOne } = require('../controller/collect.controller');

const collectRouter = new Router({'prefix': '/collect'});

collectRouter.post('/add', addCollect)
collectRouter.get('/:userId', collect)
collectRouter.get('/', getCollectOne)
collectRouter.delete('/cancel', cancelCollect)

module.exports = collectRouter;