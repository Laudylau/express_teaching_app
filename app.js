/*
 * Express teaching app
 */

/*
 * Module dependencies
 */

// http and path don't need to be installed: they're native to Node.js
const http = require('http')
const path = require('path')

// request bodies are passed as Buffers, which have to be converted
// to a human-readable type. The body-parser module does this for us.
const bodyParser = require('body-parser')
const express = require('express')
const pug = require('pug')
// const passport = require('passport');

const api = require('./lib/api')
const requestLogger = require('./lib/requestLogger')

/*
 * Module
 */

const port = 9001 // because it's over 9000
const app = express();
const server = http.createServer(app);

app.engine('html', pug.__express);

// pug is now declared as our renderer for html/pug files
app.set('view engine', 'pug');

// all files in the ./views directory are now mounted
// for the app routes to find. Ex: ./views/landing.pug
// can be served with res.render('landing')
app.set('views', path.join(__dirname, 'views'));

// all files in the ./assets directory will be served at 
// http://localhost:9001/assets, where they can be referenced
// from our pug files
// app.static('assets')


// this line converts bodies encoded with the 
//format application/xxx-form-encoded
app.use(bodyParser.urlencoded({ extended: true }));

// this line converts bodies originally encoded as json objects
app.use(bodyParser.json({}));


// app.use(passport.passport.initialize());
// app.use(passport.passport.session());

// setup passport auth
// passport.setup();

app.use(requestLogger);

// landing page is at http://localhost:9001/
app.get('/', (req, res, next) => {
  res.render('landing')
})

// all routes declared in api.js are prefixed with '/api':
// http://localhost:9001/api
app.use('/api', api);

//
// Any url not matched by other routes is caught here
//
app.get('*', (req, res, next) => {
  res.send("Error 404: not found")
})

server.listen(port, (err) => {
  if (err) {
    console.log("Error starting server:", err)
  }

  console.log(`Server listening on port ${port}`)
})