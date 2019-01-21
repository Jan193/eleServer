'use strict'

const mysql = require('./config.ele').mysql
const graphql = require('./config.graphql').graphql
const middleware = require('./config.graphql').middleware

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1546849380343_4659';

  // add your config here
  config.middleware = [ 'graphql' ];

  config.mysql = mysql

  config.cors = {
    enable: true,
    package: 'egg-cors',
  }
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true, // 默认为 false，当设置为 true 时，将会放过所有 content-type 为 `application/json` 的请求
    },
    domainWhiteList: [ 'http://localhost:8080' ],
  };
  config.cors = {
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
    origin: '*',
  };

  config.graphql = graphql
  // config.middleware = middleware

  return config;
};
