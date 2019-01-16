'use strict'

const Service = require('egg').Service

class userDeleteService extends Service {
  async echo(params) {
    const sql = await this.app.mysql.delete('admin_user', {
      uid: params.uid,
    })
    console.log('sql:', sql)
    let result = {}
    if (sql) {
      result = {
        code: 0,
        msg: '删除成功',
      }
    } else {
      result = {
        code: 1,
        msg: '删除失败',
      }
    }
    return result
  }
}

module.exports = userDeleteService
