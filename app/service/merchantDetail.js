'use strict';

const Service = require('egg').Service;

class MerchantDetailService extends Service {
  async echo(id) {
    const list = await this.app.mysql.get('merchant', { MID: id })
    return list
  }
}

module.exports = MerchantDetailService;
