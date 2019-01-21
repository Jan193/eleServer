'use strict';

const Service = require('egg').Service;

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

class UserService extends Service {
  async list() {
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

  async add(params) {
    const now = getNow()
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

  async delete(params) {
    const sql = await this.app.mysql.delete('admin_user', {
      uid: params.uid,
    })
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

module.exports = UserService;