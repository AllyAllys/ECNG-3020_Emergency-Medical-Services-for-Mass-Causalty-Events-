const express = require('express')
const router = express.Router()
const mongoose = require ('mongoose')
const itemdescription_model= require('../DataModels/Itemdescription.model')


//List of Item descriptions
router.get('/list', function(req, res, next) {
    itemdescription_model.find(function(err, descriptionresponse){
        if(err)
        res.send(err);
        else
        res.send({status: 500, outcome: descriptionresponse.length, itemsdescript: descriptionresponse});
      })
});



router.post('/create',function(req,res,next){

});




router.get("/:id",function(req,res){
   
});

router.patch('/:itemdescription',(req,res,next)=>{
    res.status(200).json({
        message:'Item description updated!'
    });
      
});
router.delete('/:itemdescription',(req,res,next)=>{
    res.status(200).json({

        message:'Item description deleted!'
    })
});

module.exports = router