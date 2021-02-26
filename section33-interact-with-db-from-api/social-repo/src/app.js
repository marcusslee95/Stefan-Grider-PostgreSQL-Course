const express = require('express')
const usersRouter = require('./routes/users')

module.exports = () => {
    const app = express()

    app.use(express.json()) //this code let's server understand incoming requests that have json in them
    app.use(usersRouter)

    return app
}