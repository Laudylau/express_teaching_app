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
    console.log("Error:", err)

    // if the db query fails, we still want to render the page
    res.render('users')
  })
})

router.get('/users/:id', (req, res, next) => {
  const userText = `SELECT * FROM teaching_app.users WHERE id = $1`
  const bubbleText = `SELECT * FROM teaching_app.bubbles WHERE user_id = $1`
  const values = [req.params.id]

  db.query(userText, values)
  .then((userRes) => {
    return db.query(bubbleText, values)
    .then((bubbleRes) => {
      res.render('user', { user: userRes.rows[0], bubbles: bubbleRes.rows })
    })
  })
  .catch((err) => {
    console.log("Error:", err)
    // if the db query fails, we still want to render the page
    res.render('user')
  })})



/*
 * Module exports
 */

module.exports = router