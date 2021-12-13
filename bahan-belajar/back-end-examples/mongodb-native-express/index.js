const mongoClient = require('mongodb').MongoClient;

// connect ke database
const uri = "mongodb://localhost:27017/db_demo";
mongoClient.connect(uri)
    .then(db => {
        console.log("Success");

        // menambahkan data
        const database = db.db('db_demo'); // nama database

        // // insert satu data
        // const data = {
        //     name: "Jinho",
        //     email: "jinho@mail.com",
        //     departmen: "Civil Engineering"
        // }

        // database.collection('users')
        //     .insertOne(data)
        //     .then(success => {
        //         console.log("Insert data successfully");
        //         db.close();
        //     })
        //     .catch(err => {
        //         console.log("Error: ", err);
        //     })

        // // insert banyak data
        // const data = [
        //     {
        //         name: "Shinwon",
        //         email: "shinwon@mail.com"
        //     },
        //     {
        //         name: "Hongseok",
        //         email: "hongseok@mailcom"
        //     }
        // ]

        // database.collection('users')
        //     .insertMany(data)
        //     .then(success => {
        //         console.log("Insert data successfully");
        //         db.close();
        //     })
        //     .catch(err => {
        //         console.log("Error: ", err);
        //     })

        // find all
        database.collection('users').find({}).toArray()
            .then(data => {
                console.log(data);
            })
        
    })
    .catch(err => {
        console.log("Error: ", err);
    })

