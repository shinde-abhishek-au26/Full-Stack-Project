const jwt = require('jsonwebtoken')

function auth (req, res, next) {
    const token = req.cookies["auth-token"]
    if (!token) {
        return res.status(401).send('Needs to be logged in to access this route!')
    }

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET)
        req.user = verified
        next()
    } catch (error) {
        return res.status(400).send('Invalid Token')
    }
}

module.exports = auth