const express = require('express')
const router = express.Router()
const mongoose = require ('mongoose')
const User_model= require('../DataModels/Users.model')


//Get Users listing
router.get('/list', function(req, res, next) {
    User_model.find(function(err, usersresponse){
      if(err)
      res.send(err);
      else
      res.send({status: 500, outcome: usersresponse.length, admin_users: usersresponse});
    })
});

//Get a specific Admin Information


//Creating new Admin users
router.post('/signup',function(req,res,next){
    
    User_model.find({Email: req.body.Email})
    .exec()
    .then(users => {
        if(users.length >=1){
            return res.status(409).json({
                message: "Email Address is already taken"
            });
        } else{
            let newUsers = new User_model({

                Username:req.body.Username,
                Userclass:req.body.Userclass,
                Firstname:req.body.Firstname,
                Lastname:req.body.Lastname,
                Password:req.body.Password,
                Email:req.body.Email,
                DateJoined:req.body.DateJoined
        
            })
        
            newUsers.save(function(err,newUser){
            if(err)
               res.send(err);
               else
               res.send({
                    message:'New User created',Usersdetail:newUser
        
               })
            
            })
        }
    })
});

//Update Admin users
router.put('/updateUser',function(req,res,next){
    res.send('Update Users');
});

router.delete('/deleteUser',function(req,res,next){
    res.send('delete Users');
});

router.get('/searchusers',function(req,res,next){
    res.send('search');
});

module.exports = router
