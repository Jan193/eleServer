/*
 * @Description: 获取订单列表
 * @Author: your name
 * @Date: 2019-01-09 16:04:35
 * @LastEditTime: 2019-01-09 16:08:54
 * @LastEditors: Please set LastEditors
 */

'use strict';

const Controller = require('egg').Controller;

class OrderListController extends Controller {
  async echo() {
    const ctx = this.ctx
    const data = await ctx.service.orderList.echo(ctx.query)
    ctx.body = data
  }
}

module.exports = OrderListController;
