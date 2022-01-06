const express = require('express')
const router = express.Router()
const mongoose = require ('mongoose')
const  ambulanceinfo= require('../DataModels/Ambulance_Information.model')
const AmbulanceController= require('../controller/ambulance_information')

//Get D ambulance information listing
router.get('/list',AmbulanceController.ambulance_get_list );


//Creating new  Ambulance information 
router.post('/create',AmbulanceController.ambulance_create);

//Get a specific Ambulance information
router.get("/:id",AmbulanceController.ambulance_get_one);

//Updating document in the collection
router.put('/:updateUser',AmbulanceController.ambulance_update);


//Deleting an existing document in the collection
router.delete('/:ambulanceID',AmbulanceController.ambulance_delete_one);


module.exports = router