const express = require('express')
const router = express.Router()
const mongoose = require ('mongoose')
const items= require('../DataModels/Itemdescription.model')
const requests= require('../DataModels/Medicalsupplies_itemrequest.model')

//List of Item descriptions
router.get('/list', function(req, res, next) {
    items.find(function(err, descriptionresponse){
        if(err)
        res.send(err);
        else
        res.send({status: 500, outcome: descriptionresponse.length, itemsdescript: descriptionresponse});
      })
});

//Create an Item Description with an existing OrderedItemID from MedicalSupplies_ItemRequest
router.post('/create',function(req,res,next){
    requests.findById(req.body.OrderedItemID)
    .then(order =>{
        if(!order) {
            return res.status (404).json({
                message:"Ordered Item Request Not Found!"
            });
        }
        const item = new items
        ({
            _id: mongoose.Types.ObjectId(),
            ItemDescription:req.body.ItemDescription,
            ItemName:req.body.ItemName,
            OrderedItemID:req.body.OrderedItemID
            
        });
        return item.save();

    })
    .then(result=>{
        console.log(result);
        res.status(201).json({
            message:"Item description stored."
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

router.get("/:id",function(req,res,next){
    items.findOne({_id:req.params.id})
    
    .then(function(dbitem)
    {

        res.send(dbitem);
    })
    .catch(function(err){
        res.send('Item description not found!');
    });
});

router.put('/:update',function(req,res,next){
    const id = req.params.update;
    items.updateOne({_id: id},{$set:{ItemDescription:req.body.ItemDescription,ItemName:req.body.ItemName}})
    .exec()
    .then(result=>{
        console.log(result);
      res.status(200).json({
          message:"Item is Updated"
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
router.delete('/:itemId',function(req,res,next){
    items.deleteOne({_id:req.params.itemId})
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