const mongoose = require("mongoose")

const MedicalSuppliesOrderSchema= new mongoose.Schema({
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
    OrderStatus:String
})

module.exports= mongoose.model("medicalsupplies_order",MedicalSuppliesOrderSchema)