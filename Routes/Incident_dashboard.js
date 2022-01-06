const express = require('express')
const router = express.Router()
const mongoose = require ('mongoose')
const   incidentDash= require('../DataModels/Incident_dashboard.model')


//Get List of incident reports
router.get('/list', function(req, res, next) {
 incidentDash.find(function(err, incidentDashresponse){
      if(err)
      res.send(err);
      else
      res.send({status: 500, Count:   incidentDashresponse.length,   incidentDashUser: incidentDashresponse});
    })
});

router.get("/:id",function(req,res,next){
    incidentDash.findOne({_id:req.params.id})
    
    .then(function(dbuser)
    {

        res.send(dbuser);
    })
    .catch(function(err){
        res.send('Cannot find incident information.');
    });
});

//Creating  a new document within the collection
router.post('/create',(req,res,next)=>{
    const tracking =  incidentDash ({
        _id: mongoose.Types.ObjectId(),
        PublicID:req.body.PublicID,
        LawID:req.body.LawID,
        EventID:req.body.EventID,
        Subject:req.body.Subject,
        Address:req.body.Address,
        PhoneNo:req.body.PhoneNo,
        Incident_Des:req.body.Incident_Des,
        Incident_Date:req.body.Incident_Date,
        IncidentPicture:req.body.IncidentPicture

    });
    tracking
    .save()
    .then(result =>{
        console.log(result);
    })
    .catch(err =>console.log(err));
   res.status(200).json({
        message:"Incident report is uploaded successfully.",
        tracking: tracking
    })

});

//Get incident file


router.delete('/:incidentID',function(req,res,next){
 incidentDash.deleteOne({_id:req.params.incidentID})
    .exec()
    .then(result=>{
        console.log(result);
      res.status(200).json({
          message:"Incident report deleted!"
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
