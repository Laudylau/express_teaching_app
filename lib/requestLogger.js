/*
 * Copyright 2018 drigberg - All Rights Reserved
 * https://github.com/drigberg
 */

/*
 * Module dependencies
 */

// lodash has lots of simple, fast, awesome functions
const lodash = require('lodash');

/*
 * Module
 */

// ignore asset requests by default, because that's just too much logging
const urlsToIgnore = ['/favicon.ico']
/**
 * For logging all requests
 *
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @param {Function} next - Express next() to go to next middleware
 */
function requestLogger(req, res, next) {
  let logData

  try {
    logData = lodash.cloneDeep({
      body: req.body,
      headers: req.headers,
      method: req.method,
      params: req.params,
      path: req.path,
      query: req.query,
      url: req.originalUrl
    });
  } catch (err) {
    console.log("Whoops, logger broke", err)
  }


  // now we log all the info we care about
  if (!urlsToIgnore.includes(logData.url)) {
    console.log(new Date(), logData)
  }

  // this function is middleware -- we have to call `next()` if
  // we want express to keep going through the chain
  next()
}

/*
 * Module exports
 */

module.exports = requestLogger;

