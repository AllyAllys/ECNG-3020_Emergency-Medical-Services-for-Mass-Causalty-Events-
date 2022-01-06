const express = require('express')
const router = express.Router()
const mongoose = require ('mongoose')
const emer_model= require('../DataModels/Emergency_responders.model')


//Get Disaster emer_model listing
router.get('/list', function(req, res, next) {
    emer_model.find(function(err, emer_modelresponse){
      if(err)
      res.send(err);
      else
      res.send({status: 500, Count: emer_modelresponse.length, emergencyusers: emer_modelresponse});
    })
});


//Creating new Disaster emer_model users
router.post('/create',function(req,res,next){
    let NewResponder = new emer_model({
        _id: mongoose.Types.ObjectId(),
        UserID: req.user_id
    })

    NewResponder.save(function(err,NewResponder){
    if(err)
       res.send(err);
       else
       res.send({
           status:500, message:'Emergency Responder created',EmergencyResponderdetail:NewResponder

       })
    
    })

});



//Get a specific Admin Information
router.get("/:id",function(req,res){
    emer_model.findOne({_id:req.params.id})
    .populate("UserID")

    .then(function(dbAdmin){

        res.send(dbAdmin);
    })
    .catch(function(err){
        res.send('Cannot find User');
    });
});

router.delete('/:userId',function(req,res,next){
    emer_model.deleteOne({_id:req.params.userId})
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