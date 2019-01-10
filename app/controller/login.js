'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async echo() {
    const ctx = this.ctx
    const query = ctx.query
    const data = await ctx.service.login.echo(query)
    if (data.length >= 1) {
      ctx.body = {
        code: 0,
        data: data[0],
      }
    } else {
      ctx.body = {
        code: 1,
        msg: '登录错误',
      }
    }
  }
}

module.exports = LoginController;
