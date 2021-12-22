const mongoose = require("mongoose")



const healthstafftrackingSchema= new mongoose.Schema({
    
    Address:{
        Street:String,
        City:String,
        ZipCode:Number
    },
    Firstname:String,
    Surname:String,
    PhoneNo:Number,
    Entered_Date:{
        type:Date,
        default: () => Date.now(),
    },
    FirstID: {
        type: mongoose.SchemaTypes.ObjectId,
        ref:"first_responders"

    },
    EmerID: {
        type: mongoose.SchemaTypes.ObjectId,
        ref:"emergency_responders"
    }

})

module.exports= mongoose.model("health_staff_trackingdash",healthstafftrackingSchema)