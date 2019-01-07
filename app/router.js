'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, servers } = app;
  console.log(servers);
  router.get('/', controller.home.index);
  router.get('/banner/list', controller.banner.index)
};
