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
  pool.query("SELECT * FROM products", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
});

module.exports = router;
