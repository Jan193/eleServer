'use strict';

const Controller = require('egg').Controller;

class GoodsTypeController extends Controller {
  async echo() {
    const ctx = this.ctx
    const query = this.ctx.query
    const data = await ctx.service.goodsType.echo({ merchantId: query.merchantId })
    ctx.body = data
  }
}

module.exports = GoodsTypeController;
