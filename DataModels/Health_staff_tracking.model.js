const mongoose = require("mongoose")



const healthstafftrackingSchema= new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Address:{
        Street:String,
        City:String,
        ZipCode:Number
    },
    Firstname:{
        type: String,
        required: true
    },
    Surname:{
        type: String,
        required: true

    },
    PhoneNo:{
        type:String,
        required: true
    },

    Entered_Date:{
        type:Date,
        default: () => Date.now(),
    },
    FirstID: {
        type: mongoose.SchemaTypes.ObjectId,
        ref:"first_responders",
       

    },
    EmerID: {
        type: mongoose.SchemaTypes.ObjectId,
        ref:"emergency_responders",
        
    }

})

module.exports= mongoose.model("health_staff_trackingdash",healthstafftrackingSchema)