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
    res.render('users', { users: dbRes.rows })
  })
  .catch((err) => {
    // if the db query fails, we still want to render the page
    res.render('users')
  })
})

router.get('/users/:id', (req, res, next) => {
  res.send("Show user profile")
})



/*
 * Module exports
 */

module.exports = router