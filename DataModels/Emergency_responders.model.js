const mongoose = require("mongoose")

const EmergencyResponderSchema= new mongoose.Schema({
    UserID: {
        type: mongoose.SchemaTypes.ObjectId,
        ref:"users"
    }
})

module.exports= mongoose.model("emergency_responders",EmergencyResponderSchema)