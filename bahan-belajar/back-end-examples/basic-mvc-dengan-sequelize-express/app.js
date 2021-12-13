const express = require('express');
// import model dari index.js, sesuai nama kelasnya
const { User } = require('./models/index');

const app = express();
// middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// // insert data tabel user secara manual, belum dari client
// async function createUser() {
//     try {
//         const created = await User.create({
//             // atribut yang mau di insert
//             firstName: "Rani",
//             lastName: "Meliyana",
//             password: "rani123",
//             email: "rani@gmail.com"
//         })

//         return created;
//     } catch(err) {
//         throw err;
//     }
// }

// createUser()
//     .then(created => console.log(created))
//     .catch(err => console.log(err))


// router mendapatkan data dari client
app.post("/users", async (req, res) => {
    const body = req.body;
    const userCandidate = {
        firstName: body['first_name'],
        lastName: body['last_name'],
        email: body['email'],
        password: body['password']
    }

    try {
        // mengecek apakah email sudah digunakan
        const existingUser = await User.findOne({
            where: {email: userCandidate.email}
        });

        if(existingUser != null) {
            res.status(400).send({
                message: "Email already taken"
            })

            return;
        }

        // insert atribut dari client
        await User.create(userCandidate);
        // responnya yang di insert tadi
        res.status(201).send({
            message: "Data is inserted succesfully"
        })
    } catch(err) {
        res.status(500).send({
            message: err
        })
    }
})

app.listen(3000, () => {
    console.log("server is listening on port 3000");
})
    