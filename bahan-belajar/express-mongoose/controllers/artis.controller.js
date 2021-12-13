const ArtisModel = require("../models/artis.model")

class ArtisController {
    static async createNewArtis(req, res) {
        // get nama dari req.body
        // create new artis object
        // save ke db
        try {
            const body = req.body;
            const name = body.name;
            const artis = new ArtisModel({name : name})
            const saved = await artis.save()
            res.status(201).send(saved)
        } catch (error) {
            res.status(500).send({err : error})
        }
    }
    static async getAllArtis(req, res) {
        try {
            const artisList = await ArtisModel.find()
            res.status(200).send(artisList)
        } catch (error) {
            res.status(500).send({err : error})
        }
    }
    static async getArtisById(req, res) {
        try {
            const id = req.params.id
            const artisList = await ArtisModel.findOne({_id: id})
            res.status(200).send(artisList)
        } catch (error) {
            res.status(500).send({err : error})
        }
    }
    static async updateArtis(req, res) {
        res.send({msg : "ini controller update artis"})
    }
    static async deleteArtis(req, res) {
        res.send({msg : "ini controller delete artis"})
    }
}

module.exports = ArtisController