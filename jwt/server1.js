const express = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const app = express();
app.use(express.json()); 

const posts = [
  { name: "CBIT", message: "Welcome to cbit" },
  { name: "MGIT", message: "Welcome to mgit" },
];

const authenticate = (req, res, next) => {
  const authhead = req.headers["authorization"];
  const token = authhead && authhead.split(" ")[1];
  if (!token) return res.sendStatus(401);
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => { 
    if (err) {
      return res.sendStatus(403);
    }
    req.user = user;
    next();
  });
};

app.post("/login", (req, res) => {
  const username = req.body.username;
  const user = { name: username };
  const access = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET); 
  res.json({ accesToken: access });
});

app.use(authenticate);

app.get("/posts", (req, res) => {
  console.log(req.user.name);
  res.json(posts.filter((post) => post.name === req.user.name));
});

app.listen(3000, () => {
  console.log("server running");
});