// import
const express = require('express')
const mysql = require('mysql')
const app = express()

// mysql
const connection = mysql.createConnection({
    host : "localhost", // kalau pake cloud gunakan ip address, bisa juga pake 127.0.0.1
    user : "root",
    password : "",
    database : "impactbyte"
})
connection.connect((err) => {
    if(err != null) { 
        console.log("connection: error:", err)
    }
    console.log("database connected");
    // if(err) {
    //     console.error("error connecting: " + err.stack)
    //     return
    // }
    // console.log("connected as id " + connection.threadId);
})

// menerima data json
app.use(express.json())

// test route
app.get('/ping', (req, res) => {
    const status = {
        ready: true
    }
    res.send(status)
})

// route users
app.get('/users', (req, res) => {
    const sqlQuery = `
        SELECT * from user_demo;
    `
    const queryCallback = (err, result) => {
        if (err != null) {
            res.status(500).send({
                message: "server error"
            })
        }else{
            res.send({
                message: "OK",
                data: result
            })
        }
    }
    connection.query(sqlQuery, queryCallback)
})

// /users/1, users/2, users/3 .... users/:userID
// userID => {1, 2, 3, ...}
app.get('/users/:userID', (req, res) => {
    const params = req.params
    const queryCallback = (err, result) => {
        if (err != null) {
            res.status(500).send({
                message: "server error"
            })
        }else{
            const user = result[0];
            if (user === undefined || user === null) {
                res.status(404).send({
                    message: "User tidak ditemukan",
                })
            }else{
                res.send({
                    message: "OK",
                    data: user
                })
            }           
        }
    }
    const sqlQuery = `
    SELECT * FROM user_demo WHERE id = ?;
    `
    const values = [params.userID]
    connection.query(sqlQuery, values, queryCallback)
    
})


app.post('/users', (req, res) => {

    const name = req.body.name

    const queryCallback = (err, result) => {
        if (err != null) {
            res.status(500).send({
                message: "server error"
            })
        }else{
            res.send({
                message: "OK",
                data: result
            })      
        }
    }
    const sqlQuery = `
    INSERT INTO user_demo (name) value(?)
    `
    const values = [name]
    connection.query(sqlQuery, values, queryCallback)
})



// server
app.listen(3000, () => {
    console.log('server is listening on port 3000');
})