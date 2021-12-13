// sql naif dan gaboleh!! primitif
const express = require('express');
const mysql = require('mysql');

// koneksi dengan database (contoh ini pake phpmyadmin)
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "impactbyte"
})

connection.connect((err) => {
    if( err != null ){
        console.log("connection to database failed, error: ", err);
    }
})

const app = express();
// agar bisa post body json
app.use(express.json());

// router cek status server
app.get('/ping', (req, res) => {
    const status = {
        ready: true,
    }
    res.send(status);
})

// router get all users dari database tabel user_demo
app.get('/users', (req, res) => {
    const query = `SELECT * FROM user_demo`;

    // fungsi callback untuk menjalankan query
    const queryCallback = (err, result) => {
        if(err != null) {
            res.status(500).send({
                message: "error",
                error: err
            })
        } else {
            res.send({
                message: "OK",
                data: result
            })
        }
    }

    connection.query(query, queryCallback);
})

// router get user berdasarkan id dari database tabel user_demo
app.get('/users/:userId', (req, res) => {
    // mendapatkan url parameter :userId
    const params = req.params;
    const id = params.userId;

    // fungsi callback untuk menjalankan query
    const queryCallback = (err, result) => {
        if(err != null) {
            res.status(500).send({
                message: "error",
                error: err
            })
        } else {
            // memastikan hanya mengambil data pertama biar gak ada kurung sikunya
            const user = result[0]
            
            if(user === undefined || user === null) {
                res.status(404).send({
                    message: "user tidak ditemukan"
                })
            } else {
                res.send({
                    message: "OK",
                    data: user
                })
            }
        }
    }

    // menghindari sql injection, parameternya di passing lewat database driver
    const query = `SELECT * FROM user_demo WHERE id = ?`; // pake placeholder tanda tanya, placeholder sesuai dgn database yg digunakan

    const values = [id]; // array-nya diurutin sesuai sintaks where-nya
    connection.query(query, values, queryCallback);
})

// tambah data user ke database tabel user_demo
app.post('/users', (req, res) => {
    const query = `INSERT INTO user_demo(name) VALUE (?)`;

    // mendapatkan parameter dari body
    // disesuaikan dengan key json
    const name = req.body.name;

    // fungsi callback untuk menjalankan query
    const queryCallback = (err, result) => {
        if(err != null) {
            res.status(500).send({
                message: "error",
                error: err
            })
        } else {
            res.send({
                message: "OK",
                data: result
            })
        }
    }

    const values = [name]; // array-nya diurutin sesuai sintaks where-nya
    connection.query(query, values, queryCallback);
})

app.listen(3000, () => {
    console.log("server is listening on port 3000");
})