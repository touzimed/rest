const user=require("../models/userSchema")

const getUser=async (req,res)=>{
   try {
        const newUser = await user.find ()
        res.status (201).json({msg:"find all the data",newUser})
       }catch (err)
 
    {
        res.status(500).json({msg:err.message})
    }
}

const addUser= async (req,res)=>{
    try {
         const newUser =  new user (req.body)
         await newUser.save()
         res.status (201).json({msg:"user add",newUser})
        }catch (err)
  
     {
         res.status(500).json({msg:err.message})
     }
 }
 const updateUser=async (req,res)=>{
    try {
         const newUser = await user.findByIdAndUpdate ({_id:req.params.id},{...req.body})
         if(!newUser) return res.status(404).json({msg:"not found"})
         res.status (201).json({msg:"user updated",newUser:{...newUser._doc,...req.body}})
        }catch (err)
  
     {
         res.status(500).json({msg:err.message})
     }
 }
 const deleteUser=async (req,res)=>{
    try {
         const newUser = await user.findByIdAndDelete (req.params.id)
         if(!newUser) return res.status(404).json({msg:"not found"})
         else return res.status(201).json({msg:"user deleted",newUser})
        }catch (err)
  
     {
         res.status(500).json({msg:err.message})
     }
 }
 module.exports={deleteUser,updateUser,addUser,getUser}