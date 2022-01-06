const mongoose = require("mongoose")

const MedicalSuppliesItemRequestSchema= new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    OrderID: {
        type: mongoose.SchemaTypes.ObjectId,
        ref:"medicalsupplies_order",
        required:true 
    },
    Item_Quantity:{
        type:Number,
        required:true 
    },
    PhoneNo:{
        type:String,
        required: true

    }
})

module.exports= mongoose.model("medicalsupplies_itemrequests",MedicalSuppliesItemRequestSchema)