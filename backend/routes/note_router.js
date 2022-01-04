const { Router } = require('express')
const note_model = require('../models/notes_model')
const noteRoutes = Router()
const verify = require('../verifyToken')

// Using middleware to verify jwt token
noteRoutes.use(verify)

noteRoutes.get('/', async (req, res) => {
    try {
        const data = await note_model.find()
        res.send(data)
    } catch (error) {
        res.send({
            error: true,
            errorObj: error
        })
    }
})

noteRoutes.post('/', async (req, res) => {
    console.log(req.user._id);
    try {
        const data = {
            user: req.user._id,
            title: req.body.title,
            content: req.body.content,
            category: req.body.category
        }

        const inserted = await note_model.create(data)
        res.json(inserted)
    } catch (error) {
        res.send({
            error: true,
            errorObj: error
        })
    }
})


noteRoutes.get('/:id', async (req, res) => {
    try {
        const data = await note_model.find({user: req.params.id})
        res.send(data)
    } catch (error) {
        res.send({
            error: true,
            errorObj: error
        })
    }
})

noteRoutes.delete('/:id', async (req, res) => {
    try {
        const data = await note_model.findByIdAndDelete(req.params.id)
        res.send(data)
    } catch (error) {
        res.send({
            error: true,
            errorObj: error
        })
    }
})

noteRoutes.patch('/:id', async (req, res) => {
    try {
        const data = req.body
        const inserted = await note_model.findByIdAndUpdate(req.params.id, data)
        res.send(inserted)
    } catch (error) {
        res.send({
            error: true,
            errorObj: error
        })
    }
})

module.exports = noteRoutes