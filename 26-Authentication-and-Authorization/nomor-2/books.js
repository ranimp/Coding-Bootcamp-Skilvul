// import module
const express = require('express')
const cors = require('cors')
const jwt = require("jsonwebtoken")
const bodyParser = require("body-parser")

// inisialisasi server
const port = 4000
const app = express()

// middleware
app.use(cors())
app.use(express.urlencoded({extended : false}))
app.use(bodyParser.json())
const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, accessTokenSecret, (err, user) => {
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

// database
const books = [
    {
      "author": "Robert Martin",
      "country": "USA",
      "language": "English",
      "pages": 209,
      "title": "Clean Code",
      "year": 2008
    },
    {
      "author": "Dave Thomas & Andy Hunt",
      "country": "USA",
      "language": "English",
      "pages": 784,
      "title": "The Pragmatic Programmer",
      "year": 1999
    },
    {
      "author": "Kathy Sierra, Bert Bates",
      "country": "USA",
      "language": "English",
      "pages": 928,
      "title": "Head First Java",
      "year": 2003
    },
];

// token secret
const accessTokenSecret = 'youraccesstokensecret';

// route awal
app.get('/', (req, res) => {
    res.send("Halo ini books")
})


// route get books
app.get('/books', authenticateJWT, (req, res) => {
    res.json(books);
});

// route post books
app.post('/books', authenticateJWT, (req, res) => {
    const { role } = req.user;
    if (role !== 'admin') {
        return res.sendStatus(403);
    }
    const book = req.body;
    books.push(book);
    res.send('Book added successfully');
});

// server
app.listen(port, () => console.log(`Server Running at port ${port}`));