// import module
const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

// inisialisasi apps server
const app = express();
const port = 3003;

// middleware
const authenticateJWT = (req, res, next) => {
    // mengambil request client dengan authorizationnya (token)
    const authHeader = req.headers.authorization;

    if (authHeader) {
        // mengambil token saja
        const token = authHeader.split(' ')[1];

        jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }

            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

// pake middleware
dotenv.config(); // memberikan akses ke file .env
app.use(bodyParser.json()); // meberikan izin request ke dalam bentuk json

const users = [
    {
        username: "rosaamalia",
        password: "rosaamalia"
    }, 
    {
        username: "abimanyu",
        password: "abimxnyu"
    }
];

app.get("/", (req, res) => {
    res.send("Helu");
})

app.post("/login", (req, res) => {
    // data yang diambil dari postman (dikirim lewat body)
    // pilih dalam bentuk raw terus pilih tipe data json
    const {username, password} = req.body;

    console.log(username, password);

    // cek username ada atau tidak
    const user = users.find(u => {return (u.username == username) && (u.password == password)});
    if(user) {
        const token = jwt.sign({username: user.username}, process.env.TOKEN_SECRET);
        // res.send(`User ${username}, berhasil masuk`);
        res.json({token})
    } else {
        res.send(`User ${username}, gagal masuk`);
    }

    // res.send("Ini login");
})

// di postman, di authorization pilih token bearer token dan masukkan token yang didapatkan dari login
app.get("/users", authenticateJWT, (req, res) => {
    res.json(users);
})

// server
app.listen(port, () => {
    console.log(`Running in port ${port}`);
})