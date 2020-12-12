const bcrypt = require('bcryptjs');
const pool = require("./db");
const LocalStrategy = require('passport-local').Strategy;

module.exports = function(passport){
   // Passport configuration
   async function findUser(email){
      const curr = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
      return curr.rows[0]
   }

   async function findUserById(id){
      const curr = await pool.query("SELECT * FROM users WHERE user_id = $1", [id]);
      return curr.rows[0]
   }

   passport.serializeUser((user, done) => {
      done(null, user.user_id);
   });

   passport.deserializeUser(async (id, done) => {
      try {
            const user = await findUserById(id);
            done(null, user);
      } catch (err) {
            done(err, null);
      }
   });

   // Local authentication strategy
   passport.use(new LocalStrategy({
       usernameField: 'email',
       passwordField: 'password'
   },
       async (email, password, done) => {
           try {
               const user = await findUser(email);

               // When user not found
               if (!user) { return done(null, false); }

               // Comparing passwords
               const isValid = bcrypt.compareSync(password, user.password);
               if (!isValid) return done(null, false);

               return done(null, user);
           } catch (err) {
               done(err, false);
           }
       }
   ));
}
