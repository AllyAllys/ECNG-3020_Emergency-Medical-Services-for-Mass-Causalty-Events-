const admin_model= require('../DataModels/Admins.model');


exports.admin_get_all = function(req, res, next) {
    admin_model.find(function(err, adminresponse){
      if(err)
      res.send(err);
      else
      res.send({status: 500, outcome: adminresponse.length, admin_users: adminresponse});
    })
}

exports.admin_post= function(req,res,next){
  let newAdmin = new admin_model({
      
      _id: mongoose.Types.ObjectId(),
      UserID: req.user_id
  })

  newAdmin.save(function(err,newAdmin){
  if(err)
     res.send(err);
     else
     res.send({
         status:500, message:'Admin created',Admindetail:newAdmin

     })
  
  })
}

exports.admin_get_one= function(req,res){
  admin_model.findOne({_id:req.params.id})
  .populate("UserID")

  .then(function(dbAdmin){

      res.send(dbAdmin);
  })
  .catch(function(err){
      res.send('Cannot find User');
  });
}

exports.admin_delete_one = function(req,res,next){
  admin_model.deleteOne({_id:req.params.userId})
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
}

