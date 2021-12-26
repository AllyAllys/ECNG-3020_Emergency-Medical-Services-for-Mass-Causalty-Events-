const express = require('express')
const router = express.Router()
const mongoose = require ('mongoose')
const order_model= require('../DataModels/Medicalsupplies_order.model')


//Get Orders
router.get('/list', function(req, res, next) {
    order_model.find(function(err, orderresponse){
        if(err)
        res.send(err);
        else
        res.send({status: 500, outcome: orderresponse.length, orders: orderresponse});
      })
});



router.post('/create',function(req,res,next){
    res.status(200).json({
        message:"The order was created successfully."
    })

});




router.get("/:id",function(req,res){
   
});

router.patch('/:orderId',(req,res,next)=>{
    res.status(200).json({
        message:'Order status is updated!'
    });
      
});
router.delete('/:orderId',(req,res,next)=>{
    res.status(200).json({

        message:'Order is deleted!'
    })
});

module.exports = router