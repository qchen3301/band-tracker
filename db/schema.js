const mongoose = require('mongoose') //create variable to hold mongoose

const Schema = mongoose.Schema //create variable to host mongoose's schema (I think)

//build schemas - remember to order in reverse of build because you cannot reference
//before instansiating
const GigSchema = new Schema ({
    venue: String,
    city: String,
    date: String,
    price: Number
})

const BandSchema = new Schema ({
    bandName: String,
    genre: String,
    gigs: [GigSchema]
})

const UserSchema = new Schema ({
    username: String,
    city: String,
    bands: [BandSchema]
})

//build variables to hold the models...which will reference the built schemas
const GigModel = mongoose.model('Gig', GigSchema)
const BandModel = mongoose.model('Band', BandSchema)
const UserModel = mongoose.model('User', UserSchema)

//module.exports allows access to info in this file from external files. 
//Module.exports only allows access to one THING...but that THING can be an object, a collection of smaller things
module.exports = {
    Gig : GigModel,   //key:value = Gig:GigModel
    Band : BandModel,  //key:value = Band:BandModel
    User : UserModel   //key:value = User:UserModel
}