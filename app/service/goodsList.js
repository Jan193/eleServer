'use strict';

const Service = require('egg').Service;

class GoodsListService extends Service {
  async echo(params) {
    const list = await this.app.mysql.select('goodsList', {
      where: {
        goodsTypeId: params.goodsTypeId,
      },
    })
    return list
  }
}

module.exports = GoodsListService;
