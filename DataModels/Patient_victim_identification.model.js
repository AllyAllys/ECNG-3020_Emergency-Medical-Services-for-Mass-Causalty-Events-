const mongoose = require("mongoose")


const PatientVictimIdentificationSchema= new mongoose.Schema({
    VolunteerID: {
        type: mongoose.SchemaTypes.ObjectId,
        ref:"volunteers"
    },
    HealthStaffID: {
        type: mongoose.SchemaTypes.ObjectId,
        ref:"healthstaffs"
    },
    Firstname:String,
    Surname:String,
    DOB:String,
    Email:String,
    Gender:String,
    IDNumber:Number,
    PhoneNo:String,
    InjuryDescription:String,
    InjuryTreatment:String,
    ModifiedDate:{
        type:Date,
        default: () => Date.now(),
    },
    Address:{
        Street:String,
        City:String,
        ZipCode:Number
    },
    MedicalProviders:[String]
    
});

module.exports=mongoose.model("patient_victim_identifications",PatientVictimIdentificationSchema)