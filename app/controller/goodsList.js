'use strict';

const Controller = require('egg').Controller;

class GoodsListController extends Controller {
  async echo() {
    const ctx = this.ctx
    const { goodsTypeId } = ctx.query
    const data = await ctx.service.goodsList.echo({ goodsTypeId })
    ctx.body = data
  }
}

module.exports = GoodsListController;
