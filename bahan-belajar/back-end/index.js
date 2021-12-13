const express = require("express");

const app = express();
const port = 3000;

const usersDB = [
  {
    id: 1,
    name: "Bob"
  },
  {
    id: 2,
    name: "Alice"
  }
];

app.get("/", (req, res) => {
  const data = {
    message: "Hello, World"
  };

  res.send(data);
});

app.get("/users", (req, res) => {
  res.status(200);
  res.send(usersDB);
});

app.post("/users", (req, res) => {
  const newUser = {
    id: usersDB.length + 1,
    name: "New User"
  };

  usersDB.push(newUser);

  res.status(201);
  res.send(newUser);
});

app.listen(port, () => {
  console.log("server is listening on port ", port);
});
