// import dependencies
const express = require('express');
const cookieParser = require("cookie-parser");
const sessions = require('express-session');

// inisialisasi server
const app = express();
const port = 3000;

// set cookie 1 menit
const cookie = 1000 * 60;

// setup express-session
app.use(sessions({
    secret: "abcdefghijklmnopqrstuvwxyz1234",
    saveUninitialized:true,
    cookie: { maxAge: cookie },
    resave: false
}));

// middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static(__dirname));
app.use(cookieParser());

// dummy-data
const myusername = 'user1'
const mypassword = 'mypassword'
var session;

// route /
app.get('/',(req,res) => {
    session=req.session;
    if(session.userid){
        res.send("Welcome User <a href=\'/logout'>click to logout</a>");
    }else
    res.sendFile('views/index.html',{root:__dirname})
});

// route user
app.post('/user',(req,res) => {
    if(req.body.username == myusername && req.body.password == mypassword){
        session=req.session;
        session.userid=req.body.username;
        console.log(req.session)
        res.send(`Hey there, welcome <a href=\'/logout'>click to logout</a>`);
    }
    else{
        res.send('Invalid username or password');
    }
})

// route logout
app.get('/logout',(req,res) => {
    req.session.destroy();
    res.redirect('/');
});

// server
app.listen(port, () => console.log(`Server Running at port ${port}`));
