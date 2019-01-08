'use strict';

const Service = require('egg').Service;

class MerchantDetailService extends Service {
  async echo(id) {
    console.log('id:', id);
    const list = await this.app.mysql.get('merchant', { MID: id })
    console.log('list:', list);
    return list
  }
}

module.exports = MerchantDetailService;
