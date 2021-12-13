const express = require("express");
const mongoose = require("mongoose");
const db = require('./database/db');

// import model
const Users = require("./model/users");

const app = express();
app.use(express.json());

app.get("/ping", (req, res) => {
    res.send({
        message: "OK"
    })
})

// get semua data user
app.get("/users", (req, res) => {
    Users.find()
    .then(data => {
        res.send({
            message: "OK",
            data: data
        })
    })
    .catch(err => {
        console.log("Error: ", err);
    })
})

app.post("/users", (req, res) => {
    const body = req.body;
    const newData = new Users({
        name: body.name,
        email: body.email,
        departmen: body.departmen
    });

    newData.save()
        .then(success => {
            console.log("Insert data successfully");
            res.send({
                message: "OK",
                succes: success
            })
        })
        .catch(err => {
            console.log("Error: ", err);
            res.send({
                message: "error",
                error: err
            })
        })

})

async function main(){
    await db.connect();
    
    // query insert
    // const newData = new Users({ name: "Nayla", email: "nayla@mail.com", departmen: "Biomedic Engineering" });
    // newData.save()
    //     .then(success => {
    //         console.log("Insert data successfully");
    //     })
    //     .catch(err => {
    //         console.log("Error: ", err);
    //     })

    app.listen(3000, () => {
        console.log("server is listening on port 3000");
    })
}

main();
