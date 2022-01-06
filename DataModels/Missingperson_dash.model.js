const mongoose = require("mongoose")



const MissingPersonSchema= new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    LawID: {
        type: mongoose.SchemaTypes.ObjectId,
        ref:"lawenforcement"
    },
    PublicID: {
        type: mongoose.SchemaTypes.ObjectId,
        ref:"publics"
    },
    Firstname:{
        type:String,
        required: true
    },
    Surname:{
        type:String,
        required: true

    },
    Gender:{
        type:String,
        required: true,
    },
    Age:Number,
    Height:String,
    Address:{
        Street:String,
        City:String,
        ZipCode:Number
    },
    Person_Descript:{
        type:String,
        required:true
    
    },
    DateTime:{
        type:Date,
        default: () => Date.now(),
    },
    PersonPicture:Buffer
   
});

module.exports=mongoose.model("missingperson_dash",MissingPersonSchema)