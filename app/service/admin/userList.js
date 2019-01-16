'use strict';

const Service = require('egg').Service;

function formatDate(date) {
  const y = date.getFullYear()
  let m = date.getMonth() + 1
  let d = date.getDate()
  m = m < 10 ? '0' + m : m
  d = d < 10 ? '0' + d : d
  return y + '-' + m + '-' + d
}

const role = {
  0: '超级管理员',
  1: '超级管理员',
  2: '管理员',
  3: "普通用户",
}

class UserListService extends Service {
  async echo() {
    const sqlResult = await this.app.mysql.select('admin_user')
    sqlResult.forEach(item => {
      if (item.createTime) {
        item.createTime = formatDate(item.createTime)
      }
      if (item.role) {
        item.role = role[item.role]
      }
    })
    let reuslt = {}
    if (sqlResult) {
      reuslt = {
        code: 0,
        msg: '获取用户列表成功',
        data: sqlResult,
      }
    } else {
      reuslt = {
        code: 1,
        msg: '获取用户列表失败',
        data: [],
      }
    }
    return reuslt
  }
}

module.exports = UserListService
