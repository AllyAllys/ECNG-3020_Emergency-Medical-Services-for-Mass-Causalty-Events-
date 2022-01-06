const express = require('express')
const router = express.Router()
const mongoose = require ('mongoose')
const  event= require('../DataModels/Incidentevent.model')


//Get List of event reports
router.get('/list', function(req, res, next) {
event.find(function(err,eventresponse){
      if(err)
      res.send(err);
      else
      res.send({status: 500, Count:  eventresponse.length,  eventUser:eventresponse});
    })
});


//Creating  a new document within the collection
router.post('/create',(req,res,next)=>{
    const tracking = event ({
        _id: mongoose.Types.ObjectId(),
        Eventname:req.body.Eventname,
        EventDes:req.body.EventDes,
        EventYear:req.body.EventYear

    });
    tracking
    .save()
    .then(result =>{
        console.log(result);
    })
    .catch(err =>console.log(err));
   res.status(200).json({
        message:"event is uploaded successfully.",
        tracking: tracking
    })

});

//Get event file
router.get("/:id",function(req,res,next){
    event.findOne({_id:req.params.id})
    
    .then(function(dbuser)
    {

        res.send(dbuser);
    })
    .catch(function(err){
        res.send('Cannot find event');
    });
});

router.delete('/:eventID',function(req,res,next){
event.deleteOne({_id:req.params.eventID})
    .exec()
    .then(result=>{
        console.log(result);
      res.status(200).json({
          message:"event report deleted!"
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
