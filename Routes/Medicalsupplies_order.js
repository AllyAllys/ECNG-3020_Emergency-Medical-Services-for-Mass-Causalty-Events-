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
        res.send({status: 500, Count: orderresponse.length, orders: orderresponse});
      })
});



router.post('/create',(req,res,next)=>{
    const order = order_model({
        _id: mongoose.Types.ObjectId(),
        FirstID: req.body.FirstID,
        Orderstatus: req.body.Orderstatus
    });
    order
    .save()
    .then(result =>{
        console.log(result);
        res.status(201).json({
        message:"The order was created successfully.",
        
        })
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
    

});

router.get("/:id",function(req,res,next){
    order_model.findOne({_id:req.params.id})
    
    .then(function(dbuser)
    {

        res.send(dbuser);
    })
    .catch(function(err){
        res.send('Order not found');
    });
});

router.put('/:updateUser',function(req,res,next){
    const id = req.params.updateUser;
    order_model.updateOne({_id: id},{$set:{Orderstatus:req.body.Orderstatus}})
    .exec()
    .then(result=>{
        console.log(result);
      res.status(200).json({
          message:"Order is Updated"
      })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
    
});

//Delete an Order
router.delete('/:orderId',function(req,res,next){
    order_model.deleteOne({_id:req.params.orderId})
    .exec()
    .then(result=>{
        console.log(result);
      res.status(200).json({
          message:"Order Deleted!"
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