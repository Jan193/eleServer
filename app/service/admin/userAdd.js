'use strict';

function getNow() {
  const now = new Date()
  const y = now.getFullYear()
  let m = now.getMonth() + 1
  let d = now.getDate()
  let h = now.getHours()
  let mi = now.getMinutes()
  let s = now.getSeconds()
  m = m < 10 ? `0${m}` : m
  d = d < 10 ? `0${d}` : d
  h = h < 10 ? `0${h}` : h
  mi = mi < 10 ? `0${mi}` : mi
  s = s < 10 ? `0${s}` : s
  return `${y}-${m}-${d} ${h}:${mi}:${s}`
}

const Service = require('egg').Service;

class UserAddService extends Service {
  async echo(params) {
    const now = getNow()
    console.log('now:', now)
    const sqlResult = await this.app.mysql.insert('admin_user', {
      userName: params.userName,
      userPwd: params.userPwd,
      createTime: now,
      role: params.role,
    })
    if (sqlResult) {
      return {
        code: 0,
        msg: '保存成功',
      }
    }
  }
}

module.exports = UserAddService;
