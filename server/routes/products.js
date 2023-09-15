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

router.get("/specific", (req, res) => {
  const name = req.query.name;
  pool.query("SELECT * FROM products WHERE product_name = $1", [name], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
});

router.get("/specificId", (req, res) => {
  const id = req.query.id;
  pool.query("SELECT * FROM products WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
});

module.exports = router;
