'use strict';

const Controller = require('egg').Controller;

class MerchantController extends Controller {
  async list() {
    const { ctx } = this
    const data = await ctx.service.app.merchant.list()
    ctx.body = data
  }
  async add() {
    const { ctx } = this
    const query = ctx.query
    const data = await ctx.service.app.merchant.add(query)
    ctx.body = data
  }
  async update() {
    const { ctx } = this
    const query = ctx.query
    const data = await ctx.service.app.merchant.update(query)
    ctx.body = data
  }
  async delete() {
    const { ctx } = this
    const query = ctx.query
    const data = await ctx.service.app.merchant.delete(query)
    ctx.body = data
  }
}

module.exports = MerchantController;
