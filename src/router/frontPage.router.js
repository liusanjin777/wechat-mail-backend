const Router = require('koa-router');
const { swiper, catitem ,floor} = require('../controller/frontPage.controller');


const frontRouter = new Router({prefix: '/home'});

frontRouter.get('/swiperData', swiper);
frontRouter.get('/catitems', catitem);
frontRouter.get('/floorData', floor);

module.exports = frontRouter;