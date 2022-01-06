const mongoose = require("mongoose")

const EmsdispatcherSchema= new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    UserID: {
        type: mongoose.SchemaTypes.ObjectId,
        ref:"users",
       
    }
})

module.exports= mongoose.model("ems_dispatcher",EmsdispatcherSchema)