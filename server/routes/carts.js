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
  const ownerId = req.query.id;
  pool.query(
    "SELECT * FROM carts WHERE owner = $1",
    [ownerId],
    (error, results) => {
      if (error) {
        throw error;
      }

      if (results.rows.length > 0) {
        res.status(200).json(results.rows);
      } else {
        res.status(200).json({ status: "no match for id" });
      }
    }
  );
});

module.exports = router;
