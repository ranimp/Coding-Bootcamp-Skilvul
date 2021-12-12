// import module
const express = require('express')
const cors = require('cors')
const jwt = require("jsonwebtoken")
const bodyParser = require("body-parser")

// inisialisasi server
const port = 3000
const app = express()

// middleware
app.use(cors())
app.use(express.urlencoded({extended : false}))
app.use(bodyParser.json())

// database
const users = [
    {
        username: 'terra',
        password: 'password123admin',
        role: 'admin'
    }, {
        username: 'dave',
        password: 'password123member',
        role: 'member'
    }
  ];

// token secret
const accessTokenSecret = 'youraccesstokensecret';

// route awal
app.get('/', (req, res) => {
    res.send("Halo ini authorization")
})

// route login
app.post('/login', (req, res) => {
    const {username, password} = req.body
    // untuk mencocokkan user yang diinput dengan user yang terdaftar di db
    const user = users.find(u => u.username === username && u.password === password)
    if(user){
        // generate access token
        const token = jwt.sign({username: user.username, role: user.role}, accessTokenSecret)
        res.json({token})
    } else {
        res.send("Username or password incorrect")
    }
})

// server
app.listen(port, () => console.log(`Server Running at port ${port}`));