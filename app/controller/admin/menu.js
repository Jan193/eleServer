'use strict';

const Controller = require('egg').Controller;

class MenuController extends Controller {
  async list() {
    const ctx = this.ctx
    const data = await ctx.service.admin.menu.list()
    ctx.body = data
  }
  async add() {
    const ctx = this.ctx
    const params = ctx.query
    const data = await ctx.service.admin.menu.add(params)
    ctx.body = data
  }
  async delete() {
    const ctx = this.ctx
    const data = await ctx.service.admin.menu.delete()
    ctx.body = data
  }
  async update() {
    const ctx = this.ctx
    const data = await ctx.service.admin.menu.update()
    ctx.body = data
  }
}

module.exports = MenuController;
