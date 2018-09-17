//same as schema.js file, create var to hold mongoose, then initialize connection to mongodb with mongoose
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/band-tracer', {useNewUrlParser: true} )

//create variable to hold schemas in schema.js file
const Schema = require('./schema')
console.log(Schema)

//since Schema (the variable) holds require(./schema), which is an object with three keys (user, band and gig)
//create three new variables to hold the specific keys of the object (Schema) we want
//we want a user variable to hold Schema's user key, a band var to hold Schema's band key, and so on...
// const User = Schema.User 
// const Band = Schema.Band
// const Gig = Schema.Gig

//destructuring:
// take the USER key from SCHEMA object and put it into a variable called User
// const { User } = Schema
// const { Band } = Schema
// const { Gig } = Schema 

//destructuring 2: declare multiple consts at the same time
const { User, Band, Gig } = Schema


//create new objects of schemas to populate database

const monday = new Gig({
    venue: 'PCM',
    city: 'Atlanta',
    date: 'Monday',
    price: 3.50
})

const nickle = new Band ({
    name: 'NickelBack',
    genre: 'Awesome',
    gigs: [monday]
})

const daniel = new User ({
    username: 'Mancy',
    city: 'Atlanta',
    bands:[nickle]
})



User.remove() //since this is just a test seed, we want to remove extraneous data from multiple database seeds. So first purge the data in the database before adding
    .then(() => { //.save() is a method that saves (duh) the information to the (mongodb) database. However, the database will IMMEDIATELY respond to this request with a promise,not an actual resolution.
      return daniel.save()  //return is important because a promissory action (such as .save) nested inside another promissory action (in this case .then) will not implicitly return data
    })
    .then((data) => {   //.then() command = after the second act, the RESOLUTION, is returned, execute this function. Note: ((xxxyyyzzz) => {}) the parens around xxxyyyzzz are extraneous
        console.log(data)
        console.log('Done Seeding')
        mongoose.connection.close()
    })