const express = require('express')

const router = express.Router()

const UsersRepository = require('../repositories/user-repository')

router.get('/users', async (req, res) => {
    //run a query to get all users
    const users = await UsersRepository.findAll()
    
    //Send result back to person who made the request
    res.send(users)
})

router.get('/users/:id', async (req, res) => {})

router.post('/users', async (req, res) => {})

router.put('/users/:id', async (req, res) => {})

router.delete('/users/:id', async (req, res) => {})

module.exports = router