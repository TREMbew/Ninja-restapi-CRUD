const express = require('express');

//creating router and importing the ninja(user) schema
const router = express.Router();
const Ninja = require('../models/User');

//Post a Ninja
router.post('/newNinja', (req,res) => {
    let newNinja = new Ninja(req.body);
    newNinja
        .save()
        .then(ninja => res.status(201).send(ninja))
        .catch(err => {
            console.log(err)
            res.status(400).send({msg : 'ERROR POSTING A SHINOBI'})
        })
})

//Get all Ninja
router.get('/', (req,res) => {
    Ninja.find()
        .then((data) => res.send(data))
        .catch((err) => {
            console.log(err)
            res.status(400).send({msg : "CAN'T GET A NINJA!"})
        })
})

//Update a Ninja by Id
router.put('/:id', (req,res) => {
    let updatedNinja = req.body
    Ninja.findByIdAndUpdate(req.params.id, updatedNinja)
        .then((data) => res.send(data))
        .catch((err) => {
            console.log(err)
            res.status(400).send({msg : "CAN'T UPDATE A NINJA!"})
        })
})

//Delete a Ninja by Id
router.delete('/:id', (req,res) => {
    Ninja.findByIdAndDelete(req.params.id)
        .then((data) => res.send(data))
        .catch((err) => {
            console.log(err)
            res.status(400).send({msg : "CAN'T DELETE A NINJA!"})
        })
})

module.exports = router;