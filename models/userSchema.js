const mongoose=require("mongoose");
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number },
    adress: { type: String }
  });
  
  module.exports=mongoose.model('user',userSchema)