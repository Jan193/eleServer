'use strict';

const Service = require('egg').Service;

class LoginService extends Service {
  async echo(params) {
    let result = {}
    if (params) {
      const sqlResult = await this.app.mysql.get('admin_user', { userName: params.userName })
      if (sqlResult) {
        if (params.userPwd === sqlResult.userPwd) {
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
            msg: '密码不正确',
          }
        }
      } else {
        result = {
          code: 2,
          msg: '用户不存在',
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
