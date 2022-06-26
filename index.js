const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(
    "mongodb://gautam:mypassword@mongo:27017/?authSource=admin"
    ).then(() => console.log("successfully connected to DB"))
    .catch((e) => console.log(e));

app.get("/", (req, res) => {
    res.send("<h2>Hi There!, I am Gautam</h2>");
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`));