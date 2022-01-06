const mongoose = require("mongoose")

const MedicalSuppliesOrderSchema= new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,

    Orderstatus:{
        type:String,
        required:true
    },

    FirstID: {
        type: mongoose.SchemaTypes.ObjectId,
        ref:"first_responders"
    },
    EmerID: {
        type: mongoose.SchemaTypes.ObjectId,
        ref:"emergency_responders"
    },
    DateOrdered:{
        type:Date,
        default: () => Date.now(), 
    },

    
})

module.exports= mongoose.model("medicalsupplies_order",MedicalSuppliesOrderSchema)