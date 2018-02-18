/*
 * Copyright 2018 drigberg - All Rights Reserved
 * https://github.com/drigberg
 */

/*
 * Module dependencies
 */

const fs = require('fs');
const path = require('path');
const db = require('./index');

/*
 * Module
 */

const schema = path.join(__dirname, 'schema.sql');
const initDb = fs.readFileSync(schema).toString();

db.connect()
  .then((client) => {
    return client.query(initDb)
  })
  .then((res) => {
    console.log("RES:", res)
    process.exit(0)
  })
  .catch((err) => {
    console.log("ERR:", err)
    process.exit(1)
  })
