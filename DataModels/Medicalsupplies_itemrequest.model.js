const mongoose = require("mongoose")

const MedicalSuppliesItemRequestSchema= new mongoose.Schema({
    OrderID: {
        type: mongoose.SchemaTypes.ObjectId,
        ref:"medicalsupplies_order"
    },
    Item_Quantity:Number,
    PhoneNo:String
})

module.exports= mongoose.model("medicalsupplies_itemrequests",MedicalSuppliesItemRequestSchema)