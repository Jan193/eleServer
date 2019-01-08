'use strict'

const Controller = require('egg').Controller

class ActivityController extends Controller {
  async index() {
    const ctx = this.ctx
    const data = await ctx.service.activity.find()
    ctx.body = data
  }
}

module.exports = ActivityController
