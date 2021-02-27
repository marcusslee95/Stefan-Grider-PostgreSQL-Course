const express = require('express')

const router = express.Router()

const UsersRepository = require('../repositories/user-repository')

router.get('/users', async (req, res) => {
    //run a query to get all users
    const users = await UsersRepository.findAll()
    
    //Send result back to person who made the request
    res.send(users)
})

router.get('/users/:id', async (req, res) => {
    const id = req.params.id

    const user = await UsersRepository.findById(id)

    //if we got back null we realize there wasn't a user of that id so send them back error status 
    if (user){
        res.send(user)
    }
    else {
        res.sendStatus(404)
    }
    
})

router.post('/users', async (req, res) => {
    const { bio, username } = req.body

    const user = await UsersRepository.insert(bio, username) //this will be the newly created user

    res.send(user)
})

router.put('/users/:id', async (req, res) => {})

router.delete('/users/:id', async (req, res) => {})

module.exports = router