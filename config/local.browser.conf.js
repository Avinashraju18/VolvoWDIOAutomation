// config/local/local.browser.conf.js
const config = require('../wdio.conf').config;

exports.config = {
  ...config,
  capabilities: [
    {
      browserName: 'chrome'
    },
    
  ],

  //{
  //   browserName: 'edge'
  // }
  // Add any other environment-specific configuration here
};
