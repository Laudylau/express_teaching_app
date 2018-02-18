/*
 * Express teaching app
 */

/*
 * Module dependencies
 */

const express = require('express')

/*
 * Module
 */

const router = express.Router()

/*
 * Users
 */

router.get('/users', (req, res, next) => {
  res.send("Get users")
})

router.post('/users', (req, res, next) => {
  res.send("Post users")
})

router.get('/users/:id', (req, res, next) => {
  res.send("Get user by id")

})

router.post('/users/:id', (req, res, next) => {
  res.send("Update user")
})

router.delete('/users/:id', (req, res, next) => {
  res.send("Delete user")
})


/*
 * Module exports
 */

module.exports = router