require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const utils = require('./utils');
const pool = require("./db");

const app = express();
const port = process.env.PORT || 4000;

// static user details
const userData = {
  userId: "789789",
  password: "123456",
  name: "Clue Mediator",
  username: "cluemediator"
};

// enable CORS
app.use(cors());
// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

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
app.post('/login', async (req, res) => {
  const email = req.body.email;
  const pwd = req.body.password;

  // return 400 status if username/password is not exist
  if (!email || !pwd) {
    return res.status(400).json({
      error: true,
      message: "Username or Password required."
    });
  }

  try {
    const curr = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    // not found in db
    if (curr.rows[0] === undefined) {
      return res.status(401).json({
        error: true,
        message: "Email is not registered."
      });
    }

    //return 401 status if the credential is not match.
    if (email !== curr.rows[0].email || pwd !== curr.rows[0].password) {
      return res.status(401).json({
        error: true,
        message: "Email or Password is Wrong."
      });
    }

    // generate token
    const token = utils.generateToken(curr.rows[0]);
    // get basic user details
    const userObj = utils.getCleanUser(curr.rows[0]);

    // return the token along with user details
    return res.json({ user: userObj, token });

  } catch (err) {
    console.error(err.message);
  }

  // return 401 status if the credential is not match.
  // if (user !== userData.username || pwd !== userData.password) {
  //   return res.status(401).json({
  //     error: true,
  //     message: "Username or Password is Wrong."
  //   });
  // }
  //
  // // generate token
  // const token = utils.generateToken(userData);
  // // get basic user details
  // const userObj = utils.getCleanUser(userData);
  //
  // // return the token along with user details
  // return res.json({ user: userObj, token });
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
    if (user.userId !== userData.userId) {
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

// get users from db
app.get("/all", async (req, res) => {
  try {
    const allUsers = await pool.query("SELECT * FROM users");
    res.json(allUsers.rows);

  } catch (err) {
    console.error(err.message);
  }
})

// add new user
app.post("/new", async (req, res) => {
  try {

    const body = req.body;

    const newUser = await pool.query(
      "INSERT INTO users (name, email, password, rg, cpf, tel, birth_date, education, work, organization)\
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);",[body.name, body.email,
       body.password, body.rg, body.cpf, body.tel, body.birth, body.nivel, body.job, body.place]);

    res.json(newUser.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(port, () => {
  console.log('Server started on: ' + port);
});
