const express = require('express');

const app = express();

app.use(express.static('views'));

app.post("/users", (req, res) => {
    // const username = req.body.username;
    // const password = req.body.password;

    const message = '<h1>Hello, Bob</h1>'
})

app.listen(3000, () => {
    console.log("App is running on port 3000");
})