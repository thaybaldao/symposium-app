// generate token using secret from process.env.JWT_SECRET
var jwt = require('jsonwebtoken');

// generate token and return it
function generateToken(user) {
  //1. Don't use password and other sensitive fields
  //2. Use the information that are useful in other parts
  if (!user) {
    return null;
  }

  var u = {
    user_id: user.user_id,
    name: user.name,
    email: user.email
  };

  return jwt.sign(u, process.env.JWT_SECRET, {
    expiresIn: 60 * 60 * 24 // expires in 24 hours
  });
}

// return basic user details
function getCleanUser(user) {
  if (!user){
    return null;
  }

  return {
    user_id: user.user_id,
    name: user.name,
    email: user.email
  };
}

module.exports = {
  generateToken,
  getCleanUser
}
