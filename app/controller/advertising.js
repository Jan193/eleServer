'use strict'

const {
  Controller,
} = require('egg')

class AdvertisingController extends Controller {
  async index() {
    const data = await this.ctx.service.advertising.find()
    this.ctx.body = data
  }
}

module.exports = AdvertisingController
