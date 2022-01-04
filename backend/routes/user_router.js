const { Router } = require('express')
const user_model = require('../models/user_model')
const userRoutes = Router()
const jwt = require('jsonwebtoken')
const { registerValidation, loginValidation } = require('../validations')


userRoutes.post('/Signup', async (req, res) => {

    // Validation of inputs
    const {error} = registerValidation(req.body)
    
    if (error) {
        return res.status(400).send(error.details[0].message)
    }

    // Check if user already exists
    const emailExist = await user_model.findOne({email: req.body.email})
    if (emailExist){
        return res.status(400).send('Email already exists')
    }

    // If user is new, add to database
    try {
        const data = req.body
        const inserted = await user_model.create(data)
        res.send(inserted)
    } catch (error) {
        res.send({
            error: true,
            errorObj: error
        })
    }
})

userRoutes.post('/login', async (req, res) => {

    // Validation of user inputs
    const {error} = loginValidation(req.body)
    if (error) {
        return res.status(400).send(error.details[0].message)
    }

    // Checking if email signed up before
    const user = await user_model.findOne({email: req.body.email})
    if (!user){
        return res.status(400).send('This Email is not signed up')
    }

    // Check if user password matches
    if (req.body.password !== user.password) {
        return res.status(400).send('Invalid Password')
    }

    // Assign a JWT Token
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET)
    res.cookie('auth-token', token)
    res.json({
        error: false,
        message: "User Logged In",
        token: token,
        user: user._id
    })
    return
})

module.exports = userRoutes