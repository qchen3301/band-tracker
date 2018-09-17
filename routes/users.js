var express = require('express');
var router = express.Router();

//get the key user from the object in schema
const { User } = require('../db/schema.js')

//INDEX, SHOW ALL
router.get('/', (req,res) => {
  User.find() //database responds with a promise
  .then((users)=> { //database responds a second time with resolution
    console.log(users)
    res.render('users/index', {users})
  })
})

//SHOW, SHOW ONE
router.get('/:id', (req,res) => {
  User.findById(req.params.id) //database responds, returns with a promise
  .then((user)=> { //unwrap that promise with .then, which takes an object
    res.render('users/show', {user})
  }) 
})

//NEW RENDER NEW FORM

//CREATE 

//EDIT, RENDER EDIT FORM

//UPDATE

//DELETE
module.exports = router;
