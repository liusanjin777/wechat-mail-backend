const axios = require('axios')

const errorType = require('../constants/error-types');
const service = require('../service/user.service');
const handleCode = async (ctx, next) => {
  const { code } = ctx.request.body;
  const appid = 'wx99708a4e6f6a1a8b';
  const secret = '4db8d15ad96bd40bffd6bd87b11cbdd1';
  let url = `https://api.weixin.qq.com/sns/jscode2session?appid=${appid}&secret=${secret}&js_code=${code}&grant_type=authorization_code`
  const res = await axios.get(url);
  ctx.openid = res.data.openid
  await next();
  
}

const verifyUser = async (ctx, next) => {
  const res = await service.getOpenidByDataBase(ctx.openid);
  if(res.length === 0) {
    const res = await service.create(ctx.openid);
    ctx.userId = res[0].insertId
  } else {
    ctx.userId = res[0].id
  }
  ctx.body = ctx.userId
  await next();
}

module.exports = {
  handleCode,
  verifyUser
}