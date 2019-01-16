'use strict';

const Controller = require('egg').Controller;

class UserAddController extends Controller {
  async echo() {
    const ctx = this.ctx
    const params = ctx.request.body
    const data = await ctx.service.admin.userAdd.echo(params)
    ctx.body = data
  }
}

module.exports = UserAddController;
