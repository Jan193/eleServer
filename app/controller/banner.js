'use strict';

const Controller = require('egg').Controller;

class BannerList extends Controller {
  async index() {
    const ctx = this.ctx
    const banner = await ctx.service.banner.find()
    this.ctx.body = banner
  }
}

module.exports = BannerList
