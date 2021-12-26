const mongoose = require("mongoose")
const bcrypt = require('bcrypt')



const usersSchema= new mongoose.Schema({
    
    Username:{
        type:String,
        unique: true,
        required:true,
    },
    Userclass: {
        type: String,
        
    },
    Firstname: String,
    Lastname: String,
    Password: {
        type:String,
        required:true,
        validate(pass){
            console.log(pass)
            if(pass.length < 5){
                throw new Error("Password is too Short! Password must at least 5 characters ")
            }
        }
    },
    Email: {
        type:String,
        unique:true, 
        required: true,  //Ensures user must enter an email address
        lowercase:true,  //Email saves as lowercase
        validate: {
            validator: function(v) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: "Please enter a valid email"
        },
        required: [true, "Email required"]
    
    },

    DateJoined: {
        type: Date,
        default: new Date(),
    } ,
})

module.exports =mongoose.model("users",usersSchema)
