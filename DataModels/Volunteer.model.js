const mongoose = require("mongoose")

const VolunteerSchema= new mongoose.Schema({
    UserID: {
        type: mongoose.SchemaTypes.ObjectId,
        ref:"users"
    }
})

module.exports= mongoose.model("volunteers",VolunteerSchema)