const express = require('express')
const router = express.Router()
const mongoose = require ('mongoose')
const  dispatcher= require('../DataModels/Ems_dispatcher.model')


//Get Disaster  dispatcher listing
router.get('/list', function(req, res, next) {
  dispatcher.find(function(err,  dispatcherresponse){
      if(err)
      res.send(err);
      else
      res.send({status: 500, Count:  dispatcherresponse.length,  dispatcherUser: dispatcherresponse});
    })
});


//Creating new Disaster  dispatcher users
router.post('/create',function(req,res,next){
    let newdispatcher = new  dispatcher({
        _id: mongoose.Types.ObjectId(),

        UserID: req.user_id
    })

    newdispatcher.save(function(err,newdispatcher){
    if(err)
       res.send(err);
       else
       res.send({
           status:500, message:'EMS dispatcher created',dispatcherdetail:newdispatcher 

       })
    
    })

});



//Get a specific Admin Information
router.get("/:id",function(req,res){
  dispatcher.findOne({_id:req.params.id})
    .populate("UserID")

    .then(function(dbAdmin){

        res.send(dbAdmin);
    })
    .catch(function(err){
        res.send('Cannot find User');
    });
});

router.delete('/:userId',function(req,res,next){
    dispatcher.deleteOne({_id:req.params.userId})
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