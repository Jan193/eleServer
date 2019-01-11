'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async echo() {
    const { ctx } = this
    const params = ctx.body
    console.log('params: ', params);
    const data = ctx.service.admin.login.echo(params)
    ctx.body = data
  }
}

module.exports = LoginController;
