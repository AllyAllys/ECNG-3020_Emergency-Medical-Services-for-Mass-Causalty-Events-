const express = require('express')
const router = express.Router()
const mongoose = require ('mongoose')
const  responder= require('../DataModels/First_responders.model')


//Get Disaster  responder listing
router.get('/list', function(req, res, next) {
  responder.find(function(err,  responderresponse){
      if(err)
      res.send(err);
      else
      res.send({status: 500, Count:  responderresponse.length,  responderUser: responderresponse});
    })
});


//Creating new Disaster  responder users
router.post('/create',function(req,res,next){
    let newresponder = new  responder({
        _id: mongoose.Types.ObjectId(),

        UserID: req.user_id
    })

    newresponder.save(function(err,newresponder){
    if(err)
       res.send(err);
       else
       res.send({
           status:500, message:'EMS responder created',responderdetail:newresponder 

       })
    
    })

});



//Get a specific Admin Information
router.get("/:id",function(req,res){
  responder.findOne({_id:req.params.id})
    .populate("UserID")

    .then(function(dbAdmin){

        res.send(dbAdmin);
    })
    .catch(function(err){
        res.send('Cannot find User');
    });
});

router.delete('/:userId',function(req,res,next){
    responder.deleteOne({_id:req.params.userId})
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