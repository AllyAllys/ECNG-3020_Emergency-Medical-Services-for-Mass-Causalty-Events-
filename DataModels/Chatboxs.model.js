const mongoose = require ("mongoose")

const chatboxSchema = new mongoose.Schema({
    
    _id: mongoose.Schema.Types.ObjectId,
    TextMessage: String,
    Time: {
        type:Date,
        default: () => Date.now(),
    },
    
    FirstID:{
        type: mongoose.SchemaTypes.ObjectId,
        ref:"first_responders",
        
    },
    EmerID:{
        type: mongoose.SchemaTypes.ObjectId,
        ref:"emergency_responders",
        
    }
})

module.exports= mongoose.model("chatboxs",chatboxSchema)