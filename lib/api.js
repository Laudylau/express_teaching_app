/*
 * Express teaching app
 */

/*
 * Module dependencies
 */

const express = require('express')
const db = require('./db')

/*
 * Module
 */

const router = express.Router()

/*
 * Users
 */

router.get('/users', (req, res, next) => {
  const query = 'SELECT first_name, last_name, email, id, is_disabled FROM teaching_app.users;'

  db.query(query)
  .then((dbRes) => {
    res.json(dbRes.rows)
  })
  .catch((err) => {
    const errorPayload = {
      error: err,
      context: 'getting users'
    }

    next(errorPayload)
  })
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