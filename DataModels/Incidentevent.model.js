const mongoose = require("mongoose")

const IncidentEventSchema= new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Eventname:String,
    EventDes:String,
    EventYear:{
        type:Date,
        default: () => Date.now(),
    }
})

module.exports= mongoose.model("incidentevent",IncidentEventSchema)