const express = require('express')
const router = express.Router()
const mongoose = require ('mongoose')
const User_model= require('../DataModels/Users.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Admin_model= require('../DataModels/Admins.model')


//Get Users listing
router.get('/list', function(req, res, next) {
    User_model.find(function(err, usersresponse){
      if(err)
      res.send(err);
      else
      res.send({status: 500, Count: usersresponse.length, admin_users: usersresponse});
    })
});

//Search for User based on their Id
router.get("/:id",function(req,res,next){
    User_model.findOne({_id:req.params.id})
    
    .then(function(dbuser)
    {

        res.send(dbuser);
    })
    .catch(function(err){
        res.send('Cannot find User');
    });
});

//Registration 
router.post('/signup',function(req,res,next){
    
    User_model.find({Email: req.body.Email})
    .exec()
    .then(users => {
        if(users.length >=1)
        {
            return res.status(409).json({
                message: "Email Address is already taken"
            });
        } else{
            bcrypt.hash(req.body.Password,10,(err,hash)=>{
                if(err){
                    return res.status(500).json({
                        error:err
                    });
                } else{
                
            const newUsers = new User_model({
                 _id: mongoose.Types.ObjectId(),
                Username:req.body.Username,
                Userclass:req.body.Userclass,
                Firstname:req.body.Firstname,
                Lastname:req.body.Lastname,
                Password:hash,
                Email:req.body.Email,
                DateJoined:req.body.DateJoined
        
            });

           newUsers
           .save()
           .then(result =>{
               console.log(result);
               res.status(201).json({
                   message:"New User created"
               });
           })
           
           .catch(err=>{
               console.log(err);
               res.status(500).json({
                   error:err
               });

               
           });
        }
    });
}
    });
});

//User Login
router.post('/login',(req,res,next)=>{
    User_model.find({Username: req.body.Username})
    .exec()
    .then(user=>{
        if (user.length<1){
            return res.status(401).json({
                message:'Authorization failed'
            });
        }
        bcrypt.compare(req.body.Password, user[0].Password,(err,result)=>{
            if(err){
                return res.status(401).json({
                    message:'Authorization Failed'
                });
            }
            if (result){
                const token = jwt.sign(
               {
                    Username: user[0].Username,
                    userId:user[0]._id
                },
                "secret",
                {
                    expiresIn: "1h"
                }
                );
            
                return res.status(200).json({
                    message:"Authorization sucessful",
                    token:token
                });
            }
            res.status(401).json({
                message:"Authorization Failed"
            });
        });

    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
})


 router.post('/:updateAdmin',function(req,res,next){
    const id = req.params.updateAdmin;

    User_model.find({Userclass: "Admin"})
    .exec()
    .then(user=>
        {
         if (user.length<1){
            return res.status(401).json({
                message:'Authorization failed'
            });
        }
     })

     const newUsers = new Admin_model({

     // _id :req.body._id,
      UserID: req.params.updateAdmin

     });
     newUsers
     .save()
     .then(result =>
        {
         console.log(result);
         res.status(201).json({
             message:"New Admin created"
         });
     })
     
     .catch(err=>
        {
         console.log(err);
         res.status(500).json
         ({
             error:err
         });
        
        });
        
});

//Change Password 
//LOOK into further 
    

//Update Admin users Username and Email Address
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!REVIEW!!!!!!
router.put('/:updateUser',function(req,res,next){
    const id = req.params.updateUser;
    User_model.updateOne({_id: id},{$set:{Username:req.body.Username,Email:req.body.Email}})
    .exec()
    .then(result=>{
        console.log(result);
      res.status(200).json({
          message:"The User is updated"
      })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
    
});

//Delete User 
router.delete('/:userId',function(req,res,next){
    User_model.deleteOne({_id:req.params.userId})
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

//router.delete('/logout',(req,res)=> {
  //  req.logOut()
    //req.redirect('/login')
//})


module.exports = router
