const express = require('express');
const app = express();
const port = 3000;
const cors = require("cors");

app.use(cors());

const accountRouter = require("./routes/accounts");
const productsRouter = require("./routes/products");
app.use("/accounts", accountRouter);
app.use("/products", productsRouter);

app.listen(port, (error) => {
    if (error) {
        console.log("Something went wrong: " + error);
    } else {
        console.log("Server running at http://localhost:" + port);
    }
})