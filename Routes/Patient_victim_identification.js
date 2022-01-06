const express = require('express')
const router = express.Router()
const mongoose = require ('mongoose')
const   patient= require('../DataModels/Patient_victim_identification.model')


//Get List of patient information forms
router.get('/list', function(req, res, next) {
 patient.find(function(err, patientresponse){
      if(err)
      res.send(err);
      else
      res.send({status: 500, Count:   patientresponse.length,   patientUser: patientresponse});
    })
});

router.get("/:id",function(req,res,next){
    patient.findOne({_id:req.params.id})
    
    .then(function(dbuser)
    {

        res.send(dbuser);
    })
    .catch(function(err){
        res.send('Cannot patient form');
    });
});

//Creating  a new document within the collection

router.post('/create',(req,res,next)=>{
    const tracking =  patient ({
        _id: mongoose.Types.ObjectId(),
        VolunteerID:req.body.VolunteerID,
        Firstname:req.body.Firstname,
        Surname:req.body.Surname,
        DOb:req.body.DOb,
        Email:req.body.Email,
        Gender:req.body.Gender,
        IDNumber:req.body.IDNumber,
        PhoneNo:req.body.PhoneNo,
        InjuryDescription:req.body.InjuryDescription,
        Address:req.body.Address,
        MedicalProviders:req.body.MedicalProviders

    });
    tracking
    .save()
    .then(result =>{
        console.log(result);
        res.status(201).json({
        message:"Patient/Victim Form is Successfully Uploaded",
        
        })
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
    

});

router.put('/:updateUser',function(req,res,next){
    const id = req.params.updateUser;
    patient.updateOne({_id: id},{$set:{Firstname:req.body.Firstname,Surname:req.body.Surname,Gender:req.body.Gender,DOb:req.body.DOb,IDNumber:req.body.IDNumber,PhoneNo:req.body.PhoneNo,InjuryDescription:req.body.InjuryDescription,Address:req.body.Address,MedicalProviders:req.body.MedicalProviders}})
    .exec()
    .then(result=>{
        console.log(result);
      res.status(200).json({
          message:"Missing Person Form updated!"
      })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
    
});


router.delete('/:patientID',function(req,res,next){
 patient.deleteOne({_id:req.params.patientID})
    .exec()
    .then(result=>{
        console.log(result);
      res.status(200).json({
          message:"Patient form deleted!"
      })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
});


module.exports = router
