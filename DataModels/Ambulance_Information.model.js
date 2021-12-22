const mongoose = require("mongoose")



const ambulanceSchema= new mongoose.Schema({
    DispatcherID:
    { type: mongoose.SchemaTypes.ObjectId,
      ref:"ems_dispatcher"
    },
    Address:{
        Street:String,
        City:String,
        ZipCode:Number
    },
    Driver: String,
    DateTime:{
        type:Date,
        default: () => Date.now(),
    }
   
});

module.exports=mongoose.model("ambulance_information",ambulanceSchema)