// import
const express = require('express')

// step 1 import sequelize
const Sequelize = require('sequelize')

// step 2 membuat variabel didalamnya terdapat fungsi konfigurasi sequelize
const sequelize = new Sequelize('book_store', 'root', '', {
    host : "localhost",
    dialect : "mysql"
})

// step 3 cek koneksi sequelize
async function checkConnection() {
    try {
        await sequelize.authenticate()
        console.log("connection success");
    } catch (error) {
        console.log("connection failed", error);
    }
}
// step 4 panggil fungsi cek sequelize
checkConnection()

// step 5 membuat model koneksi tabel
const Bookstore = sequelize.define('books',{
    id : {
        type : Sequelize.INTEGER,
        primaryKey : true
    },
    author1 : Sequelize.STRING,
    author2 : Sequelize.STRING,
    author3 : Sequelize.STRING,
    title : Sequelize.STRING,
    description : Sequelize.TEXT,
    stock : Sequelize.INTEGER,
    creation_date : Sequelize.DATE,
    price : Sequelize.INTEGER,
    status : Sequelize.ENUM('available', 'out of stock', 'limited')
}, {
    createdAt : false,
    updatedAt : false
})

// inisialiasi server
const app = express()
const port = 3003

app.get('/', (req, res) => {
    res.send("backend version 0.0")
})

// step 6 route untuk mendapatkan hasil dari db untuk dijadikan sebuah respon
app.get('/books', (req, res) => {
    // untuk ambil semua data dari tabel
    Bookstore.findAll({
        raw : true,
        // kalau mau ambil data tertentu, contoh select author1, author2, author3 from books bisa tambahkan attributes
        attributes : ["author1", "author2", "author3"] 
    }).then(result => {
        res.json({
            message : "ok",
            data : result
        })
    }).catch(error => res.send(error))
})

// penggunaan findOne()
app.get('/books/:id', (req, res) => {
    // res.send(req.params)
    Bookstore.findOne({
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.json({
            message : "ok",
            data : result
        })
    }).catch(error => res.send(error))
})

// create server
app.listen(port, () => {
    console.log((`running in port ${port}`));
})