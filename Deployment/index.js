require("dotenv").config();
const express = require("express");
const app = express();

const port = process.env.PORT;
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.get("/twitter", (req, res) => {
    res.send("Welcome to the Twitter API!");
});

app.get("/login", (req, res) => {
    res.send("<h1>Please log in to access Twitter API!</h1>");
});

app.get("/logout", (req, res) => {
    res.send("<h1>You have been logged out of Twitter API!</h1>");
});

app.get("/profile", (req, res) => {
    res.send("<h1>Welcome to your Twitter profile!</h1>");
});

app.get("/youtube", (req, res) => {
    res.send("<h1>Chai Aur Code</h1>");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
