const express = require("express");
const router = express.Router();

const Pool = require("pg").Pool;
const pool = new Pool({
  user: "eu",
  host: "localhost",
  database: "shopdb",
  password: "password",
  port: 5432,
});

router.get("/", (req, res) => {
  const email = req.query.email;
  const pswrd = req.query.pswrd;
  pool.query(
    "SELECT * FROM accounts WHERE email = $1 AND pswrd = $2",
    [email, pswrd],
    (error, results) => {
      if (error) {
        throw error;
      }

      if (results.rows.length > 0) {
        res.status(200).json(results.rows);
      } else {
        res.status(200).json({ status: "no match for account" });
      }
    }
  );
});

module.exports = router;
