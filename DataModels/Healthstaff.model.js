const mongoose = require("mongoose")

const HealthstaffSchema= new mongoose.Schema({
    UserID: {
        type: mongoose.SchemaTypes.ObjectId,
        ref:"users"
    }
})

module.exports= mongoose.model("healthstaffs",HealthstaffSchema)