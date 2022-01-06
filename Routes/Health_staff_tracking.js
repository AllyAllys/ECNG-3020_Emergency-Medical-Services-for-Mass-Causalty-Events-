const express = require('express')
const router = express.Router()
const mongoose = require ('mongoose')
const   healthtracking= require('../DataModels/Health_staff_tracking.model')


//Ge health tracking list
router.get('/list', function(req, res, next) {
  healthtracking.find(function(err,   healthtrackingresponse){
      if(err)
      res.send(err);
      else
      res.send({status: 500, Count:   healthtrackingresponse.length,   healthtrackingUser:  healthtrackingresponse});
    })
});


//Creating  a new document within the collection
router.post('/create',(req,res,next)=>{
    const tracking =  healthtracking ({
        _id: mongoose.Types.ObjectId(),
        FirstID:req.body.FirstID,
        EmerID:req.body.EmerID,
        Address:req.body.Address,
        Firstname:req.body.Firstname,
        Surname:req.body.Surname,
        PhoneNo:req.body.PhoneNo
    });
    tracking
    .save()
    .then(result =>{
        console.log(result);
    })
    .catch(err =>console.log(err));
   res.status(200).json({
        message:"The health staff tracking information is successfully stored.",
        tracking: tracking
    })

});

//Get  specific information
router.get("/:id",function(req,res,next){
    healthtracking.findOne({_id:req.params.id})
    
    .then(function(dbuser)
    {

        res.send(dbuser);
    })
    .catch(function(err){
        res.send('Cannot health tracking information');
    });
});
//Updating and existing document in the collection
router.put('/:updateUser',function(req,res,next){
    const id = req.params.updateUser;
    healthtracking.updateOne({_id: id},{$set:{Address:req.body.Address,PhoneNo:req.body.PhoneNo,Firstname:req.body.Firstname,Surname:req.body.Surname}})
    .exec()
    .then(result=>{
        console.log(result);
      res.status(200).json({
          message:"Health Staff information is updated!"
      })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
    
});
//Deleting an existing document in the collection
router.delete('/:ambulanceID',function(req,res,next){
  healthtracking.deleteOne({_id:req.params.ambulanceID})
    .exec()
    .then(result=>{
        console.log(result);
      res.status(200).json({
          message:"Health staff tracking information deleted!"
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
