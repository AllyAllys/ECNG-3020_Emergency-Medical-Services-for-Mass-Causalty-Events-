const mongoose = require("mongoose")

const DisasterManagerSchema= new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    UserID: {
        type: mongoose.SchemaTypes.ObjectId,
        ref:"users",
        
    }
})

module.exports= mongoose.model("disaster_managers",DisasterManagerSchema)