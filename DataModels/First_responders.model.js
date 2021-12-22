const mongoose = require("mongoose")

const FirstResponderSchema= new mongoose.Schema({
    UserID: {
        type: mongoose.SchemaTypes.ObjectId,
        ref:"users"
    }
})

module.exports= mongoose.model("first_responders",FirstResponderSchema)