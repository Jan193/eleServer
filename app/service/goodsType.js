'use strict';

const Service = require('egg').Service;

class GoodsTypeService extends Service {
  async echo(params) {
    const list = await this.app.mysql.select('goodsType', {
      where: { merchantId: params.merchantId },
    })
    return list
  }
}

module.exports = GoodsTypeService;
