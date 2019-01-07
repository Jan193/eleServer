'use strict'

const mysql = require('./config.ele').mysql

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1546849380343_4659';

  // add your config here
  config.middleware = [];

  config.mysql = mysql

  return config;
};

