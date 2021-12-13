
const express = require('express');
const session = require("express-session");

const app = express()

const user = {
    username: "bob",
    password: "123",
    email: "bob@mail.com"
}

// 1. Kalian harus ambil username dan password yang dikirimkan oleh user melalui form.
// 2. Kalian cocokan username dan password yang dikirimkan user dari form 
//    dengan user yang ada di system kalian.
// 3. Kalian daftarkan username si user yang berhasil login kedalam object session.
// 4. gunakan username yang ada di object session untuk memvalidasi apakah user tersebut
//    berhak melihat data user di system kalin.

app.use(express.static('views'))
// untuk parse urlencoded menjadi object javascript. sama kaya body-parser
app.use(express.urlencoded({ extended: true})) 

// harus disertakan kalau pengen menggunakan session.
app.use(session({
    secret: "123123232pu3o1wln,smdlasjfla", // random string. baiknya disimpan ke process.env
    resave: false,
    saveUninitialized: true,
}))

// menangkap data yang dikirim dari form.
app.post("/users", (req, res) => {
    // karena kita ngirim data dari form-data,
    // yang mana bentuknya adalah url-encoded.
    // maka kita perlu menambahkan middleware:
    //  app.use(express.urlencoded({ extended: true}))
    const username = req.body.username;
    const password = req.body.password;

    // validasi apakah username dan password yang diberikan sama dengan
    // yang kita punya
    if (username === user.username && password === user.password) {
        const message = `<h1>Hello, ${username}</h1>`;
        req.session.usernameYangSedangLogin = username;
        res.send(message)
    }else{
        const message = `<h1>Unauthenticated User</h1>`;
        res.send(message)
    }
})

app.get("/profile", (req, res) => {
    // const requestSession = req.session;
    const username = req.session.usernameYangSedangLogin;

    if (username === user.username) {
        const html = `
        <h1>
            Profile, ${user.username}.
        </h1>
        <ul>
            <li> Email: ${user.email}</li>
        </ul>

        <a href="/logout">click to logout</a>
    `;

        res.send(html)
    }else{
        const message = `<h1>Forbidden User</h1>`;
        res.send(message)
    }
})

app.get("/logout", (req, res) => {
    req.session.destroy();
    res.send("SUCCESS!");
})

app.listen(3000, () => {
    console.log("App is running on port 3000");
})

