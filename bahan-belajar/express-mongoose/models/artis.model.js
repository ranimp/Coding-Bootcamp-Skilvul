const mongoose = require('mongoose')

const opt = {
    timestamps : true
}

const artisSchema = new mongoose.Schema(
    {
    name : {
        type : String,
    }}, opt
)

const ArtisModel = mongoose.model('Artis', artisSchema)

module.exports = ArtisModel