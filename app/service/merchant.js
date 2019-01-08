'use strict'

const Service = require('egg').Service;

class MerchantService extends Service {
  async echo() {
    const list = await this.app.mysql.select('merchant')
    return list
  }
}

module.exports = MerchantService;
