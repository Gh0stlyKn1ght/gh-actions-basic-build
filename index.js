const express = require("express");
const bodyParser = require("body-parser");

const app = express();
//hacke the planet!!! appsec lab 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/hello", (req, res) => {
    res.status(200).send({hello: "world"})
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
