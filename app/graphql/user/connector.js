'use strict';
class ArticleConnector {
  constructor(ctx) {
    this.ctx = ctx;
  }
  async getArticleInfoByService(iArticleID) {
    return await this.ctx.service.article.getArticleByID(iArticleID);
  }
}
module.exports = ArticleConnector;
