const mongoose = require("mongoose")

const DisasterManagerSchema= new mongoose.Schema({
    UserID: {
        type: mongoose.SchemaTypes.ObjectId,
        ref:"users"
    }
})

module.exports= mongoose.model("disaster_managers",DisasterManagerSchema)