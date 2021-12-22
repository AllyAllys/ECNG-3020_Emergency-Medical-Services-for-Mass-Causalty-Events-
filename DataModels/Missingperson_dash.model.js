const mongoose = require("mongoose")



const MissingPersonSchema= new mongoose.Schema({
    LawID: {
        type: mongoose.SchemaTypes.ObjectId,
        ref:"lawenforcement"
    },
    PublicID: {
        type: mongoose.SchemaTypes.ObjectId,
        ref:"publics"
    },
    Firstname:String,
    Surname:String,
    Gender:String,
    Age:Number,
    Height:Number,
    Address:{
        Street:String,
        City:String,
        ZipCode:Number
    },
    Person_Descript:String,
    DateTime:{
        type:Date,
        default: () => Date.now(),
    },
    PersonPicture:Buffer
   
});

module.exports=mongoose.model("missingperson_dash",MissingPersonSchema)