'use strict';

const Controller = require('egg').Controller;

class MenuListController extends Controller {
  async echo() {
    const ctx = this.ctx
    const data = await ctx.service.admin.menuList.echo()
    ctx.body = data
  }
}

module.exports = MenuListController;
