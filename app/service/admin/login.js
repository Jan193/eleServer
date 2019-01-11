'use strict';

const Service = require('egg').Service;

class LoginService extends Service {
  async echo(params) {
    let result = {}
    if (params) {
      const sqlResult = this.app.mysql.select('admin_user', { userName: params.userName })
      const userInfo = sqlResult[0]
      if (userInfo && params.userPwd === userInfo.userPwd) {
        result = {
          code: 0,
          msg: '登录成功',
          data: {
            userName: params.userName,
          },
        }
      } else {
        result = {
          code: 1,
          msg: '用户不存在或密码不正确',
          data: {},
        }
      }
    } else {
      result = {
        code: 3,
        msg: '缺少参数',
      }
    }
    return result
  }
}

module.exports = LoginService;
