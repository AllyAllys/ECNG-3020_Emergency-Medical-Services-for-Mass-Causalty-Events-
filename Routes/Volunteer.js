const express = require('express')
const router = express.Router()
const mongoose = require ('mongoose')
const  volunteer= require('../DataModels/Volunteer.model')


//Get Disaster  volunteer listing
router.get('/list', function(req, res, next) {
  volunteer.find(function(err,  volunteerresponse){
      if(err)
      res.send(err);
      else
      res.send({status: 500, Count:  volunteerresponse.length,  volunteerUser: volunteerresponse});
    })
});


//Creating new  volunteer users
router.post('/create',function(req,res,next){
    let newvolunteer = new  volunteer({
        _id: mongoose.Types.ObjectId(),
        UserID: req.user_id
    })

    newvolunteer.save(function(err,newvolunteer){
    if(err)
       res.send(err);
       else
       res.send({
           status:500, message:'EMS volunteer created',volunteerdetail:newvolunteer 

       })
    
    })

});



//Get a specific Admin Information
router.get("/:id",function(req,res){
  volunteer.findOne({_id:req.params.id})
    .populate("UserID")

    .then(function(dbAdmin){

        res.send(dbAdmin);
    })
    .catch(function(err){
        res.send('Cannot find User');
    });
});


router.delete('/:userId',function(req,res,next){
    volunteer.deleteOne({_id:req.params.userId})
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