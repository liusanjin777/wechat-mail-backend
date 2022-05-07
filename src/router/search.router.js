const Router = require('koa-router');
const { qssearch, search } = require('../controller/search.controller');

const searchRouter = new Router()

searchRouter.get('/qssearch', qssearch)
searchRouter.get('/search', search)

module.exports = searchRouter;