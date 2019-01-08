'use strict';

const Controller = require('egg').Controller;

class MerchantDetailController extends Controller {
  async echo() {
    const query = this.ctx.query
    let result = {}
    if (!query.id) {
      result = { msg: 'error' }
    } else {
      const res = await this.ctx.service.merchantDetail.echo(query.id)
      result = { data: res }
    }
    this.ctx.body = result
  }
}

module.exports = MerchantDetailController;
