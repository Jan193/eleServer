'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async list() {
    const { ctx } = this
    const data = await ctx.service.admin.user.list()
    ctx.body = data
  }
  async add() {
    const { ctx } = this
    const params = ctx.query
    const data = await ctx.service.admin.user.add(params)
    ctx.body = data
  }
  async delete() {
    const { ctx } = this
    const params = ctx.query
    const data = await ctx.service.admin.user.delete(params)
    ctx.body = data
  }
}

module.exports = UserController;
