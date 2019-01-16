'use strict'

const Controller = require('egg').Controller

class userDeleteController extends Controller {
  async echo() {
    const ctx = this.ctx
    const params = ctx.request.body
    console.log('body:', params)
    const data = await ctx.service.admin.userDelete.echo(params)
    ctx.body = data
  }
}

module.exports = userDeleteController
