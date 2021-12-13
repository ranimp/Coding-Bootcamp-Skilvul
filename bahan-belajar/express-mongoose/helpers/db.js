const mongoose = require('mongoose')

function openDBConnection(uri, options) {
    return mongoose.connect(uri, options)
}

module.exports = openDBConnection