const Router = require('koa-router');
const { insert } = require('../controller/insert.controller');

const insertRouter = new Router();

insertRouter.post('/insert', insert)

module.exports = insertRouter;