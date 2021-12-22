const express = require('express')
const router = express.Router()
const mongoose = require ('mongoose')
const admin_model= require('../DataModels/Admins.model')


//Get Admin listing
router.get('/list', function(req, res, next) {
    admin_model.find(function(err, adminresponse){
      if(err)
      res.send(err);
      else
      res.send({status: 500, outcome: adminresponse.length, admin_users: adminresponse});
    })
});


//Creating new Admin users
router.post('/create',function(req,res,next){
    let newAdmin = new admin_model({

        UserID: req.user_id
    })

    newAdmin.save(function(err,newAdmin){
    if(err)
       res.send(err);
       else
       res.send({
           status:500, message:'Admin created',Admindetail:newAdmin

       })
    
    })

});

//Get a specific Admin Information
//Get a specific Admin Information
router.get("/:id",function(req,res){
    admin_model.findOne({_id:req.params.id})
    .populate("UserID")

    .then(function(dbAdmin){

        res.send(dbAdmin);
    })
    .catch(function(err){
        res.send('Cannot find User');
    });
});

//Update Admin users
/* router.put('/:userid',function(req,res,next){

    res.send('Update Admins');
});

router.delete('/:userid',function(req,res,next){
    res.send('delete Admins');

 
});

*/

module.exports = router