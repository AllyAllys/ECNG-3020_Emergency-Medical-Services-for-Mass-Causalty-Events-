const mongoose = require("mongoose")


const PatientVictimIdentificationSchema= new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    VolunteerID: {
        type: mongoose.SchemaTypes.ObjectId,
        ref:"volunteers"
    },
    HealthStaffID: {
        type: mongoose.SchemaTypes.ObjectId,
        ref:"healthstaffs"
    },
    Firstname:{
        type:String,
        required:true,

    },
    Surname:{
        type:String,
        required:true

    },
    DOb:{
        type:String,
        required:true

    },
    Email:String,
    Gender:{
        type:String,
        required:true

    },
    IDNumber:{
        type:Number,
        required:true

    },
    PhoneNo:{
        type:String,
        required:true,

    
    },
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