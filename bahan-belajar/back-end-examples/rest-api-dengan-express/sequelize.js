const express = require('express');
const sequelize = require('sequelize');

// koneksi ke database
const connection = new sequelize('impactbyte', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

// cek koneksi database berhasil atau enggak
async function checkConnection() {
    try {
        await connection.authenticate();
        console.log("Connection success");
    } catch(error) {
        console.log("error: ", err);
    }
}

checkConnection();

// membuat model tabel books -> model itu representasi tabel
// define(model, skema tabel)
const books = connection.define('books', {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
    },
    author1: sequelize.STRING,
    author2: sequelize.STRING,
    author3: sequelize.STRING,
    title: sequelize.STRING,
    description: sequelize.TEXT,
    category: sequelize.STRING,
    subcategory: sequelize.STRING
}, {
    // option
    createdAt: false,
    updatedAt: false
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

// router mendapatkan semua baris data database tabel books
app.get('/books', (req, res) => {
    // select all kalau tanpa atribut
    books.findAll({
        // raw: true
        // select sesuai atribut
        attributes: [
            "title", "description"
        ]
    }).then(result => {
        res.send({
            massage: "OK",
            data: result
        })
    }).catch(error => res.send(error))

})

// router mendapatkan books berdasarkan terserah
app.get('/books/:category/:subcategory', (req, res) => {
    // kayak query where
    books.findOne({
        where: {
            category: req.params.category,
            subcategory: req.params.subcategory
        }
    }).then(result => {
        res.send({
            message: "OK",
            data: result
        })
    }).catch(error => res.send(error))
})

app.listen(3000, () => {
    console.log("server is listening on port 3000");
})