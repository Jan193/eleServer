/*
 * @Description: 下单
 * @Author: your name
 * @Date: 2019-01-09 14:46:36
 * @LastEditTime: 2019-01-10 15:44:42
 * @LastEditors: Please set LastEditors
 */

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

class OrderService extends Service {
  async echo(params) {
    const goodsList = params.goodsList
    let goodsName = ''
    let goodsCount = ''
    let goodsId = ''
    goodsList.forEach(item => {
      goodsName += item.iname + ','
      goodsCount += item.count + ','
      goodsId += item.iid + ','
    })

    const result = await this.app.mysql.insert('orders', {
      userId: params.userId,
      merchantId: params.merchantId,
      createTime: getNow(),
      payStatus: params.payStatus,
      goodsId,
      goodsName,
      goodsCount,
      payAmount: params.payAmount,
    })
    if (result) {
      return {
        code: 0,
        msg: '下单成功',
      }
    }
  }
}

module.exports = OrderService;
