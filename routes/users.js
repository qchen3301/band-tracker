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

//NEW RENDER NEW FORM
router.get('/new', (req,res) => {
  res.render('users/new')
})

//SHOW, SHOW ONE
router.get('/:id', (req,res) => {
  User.findById(req.params.id) //database responds, returns with a promise
  .then((user)=> { //unwrap that promise with .then, which takes an object
    res.render('users/show', {user})
  }) 
})



//CREATE 
router.post('/', (req, res) => {
  //const newUser = req.body
  //const newUser = new User(req.body) //create a new variable that stores the MODEL 
  //newUser.save()
  User.create(req.body) //create() method creates and saves to database
    .then((user)=> { //.then takes a function, that function takes what's...what now???
      res.redirect(`/users/${user._id}`) //user is the newly created user, its _id is its uniquely generated hash, which is the page we want to redirect to
    })
})


//EDIT, RENDER EDIT FORM

//UPDATE

//DELETE
router.delete('/:id', (req,res) => {
  User.findByIdAndRemove(req.params.id) //database responds, returns a promise
  .then(() => { //good UX dictates that something that's deleted shouldn't send back data
    res.redirect('/users')
  })
})

module.exports = router;
