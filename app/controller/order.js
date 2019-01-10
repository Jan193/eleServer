/*
 * @Description: 下单
 * @Author: Jane
 * @Date: 2019-01-09 14:44:36
 * @LastEditTime: 2019-01-09 15:37:29
 * @LastEditors: Please set LastEditors
 */

'use strict';

const Controller = require('egg').Controller;

class OrderController extends Controller {
  async echo() {
    const ctx = this.ctx
    const data = await ctx.service.order.echo(ctx.request.body)
    ctx.body = data
  }
}

module.exports = OrderController;
