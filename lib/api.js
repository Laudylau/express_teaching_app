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

// Lists all users
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

// Create new user
router.post('/users', (req, res, next) => {
  res.send("Post users")
})

// Read user
router.get('/users/:id', (req, res, next) => {
  res.send("Get user by id")

})

// Update user
router.post('/users/:id', (req, res, next) => {
  res.send("Update user")
})

// Delete user
router.delete('/users/:id', (req, res, next) => {
  res.send("Delete user")
})


/*
 * Module exports
 */

module.exports = router