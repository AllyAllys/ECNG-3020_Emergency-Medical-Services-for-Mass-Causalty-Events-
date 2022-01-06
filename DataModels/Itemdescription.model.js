const mongoose = require ("mongoose")

const ItemDescriptionSchema= new mongoose.Schema({
    
    _id: mongoose.Schema.Types.ObjectId,

    ItemDescription:String,
    OrderedItemID: {
        type: mongoose.SchemaTypes.ObjectId,
        ref:"medicalsupplies_itemrequests",
        required: true
    },
    ItemName:String
})

module.exports=mongoose.model("itemdescription",ItemDescriptionSchema)