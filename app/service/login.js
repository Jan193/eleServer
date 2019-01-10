'use strict';

const Service = require('egg').Service;

class LoginService extends Service {
  async echo(userInfo) {
    const { userName, userPwd } = userInfo
    let user = []
    const list = await this.app.mysql.select('user', { userName: userInfo.userName })
    if (list.length >= 1) {
      // 用户名存在
      user = list
    } else {
      const result = await this.app.mysql.insert('user', {
        userName,
        userPwd,
      })
      if (result) {
        const list2 = await this.app.mysql.select('user', { userName })
        user = list2
      }
    }
    return user
  }
}

module.exports = LoginService;
