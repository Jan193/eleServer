'use strict';

const Service = require('egg').Service;

class MenuListService extends Service {
  async echo() {
    const sqlResult = await this.app.mysql.select('admin_menu')
    let result = {}
    if (sqlResult) {
      result = {
        code: 0,
        msg: '获取菜单成功',
        data: sqlResult,
      }
    } else {
      result = {
        code: 1,
        msg: '获取菜单失败',
        data: [],
      }
    }
    return result
  }
}

module.exports = MenuListService;
