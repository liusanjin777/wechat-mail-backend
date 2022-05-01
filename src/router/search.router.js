const Router = require('koa-router');
const { search } = require('../controller/search.controller');

const searchRouter = new Router({'prefix': '/search'})

searchRouter.get('/:detail', search)

module.exports = searchRouter;