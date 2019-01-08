'use strict'


const Controller = require('egg').Controller;

class MerchantController extends Controller {
  async echo() {
    const ctx = this.ctx
    const data = await ctx.service.merchant.echo()
    ctx.body = data
  }
}

module.exports = MerchantController;
