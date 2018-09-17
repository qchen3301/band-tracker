const mongoose = require('mongoose')

const Schema = mongoose.Schema //create variable to host mongoose's schema (I think)

const UserSchema = new Schema {{
    username: String,
    city: String,
    bands: [{}],
}}

const bandSchema = new Schema {{
    bandName: String,
    genre: String,
    gigs: [{}]
}}

const gigSchema = new Schema {{
    venue: String,
    city: String,
    date: String
    price: String
}}