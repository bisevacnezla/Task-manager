const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    age:{
        type: Number,
        validate(value){
            if(value<0){
                throw new Error('Age must be a positive number')
            }
        }
    },
    email:{
        type: String,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is not valid!')
            }
        },
        trim:true,
        lowercase:true
    },
    password:{
        type: String,
        validate(value){
            if(value.toLowerCase().includes("password")){
                throw new Error('Password must not contain word "password" and must be longer than 6 characters')
            }
        },
        minlength: 7,
        required: true,
        trim:true
    }
})

module.exports = User