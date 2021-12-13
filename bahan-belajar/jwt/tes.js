const express = require('express')
const app = express()
const port = 3000

const books = ['book 1', 'book 2', 'book 3']

app.get('books/:id', (req, res, next) => {
    console.log(`request to /books/${req.params.id}`);
    res.send(books[req.params.id])
})
app.get('/books', (req, res, next) => {
    console.log(`request to /books, looking good!`);
    res.send(books)
})
app.get('/books', (req, res, next) => {
    console.log(`request to /books, feeling good!`);
    res.send(books)
})

app.listen(port, () => {
    console.log(`running in port ${port}`);
})


