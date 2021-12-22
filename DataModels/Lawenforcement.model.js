const mongoose = require("mongoose")

const LawEnforcementSchema= new mongoose.Schema({
    UserID: {
        type: mongoose.SchemaTypes.ObjectId,
        ref:"users"
    }
})

module.exports= mongoose.model("lawenforcement",LawEnforcementSchema)