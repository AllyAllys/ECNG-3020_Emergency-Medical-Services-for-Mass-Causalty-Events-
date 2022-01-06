const express = require('express')
const router = express.Router()
const mongoose = require ('mongoose')
const  law= require('../DataModels/Lawenforcement.model')


//Get Disaster  law listing
router.get('/list', function(req, res, next) {
  law.find(function(err,  lawresponse){
      if(err)
      res.send(err);
      else
      res.send({status: 500, Count:  lawresponse.length,  lawUser: lawresponse});
    })
});


//Creating new Disaster  law users
router.post('/create',function(req,res,next){

    let newlaw = new  law({
        _id: mongoose.Types.ObjectId(),
        UserID: req.user_id

    })

    newlaw.save(function(err,newlaw){
    if(err)
       res.send(err);
       else
       res.send({
           status:500, message:'EMS law created',lawdetail:newlaw 

       })
    
    })

});



//Get a specific Admin Information
router.get("/:id",function(req,res){
  law.findOne({_id:req.params.id})
    .populate("UserID")

    .then(function(dbAdmin){

        res.send(dbAdmin);
    })
    .catch(function(err){
        res.send('Cannot find User');
    });
});

router.delete('/:userId',function(req,res,next){
    law.deleteOne({_id:req.params.userId})
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