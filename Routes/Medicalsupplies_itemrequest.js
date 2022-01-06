const { exec } = require('child_process');
const express = require('express')
const router = express.Router()
const mongoose = require ('mongoose')
const item_model= require('../DataModels/Medicalsupplies_itemrequest.model')
const order_model = require('../DataModels/Medicalsupplies_order.model')

//Get Item Requests
router.get('/list', function(req, res, next) {
    item_model.find(function(err, itemresponse){
        if(err)
        res.send(err);
        else
        res.send({status: 500, Count: itemresponse.length, items: itemresponse});
      })
});



//Create Item request and if Order ID is not found from medicalsupplies_order an error is prompted. 
router.post('/create',function(req,res,next){
    order_model.findById(req.body.OrderID)
    .then(order =>{
        if(!order) {
            return res.status (404).json({
                message:"Order not found!"
            });
        }
        const items= new item_model
        ({
            _id: mongoose.Types.ObjectId(),
            OrderID: req.body.OrderID,
            Item_Quantity: req.body.Item_Quantity,
            PhoneNo:req.body.PhoneNo
        });
        return items.save();

    })
    .then(result=>{
        console.log(result);
        res.status(201).json({
            message:"Item request stored."
        })

    })
    .catch(err=> 
        {
        console.log(err);
        res.status(500).json({
            error:err
        });
    });

    
});
//Get Information on one item request
router.get("/:id",function(req,res,next){
    item_model.findOne({_id:req.params.id})
    
    .then(function(dbuser)
    {

        res.send(dbuser);
    })
    .catch(function(err){
        res.send('Item request not found!');
    });
});

//Update Item Request
router.put('/:updateUser',function(req,res,next){
    const id = req.params.updateUser;
    item_model.updateOne({_id: id},{$set:{Item_Quantity:req.body.Item_Quantity,PhoneNo:req.body.PhoneNo}})
    .exec()
    .then(result=>{
        console.log(result);
      res.status(200).json({
          message:"Item request Updated"
      })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
    
});

//Delete Item request 
router.delete('/:ItemId',function(req,res,next){
    item_model.deleteOne({_id:req.params.ItemId})
    .exec()
    .then(result=>{
        console.log(result);
      res.status(200).json({
          message:"Item request Deleted!"
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