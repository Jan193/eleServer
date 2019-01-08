'use strict'

const Service = require('egg').Service

class ActivityService extends Service {
  async find() {
    const list = await this.app.mysql.select('activity')
    return list ? {
      code: 0,
      data: list,
      msg: 'success',
    } : {
      code: 1,
      data: [],
      msg: '获取数据失败',
    }
  }
}

module.exports = ActivityService
