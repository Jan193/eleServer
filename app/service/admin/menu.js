'use strict';

const Service = require('egg').Service;

class MenuService extends Service {
  async list() {
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
  async add(params) {
    const sql = await this.app.mysql.insert('admin_menu', {
      iname: params.iname,
      icon: params.icon,
      isChildren: false,
      path: params.path,
    })
    let result = {}
    if (sql) {
      result = {
        code: 0,
        msg: '菜单增加成功',
      }
    } else {
      result = {
        code: 1,
        msg: '菜单增加失败',
      }
    }
    return result
  }
  async delete(params) {
    const sql = this.app.mysql.delete('admin_menu', { iid: params.id })
    let result = {}
    if (sql) {
      result = {
        code: 0,
        msg: '删除成功'
      }
    } else {
      result = {
        code: 1,
        msg: '删除失败'
      }
    }
    return result;
  }
  async update(params) {
    const sql = this.app.mysql.update('admin_menu', { iid: params.id })
    let result = {}
    if (sql) {
      result = {
        code: 0,
        msg: '修改成功'
      }
    } else {
      result = {
        code: 1,
        msg: '修改失败'
      }
    }
    return result;
  }
}

module.exports = MenuService;
