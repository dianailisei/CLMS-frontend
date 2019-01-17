'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  SCHEDULE_API_ENDPOINT: '"https://localhost:44385"',
  ATTENDANCE_API_ENDPOINT: '"https://localhost:44319"'
})
