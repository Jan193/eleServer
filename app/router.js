'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const {
    router,
    controller,
  } = app;
  router.get('/', controller.home.index);
  router.get('/banner/list', controller.banner.index) // 获取分类
  router.get('/activity', controller.activity.index) // 获取活动列表
  router.get('/advertising', controller.advertising.index) // 获取广告
  router.get('/merchant/list', controller.merchant.echo)
  router.get('/merchant/detail', controller.merchantDetail.echo)
  router.get('/merchant/goods/type', controller.goodsType.echo)
  router.get('/merchant/goods/list', controller.goodsList.echo)
  router.post('/user/login', controller.login.echo)
  router.post('/order/pay', controller.order.echo)
  router.get('/order/list', controller.orderList.echo)
};
