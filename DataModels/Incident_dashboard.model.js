const mongoose = require("mongoose")



const IncidentDashboardSchema= new mongoose.Schema({
    PublicID: {
        type: mongoose.SchemaTypes.ObjectId,
        ref:"publics"
    },
    LawID: {
        type: mongoose.SchemaTypes.ObjectId,
        ref:"lawenforcement"
    },
    Subject:String,
    Address:{
        Street:String,
        City:String,
        ZipCode:Number
    },
    PhoneNo:Number,
    IncidentDes:String,
    IncidentDate:String,
    UploadDate:{
        type:Date,
        default: () => Date.now(),
    },
    IncidentPicture:Buffer
})

module.exports= mongoose.model("incident_dashboard",IncidentDashboardSchema)