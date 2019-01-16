'use strict';

const Controller = require('egg').Controller;

class UserListController extends Controller {
  async echo() {
    const ctx = this.ctx
    const data = await ctx.service.admin.userList.echo()
    ctx.body = data
  }
}

module.exports = UserListController;
