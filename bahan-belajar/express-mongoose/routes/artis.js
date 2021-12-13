const express = require('express')
const ArtisController = require('../controllers/artis.controller')
const router = express.Router()

// get all artis
router.get('/', ArtisController.getAllArtis)

// create new artis
router.post('/', ArtisController.createNewArtis)

// get artis by id
router.get('/:id', ArtisController.getArtisById)

// update artis by id
router.patch('/:id', ArtisController.updateArtis)

// delete artis by id
router.delete('/:id', ArtisController.deleteArtis)

module.exports = router