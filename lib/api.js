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
  const text = 'INSERT INTO teaching_app.users(first_name, last_name, email) VALUES($1, $2, $3) RETURNING *'
  const values = [req.body.first_name, req.body.last_name, req.body.email]

  db.query(text, values)
  .then((dbRes) => {
    res.json(dbRes.rows[0])
  })
  .catch((err) => {
    const errorPayload = {
      error: err,
      context: 'getting users'
    }

    next(errorPayload)
  })})

// Read user
router.get('/users/:id', (req, res, next) => {
  const text = 'SELECT * FROM teaching_app.users WHERE id = $1'
  const values = [Number(req.params.id)]

  db.query(text, values)
  .then((dbRes) => {
    res.json(dbRes.rows[0])
  })
  .catch((err) => {
    const errorPayload = {
      error: err,
      context: 'getting user'
    }

    next(errorPayload)
  })
})

// Update user
router.post('/users/:id', (req, res, next) => {
  const updateText = 'UPDATE teaching_app.users SET first_name = $1, last_name = $2, email = $3 WHERE id = $4;'

  const getText = 'SELECT * FROM teaching_app.users WHERE id = $1'
  const getValues = [Number(req.params.id)]

  db.query(getText, getValues)
  .then((dbRes) => {
    const user = dbRes.rows[0];
    if (!user) {
      throw new Error('User not found')
    }

    // request should update user even if not all parameters are supplied
    const updateValues = [
      req.body.first_name || user.first_name,
      req.body.last_name || user.last_name,
      req.body.email || user.email,
      Number(req.params.id)
    ]

    return db.query(updateText, updateValues)
  })
  .then((dbRes) => {
    res.send('Updated user')
  })
  .catch((err) => {
    const errorPayload = {
      error: err,
      context: 'updating user'
    }

    next(errorPayload)
  })
})

// Delete user
router.delete('/users/:id', (req, res, next) => {
  const text = 'DELETE FROM teaching_app.users WHERE id = $1'
  const values = [Number(req.params.id)]

  db.query(text, values)
  .then((dbRes) => {
    res.send('Deleted user')
  })
  .catch((err) => {
    const errorPayload = {
      error: err,
      context: 'getting user'
    }

    next(errorPayload)
  })})

/*
 * Bubbles
 */

// Lists all bubbles
router.get('/bubbles', (req, res, next) => {
  let query = 'SELECT color, diameter_mm, id, popped, user_id FROM teaching_app.bubbles'
  let values

  if (req.query.user_id) {
    // we convert the query parameter to a number to prevent SQL injection
    query += ' WHERE user_id = $1'
    values = [Number(req.query.user_id)];
  }

  query += ';'

  db.query(query, values)
  .then((dbRes) => {
    res.json(dbRes.rows)
  })
  .catch((err) => {
    const errorPayload = {
      error: err,
      context: 'getting bubbles'
    }

    next(errorPayload)
  })
})

// Create new bubble
router.post('/bubbles', (req, res, next) => {
  const text = 'INSERT INTO teaching_app.bubbles(color, diameter_mm, user_id) VALUES($1, $2, $3) RETURNING *'
  const values = [req.body.color, req.body.diameter_mm, req.body.user_id]

  db.query(text, values)
  .then((dbRes) => {
    res.json(dbRes.rows[0])
  })
  .catch((err) => {
    const errorPayload = {
      error: err,
      context: 'creating bubbles'
    }

    next(errorPayload)
  })})

// Read bubble
router.get('/bubbles/:id', (req, res, next) => {
  const text = `SELECT * FROM teaching_app.bubbles WHERE id = $1`
  const values = [req.params.id]

  db.query(text, values)
  .then((dbRes) => {
    res.json(dbRes.rows[0])
  })
  .catch((err) => {
    const errorPayload = {
      error: err,
      context: 'getting bubbles'
    }

    next(errorPayload)
  })
})

// Update bubble
router.post('/bubbles/:id', (req, res, next) => {
  res.send("Update bubble")
})

// Delete bubble
router.delete('/bubbles/:id', (req, res, next) => {
  res.send("Delete bubble")
})


/*
 * Module exports
 */

module.exports = router