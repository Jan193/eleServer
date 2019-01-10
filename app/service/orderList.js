/*
 * @Description: 获取订单列表
 * @Author: your name
 * @Date: 2019-01-09 16:05:54
 * @LastEditTime: 2019-01-10 15:43:21
 * @LastEditors: Please set LastEditors
 */
'use strict';

const Service = require('egg').Service;

class OrderListService extends Service {
  async echo(params) {
    const app = this.app
    const list = await app.mysql.select('orders', {
      userId: params.userId,
    })
    const goodsList = [];
    await Promise.all(
      list.map(async (item) => {
        const mid = item.merchantId
        const res = await app.mysql.get('merchant', { MID: mid })
        console.log('item:', item);
        const goodsName = item.goodsName.split(',')
        const goodsCount = item.goodsCount.split(',')
        const buyGoodslist = []
        for (let i = 0; i < goodsName.length; i++) {
          const cur = goodsName[i]
          if (cur) {
            buyGoodslist.push({
              goodsName: cur,
              goodsCount: goodsCount[i],
            })
          }
        }

        goodsList.push({
          createTime: item.createTime,
          logo: res.logo,
          mname: res.mname,
          payStatus: item.payStatus,
          list: buyGoodslist,
        })
      })
    )

    /* for (let i = 0; i < list.length; i++) {
      const item = list[i]
      const mid = item.merchantId
      const res = await app.mysql.get('merchant', { MID: mid })
      // console.log('item:', item);
      const goodsName = item.goodsName.split(',')
      const goodsCount = item.goodsCount.split(',')
      const buyGoodslist = []
      for (let i = 0; i < goodsName.length; i++) {
        const cur = goodsName[i]
        if (cur) {
          buyGoodslist.push({
            goodsName: cur,
            goodsCount: goodsCount[i],
          })
        }
      }
      console.log('list::', buyGoodslist);
      goodsList.push({
        createTime: item.createTime,
        logo: res.logo,
        mname: res.mname,
        payAmount: item.payAmount,
        payStatus: item.payStatus,
        list: JSON.stringify(buyGoodslist),
      })
    } */
    console.log('goodsList:', goodsList);
    return goodsList
  }
}

module.exports = OrderListService;
