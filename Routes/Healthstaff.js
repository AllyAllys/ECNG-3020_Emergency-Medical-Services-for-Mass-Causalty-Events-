const express = require('express')
const router = express.Router()
const mongoose = require ('mongoose')
const  Healthstaff= require('../DataModels/Healthstaff.model')


//Get Disaster  Healthstaff listing
router.get('/list', function(req, res, next) {
  Healthstaff.find(function(err,  Healthstaffresponse){
      if(err)
      res.send(err);
      else
      res.send({status: 500, Count:  Healthstaffresponse.length,  HealthstaffUser: Healthstaffresponse});
    })
});


//Creating new Disaster  Healthstaff users
router.post('/create',function(req,res,next){
    let newHealthstaff = new  Healthstaff({
        _id: mongoose.Types.ObjectId(),
        UserID: req.user_id
    })

    newHealthstaff.save(function(err,newHealthstaff){
    if(err)
       res.send(err);
       else
       res.send({
           status:500, message:'EMS Healthstaff created',Healthstaffdetail:newHealthstaff 

       })
    
    })

});



//Get a specific Admin Information
router.get("/:id",function(req,res){
  Healthstaff.findOne({_id:req.params.id})
    .populate("UserID")

    .then(function(dbAdmin){

        res.send(dbAdmin);
    })
    .catch(function(err){
        res.send('Cannot find User');
    });
});

router.delete('/:userId',function(req,res,next){
     Healthstaff.deleteOne({_id:req.params.userId})
    .exec()
    .then(result=>{
        console.log(result);
      res.status(200).json({
          message:"The User is deleted"
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