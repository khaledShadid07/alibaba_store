const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

  
  email:{type:String,required:true},
  password:{type:String,required:true},
  username:{type:String,default:'user'},
  address:{type:String,default:'Amman'},
  phone:{type:String,default:'962755444'},

});

module.exports=mongoose.model('user',userSchema)