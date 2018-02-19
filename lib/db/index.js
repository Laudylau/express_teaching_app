/*
 * Copyright 2018 drigberg - All Rights Reserved
 * https://github.com/drigberg
 */

/*
 * Module dependencies
 */

const fs = require('fs')
const path = require('path')
const pg = require('pg')

/*
 * Module
 */

const pool = new pg.Pool({
  user: 'app_user',
  password: 'for_pony',
  database: 'teaching_app',
  host: 'postgresql',
  port: 5432,
  idleTimeoutMillis: 30000,
})

pool.on('error', (err) => {
  console.log('Idle client error', err)
})


/*
 * Module exports
 */

module.exports = pool
