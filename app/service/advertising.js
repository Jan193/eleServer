'use strict'

const Service = require('egg').Service;

class AdvertisingService extends Service {
  async find() {
    const list = await this.app.mysql.select('advertising')
    return list ? {
      code: 0,
      data: list,
      msg: 'success',
    } : {
      code: 1,
      data: [],
      msg: 'error',
    }
  }
}

module.exports = AdvertisingService;
