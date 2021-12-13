const mongoose = require("mongoose");

// skema collection users
const usersSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    departmen: {
        type: String
    }
})

// export model Users
const usersModel = mongoose.model('Users', usersSchema);
module.exports = usersModel;