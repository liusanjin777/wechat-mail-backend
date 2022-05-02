const Router = require('koa-router');
const {
  login
} = require('../controller/user.controller');
const {
  handleCode,
  verifyUser
} = require('../middware/user.middware');

const userRuter = new Router({prefix: '/users'});
userRuter.post('/login',handleCode, verifyUser, login);
module.exports = userRuter;