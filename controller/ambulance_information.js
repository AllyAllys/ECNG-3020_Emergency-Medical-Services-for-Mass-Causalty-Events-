
const  ambulanceinfo= require('../DataModels/Ambulance_Information.model')


exports.ambulance_get_list= function(req, res, next) {
    ambulanceinfo.find(function(err,  ambulanceinforesponse){
        if(err)
        res.send(err);
        else
        res.send({status: 500, Count:  ambulanceinforesponse.length,  ambulanceinfoUser: ambulanceinforesponse});
      })
  }

  exports.ambulance_create = function(req,res,next){
    let newAmbulance = new ambulanceinfo({
        
        _id: mongoose.Types.ObjectId(),
        DispatcherID: req.body.DispatcherID,
        Address: req.body.Address,
        Driver: req.body.Driver,
    })

    newAmbulance.save(function(err,newAmbulance){
    if(err)
       res.send(err);
       else
       res.send({
           status:500, message:'Ambulance information successfully created',Ambulancedetail:newAmbulance

       })
    

    })

}

exports.ambulance_get_one = function(req,res,next){
    ambulanceinfo.findOne({_id:req.params.id})
    
    .then(function(dbuser)
    {

        res.send(dbuser);
    })
    .catch(function(err){
        res.send('Cannot ambulance information');
    });
}

exports.ambulance_update = function(req,res,next){
    const id = req.params.updateUser;
    ambulanceinfo.updateOne({_id: id},{$set:{Address:req.body.Address,Driver:req.body.Driver}})
    .exec()
    .then(result=>{
        console.log(result);
      res.status(200).json({
          message:"Ambulance information Updated"
      })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
    
}

exports.ambulance_delete_one = function(req,res,next){
    ambulanceinfo.deleteOne({_id:req.params.ambulanceID})
    .exec()
    .then(result=>{
        console.log(result);
      res.status(200).json({
          message:"Ambulance information deleted!"
      })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
}
