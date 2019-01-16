'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async echo() {
    const { ctx } = this
    const params = ctx.query
    console.log('参数：', params);
    const data = await ctx.service.admin.login.echo(params)
    ctx.body = data
  }
}

module.exports = LoginController;
