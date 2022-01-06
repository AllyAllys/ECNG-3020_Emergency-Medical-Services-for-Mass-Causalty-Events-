const express = require('express')
const router = express.Router()
const mongoose = require ('mongoose')
const  public= require('../DataModels/Public.model')


//Get Disaster  public listing
router.get('/list', function(req, res, next) {
  public.find(function(err,  publicresponse){
      if(err)
      res.send(err);
      else
      res.send({status: 500, Count:  publicresponse.length,  publicUser: publicresponse});
    })
});


//Creating new Disaster  public users
router.post('/create',function(req,res,next){
    let newpublic = new  public({
        _id: mongoose.Types.ObjectId(),
        UserID: req.user_id
    })

    newpublic.save(function(err,newpublic){
    if(err)
       res.send(err);
       else
       res.send({
           status:500, message:'EMS public created',publicdetail:newpublic 

       })
    
    })

});



//Get a specific Admin Information
router.get("/:id",function(req,res){
  public.findOne({_id:req.params.id})
    .populate("UserID")

    .then(function(dbAdmin){

        res.send(dbAdmin);
    })
    .catch(function(err){
        res.send('Cannot find User');
    });
});

router.delete('/:userId',function(req,res,next){
    public.deleteOne({_id:req.params.userId})
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