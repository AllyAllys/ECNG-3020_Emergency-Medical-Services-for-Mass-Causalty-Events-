const express = require('express')
const router = express.Router()
const mongoose = require ('mongoose')
const manager= require('../DataModels/Disaster_managers.model')


//Get Disaster Manager listing
router.get('/list', function(req, res, next) {
    manager.find(function(err, managerresponse){
      if(err)
      res.send(err);
      else
      res.send({status: 500, Count: managerresponse.length, managerUsers: managerresponse});
    })
});


//Creating new Disaster manager users
router.post('/create',function(req,res,next){
    let newManager = new manager({
        _id: mongoose.Types.ObjectId(),
        UserID: req.user_id
    })

    newManager.save(function(err,newManager){
    if(err)
       res.send(err);
       else
       res.send({
           status:500, message:'Disaster Manager created',Managerdetail:newManager

       })
    
    })

});



//Get a specific Admin Information
router.get("/:id",function(req,res){
    manager.findOne({_id:req.params.id})
    .populate("UserID")

    .then(function(dbAdmin){

        res.send(dbAdmin);
    })
    .catch(function(err){
        res.send('Cannot find User');
    });
});

router.delete('/:userId',function(req,res,next){
    manager.deleteOne({_id:req.params.userId})
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