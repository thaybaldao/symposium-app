require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const utils = require('./utils');
const pool = require("./db");
const helmet = require("helmet");
const passport = require('passport');
const session = require('express-session');
const bcrypt = require('bcryptjs');

const app = express();
const port = process.env.PORT || 4000;

// enable CORS
app.use(cors());
// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// adding xss protection
app.use(helmet.xssFilter());

// adding login authentication
require('./auth')(passport);
app.use(session({
  secret: '123',
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize());
app.use(passport.session());

//middleware that checks if JWT token exists and verifies it if it does exist.
//In all future routes, this helps to know if the request is authenticated or not.
app.use(function (req, res, next) {
  // check header or url parameters or post parameters for token
  var token = req.headers['authorization'];
  if (!token) return next(); //if no token, continue

  token = token.replace('Bearer ', '');
  jwt.verify(token, process.env.JWT_SECRET, function (err, user) {
    if (err) {
      return res.status(401).json({
        error: true,
        message: "Invalid user."
      });
    } else {
      req.user = user; //set the user to req so other routes can use it
      next();
    }
  });
});

// validate the user credentials
app.post('/login', async (req, res, next) => {
  const email = req.body.email;
  const pwd = req.body.password;

  // return 400 status if username/password is not exist
  if (!email || !pwd) {
    return res.status(400).json({
      error: true,
      message: "Email ou senha são obrigatórios."
    });
  }

  try {
    const curr = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    // not found in db
    if (curr.rows[0] === undefined) {
      return res.status(401).json({
        error: true,
        message: "Email não está registrado."
      });
    }

    //return 401 status if the credential is not match.
    if (email !== curr.rows[0].email || !bcrypt.compareSync(pwd, curr.rows[0].password)) {
      return res.status(401).json({
        error: true,
        message: "Email ou senha estão incorretos."
      });
    }

    // get basic user details
    const userObj = utils.getCleanUser(curr.rows[0]);

    const subscribedAsLitener = await pool.query("SELECT * FROM listener_subscriptions WHERE user_id = $1", [userObj.user_id]);
    const subscribedAsPresenter = await pool.query("SELECT * FROM presenter_subscriptions WHERE user_id = $1", [userObj.user_id]);
    const subscribed = (subscribedAsLitener.rows[0] !== undefined) || (subscribedAsPresenter.rows[0] !== undefined);

    //passport.authenticate('local')
    passport.authenticate('local', function(err, user, info) {
      if (err) { 
        return next(err);
      }
      if (!user) { 
        return res.status(401).json({
        error: true,
        message: "Email não está registrado."
      }); }
      req.logIn(user, function(err) {
        if (err) { 
          return next(err); }
        console.log("Usuário autenticado");
        return res.json({ user: userObj, subscribed: subscribed });
      });
    })(req, res, next);

  } catch (err) {
    console.error(err.message);
  }
});

// verify the token and return it if it's valid
app.get('/verifyToken', function (req, res) {
  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token;
  if (!token) {
    return res.status(400).json({
      error: true,
      message: "Token is required."
    });
  }
  // check token that was passed by decoding token using secret
  jwt.verify(token, process.env.JWT_SECRET, function (err, user) {
    if (err) return res.status(401).json({
      error: true,
      message: "Invalid token."
    });

    // return 401 status if the userId does not match.
    if (user.user_id !== userData.user_id) {
      return res.status(401).json({
        error: true,
        message: "Invalid user."
      });
    }
    // get basic user details
    var userObj = utils.getCleanUser(userData);
    return res.json({ user: userObj, token });
  });
});

// register new user
app.post("/register", async (req, res) => {
  try {
    const body = req.body;

    const curr = await pool.query("SELECT * FROM users WHERE email = $1", [body.email]);
    // found in db
    if (curr.rows[0]) {
      return res.status(401).json({
        error: true,
        message: "Este email já está registrado."
      });
    }

    const newUser = await pool.query(
      "INSERT INTO users (email, password)\
       VALUES ($1, $2);",[body.email, bcrypt.hashSync(body.password)]);

    res.json(newUser.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// register new contact message
app.post("/contact", async (req, res) => {
  try {
    const body = req.body;

    const newContact = await pool.query(
      "INSERT INTO contact_messages (name, email, message)\
       VALUES ($1, $2, $3);",[body.name, body.email, body.message]);

    res.json(newContact.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// subscribe listener
app.post("/subscribe/listener", async (req, res) => {
  try {
    const body = req.body;

    const curr = await pool.query("SELECT * FROM users WHERE cpf = $1", [body.cpf]);
    // found in db
    if (curr.rows[0]) {
      return res.status(401).json({
        error: true,
        message: "Este CPF já está registrado."
      });
    }

    const newListenerSubscription = await pool.query(
      "INSERT INTO listener_subscriptions (user_id)\
       VALUES ($1);",[body.user_id]);

    //res.json(newListenerSubscription.rows[0]);

    

    const newUserSubscription = await pool.query(
      "UPDATE users SET name = ($1), rg = ($2), cpf = ($3), tel = ($4), birth_date = ($5),\
       education = ($6), work = ($7), organization = ($8)\
       WHERE user_id = ($9);",[body.name, body.rg, body.cpf, body.tel, body.birth,
      body.nivel, body.job, body.place, body.user_id]);

    res.json(newUserSubscription.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// subscribe presenter
app.post("/subscribe/presenter", async (req, res) => {
  try {
    const body = req.body;


    const curr = await pool.query("SELECT * FROM users WHERE cpf = $1", [body.cpf]);
    // found in db
    if (curr.rows[0]) {
      return res.status(401).json({
        error: true,
        message: "Este CPF já está registrado."
      });
    }

    const newPresenterSubscription = await pool.query(
      "INSERT INTO presenter_subscriptions (title, authors, abstract, user_id)\
       VALUES ($1, $2, $3, $4);",[body.title, body.authors, body.abstract, body.user_id]);

    //res.json(newPresenterSubscription.rows[0]);

    const newUserSubscription = await pool.query(
      "UPDATE users SET name = ($1), rg = ($2), cpf = ($3), tel = ($4), birth_date = ($5),\
       education = ($6), work = ($7), organization = ($8)\
       WHERE user_id = ($9);",[body.name, body.rg, body.cpf, body.tel, body.birth,
      body.nivel, body.job, body.place, body.user_id]);

    res.json(newUserSubscription.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// logout route
app.get('/logout', function(req, res){
  req.logout();
  return res.status(200).json({
    error: false,
    message: "Logout realizado."
  });
});

app.listen(port, () => {
  console.log('Server started on: ' + port);
});
