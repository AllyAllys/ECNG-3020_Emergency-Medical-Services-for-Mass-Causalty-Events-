const express = require('express')
const router = express.Router()
const mongoose = require ('mongoose')
const item_model= require('../DataModels/Medicalsupplies_itemrequest.model')


//Get Item Requests
router.get('/list', function(req, res, next) {
    item_model.find(function(err, itemresponse){
        if(err)
        res.send(err);
        else
        res.send({status: 500, outcome: itemresponse.length, items: itemresponse});
      })
});



router.post('/create',function(req,res,next){
    res.status(200).json({
        message:"The item request was created."
    })

});




router.get("/:itemrequestId",function(req,res){
   res.status(200).json({
       message:'Item request details',
       OrderedItemID: req.params.itemrequestId,
       
   });
});

router.patch('/:itemrequest',(req,res,next)=>{
    res.status(200).json({
        message:'Item request updated!'
    });
      
});
router.delete('/:itemrequest',(req,res,next)=>{
    res.status(200).json({

        message:'Item request deleted!'
    })
});

module.exports = router