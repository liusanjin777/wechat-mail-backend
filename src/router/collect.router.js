const Router = require('koa-router');

const collectRouter = new Router({'prefix': '/collect'});

collectRouter.post('/')

module.exports = collectRouter;