const mongoose = require ("mongoose")

const ItemDescriptionSchema= new mongoose.Schema({
    ItemDescription:String,
    OrderedItemID: {
        type: mongoose.SchemaTypes.ObjectId,
        ref:"medicalsupplies_itemrequests"
    },
    ItemName:String
})

module.exports=mongoose.model("itemdescription",ItemDescriptionSchema)