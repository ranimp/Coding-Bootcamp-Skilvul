// import module
const express = require("express")
const jwt = require("jsonwebtoken")
const bodyParser = require("body-parser")
const dotenv = require("dotenv")
const bcrypt = require("bcrypt")

// inisialisasi server
const app = express()
const port = 3001

// middleware
dotenv.config()
app.use(bodyParser.json())

const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization
    if (authHeader) {
        const token = authHeader.split(' ')[1]

        jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
            if(err) {
                return res.sendStatus(403)
            }
            req.user = user
            next()
        })
    } else {
        res.sendStatus(401)
    }
}

// database
const users = [
    {
        username : "ranimp",
        password : "rani123"
    },
    {
        username : "rmp",
        password : "rmp123"
    }
]

const saltRounds = 10

bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(users[0].password, salt, function(err, hash) {
        console.log(hash)
    })
})

// route awal
app.get('/', (req, res) => {
    res.send("backend version 0.0")
})

// route login
app.post('/login', (req, res) => {
    // const {username, password} = req.body
    const username = req.body.username
    const password = req.body.password
    
    console.log(username, password);

    // untuk mencocokkan user yang diinput dengan user yang terdaftar di db
    const user = users.find(u => u.username === username && u.password === password)
    if(user){
        const token = jwt.sign({username: user.username}, process.env.TOKEN_SECRET)
        res.json({
            token
        })
        // res.send(`hai, ${username}`)
    } else {
        res.send("user gagal login")
    }
})

app.get('/users',  authenticateJWT, (req, res) => {
    res.json(users)
})

// create server
app.listen(port, () => {
    console.log(`running in port ${port}`);
})