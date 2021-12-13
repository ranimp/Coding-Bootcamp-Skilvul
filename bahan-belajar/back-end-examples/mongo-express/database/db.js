const mongoose = require("mongoose");

function connect(){
    // connect ke database mongodb
    const uri = "mongodb://localhost:27017/db_demo"; // connection string
    return mongoose.connect(uri);
}

module.exports = { connect: connect };