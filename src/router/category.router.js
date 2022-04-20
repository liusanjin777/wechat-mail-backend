const Router = require('koa-router');
const { category } = require('../controller/category.controller');

const categoryRouter = new Router({prefix: '/categories'});
categoryRouter.get('/', category)

module.exports = categoryRouter