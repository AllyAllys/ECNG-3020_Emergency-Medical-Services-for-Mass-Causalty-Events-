const mongoose = require("mongoose")



const IncidentDashboardSchema= new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    PublicID: {
        type: mongoose.SchemaTypes.ObjectId,
        ref:"publics"
    },
    LawID: {
        type: mongoose.SchemaTypes.ObjectId,
        ref:"lawenforcement"
    },
    EventID:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"incidentevent"
    },
    Subject:{
        type:String,
        required:true

    },
    Address:{
        Street:String,
        City:String,
        ZipCode:Number
    },
    PhoneNo:{
        type:String,
        required:true
    },
    Incident_Des:{
        type:String,
        required:true

    },
    Incident_Date:{
        type:String,
        required:true

    },
    UploadDate:{
        type:Date,
        default: () => Date.now(),
    },
    IncidentPicture:Buffer
})

module.exports= mongoose.model("incident_dashboard",IncidentDashboardSchema)