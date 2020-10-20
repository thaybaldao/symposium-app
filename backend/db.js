const Pool = require("pg").Pool;

// insere your credentials here
const pool = new Pool({
  user: "postgres",
  password: "231234",
  host: "localhost",
  port: 5432,
  database: "symposium"
});

module.exports = pool;
