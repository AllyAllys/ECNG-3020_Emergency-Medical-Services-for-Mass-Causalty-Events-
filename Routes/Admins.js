const express = require('express')
const router = express.Router()
const mongoose = require ('mongoose')
const admin_model= require('../DataModels/Admins.model')

const AdminsController = require('../controller/admins');


//Get Admin listing
router.get('/list', AdminsController.admin_get_all );


//Creating new Admin users
router.post('/create',AdminsController.admin_post);


//Get a specific Admin Information
router.get("/:id",AdminsController.admin_get_one); 


//Update Admin users
/* router.put('/:userid',function(req,res,next){

    res.send('Update Admins');
});

router.delete('/:userid',function(req,res,next){
    res.send('delete Admins');

 
});

*/

//Delete admin user 
router.delete('/:userId',AdminsController.admin_delete_one)

module.exports = router
