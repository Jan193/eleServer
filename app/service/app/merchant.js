'use strict';

const Service = require('egg').Service;

class MerchantService extends Service {
  async list() {
    const sql = await this.app.mysql.select('merchant')
    let result = {}
    if (sql) {
      result = {
        code: 0,
        msg: 'success',
        data: sql
      }
    } else {
      result = {
        code: 1,
        msg: '获取商家列表失败'
      }
    }
    return result;
  }
}

module.exports = MerchantService;